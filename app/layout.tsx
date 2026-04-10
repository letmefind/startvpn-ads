import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "خرید VPN استارلینک | اینترنت پرسرعت و بدون قطعی",
  description:
    "خرید بهترین و ارزان‌ترین VPN با زیرساخت استارلینک برای کاربران ایرانی. پشتیبانی از کریپتو، پی‌پل و ویزا کارت از طریق ربات تلگرام.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-slate-100">{children}</body>
    </html>
  );
}
