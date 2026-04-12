import { helpSiteUrl } from "@/lib/help-site";

export type DownloadItem = {
  label: string;
  href: string;
  /** توضیح کوتاه زیر دکمه */
  note?: string;
  /** اولویت نمایش (مرجع اصلی ایرانی) */
  primary?: boolean;
};

export type GuideBlock = {
  title: string;
  steps: string[];
};

export type AppKnowledge = {
  id: string;
  name: string;
  /** توضیح یک خطی */
  summary: string;
  /** نکته اختصاصی (مثلاً نام جایگزین) */
  extraNote?: string;
  downloads: DownloadItem[];
  uri: GuideBlock;
  subscription: GuideBlock;
  qr: GuideBlock;
};

export type PlatformSection = {
  id: string;
  title: string;
  icon: string;
  apps: AppKnowledge[];
};

const mirrorNote =
  "این فایل روی سایت کمکی help.bale.cyou میزبانی می‌شود؛ برای بسیاری از کاربران داخل ایران بدون VPN قابل‌دریافت‌تر است. اگر باز نشد، لینک پشتیبان را امتحان کنید.";

export const KNOWLEDGE_INTRO = {
  title: "مرکز آموزش (Knowledge Base)",
  lead:
    "راهنمای نصب و اتصال برای کلاینت‌های پیشنهادی. افزودن کانفیگ با لینک (URI)، اشتراک (Subscription) و QR در همهٔ اپ‌ها پوشش داده شده است.",
  helpSiteLink: helpSiteUrl("/"),
  mirrorExplainer:
    "مسیرهای دانلود با پیشوند سایت کمکی مطابق سورس محلی Help-Site شماست؛ همان فایل‌هایی که روی help.bale.cyou در پوشهٔ downloads قرار می‌گیرند. اپ‌هایی که در آن سورس فایل مستقیم ندارند، لینک رسمی یا فروشگاه به‌همراه راهنمای جایگزین دارند.",
};

export const PLATFORM_GUIDES: PlatformSection[] = [
  {
    id: "android",
    title: "اندروید",
    icon: "📱",
    apps: [
      {
        id: "v2rayng",
        name: "V2rayNG",
        summary: "محبوب‌ترین کلاینت V2Ray برای اندروید.",
        extraNote:
          "گاهی در گفتگوها «V2rang» گفته می‌شود؛ منظور همان V2rayNG است.",
        downloads: [
          {
            label: "دانلود APK (سایت کمکی)",
            href: helpSiteUrl("/downloads/V2rayNG.apk"),
            note: mirrorNote,
            primary: true,
          },
          {
            label: "GitHub Releases (پشتیبان)",
            href: "https://github.com/2dust/v2rayNG/releases",
            note: "آخرین نسخهٔ رسمی از سازنده.",
          },
        ],
        uri: {
          title: "افزودن با URI (لینک کانفیگ)",
          steps: [
            "لینک کانفیگ را از ربات یا پنل کپی کنید (با پیشوند vless://، vmess:// و غیره).",
            "در V2rayNG روی دکمهٔ + بزنید.",
            "گزینهٔ «Import config from clipboard» یا «وارد کردن از کلیپ‌بورد» را بزنید.",
            "اگر لینک معتبر باشد، سرور به لیست اضافه می‌شود؛ یک‌بار روی آن بزنید و اتصال را تست کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription (لینک اشتراک)",
          steps: [
            "لینک اشتراک (معمولاً با پسوند یا مسیر مخصوص subscription) را از ارائه‌دهنده بگیرید.",
            "در V2rayNG: منوی سه‌خط → Subscription setting → + آدرس اشتراک را اضافه کنید.",
            "روی «Update subscription» بزنید تا سرورها وارد شوند.",
            "پس از به‌روزرسانی، یکی از نودها را انتخاب و متصل شوید.",
          ],
        },
        qr: {
          title: "افزودن با QR Code",
          steps: [
            "در V2rayNG روی + بزنید و «Scan QR code» را انتخاب کنید.",
            "اجازهٔ دوربین بدهید و QR را اسکن کنید؛ یا از تصویر ذخیره‌شده در گالری import کنید.",
            "پس از ساخت پروفایل، آن را انتخاب و اتصال را فعال کنید.",
          ],
        },
      },
      {
        id: "npv",
        name: "NPV Tunnel",
        summary: "کلاینت چندپروتکل (از جمله V2Ray) با پشتیبانی از SSH و قابلیت‌های پیشرفته.",
        downloads: [
          {
            label: "Google Play (رسمی)",
            href: "https://play.google.com/store/apps/details?id=com.napsternetlabs.napsternetv",
            note: "در صورت فیلتر بودن پلی‌استور، از سایت کمکی یا فایل معتبر دیگر استفاده کنید.",
          },
          {
            label: "صفحهٔ اصلی سایت کمکی",
            href: helpSiteUrl("/"),
            note: "اگر نسخهٔ APK روی help.bale.cyou قرار گرفت، از همانجا بدون VPN راحت‌تر دانلود می‌شود.",
            primary: true,
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "کانفیگ را کپی کنید.",
            "در اپ بخش Add / Import را باز کنید و گزینهٔ مربوط به وارد کردن از کلیپ‌بورد یا لینک را بزنید.",
            "پس از import، پروفایل را ذخیره و متصل شوید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "لینک اشتراک را از پنل یا ربات بگیرید.",
            "در تنظیمات اپ، بخش Subscription / Group URL را پیدا کنید و لینک را اضافه کنید.",
            "به‌روزرسانی لیست سرورها را اجرا کنید و سپس یک سرور را انتخاب کنید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "از منوی افزودن، گزینهٔ Scan QR را بزنید.",
            "پس از اسکن، کانفیگ ذخیره می‌شود؛ در صورت نیاز نام را ویرایش کنید.",
          ],
        },
      },
      {
        id: "happ-android",
        name: "Happ",
        summary: "کلاینت چندسکویی با رابط ساده؛ پشتیبانی از import سریع.",
        downloads: [
          {
            label: "آخرین APK (GitHub رسمی)",
            href: "https://github.com/Happ-proxy/happ-android/releases/latest/download/Happ.apk",
            note: "در صورت نیاز می‌توانید نسخهٔ جدید را از صفحهٔ Releases هم بگیرید.",
            primary: true,
          },
          {
            label: "سایت کمکی (در صورت قرارگیری فایل)",
            href: helpSiteUrl("/"),
            note: "اگر نسخهٔ mirror روی help.bale.cyou آپلود شود، از همان مسیر دانلود کنید.",
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "لینک کانفیگ را کپی کنید.",
            "Happ را باز کنید؛ معمولاً دکمهٔ + یا «Add from clipboard» را بزنید.",
            "پروفایل ساخته می‌شود؛ آن را انتخاب و اتصال را روشن کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "لینک subscription را کپی کنید.",
            "در Happ بخش افزودن اشتراک / Import subscription را باز کنید و URL را بچسبانید.",
            "پس از sync، سرورها را انتخاب و متصل شوید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "گزینهٔ Scan QR را بزنید و QR کانفیگ را اسکن کنید.",
            "در صورت پشتیبانی، می‌توانید QR اشتراک را هم اسکن کنید.",
          ],
        },
      },
    ],
  },
  {
    id: "iphone",
    title: "آیفون (iOS)",
    icon: "🍎",
    apps: [
      {
        id: "streisand",
        name: "Streisand",
        summary: "کلاینت انعطاف‌پذیر با پشتیبانی گسترده از پروتکل‌ها.",
        downloads: [
          {
            label: "App Store",
            href: "https://apps.apple.com/app/streisand/id6450534064",
            primary: true,
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "لینک را در Safari یا از ربات کپی کنید.",
            "Streisand را باز کنید؛ معمولاً «Import from Clipboard» در منو یا دکمهٔ + موجود است.",
            "پس از import، پروفایل را انتخاب و اتصال را فعال کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "URL اشتراک را کپی کنید.",
            "در Streisand به بخش اشتراک / Subscription بروید و لینک را اضافه کنید.",
            "لیست را به‌روز کنید و یک سرور را برای اتصال برگزینید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "در اپ گزینهٔ Scan یا Import via QR را بزنید.",
            "دوربین را روی QR بگیرید یا از تصویر ذخیره‌شده import کنید.",
          ],
        },
      },
      {
        id: "v2box-ios",
        name: "V2Box",
        summary: "کلاینت V2Ray با UI تمیز؛ مناسب import سریع.",
        downloads: [
          {
            label: "App Store (iOS)",
            href: "https://apps.apple.com/app/v2box-v2ray-client/id6736262138",
            note: "مطابق سورس Help-Site شما (شناسهٔ اپ در index/config).",
            primary: true,
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "لینک کانفیگ را کپی کنید.",
            "V2Box → + → Import from Clipboard (یا معادل فارسی/انگلیسی).",
            "سرور اضافه می‌شود؛ برای اتصال آن را انتخاب کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "در V2Box بخش subscription / group را باز کنید.",
            "لینک اشتراک را وارد و ذخیره کنید؛ سپس به‌روزرسانی کنید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "از منوی افزودن، اسکن QR را انتخاب کنید.",
            "پس از ثبت کانفیگ، اتصال را تست کنید.",
          ],
        },
      },
      {
        id: "happ-ios",
        name: "Happ",
        summary: "نسخهٔ iOS با تجربهٔ نزدیک به سایر پلتفرم‌ها.",
        downloads: [
          {
            label: "App Store",
            href: "https://apps.apple.com/app/happ-proxy-utility/id6504287215",
            primary: true,
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "لینک را کپی و در Happ گزینهٔ import از کلیپ‌بورد را بزنید.",
            "پروفایل ساخته می‌شود؛ آن را انتخاب کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "URL اشتراک را در بخش مربوط به subscription وارد کنید.",
            "پس از sync، سرور مورد نظر را انتخاب کنید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "Scanner داخل اپ را باز کنید و QR را اسکن کنید.",
          ],
        },
      },
    ],
  },
  {
    id: "windows",
    title: "ویندوز",
    icon: "💻",
    apps: [
      {
        id: "happ-windows",
        name: "Happ",
        summary: "نسخهٔ دسکتاپ برای ویندوز.",
        downloads: [
          {
            label: "نصب‌کنندهٔ ویندوز (GitHub رسمی)",
            href: "https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x86.exe",
            note: "نام فایل ممکن است با به‌روزرسانی کمی متفاوت باشد؛ صفحهٔ Releases را ببینید.",
            primary: true,
          },
          {
            label: "صفحهٔ سایت کمکی",
            href: helpSiteUrl("/"),
            note: "در صورت قرارگیری نسخهٔ mirror، از help.bale.cyou هم قابل دانلود است.",
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "برنامه را نصب و اجرا کنید.",
            "لینک کانفیگ را کپی کنید؛ در Happ گزینهٔ Import from clipboard را بزنید.",
            "پروفایل را ذخیره و اتصال را فعال کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "در بخش subscription آدرس اشتراک را وارد کنید.",
            "به‌روزرسانی کنید و از لیست سرور یکی را انتخاب کنید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "اگر اپ اسکن QR دارد، از آن استفاده کنید؛ وگره تصویر QR را باز کرده و از import فایل/اسکن استفاده کنید.",
          ],
        },
      },
      {
        id: "v2rayn",
        name: "V2rayN",
        summary:
          "کلاینت رسمی برای ویندوز (نام مشابه V2rayNG اندروید است؛ روی PC برنامهٔ صحیح V2rayN است).",
        downloads: [
          {
            label: "دانلود ZIP (سایت کمکی)",
            href: helpSiteUrl("/downloads/V2rayN.zip"),
            note: mirrorNote,
            primary: true,
          },
          {
            label: "GitHub Releases (پشتیبان)",
            href: "https://github.com/2dust/v2rayN/releases",
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "V2rayN را از حالت فشرده خارج کرده و اجرا کنید.",
            "لینک کانفیگ را کپی کنید؛ در برنامه راست‌کلیک → Import batch from clipboard یا گزینهٔ مشابه.",
            "سرور به لیست اضافه می‌شود؛ Enter روی سرور برای تست یا راست‌کلیک → Set as active.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "Subscription Group را در منو پیدا کنید (بسته به نسخه ممکن است نام متفاوت باشد).",
            "URL اشتراک را اضافه و به‌روزرسانی کنید.",
            "پس از دریافت لیست، سرور را انتخاب و System Proxy را فعال کنید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "در منو گزینهٔ اسکن QR (در صورت وجود) را بزنید.",
            "یا QR را به‌صورت تصویر ذخیره کرده و از import فایل استفاده کنید.",
          ],
        },
      },
    ],
  },
  {
    id: "mac",
    title: "مک (macOS)",
    icon: "🖥️",
    apps: [
      {
        id: "v2box-mac",
        name: "V2Box",
        summary: "نسخهٔ macOS از V2Box از طریق App Store.",
        downloads: [
          {
            label: "Mac App Store",
            href: "https://apps.apple.com/app/v2box-v2ray-client/id6736262138",
            note: "همان شناسهٔ اپی که در سورس Help-Site برای iOS/Mac ثبت شده است.",
            primary: true,
          },
        ],
        uri: {
          title: "افزودن با URI",
          steps: [
            "لینک را کپی کنید.",
            "V2Box را باز کنید و Import from Clipboard را بزنید.",
            "پروفایل را انتخاب و اتصال را روشن کنید.",
          ],
        },
        subscription: {
          title: "افزودن Subscription",
          steps: [
            "لینک اشتراک را در بخش subscription وارد و sync کنید.",
          ],
        },
        qr: {
          title: "افزودن با QR",
          steps: [
            "از اسکنر داخلی اپ برای QR کانفیگ استفاده کنید.",
          ],
        },
      },
    ],
  },
];
