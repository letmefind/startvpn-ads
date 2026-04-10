"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
};

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-5 shadow-[0_0_30px_rgba(37,99,235,0.18)] backdrop-blur"
    >
      <div className="mb-4 inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-extrabold text-white">{title}</h3>
      <p className="text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}
