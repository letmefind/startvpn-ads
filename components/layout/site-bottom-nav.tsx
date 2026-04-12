"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Package, Scale, WifiOff } from "lucide-react";

const NAV = [
  { href: "/", label: "خانه", icon: Home },
  { href: "/packages", label: "پکیج‌ها", icon: Package },
  { href: "/knowledge", label: "آموزش‌ها", icon: BookOpen },
  { href: "/netblocks", label: "قطعی اینترنت", icon: WifiOff },
  { href: "/terms", label: "شرایط", icon: Scale },
] as const;

export function SiteBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 md:px-4 md:pb-4"
      aria-label="ناوبری اصلی سایت"
    >
      <div className="pointer-events-auto flex w-full max-w-xl items-stretch justify-between gap-0.5 rounded-t-2xl border border-cyan-400/25 border-b-0 bg-slate-950/90 px-1 py-1.5 shadow-[0_-12px_48px_rgba(2,6,23,0.7),0_0_0_1px_rgba(34,211,238,0.08)_inset] backdrop-blur-xl md:max-w-2xl md:rounded-2xl md:border-b md:px-2 md:py-2 md:shadow-[0_12px_48px_rgba(2,6,23,0.55),0_0_0_1px_rgba(34,211,238,0.08)_inset]">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active =
            pathname != null &&
            (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
          return (
            <Link
              key={href}
              href={href}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-1.5 text-[9px] font-bold transition-colors sm:text-[10px] md:gap-1 md:px-2 md:py-2 md:text-xs ${
                active
                  ? "bg-cyan-500/15 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  : "text-slate-500 hover:bg-slate-800/80 hover:text-slate-200"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className={`h-5 w-5 shrink-0 md:h-5 md:w-5 ${active ? "text-cyan-300" : "text-slate-500"}`}
                strokeWidth={active ? 2.25 : 2}
                aria-hidden
              />
              <span className="line-clamp-2 max-w-[5rem] text-center leading-[1.15] sm:max-w-[5.5rem] md:max-w-none">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
