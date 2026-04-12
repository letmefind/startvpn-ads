export type PackageFeature = {
  label: string;
  value: string;
  /** true = تیک سبز، false = ضربدر (مثلاً بدون بازنشانی) */
  included: boolean;
};

export type PricingPackage = {
  id: string;
  title: string;
  /** نمایش کوتاه کنار عنوان */
  badge?: string;
  priceToman: number;
  /** دورهٔ صورتحساب به انگلیسی (مطابق پنل) */
  billingPeriodEn: "Monthly" | "Quarterly" | "SemiAnnually";
  /** برچسب فارسی دوره */
  billingPeriodFa: string;
  features: PackageFeature[];
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "1g-starlink",
    title: "1G-StarLink",
    badge: "🛒 🌟🛰️",
    priceToman: 750_000,
    billingPeriodEn: "Monthly",
    billingPeriodFa: "ماهانه",
    features: [
      { label: "محدودیت IP", value: "100", included: true },
      { label: "ترافیک", value: "1 GB", included: true },
      { label: "محدودیت سرعت", value: "1 Gb/s", included: true },
      { label: "گروه سرور", value: "STAR", included: true },
      { label: "بازنشانی ترافیک", value: "ندارد", included: false },
    ],
  },
  {
    id: "5g-starlink",
    title: "5G-StarLink",
    badge: "🛒 🌟🛰️",
    priceToman: 3_000_000,
    billingPeriodEn: "Quarterly",
    billingPeriodFa: "سه‌ماهه",
    features: [
      { label: "محدودیت IP", value: "100", included: true },
      { label: "ترافیک", value: "5 GB", included: true },
      { label: "محدودیت سرعت", value: "1 Gb/s", included: true },
      { label: "گروه سرور", value: "STAR", included: true },
      { label: "بازنشانی ترافیک", value: "ندارد", included: false },
    ],
  },
  {
    id: "10g-starlink",
    title: "10G-StarLink",
    badge: "🛒 🌟🛰️",
    priceToman: 5_700_000,
    billingPeriodEn: "SemiAnnually",
    billingPeriodFa: "شش‌ماهه",
    features: [
      { label: "محدودیت IP", value: "100", included: true },
      { label: "ترافیک", value: "10 GB", included: true },
      { label: "محدودیت سرعت", value: "1 Gb/s", included: true },
      { label: "گروه سرور", value: "STAR", included: true },
      { label: "بازنشانی ترافیک", value: "ندارد", included: false },
    ],
  },
  {
    id: "15g-starlink",
    title: "15G-StarLink",
    badge: "🛒 🌟🛰️",
    priceToman: 8_250_000,
    billingPeriodEn: "SemiAnnually",
    billingPeriodFa: "شش‌ماهه",
    features: [
      { label: "محدودیت IP", value: "100", included: true },
      { label: "ترافیک", value: "15 GB", included: true },
      { label: "محدودیت سرعت", value: "1 Gb/s", included: true },
      { label: "گروه سرور", value: "STAR", included: true },
      { label: "بازنشانی ترافیک", value: "ندارد", included: false },
    ],
  },
];
