"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "float" })}
      className="fixed bottom-20 left-4 z-40 md:bottom-6 md:left-6 w-[58px] h-[58px] bg-[#25D366] rounded-full flex items-center justify-center text-2xl text-white shadow-lg hover:scale-105 transition-transform"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
}
