import Link from "next/link";
import { HOTLINE, HOTLINE_TEL, WHATSAPP_URL } from "@/lib/constants";
import { TRUST_BADGES } from "@/lib/constants";
import type { Brand } from "@/lib/data/brands";

interface HeroProps {
  h1: string;
  h1Highlight?: string;
  subheadline: string;
  brand?: Brand;
  breadcrumbs?: { label: string; href?: string }[];
}

export function Hero({
  h1,
  h1Highlight,
  subheadline,
  brand,
  breadcrumbs,
}: HeroProps) {
  const titleParts = h1Highlight ? h1.split(h1Highlight) : [h1];

  return (
    <section className="relative mt-[60px] text-white py-16 md:py-20 min-h-[480px] flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      {brand && (
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[180px] md:text-[300px] font-black text-white/[0.03] leading-none pointer-events-none select-none"
          aria-hidden
        >
          {brand.name}
        </span>
      )}

      <div className="section-inner relative z-10 w-full">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="text-[13px] text-white/60 mb-5 flex flex-wrap items-center gap-2">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-40">›</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-[clamp(30px,5vw,52px)] font-black leading-tight mb-4 tracking-tight">
          {h1Highlight && titleParts.length > 1 ? (
            <>
              {titleParts[0]}
              <span style={{ color: brand?.color || "var(--brand-light)" }}>
                {h1Highlight}
              </span>
              {titleParts[1]}
            </>
          ) : (
            h1
          )}
        </h1>

        <p className="text-[clamp(15px,2vw,18px)] text-white/75 mb-9 max-w-xl">
          {subheadline}
        </p>

        <div className="flex flex-wrap gap-3.5 mb-10">
          <a
            href={HOTLINE_TEL}
            className="animate-pulse-call inline-flex items-center gap-2.5 font-bold text-lg text-white px-8 py-4 rounded-lg shadow-lg"
            style={{
              background: brand?.color || "var(--brand)",
              boxShadow: `0 4px 20px ${brand?.color || "var(--brand)"}66`,
            }}
          >
            📞 اتصل الآن — {HOTLINE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-bold text-base border-[1.5px] border-[#25D366] text-[#25D366] bg-[#25D366]/15 px-7 py-4 rounded-lg"
          >
            💬 تواصل واتساب
          </a>
        </div>

        <ul className="flex flex-wrap gap-3">
          {TRUST_BADGES.map((b) => (
            <li
              key={b.label}
              className="flex items-center gap-1.5 bg-white/[0.08] border border-white/15 text-white/85 text-[13px] px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
