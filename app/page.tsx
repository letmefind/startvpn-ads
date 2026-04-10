"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bitcoin,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Gauge,
  Globe,
  Server,
  ShieldAlert,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { FeatureCard } from "@/components/ui/feature-card";

const StarlinkOrbit3D = dynamic(
  () => import("@/components/hero/starlink-orbit-3d").then((m) => m.StarlinkOrbit3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(72vw,22rem)] w-full max-w-md items-center justify-center md:h-[min(36vw,26rem)]">
        <div className="h-44 w-44 animate-pulse rounded-full border border-cyan-300/25 bg-slate-900/55" />
      </div>
    ),
  },
);

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

const HEALTH_NODES = [
  { flag: "🇩🇪", name: "WAR", host: "war.ipfobia.com", port: 443, protocol: "WS + TLS" },
  { flag: "🇩🇪", name: "Luck", host: "luck.ipfobia.com", port: 8080, protocol: "TCP + Reality" },
  { flag: "🇫🇮", name: "Broken", host: "broken.ipfobia.com", port: 8443, protocol: "WS + TLS" },
  { flag: "🇫🇮", name: "Broken-R", host: "broken.ipfobia.com", port: 2053, protocol: "TCP + Reality" },
  { flag: "🇳🇱", name: "Galaxy", host: "galaxy.ipfobia.com", port: 8443, protocol: "WS + TLS" },
  { flag: "🇳🇱", name: "Galaxy-R", host: "galaxy.ipfobia.com", port: 2053, protocol: "TCP + Reality" },
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
            className="relative mx-auto flex w-full max-w-md items-center justify-center rounded-full border border-cyan-300/30 bg-slate-900/40 p-2 backdrop-blur md:p-3"
          >
            <StarlinkOrbit3D />
          </motion.div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-rose-400/30 bg-gradient-to-br from-[#1b0a12] via-[#160d10] to-[#1a1324] p-5 shadow-[0_0_55px_rgba(239,68,68,0.18)] md:p-8">
          <div className="pointer-events-none absolute -top-20 left-10 h-44 w-44 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-8 h-40 w-40 rounded-full bg-rose-500/20 blur-3xl" />

          <h2 className="relative mb-6 text-2xl font-black text-white md:text-3xl">
            تنها راه عبور از <span className="text-rose-300">خاموشی مطلق دیجیتال</span>
          </h2>

          <div className="relative grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-rose-300/30 bg-black/25 p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-300/35 bg-rose-400/10 px-3 py-1 text-xs font-bold text-rose-200">
                <ShieldAlert className="h-4 w-4" />
                وضعیت بحران
              </div>
              <p className="text-sm leading-8 text-slate-200 md:text-base">
                با توجه به قطعی‌های گسترده و بی‌سابقه اسفند ۱۴۰۴ و فروردین ۱۴۰۵ که منجر به قطع
                ۹۹ درصدی اینترنت بین‌الملل و از کار افتادن کامل VPNهای عادی شد، زیرساخت‌های سنتی
                دیگر پاسخگو نیستند. محدودیت‌های اخیر مستقیماً روی شبکه زمینی کشور اعمال شده‌اند.
              </p>
            </article>

            <article className="rounded-2xl border border-cyan-300/35 bg-[#071326]/75 p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
                <Gauge className="h-4 w-4" />
                راه‌حل ما
              </div>
              <p className="mb-5 text-sm leading-8 text-slate-200 md:text-base">
                سرویس‌های ما با اتصال مستقیم به زیرساخت‌های ابری ماهواره استارلینک، تمام
                محدودیت‌های زیرساخت زمینی و ملی (اینترانت) را دور می‌زنند. حتی در شدیدترین حالت
                قطعی اینترنت، <span className="font-extrabold text-cyan-300">تضمین اتصال</span> و
                دسترسی آزاد شما در اولویت ماست.
              </p>

              <div className="mb-5 rounded-xl border border-cyan-300/25 bg-slate-900/65 p-3">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Health Test زنده نودها</span>
                  <span className="text-cyan-300">Online</span>
                </div>
                <div className="space-y-2">
                  {HEALTH_NODES.map((node, index) => (
                    <motion.div
                      key={`${node.host}-${node.port}`}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between rounded-lg border border-cyan-400/15 bg-slate-950/70 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{ opacity: [0.35, 1, 0.35], scale: [0.95, 1.1, 0.95] }}
                          transition={{ repeat: Infinity, duration: 1.8, delay: index * 0.12 }}
                          className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                        />
                        <Server className="h-3.5 w-3.5 text-cyan-300" />
                        <span className="text-base leading-none">{node.flag}</span>
                        <span className="text-sm font-bold text-cyan-100">{node.name}</span>
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] text-slate-300">{node.host}</div>
                        <div className="text-[10px] text-slate-500">
                          {node.protocol} :{node.port}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <CtaButton href="http://t.me/V2free_ibot" className="w-full sm:w-auto">
                تضمین اتصال - خرید از ربات
              </CtaButton>
            </article>
          </div>
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
