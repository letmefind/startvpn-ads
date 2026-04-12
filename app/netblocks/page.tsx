import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NetblocksXSection } from "@/components/netblocks/netblocks-x-section";
import { getNetblocksIranFeed } from "@/lib/netblocks-articles";

export const metadata: Metadata = {
  title: "اخبار قطعی اینترنت ایران | نت‌بلاکس",
  description:
    "قطعی اینترنت ایران: فید نت‌بلاکس در ایکس و فهرست گزارش‌های رسمی با نمودار؛ عنوان و خلاصه به فارسی.",
};

function formatFaDate(iso: string) {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  } catch {
    return iso;
  }
}

export default async function NetblocksPage() {
  const { articles, usedFallback } = await getNetblocksIranFeed();

  return (
    <div className="relative min-h-full overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 cosmic-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

      <header className="relative border-b border-slate-800/80 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/" className="text-sm font-bold text-cyan-300 transition-colors hover:text-cyan-200">
            ← بازگشت به صفحه اصلی
          </Link>
          <a
            href="https://netblocks.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-400 underline-offset-4 hover:text-cyan-300 hover:underline"
          >
            وب‌سایت نت‌بلاکس
          </a>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-5xl px-4 py-10 pb-20 md:px-8 md:py-14">
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl font-black text-white md:text-4xl">قطعی و اختلال اینترنت ایران</h1>
          <p className="text-lg font-bold text-cyan-200">منبع اصلی: نت‌بلاکس در ایکس</p>
          <p className="max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
            کامل‌ترین و سریع‌ترین به‌روزرسانی‌ها معمولاً روی{" "}
            <a
              className="text-cyan-200 underline-offset-2 hover:text-cyan-100 hover:underline"
              href="https://x.com/netblocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              صفحهٔ رسمی نت‌بلاکس در ایکس
            </a>{" "}
            منتشر می‌شود. فهرست پایین از آرشیو «گزارش‌ها» در{" "}
            <a
              className="text-cyan-200 underline-offset-2 hover:text-cyan-100 hover:underline"
              href="https://netblocks.org/reports"
              target="_blank"
              rel="noopener noreferrer"
            >
              وب‌سایت نت‌بلاکس
            </a>{" "}
            گرفته می‌شود؛ فقط موارد مرتبط با ایران، با{" "}
            <span className="text-slate-200">ذکر منبع</span> و پیش‌نمایش نمودار. عنوان و خلاصهٔ هر
            خبر در زمان ساخت سایت به فارسی ترجمه شده‌اند.
          </p>

          {usedFallback ? (
            <div className="rounded-2xl border border-amber-400/30 bg-amber-950/40 px-4 py-3 text-sm leading-7 text-amber-100">
              در زمان ساخت سایت، فهرست از سرور نت‌بلاکس کامل نیامد؛ چند نمونه نمایش داده می‌شود. برای
              جدیدترین‌ها حتماً ایکس و وب‌سایت نت‌بلاکس را ببینید.
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://x.com/netblocks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-cyan-300/45 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 px-4 py-2.5 font-extrabold text-cyan-50 shadow-[0_0_28px_rgba(34,211,238,0.25)] hover:border-cyan-300/70"
            >
              باز کردن نت‌بلاکس در ایکس (کامل‌ترین منبع)
            </a>
            <a
              href="https://netblocks.org/reports"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-cyan-300/35 bg-slate-900/70 px-4 py-2 font-bold text-cyan-100 hover:border-cyan-300/60"
            >
              همهٔ گزارش‌ها در نت‌بلاکس
            </a>
            <a
              href="https://netblocks.org/?s=Iran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-slate-600 bg-slate-950/60 px-4 py-2 font-semibold text-slate-200 hover:border-slate-500"
            >
              جستجو با واژهٔ ایران
            </a>
          </div>
        </div>

        <NetblocksXSection />

        <section aria-label="فهرست اخبار ایران از نت‌بلاکس" className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-black text-white md:text-2xl">اخبار مرتبط با ایران (بخش گزارش‌ها)</h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-400">
              این موارد از آرشیو گزارش‌های رسمی نت‌بلاکس فیلتر شده‌اند. چند نمودار از همان صفحه و در
              صورت وجود تصویر شاخص اینجا آمده؛ بقیهٔ نمودارها و توییت‌های داخل متن را با باز کردن لینک
              گزارش ببینید.
            </p>
          </div>
        </section>

        <section aria-label="کارت‌های خبر" className="space-y-8">
          {articles.map((a) => (
            <article
              key={`${a.id}-${a.url}`}
              className="overflow-hidden rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-slate-900/85 to-slate-950/95 shadow-[0_0_45px_rgba(6,182,212,0.1)]"
            >
              <div className="grid gap-0 md:grid-cols-5">
                <div className="border-b border-slate-800/80 p-5 md:col-span-2 md:border-b-0 md:border-s md:border-slate-800/80">
                  {a.imageUrl ? (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Image
                        src={a.imageUrl}
                        alt=""
                        width={1200}
                        height={675}
                        unoptimized
                        className="h-auto w-full rounded-2xl border border-slate-700/80 object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </a>
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 text-center text-xs leading-6 text-slate-500">
                      تصویری برای پیش‌نمایش نیامد؛ برای نمودارها و توییت‌های داخل گزارش، لینک زیر را
                      بزنید.
                    </div>
                  )}
                  {a.extraImageUrls.length > 0 ? (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {a.extraImageUrls.map((src) => (
                        <a
                          key={src}
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative block overflow-hidden rounded-xl border border-slate-700/70"
                        >
                          <Image
                            src={src}
                            alt=""
                            width={640}
                            height={360}
                            unoptimized
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 768px) 50vw, 20vw"
                          />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="p-5 md:col-span-3">
                  <p className="mb-2 text-xs text-slate-500">
                    <span className="text-slate-600">تاریخ: </span>
                    {formatFaDate(a.date)}
                  </p>
                  <h2 className="mb-3 text-lg font-extrabold text-white md:text-xl" dir="rtl">
                    {a.title}
                  </h2>
                  <p className="mb-5 text-sm leading-7 text-slate-300" dir="rtl">
                    {a.excerpt}
                  </p>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:bg-cyan-300"
                  >
                    متن کامل و نمودارها در وب‌سایت نت‌بلاکس
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-2xl border border-slate-700/80 bg-slate-950/50 p-5 text-sm leading-7 text-slate-500">
          <p className="mb-2 font-bold text-slate-300">منبع و انتساب</p>
          <p>
            داده‌ها و نمودارها متعلق به{" "}
            <a
              className="text-cyan-300 hover:underline"
              href="https://netblocks.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              نت‌بلاکس
            </a>{" "}
            هستند (
            <a
              className="text-cyan-300 hover:underline"
              href="https://netblocks.org/reports"
              target="_blank"
              rel="noopener noreferrer"
            >
              آرشیو گزارش‌ها
            </a>
            ). لینک فید ایکس در همین صفحه به صفحهٔ رسمی نت‌بلاکس می‌رود؛ استفادهٔ منصفانه با ذکر
            منبع مطابق سیاست نت‌بلاکس است. این صفحه فقط فهرست‌کننده است و تحلیل مستقل ارائه نمی‌کند.
          </p>
          <p className="mt-3">
            برای به‌روزرسانی فهرست پس از انتشار گزارش‌های جدید، یک بار دیگر{" "}
            <code className="rounded bg-slate-900 px-1.5 py-0.5 text-cyan-200">npm run build</code>{" "}
            بگیرید (خروجی استاتیک با تاریخ ساخت تازه می‌شود). ترجمهٔ عنوان و خلاصه در همان مرحلهٔ
            build انجام می‌شود.
          </p>
        </section>
      </main>

      <footer className="relative border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:px-8 md:text-sm">
          <p>© {new Date().getFullYear()} Starlink VPN</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-cyan-300">
              صفحه اصلی
            </Link>
            <Link href="/packages" className="hover:text-cyan-300">
              پکیج‌ها
            </Link>
            <Link href="/knowledge" className="hover:text-cyan-300">
              آموزش‌ها
            </Link>
            <Link href="/terms" className="hover:text-cyan-300">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
