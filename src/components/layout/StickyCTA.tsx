"use client";

import { HOTLINE, HOTLINE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t shadow-lg p-2 flex gap-2 safe-area-pb">
      <a href={HOTLINE_TEL} className="btn-call flex-1 justify-center text-sm py-2.5">
        📞 {HOTLINE}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp flex-1 justify-center text-sm py-2.5"
      >
        💬 واتساب
      </a>
    </div>
  );
}
