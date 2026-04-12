import type { NetblocksArticle } from "@/lib/netblocks-types";
import { NETBLOCKS_FALLBACK_IRAN } from "@/lib/netblocks-fallback";
import { translateEnToFa } from "@/lib/netblocks-translate-fa";

export type { NetblocksArticle } from "@/lib/netblocks-types";

export type NetblocksFeedResult = {
  articles: NetblocksArticle[];
  /** اگر API خالی بود یا خطا داشت */
  usedFallback: boolean;
};

/** دستهٔ «Reports» در وردپرس NetBlocks — همان https://netblocks.org/reports */
const REPORTS_CATEGORY_ID = 4;

const WP_POSTS = "https://netblocks.org/wp-json/wp/v2/posts";

type WpFeaturedMedia = {
  source_url?: string;
  media_details?: { sizes?: Record<string, { source_url?: string }> };
};

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  content?: { rendered: string };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: WpFeaturedMedia[];
  };
};

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function excerptFromContent(html: string, max = 260) {
  const t = stripHtml(html);
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

function scoreUploadUrl(u: string): number {
  let s = 0;
  if (/1024x\d+|1536x\d+|1200x\d+/i.test(u)) s += 5;
  if (/chart|connectivity|metric|national|network|shutdown|outage|iran/i.test(u)) s += 3;
  return s + u.length / 200;
}

function extractContentImageUrls(html: string, max = 10): string[] {
  const raw = html.match(
    /https:\/\/netblocks\.org\/wp-content\/uploads\/[^"'>\s]+\.(?:png|jpg|jpeg|webp)/gi,
  );
  if (!raw?.length) return [];
  const unique = [...new Set(raw)];
  return unique.sort((a, b) => scoreUploadUrl(b) - scoreUploadUrl(a)).slice(0, max);
}

function featuredImageUrl(post: WpPost): string | null {
  const m = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!m) return null;
  if (m.source_url) return m.source_url;
  const large = m.media_details?.sizes?.large?.source_url;
  if (large) return large;
  const full = m.media_details?.sizes?.full?.source_url;
  return full ?? null;
}

function mergeGallery(featured: string | null, contentUrls: string[], maxTotal = 5): string[] {
  const out: string[] = [];
  if (featured) out.push(featured);
  for (const u of contentUrls) {
    if (!out.includes(u)) out.push(u);
    if (out.length >= maxTotal) break;
  }
  return out;
}

function isIranFocusedPost(post: WpPost): boolean {
  const title = stripHtml(post.title.rendered).toLowerCase();
  const body = (post.content?.rendered ?? "").toLowerCase();
  const hay = `${title} ${body.slice(0, 6000)}`;

  if (!/\biran\b|iranian|tehran|persian|mahsa|kurdistan|sanandaj|zahedan|isfahan|mashhad|tabriz|shiraz/.test(hay)) {
    return false;
  }

  if (/\bukraine\b|\brussia\b|\bgabon\b|\bzambia\b/.test(title) && !/\biran\b/.test(title)) {
    return false;
  }

  return true;
}

async function fetchJson(url: string): Promise<WpPost[]> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 35_000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; SymmetricNetLanding/1.0; +https://www.symmetricnet.com)",
      },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = (await res.json()) as unknown;
    return Array.isArray(data) ? (data as WpPost[]) : [];
  } catch {
    return [];
  } finally {
    clearTimeout(t);
  }
}

/** همهٔ پست‌های دستهٔ Reports (همان آرشیو رسمی) */
async function fetchAllReportsPosts(): Promise<Map<number, WpPost>> {
  const merged = new Map<number, WpPost>();
  let page = 1;
  const maxPages = 30;

  while (page <= maxPages) {
    const url = `${WP_POSTS}?categories=${REPORTS_CATEGORY_ID}&per_page=100&page=${page}&orderby=date&order=desc&_embed=1`;
    const batch = await fetchJson(url);
    if (batch.length === 0) break;
    for (const p of batch) {
      merged.set(p.id, p);
    }
    if (batch.length < 100) break;
    page += 1;
  }

  return merged;
}

function postToArticle(post: WpPost): NetblocksArticle {
  const html = post.content?.rendered ?? "";
  const featured = featuredImageUrl(post);
  const fromContent = extractContentImageUrls(html);
  const gallery = mergeGallery(featured, fromContent, 5);
  const imageUrl = gallery[0] ?? null;
  const extraImageUrls = gallery.slice(1);

  return {
    id: post.id,
    title: stripHtml(post.title.rendered),
    url: post.link,
    date: post.date,
    imageUrl,
    extraImageUrls,
    excerpt: excerptFromContent(html || `<p>${post.title.rendered}</p>`),
  };
}

async function localizeArticle(a: NetblocksArticle): Promise<NetblocksArticle> {
  const title = await translateEnToFa(a.title);
  await new Promise((r) => setTimeout(r, 200));
  const excerpt = await translateEnToFa(a.excerpt);
  return { ...a, title, excerpt };
}

async function localizeArticles(list: NetblocksArticle[]): Promise<NetblocksArticle[]> {
  const out: NetblocksArticle[] = [];
  for (const item of list) {
    out.push(await localizeArticle(item));
    await new Promise((r) => setTimeout(r, 120));
  }
  return out;
}

export async function getNetblocksIranFeed(): Promise<NetblocksFeedResult> {
  try {
    const merged = await fetchAllReportsPosts();
    const items: NetblocksArticle[] = [];

    for (const post of merged.values()) {
      if (!isIranFocusedPost(post)) continue;
      items.push(postToArticle(post));
    }

    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (items.length === 0) {
      return { articles: await localizeArticles([...NETBLOCKS_FALLBACK_IRAN]), usedFallback: true };
    }

    return { articles: await localizeArticles(items), usedFallback: false };
  } catch {
    return { articles: await localizeArticles([...NETBLOCKS_FALLBACK_IRAN]), usedFallback: true };
  }
}
