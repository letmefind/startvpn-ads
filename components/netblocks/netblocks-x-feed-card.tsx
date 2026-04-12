import { ExternalLink, Radio } from "lucide-react";

const X_WEB = "https://x.com/netblocks";

/** لینک مستقیم به فید؛ ویجت داخل‌صفحهٔ X در اکثر شبکه‌های ایران بارگذاری نمی‌شود. */
export function NetblocksXFeedCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/35 bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-[#050816] shadow-[0_0_48px_rgba(6,182,212,0.14)]">
      <div className="border-b border-cyan-500/15 bg-slate-950/50 px-4 py-3 text-center text-xs leading-6 text-slate-400">
        نمایش فید داخل سایت به‌دلیل محدودیت شبکه یا مسدود بودن دامنه‌های X معمولاً ممکن نیست؛ از دکمه
        زیر استفاده کنید.
      </div>

      <div className="flex flex-col items-center gap-5 px-5 py-10 text-center md:px-8 md:py-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.25)]">
          <Radio className="h-7 w-7" strokeWidth={2.25} aria-hidden />
        </div>
        <div className="max-w-lg space-y-2">
          <p className="text-lg font-black text-white md:text-xl">فید زندهٔ نت‌بلاکس در ایکس</p>
          <p className="text-sm leading-7 text-slate-400">
            برای دیدن تازه‌ترین توییت‌ها و نمودارهای تعبیه‌شده، صفحهٔ رسمی را در مرورگر یا اپ
            <span dir="ltr"> X </span>
            باز کنید. اگر داخل ایران هستید، معمولاً نیاز به{" "}
            <span className="text-slate-200">VPN روشن</span> دارید.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={X_WEB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300"
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            باز کردن x.com/netblocks
          </a>
          <a
            href="twitter://user?screen_name=netblocks"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-slate-600 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-100 md:flex-none"
          >
            باز کردن در اپ ایکس (در صورت نصب)
          </a>
        </div>

        <p className="max-w-md text-[11px] leading-6 text-slate-600" dir="ltr">
          {X_WEB}
        </p>
      </div>
    </div>
  );
}
