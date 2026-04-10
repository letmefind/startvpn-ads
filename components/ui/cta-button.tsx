"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-bold transition-all duration-300 md:text-base";

  const variantClass =
    variant === "primary"
      ? "bg-cyan-400 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.55)] hover:bg-cyan-300 hover:shadow-[0_0_44px_rgba(34,211,238,0.75)]"
      : "border border-cyan-300/40 bg-slate-900/70 text-cyan-100 hover:border-cyan-300/70 hover:bg-slate-800/80";

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${variantClass} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
