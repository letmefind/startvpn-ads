"use client";

import dynamic from "next/dynamic";

const NetblocksXTimeline = dynamic(
  () =>
    import("@/components/netblocks/netblocks-x-timeline").then((m) => ({
      default: m.NetblocksXTimeline,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[520px] items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/60 text-sm text-slate-500"
        aria-hidden
      >
        در حال بارگذاری فید ایکس…
      </div>
    ),
  },
);

export function NetblocksXSection() {
  return (
    <section aria-label="فید نت‌بلاکس در ایکس" className="mb-14">
      <h2 className="mb-4 text-xl font-black text-white md:text-2xl">فید زنده در ایکس</h2>
      <NetblocksXTimeline />
    </section>
  );
}
