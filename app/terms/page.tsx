import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شرایط استفاده از خدمات | VPN استارلینک",
  description:
    "شرایط و قوانین استفاده از وب‌سایت و خدمات VPN با زیرساخت استارلینک؛ مسئولیت کاربر، بازپرداخت، کوکی‌ها و سلب مسئولیت.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0 cosmic-grid opacity-30" />
      <div className="pointer-events-none absolute -top-32 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

      <header className="relative border-b border-slate-800/80 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <Link
            href="/"
            className="text-sm font-bold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            ← بازگشت به صفحه اصلی
          </Link>
          <p className="text-xs text-slate-500">آخرین به‌روزرسانی: فروردین ۱۴۰۵</p>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-3xl px-4 py-10 pb-20 md:px-8 md:py-14">
        <article className="space-y-10 text-[15px] leading-8 text-slate-300 md:text-base md:leading-9">
          <div>
            <h1 className="mb-3 text-2xl font-black text-white md:text-3xl">شرایط استفاده از خدمات</h1>
            <p className="text-slate-400">
              این سند قوانین و مقررات استفاده از وب‌سایت و خدمات ارائه‌شده در اینجا را مشخص می‌کند.
              با ورود و استفاده از وب‌سایت، شما این شرایط را می‌پذیرید. در صورت عدم موافقت، لطفاً از
              ادامهٔ استفاده خودداری کنید.
            </p>
          </div>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">خوش‌آمدگویی</h2>
            <p>
              به وب‌سایت خدمات VPN مبتنی بر زیرساخت ماهواره‌ای استارلینک خوش آمدید. این شرایط نحوهٔ
              استفادهٔ شما از وب‌سایت، فرآیند خرید، پشتیبانی و محدودیت‌های قانونی را روشن می‌کند.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">تعاریف</h2>
            <p>
              «شما» یا «کاربر» به شخصی اشاره دارد که به وب‌سایت دسترسی پیدا کرده و خدمات را سفارش یا
              استفاده می‌کند. «ما»، «ارائه‌دهنده» یا «وب‌سایت» به مالک/مدیر همین وب‌سایت و خدمات مرتبط
              اشاره دارد. «خدمات» شامل اشتراک VPN، کانفیگ، راهنما و پشتیبانی مرتبط است.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">شرایط ثبت‌نام و استفاده</h2>
            <ol className="list-decimal pr-5 space-y-2 marker:text-cyan-400">
              <li>
                در زمان ثبت‌نام یا خرید، شما تأیید می‌کنید که استفاده از سرورها در کشوری که ممکن است
                استفاده از VPN یا نوع خاصی از اتصال در آن محدود یا ممنوع باشد، بر عهدهٔ خود شماست و
                مسئولیت حقوقی آن با شماست.
              </li>
              <li>
                هرگونه اقدام حقوقی یا اداری که در کشور محل استفادهٔ شما ناشی از بهره‌برداری از خدمات
                باشد، صرفاً بر عهدهٔ خود شماست.
              </li>
              <li>
                استفاده از خدمات برای هرگونه فعالیت غیرقانونی از جمله استخراج رمز ارز بدون مجوز،
                توزیع محتوای غیرمجاز، قمار غیرقانونی یا هر فعالیت مغایر قوانین محل، ممنوع است.
              </li>
              <li>
                ترافیک همتا به همتا (P2P)، تورنت و موارد مشابه که ممکن است باعث سوءاستفاده یا نقض
                قوانین شود، مجاز نیست مگر اینکه صراحتاً در پلن شما اعلام شده باشد.
              </li>
              <li>
                استفاده از هر سرور تابع قوانین کشور میزبان آن سرور است؛ شما موظف به رعایت آن قوانین
                هستید.
              </li>
              <li>
                هرگونه سوءاستفاده از سرویس‌ها (اسپم، حمله به زیرساخت‌ها، دور زدن محدودیت‌های عادلانه
                سرویس و غیره) می‌تواند بدون اخطار قبلی منجر به قطع سرویس شود.
              </li>
              <li>
                برای کاربران رایگان، حق حذف یا محدود کردن حساب بدون اطلاع قبلی محفوظ است.
              </li>
              <li>
                در صورت نقض جدی شرایط، حساب شما بدون نیاز به اخطار قبلی مسدود می‌شود.
              </li>
              <li>
                ثبت‌نام بدون فعال‌سازی سرویس در مدت مشخص ممکن است به‌صورت خودکار حذف شود؛ جزئیات در
                زمان خرید یا از طریق پشتیبانی اعلام می‌شود.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">سیاست بازپرداخت</h2>
            <ol className="list-decimal pr-5 space-y-2 marker:text-cyan-400">
              <li>
                در صورت انصراف از سرویس در بازهٔ اعلام‌شده (معمولاً تا ۷ روز از زمان خرید، مطابق
                قوانین همان لحظهٔ خرید)، امکان بازپرداخت کامل وجود دارد مگر خلاف آن صریحاً ذکر شده
                باشد.
              </li>
              <li>
                برای درخواست بازپرداخت با پشتیبانی از طریق ایمیل، چت یا کانال رسمی اعلام‌شده تماس
                بگیرید.
              </li>
              <li>
                برای پرداخت‌هایی مانند PayPal، ممکن است بازتاب مبلغ در حساب شما چند روز طول بکشد.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">کوکی‌ها</h2>
            <p>
              این وب‌سایت ممکن است از کوکی‌ها برای عملکرد صحیح بخش‌هایی از سایت، تحلیل ترافیک یا
              تبلیغات استفاده کند. با ادامهٔ استفاده، شما با سیاست کوکی مطابق توضیحات ارائه‌شده موافق
              هستید. مرورگرها معمولاً امکان محدود یا غیرفعال کردن کوکی را می‌دهند.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">مجوز و محدودیت محتوا</h2>
            <p className="mb-3">
              مگر خلاف آن ذکر شده باشد، حقوق مالکیت فکری مربوط به محتوای وب‌سایت متعلق به
              ارائه‌دهنده یا مجوزدهندگان است. شما فقط مجاز به مشاهده و چاپ برای استفادهٔ شخصی مطابق
              این شرایط هستید.
            </p>
            <p className="mb-2 font-semibold text-slate-200">شما نباید:</p>
            <ul className="list-disc pr-5 space-y-1 marker:text-cyan-400">
              <li>محتوای وب‌سایت را بدون اجازه منتشر یا بازنشر کنید؛</li>
              <li>محتوا را بفروشید، اجاره دهید یا زیرمجوز بدهید؛</li>
              <li>بدون مجوز، محتوا را کپی یا تکثیر گسترده کنید.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">آی‌فریم و نحوهٔ نمایش</h2>
            <p>
              بدون اجازهٔ کتبی، نباید صفحات ما را در آی‌فریم یا به‌شیوه‌ای قرار دهید که ظاهر یا
              عملکرد وب‌سایت ما را تحریف کند.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">حقوق و اختیارات ما</h2>
            <p>
              ما حق داریم در هر زمان، درخواست حذف لینک به وب‌سایت خود را بدهیم یا سیاست لینک‌دهی را
              تغییر دهیم. با ادامهٔ لینک دادن، شما موظف به رعایت شرایط به‌روز هستید.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">حذف لینک از وب‌سایت ما</h2>
            <p>
              اگر لینکی را در وب‌سایت ما نامناسب می‌دانید، می‌توانید اطلاع دهید؛ بررسی می‌کنیم اما
              تعهدی برای حذف یا پاسخ مستقیم نداریم. تلاش می‌کنیم اطلاعات درست باشد اما صحت کامل یا
              به‌روز بودن دائمی را تضمین نمی‌کنیم.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">مسئولیت محتوای سایت‌های دیگر</h2>
            <p>
              ما مسئول محتوای سایت‌های شخص ثالثی که به آن‌ها لینک می‌دهیم یا شما به آن‌ها ارجاع
              می‌دهید نیستیم. شما موافقت می‌کنید در برابر ادعاهای ناشی از محتوای سایت خودتان، ما را
              مصون نگه دارید.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-white">سلب مسئولیت</h2>
            <p className="mb-3">
              تا حداکثر مجاز قانون، تمام اظهارات ضمنی و صریح مربوط به وب‌سایت و استفاده از آن سلب
              می‌شود. هیچ‌چیز در این سلب مسئولیت نباید مسئولیت مرگ یا آسیب جانی ناشی از تقصیر، یا
              تقلب را محدود کند؛ یا مسئولیت‌هایی را که قانون اجازهٔ حذف آن‌ها را نمی‌دهد، حذف کند.
            </p>
            <p>
              خدمات «همان‌گونه که هست» ارائه می‌شوند؛ پایداری اتصال به عوامل خارج از کنترل (از جمله
              اختلال اینترنت، فیلترینگ، قطعی برق یا محدودیت‌های اپراتور) نیز بستگی دارد. ما تضمین
              نمی‌کنیم سرویس همیشه بدون وقفه یا بدون خطا باشد.
            </p>
          </section>

          <section className="rounded-xl border border-cyan-300/20 bg-slate-900/50 p-4 text-sm text-slate-400">
            <p>
              برای خرید و پشتیبانی می‌توانید از ربات تلگرام رسمی یا وب‌سایت همکار طبق اعلان در صفحهٔ
              اصلی استفاده کنید. سوالات حقوقی را با مشاور محلی خود بررسی کنید؛ این متن جایگزین مشاورهٔ
              تخصصی نیست.
            </p>
          </section>
        </article>
      </main>

      <footer className="relative border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:px-8 md:text-sm">
          <p>© {new Date().getFullYear()} Starlink VPN</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-cyan-300">
              صفحه اصلی
            </Link>
            <Link href="/knowledge" className="hover:text-cyan-300">
              آموزش‌ها
            </Link>
            <a
              href="http://t.me/V2free_ibot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              تلگرام
            </a>
            <a
              href="https://www.symmetricnet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              وب‌سایت
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
