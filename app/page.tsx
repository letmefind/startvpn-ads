"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bitcoin,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Globe,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { FeatureCard } from "@/components/ui/feature-card";

const FEATURES = [
  {
    title: "سرورهای ۱۰۰٪ فعال بدون افت",
    description: "اتصال پایدار، بدون قطعی و بدون افت سرعت حتی در ساعات پرترافیک.",
    icon: ShieldCheck,
  },
  {
    title: "زیرساخت پرسرعت استارلینک",
    description: "تجربه سرعت واقعی با پینگ پایین و کیفیت فوق‌العاده برای استریم و گیم.",
    icon: Rocket,
  },
  {
    title: "قیمت‌گذاری کاملا اقتصادی",
    description: "پلن‌های متنوع با بهترین ارزش خرید برای کاربران ایرانی.",
    icon: CircleDollarSign,
  },
  {
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی همیشه آنلاین برای پاسخ‌گویی سریع و حرفه‌ای.",
    icon: Clock3,
  },
];

const PAYMENTS = [
  { title: "Bitcoin", icon: Bitcoin },
  { title: "Tether (USDT)", icon: BadgeCheck },
  { title: "Visa", icon: CreditCard },
  { title: "Mastercard", icon: CreditCard },
  { title: "PayPal", icon: Globe },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 cosmic-grid opacity-35" />
      <div className="pointer-events-none absolute -top-44 right-1/2 h-[28rem] w-[28rem] translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[110px]" />

      <header className="relative mx-auto w-full max-w-6xl px-4 pt-6 md:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-900/70 px-4 py-2 text-xs text-cyan-200 backdrop-blur md:text-sm">
          <Zap className="h-4 w-4" />
          VPN استارلینک نسل جدید
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-16 pt-8 md:px-8 md:pt-12">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <article>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-3xl leading-tight font-black text-white md:text-5xl"
            >
              اینترنت بدون مرز با تکنولوژی ماهواره‌ای استارلینک
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg"
            >
              دسترسی پرسرعت، پایدار و بدون اختلال برای وب‌گردی، استریم، بازی و کارهای روزانه
              با قیمت ایده‌آل و فعال‌سازی سریع.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <CtaButton href="http://t.me/V2free_ibot" className="min-h-12 min-w-60">
                خرید آسان از طریق تلگرام
              </CtaButton>
              <CtaButton
                href="https://www.symmetricnet.com/"
                variant="secondary"
                className="min-h-12 min-w-44"
              >
                خرید از سایت
              </CtaButton>
            </motion.div>
          </article>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full border border-cyan-300/30 bg-slate-900/40 backdrop-blur"
          >
            <div className="absolute h-36 w-36 rounded-full bg-cyan-400/45 blur-3xl" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
              className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-cyan-200/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute h-[67%] w-[67%] rounded-full border border-violet-300/35"
            />
            <Globe className="h-28 w-28 text-cyan-300 md:h-36 md:w-36" />
          </motion.div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">چرا ما را انتخاب کنید؟</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 0.08}
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-300/20 bg-slate-900/65 p-5 shadow-[0_0_45px_rgba(6,182,212,0.2)] md:p-8">
          <h2 className="mb-2 text-2xl font-extrabold text-white md:text-3xl">روش‌های خرید</h2>
          <p className="mb-8 text-sm leading-7 text-slate-300 md:text-base">
            سریع‌ترین و مطمئن‌ترین مسیر برای خرید VPN استارلینک را انتخاب کنید.
          </p>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-cyan-300/30 bg-[#071224] p-5 md:p-6">
              <p className="mb-2 text-xs font-bold tracking-wide text-cyan-300">
                پیشنهاد ویژه و سریع
              </p>
              <h3 className="mb-3 text-2xl font-black text-white">
                سریع‌ترین راه: ربات تلگرام ما
              </h3>
              <p className="mb-5 text-sm leading-7 text-slate-300">
                ربات تلگرام با کاربری بسیار ساده، خرید را در چند ثانیه نهایی می‌کند و از تمامی
                روش‌های پرداخت پشتیبانی می‌کند: پرداخت‌های ارزی، کریپتو، مسترکارت، ویزاکارت و
                PayPal.
              </p>
              <CtaButton
                href="http://t.me/V2free_ibot"
                className="w-full py-4 text-base shadow-[0_0_36px_rgba(34,211,238,0.7)]"
              >
                ورود به ربات تلگرام و خرید فوری
              </CtaButton>
            </article>

            <article className="rounded-2xl border border-slate-600/50 bg-slate-950/50 p-5 md:p-6">
              <h3 className="mb-3 text-xl font-extrabold text-white">خرید مستقیم از وب‌سایت</h3>
              <p className="mb-5 text-sm leading-7 text-slate-300">
                اگر ترجیح می‌دهید از طریق سایت خرید کنید، این مسیر به‌عنوان گزینه جایگزین در
                دسترس است.
              </p>
              <CtaButton href="https://www.symmetricnet.com/" variant="secondary" className="w-full py-4">
                خرید از وب‌سایت
              </CtaButton>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-cyan-300/20 bg-slate-900/50 p-5 md:p-6">
          <h2 className="mb-4 text-lg font-bold text-white">روش‌های پرداخت پشتیبانی‌شده</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {PAYMENTS.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-4 text-sm text-slate-200"
              >
                <Icon className="h-4 w-4 text-cyan-300" />
                {title}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:px-8 md:text-sm">
          <p>© {new Date().getFullYear()} Starlink VPN. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-4">
            <a
              href="http://t.me/V2free_ibot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              تلگرام
            </a>
            <a
              href="https://www.symmetricnet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              وب‌سایت
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
