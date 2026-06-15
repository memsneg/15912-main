import { HOTLINE, HOTLINE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function CTASection({
  brandName,
  governorateNameAr,
}: {
  brandName: string;
  governorateNameAr?: string;
}) {
  const place = governorateNameAr ? ` في ${governorateNameAr}` : "";
  return (
    <div
      className="text-white py-14 px-6 text-center"
      style={{ background: "var(--brand)" }}
    >
      <h2 className="text-[30px] font-black mb-2.5">
        احجز صيانة {brandName} الآن{place}
      </h2>
      <p className="text-base opacity-85 mb-7">
        فنيون متخصصون — قطع غيار أصلية — ضمان بعد الصيانة — خدمة منزلية
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <a
          href={HOTLINE_TEL}
          className="inline-flex items-center gap-2.5 bg-white font-black text-lg px-8 py-3.5 rounded-lg"
          style={{ color: "var(--brand)" }}
        >
          📞 اتصل الآن — {HOTLINE}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-7 py-3.5 rounded-lg font-bold"
        >
          💬 تواصل واتساب
        </a>
      </div>
    </div>
  );
}
