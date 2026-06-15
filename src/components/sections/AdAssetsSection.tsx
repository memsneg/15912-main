"use client";

import { useState } from "react";
import type { AdAssets } from "@/lib/ads";

export function AdAssetsSection({ assets }: { assets: AdAssets }) {
  const [copied, setCopied] = useState<string | null>(null);
  const [toast, setToast] = useState(false);

  const copyText = async (text: string, id: string, el?: HTMLElement) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setToast(true);
    if (el) el.classList.add("copied");
    setTimeout(() => {
      setCopied(null);
      setToast(false);
      if (el) el.classList.remove("copied");
    }, 1500);
  };

  return (
    <section className="py-[72px] px-6 bg-[var(--accent)] text-white" id="ad-assets">
      <div className="section-inner">
        <span
          className="inline-block text-[13px] font-bold px-3.5 py-1 rounded-full mb-3"
          style={{ background: "rgba(232,160,20,0.2)", color: "var(--gold)" }}
        >
          📊 محتوى الإعلانات
        </span>
        <h2 className="section-title text-white">عناوين وأوصاف Google Ads</h2>
        <p className="text-white/60 text-sm mb-8">انقر على أي عنصر لنسخه مباشرة</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6">
            <h3 className="text-[15px] font-bold mb-4 flex items-center gap-2" style={{ color: "var(--gold)" }}>
              📌 عناوين الإعلان (15 عنوان)
            </h3>
            <div className="flex flex-wrap gap-1">
              {assets.headlines.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={(e) => copyText(h, h, e.currentTarget)}
                  className="headline-pill text-[13px] px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.08] text-white/85 hover:bg-[var(--brand)] hover:border-[var(--brand)] transition-colors copied:bg-green-600"
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6">
            <h3 className="text-[15px] font-bold mb-4" style={{ color: "var(--gold)" }}>
              📝 أوصاف الإعلان (4 وصف)
            </h3>
            {assets.descriptions.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => copyText(d, d)}
                className="block w-full text-right text-[14px] text-white/75 border border-white/10 rounded-lg p-3 mb-2 hover:bg-white/10 transition-colors"
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6 mt-5">
          <h3 className="text-[15px] font-bold mb-4" style={{ color: "var(--gold)" }}>
            🎯 الكلمات المفتاحية المستهدفة
          </h3>
          <div className="flex flex-wrap gap-1">
            {assets.keywords.map((k) => (
              <button
                key={k}
                type="button"
                onClick={(e) => copyText(k, k, e.currentTarget)}
                className="headline-pill text-[13px] px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.08] text-white/85 hover:bg-[var(--brand)] transition-colors"
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-white/50">
          رابط الصفحة: <code className="bg-white/10 px-2 py-1 rounded">{assets.landingPageUrl}</code>
        </p>
      </div>

      <div
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] bg-[#1a1a1a] text-white px-5 py-2 rounded-full text-sm transition-opacity ${toast ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        تم النسخ ✓
      </div>

    </section>
  );
}
