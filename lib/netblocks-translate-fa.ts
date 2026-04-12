/**
 * ترجمهٔ انگلیسی → فارسی برای نمایش اخبار (زمان build).
 * در صورت خطا یا پاسخ نامعتبر، همان متن انگلیسی برمی‌گردد.
 */
const CHUNK_LEN = 420;
const BETWEEN_MS = 180;

async function translateChunk(en: string): Promise<string> {
  const q = en.trim();
  if (!q) return q;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|fa`;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20_000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return en;
    const data = (await res.json()) as {
      responseStatus?: number;
      responseData?: { translatedText?: string };
    };
    if (data.responseStatus !== 200) return en;
    const out = data.responseData?.translatedText?.trim();
    if (!out) return en;
    return out;
  } catch {
    return en;
  } finally {
    clearTimeout(t);
  }
}

export async function translateEnToFa(text: string): Promise<string> {
  const raw = text.trim();
  if (!raw) return text;
  if (raw.length <= CHUNK_LEN) {
    const one = await translateChunk(raw);
    return one;
  }
  const parts: string[] = [];
  for (let i = 0; i < raw.length; i += CHUNK_LEN) {
    const chunk = raw.slice(i, i + CHUNK_LEN);
    parts.push(await translateChunk(chunk));
    await new Promise((r) => setTimeout(r, BETWEEN_MS));
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}
