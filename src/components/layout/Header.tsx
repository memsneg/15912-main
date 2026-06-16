"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOTLINE, HOTLINE_TEL, WHATSAPP_URL } from "@/lib/constants";
import { getBrand } from "@/lib/data/brands";
import { getGovernorate } from "@/lib/data/governorates";

export function Header() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const brand = parts[0] ? getBrand(parts[0]) : null;
  const governorate = parts[1] ? getGovernorate(parts[1]) : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-[var(--accent)] px-4 md:px-6 py-3 flex items-center justify-between shadow-lg">
      <Link href={brand ? `/${brand.slug}` : "/"} className="flex items-center gap-2.5 text-white">
        {brand ? (
          <>
            <span
              className="font-black text-base px-3 py-1 rounded-md tracking-wide"
              style={{ background: brand.color }}
            >
              {brand.nameAr}
            </span>
            <span className="font-black text-lg">
              {governorate ? `صيانة ${governorate.nameAr}` : `صيانة ${brand.nameAr}`}
            </span>
          </>
        ) : (
          <span className="font-black text-xl">المركز المعتمد للصيانة</span>
        )}
      </Link>

      <div className="flex gap-2.5 items-center">
      <a href={HOTLINE_TEL} className="btn-call text-[15px] py-2.5 px-5">
        📞 {HOTLINE}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp text-[15px] py-2.5 px-5 hidden sm:inline-flex"
      >
        💬 واتساب
      </a>
      </div>
    </header>
  );
}
