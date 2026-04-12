export type NetblocksArticle = {
  id: number;
  title: string;
  url: string;
  /** ISO تاریخ انتشار */
  date: string;
  /** بهترین تصویر برای کارت (نمودار / تصویر شاخص) */
  imageUrl: string | null;
  /** تا چند تصویر دیگر از همان گزارش (نمودارهای متن)، بدون تکرار */
  extraImageUrls: string[];
  excerpt: string;
};
