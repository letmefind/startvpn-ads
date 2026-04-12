"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: Element | HTMLElement) => Promise<void>;
      };
    };
  }
}

/**
 * تایم‌لاین رسمی NetBlocks از widgets.js — کامل‌تر از فقط پست‌های وردپرس.
 * لینک anchor طبق مستندات X همچنان twitter.com است؛ دکمه‌های صفحه به x.com می‌روند.
 */
export function NetblocksXTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [widgetsJsLoaded, setWidgetsJsLoaded] = useState(false);

  const runLoad = useCallback(() => {
    const root = containerRef.current;
    if (!root || typeof window === "undefined") return;

    let attempts = 0;
    const maxAttempts = 80;

    const tick = () => {
      attempts += 1;
      const tw = window.twttr?.widgets;
      if (tw) {
        void tw.load(root);
        return;
      }
      if (attempts < maxAttempts) {
        window.setTimeout(tick, 50);
      }
    };

    tick();
  }, []);

  useEffect(() => {
    if (widgetsJsLoaded) runLoad();
  }, [widgetsJsLoaded, runLoad]);

  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-slate-950/70 shadow-[0_0_40px_rgba(6,182,212,0.08)]">
      <div className="border-b border-slate-800/90 px-4 py-3 text-center text-xs leading-6 text-slate-400">
        فید زندهٔ نت‌بلاکس در ایکس — معمولاً کامل‌تر و سریع‌تر از آرشیو وب‌سایت است.
      </div>

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => setWidgetsJsLoaded(true)}
      />

      <div ref={containerRef} className="min-h-[520px] p-2 [&_.twitter-timeline]:!min-h-[500px]">
        <a
          className="twitter-timeline"
          data-height="680"
          data-theme="dark"
          data-dnt="true"
          data-chrome="nofooter transparent"
          href="https://twitter.com/netblocks"
        >
          فید نت‌بلاکس در ایکس
        </a>
      </div>

      <p className="border-t border-slate-800/90 px-4 py-3 text-center text-xs leading-6 text-slate-500">
        اگر بلوک خالی ماند، احتمالاً دسترسی به ایکس محدود است — با VPN صفحه را رفرش کنید یا از دکمهٔ بالا
        استفاده کنید.
      </p>
    </div>
  );
}
