import { HOTLINE_TEL } from "@/lib/constants";
import type { Area } from "@/lib/data/governorates";

interface AreasSectionProps {
  brandName: string;
  governorateNameAr: string;
  areas: Area[];
}

export function AreasSection({
  brandName,
  governorateNameAr,
  areas,
}: AreasSectionProps) {
  return (
    <section className="py-[72px] bg-[var(--surface)]">
      <div className="section-inner">
        <span className="section-tag">مناطق الخدمة</span>
        <h2 className="section-title">
          مناطق تغطية صيانة {brandName} في {governorateNameAr}
        </h2>
        <p className="section-sub">
          نقدم خدمات صيانة {brandName} المنزلية في جميع مناطق محافظة {governorateNameAr}
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 mb-8">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>

        <div className="text-center">
          <a href={HOTLINE_TEL} className="btn-call text-[15px] py-3.5 px-7">
            📞 اطلب فني الآن 
          </a>
        </div>
      </div>
    </section>
  );
}

function AreaCard({ area }: { area: Area }) {
  return (
    <div className="bg-white border-[1.5px] border-[var(--border)] rounded-lg py-4 px-3.5 text-center font-bold text-[15px] hover:border-[var(--brand)] hover:shadow-md hover:-translate-y-0.5 transition-all">
      <span className="block text-2xl mb-2 text-[var(--brand)]">📍</span>
      {area.nameAr}
    </div>
  );
}
