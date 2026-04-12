import type { NetblocksArticle } from "@/lib/netblocks-types";

/** اگر API در زمان build در دسترس نبود، حداقل چند گزارش معتبر نمایش داده می‌شود. */
export const NETBLOCKS_FALLBACK_IRAN: NetblocksArticle[] = [
  {
    id: 8702,
    title: "Iran disrupts mobile internet access during university entrance exams",
    url: "https://netblocks.org/reports/iran-disrupts-mobile-internet-access-during-university-entrance-exams-oAvGOoBY",
    date: "2023-01-19T11:52:51",
    imageUrl:
      "https://netblocks.org/wp-content/uploads/sites/8/2023/01/iran-exam-shutdown-notice-2023-01-18-983x1024.jpg",
    extraImageUrls: [],
    excerpt:
      "Network data confirm the restriction of internet connectivity in Iran on the morning of Thursday 19 January 2023 for some three hours. Metrics corroborate user reports of a disruption to cellular data service on multiple networks for many users.",
  },
  {
    id: 8600,
    title: "Internet disrupted in Iran amid protests over death of Mahsa Amini",
    url: "https://netblocks.org/reports/internet-disrupted-in-iran-amid-protests-over-death-of-mahsa-amini-X8qVEwAD",
    date: "2022-09-19T17:03:51",
    imageUrl: null,
    extraImageUrls: [],
    excerpt:
      "Real-time network data show two distinct falls in connectivity amid reports of regional internet disruptions in Tehran and other cities; incident ongoing.",
  },
];
