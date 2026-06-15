import { generateAreaSeoContent } from "@/lib/ads";
import type { Brand } from "@/lib/data/brands";
import type { Governorate } from "@/lib/data/governorates";

export function AreaSeoSections({
  brand,
  governorate,
}: {
  brand: Brand;
  governorate: Governorate;
}) {
  return (
    <section className="py-[72px] bg-[var(--surface)]">
      <div className="section-inner">
        <span className="section-tag">محتوى محلي</span>
        <h2 className="section-title">
          صيانة {brand.nameAr} في مناطق {governorate.nameAr}
        </h2>
        <p className="section-sub">نقدم خدمة احترافية متخصصة في كل منطقة بالمحافظة</p>

        <div className="space-y-5">
          {governorate.areas.map((area, index) => {
            const content = generateAreaSeoContent(brand, governorate, area, index);
            return (
              <article
                key={area.slug}
                id={area.slug}
                className="bg-white rounded-xl p-8 border border-[var(--border)] border-r-4 border-r-[var(--brand)]"
              >
                <h3 className="text-[22px] font-black mb-3 text-[var(--accent)]">
                  {content.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-[1.8] text-[15px]">
                  {content.paragraph}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
