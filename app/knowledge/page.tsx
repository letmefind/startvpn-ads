import type { Metadata } from "next";
import Link from "next/link";
import { KNOWLEDGE_INTRO, PLATFORM_GUIDES } from "@/lib/knowledge-data";
import { HELP_SITE_ORIGIN } from "@/lib/help-site";

export const metadata: Metadata = {
  title: "مرکز آموزش | VPN استارلینک",
  description:
    "آموزش نصب و اتصال برای اندروید، آیفون، ویندوز و مک؛ افزودن URI، Subscription و QR؛ لینک دانلود از منابع کمکی و رسمی.",
};

function GuideSteps({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-950/50 p-4">
      <h4 className="mb-3 text-sm font-bold text-cyan-200">{title}</h4>
      <ol className="list-decimal space-y-2 pr-5 text-sm leading-7 text-slate-300 marker:text-cyan-500">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}

export default function KnowledgePage() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 cosmic-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

      <header className="relative border-b border-slate-800/80 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/" className="text-sm font-bold text-cyan-300 transition-colors hover:text-cyan-200">
            ← بازگشت به صفحه اصلی
          </Link>
          <a
            href={KNOWLEDGE_INTRO.helpSiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-400 underline-offset-4 hover:text-cyan-300 hover:underline"
          >
            سایت کمکی: {HELP_SITE_ORIGIN}
          </a>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-4xl px-4 py-10 pb-20 md:px-8 md:py-14">
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl font-black text-white md:text-4xl">{KNOWLEDGE_INTRO.title}</h1>
          <p className="text-base leading-8 text-slate-300 md:text-lg">{KNOWLEDGE_INTRO.lead}</p>
          <div className="rounded-2xl border border-cyan-300/25 bg-slate-900/60 p-4 text-sm leading-7 text-slate-400">
            <p className="mb-2 font-semibold text-cyan-200">دانلود بدون VPN (ایران)</p>
            <p>{KNOWLEDGE_INTRO.mirrorExplainer}</p>
          </div>
        </div>

        <nav
          aria-label="فهرست سریع"
          className="mb-12 rounded-2xl border border-slate-700/80 bg-slate-950/40 p-4 md:p-6"
        >
          <p className="mb-3 text-sm font-bold text-white">پرش سریع</p>
          <ul className="flex flex-wrap gap-2 text-sm">
            {PLATFORM_GUIDES.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  <span>{p.icon}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {PLATFORM_GUIDES.map((platform) => (
          <section key={platform.id} id={platform.id} className="mb-16 scroll-mt-24">
            <div className="mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
              <span className="text-2xl">{platform.icon}</span>
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">{platform.title}</h2>
            </div>

            <div className="space-y-12">
              {platform.apps.map((app) => (
                <article
                  key={app.id}
                  id={`${platform.id}-${app.id}`}
                  className="scroll-mt-24 rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-5 shadow-[0_0_40px_rgba(6,182,212,0.08)] md:p-8"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-black text-white md:text-2xl">{app.name}</h3>
                    <p className="mt-2 text-slate-300">{app.summary}</p>
                    {app.extraNote ? (
                      <p className="mt-2 text-sm text-slate-500">{app.extraNote}</p>
                    ) : null}
                  </div>

                  <div className="mb-8">
                    <p className="mb-3 text-sm font-bold text-cyan-200">دانلود</p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                      {app.downloads.map((d) => (
                        <div key={d.href} className="flex min-w-0 flex-1 flex-col gap-1 sm:min-w-[200px]">
                          <a
                            href={d.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-bold transition-colors ${
                              d.primary
                                ? "bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:bg-cyan-300"
                                : "border border-slate-600 bg-slate-900/80 text-slate-100 hover:border-cyan-400/40"
                            }`}
                          >
                            {d.label}
                          </a>
                          {d.note ? <span className="text-xs leading-6 text-slate-500">{d.note}</span> : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <GuideSteps title={app.uri.title} steps={app.uri.steps} />
                    <GuideSteps title={app.subscription.title} steps={app.subscription.steps} />
                    <GuideSteps title={app.qr.title} steps={app.qr.steps} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="relative border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:px-8 md:text-sm">
          <p>© {new Date().getFullYear()} Starlink VPN</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-cyan-300">
              صفحه اصلی
            </Link>
            <Link href="/netblocks" className="hover:text-cyan-300">
              قطعی اینترنت
            </Link>
            <Link href="/packages" className="hover:text-cyan-300">
              پکیج‌ها
            </Link>
            <Link href="/terms" className="hover:text-cyan-300">
              شرایط استفاده
            </Link>
            <a
              href="http://t.me/V2free_ibot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              تلگرام
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
