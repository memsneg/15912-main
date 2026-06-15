"use client";

import { HOTLINE, HOTLINE_TEL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

interface CallButtonProps {
  className?: string;
  variant?: "primary" | "outline" | "sticky";
  label?: string;
}

export function CallButton({
  className = "",
  variant = "primary",
  label = "اتصل الآن",
}: CallButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-brand-hotline text-white hover:bg-orange-700 px-6 py-3",
    outline:
      "border-2 border-brand-hotline text-brand-hotline hover:bg-orange-50 px-6 py-3",
    sticky: "bg-brand-hotline text-white px-4 py-2 text-sm shadow-lg",
  };

  return (
    <a
      href={HOTLINE_TEL}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={() => trackEvent("phone_click", { location: variant })}
      aria-label={`Call hotline ${HOTLINE}`}
    >
      <PhoneIcon />
      <span>{label}</span>
      <span dir="ltr" className="font-bold">
        {HOTLINE}
      </span>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
