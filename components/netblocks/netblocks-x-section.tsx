import { NetblocksXFeedCard } from "@/components/netblocks/netblocks-x-feed-card";

export function NetblocksXSection() {
  return (
    <section aria-label="فید نت‌بلاکس در ایکس" className="mb-14">
      <h2 className="mb-4 text-xl font-black text-white md:text-2xl">فید زنده در ایکس</h2>
      <NetblocksXFeedCard />
    </section>
  );
}
