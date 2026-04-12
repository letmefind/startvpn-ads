import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { PRICING_PACKAGES } from "@/lib/packages-data";
import { CtaButton } from "@/components/ui/cta-button";

export const metadata: Metadata = {
  title: "پکیج‌ها و قیمت‌ها | VPN استارلینک",
  description:
    "پلن‌های StarLink: ترافیک، دورهٔ صورتحساب به تومان، محدودیت IP و سرعت؛ خرید از ربات تلگرام یا وب‌سایت.",
};

function formatToman(n: number) {
  return new Intl.NumberFormat("fa-IR").format(n);
}

export default function PackagesPage() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 cosmic-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

      <header className="relative border-b border-slate-800/80 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/" className="text-sm font-bold text-cyan-300 transition-colors hover:text-cyan-200">
            ← بازگشت به صفحه اصلی
          </Link>
          <p className="text-xs text-slate-500">قیمت‌ها به تومان (TOM)</p>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-4 py-10 pb-20 md:px-8 md:py-14">
        <div className="mb-10 text-center md:text-right">
          <h1 className="mb-3 text-3xl font-black text-white md:text-4xl">Packages</h1>
          <p className="text-lg font-bold text-cyan-200 md:text-xl">پکیج‌ها</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:mx-0">
            پلن‌های زیر مطابق سرویس StarLink شماست. برای خرید، سریع‌ترین مسیر ربات تلگرام است؛
            همچنین می‌توانید از وب‌سایت رسمی نیز اقدام کنید.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRICING_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="flex flex-col rounded-3xl border border-cyan-300/20 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-[0_0_40px_rgba(6,182,212,0.12)]"
            >
              <div className="mb-5 border-b border-slate-700/80 pb-5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {pkg.badge ? <span className="text-lg">{pkg.badge}</span> : null}
                  <h2 className="text-lg font-black text-white md:text-xl">{pkg.title}</h2>
                </div>
                <p className="mt-3 text-2xl font-black tabular-nums text-cyan-200 md:text-3xl">
                  {formatToman(pkg.priceToman)}{" "}
                  <span className="text-base font-bold text-slate-400">تومان</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  <span className="text-slate-400">{pkg.billingPeriodFa}</span>
                  <span className="mx-1.5 text-slate-600">·</span>
                  <span lang="en">{pkg.billingPeriodEn}</span>
                </p>
              </div>

              <ul className="mb-6 flex flex-1 flex-col gap-3 text-sm text-slate-300">
                {pkg.features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-start gap-2 rounded-xl border border-slate-800/80 bg-slate-950/50 px-3 py-2"
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        f.included ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-700/80 text-slate-400"
                      }`}
                    >
                      {f.included ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <X className="h-3.5 w-3.5" />}
                    </span>
                    <span>
                      <span className="font-semibold text-slate-200">{f.label}:</span> {f.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2">
                <CtaButton href="http://t.me/V2free_ibot" className="w-full justify-center py-3.5 text-sm">
                  انتخاب پلن — تلگرام
                </CtaButton>
                <CtaButton
                  href="https://www.symmetricnet.com/"
                  variant="secondary"
                  className="w-full justify-center py-3 text-sm"
                >
                  خرید از وب‌سایت
                </CtaButton>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-slate-500 md:text-right">
          TOM = Toman (تومان). مشخصات فنی ممکن است با به‌روزرسانی پنل تغییر کند؛ هنگام خرید مقدار نهایی
          را در ربات یا سایت تأیید کنید.
        </p>
      </main>

      <footer className="relative border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:px-8 md:text-sm">
          <p>© {new Date().getFullYear()} Starlink VPN</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-cyan-300">
              صفحه اصلی
            </Link>
            <Link href="/knowledge" className="hover:text-cyan-300">
              آموزش‌ها
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
