/**
 * پایهٔ URL سایت راهنما (mirror ایرانی).
 * روی سرور می‌توانید با NEXT_PUBLIC_HELP_SITE_URL مقدار را عوض کنید.
 */
export const HELP_SITE_ORIGIN =
  process.env.NEXT_PUBLIC_HELP_SITE_URL ?? "https://help.bale.cyou";

/** تبدیل مسیر نسبی سایت کمکی به URL کامل؛ لینک‌های مطلق را دست نمی‌زند. */
export function helpSiteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${HELP_SITE_ORIGIN}${path}`;
}
