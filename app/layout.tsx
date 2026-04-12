import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Script from "next/script";
import { SiteBottomNav } from "@/components/layout/site-bottom-nav";
import "./globals.css";

const GOOGLE_ADS_ID = "AW-18071643437";

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
      <body className="min-h-full bg-[#050816] text-slate-100">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <div className="pb-[5.75rem] md:pb-24">{children}</div>
        <SiteBottomNav />
      </body>
    </html>
  );
}
