import type { Brand } from "@/lib/data/brands";
import { getServiceBlocks } from "@/lib/content/governorate-content";

interface ServicesProps {
  brand: Brand;
  governorateNameAr?: string;
}

export function Services({ brand, governorateNameAr = "مصر" }: ServicesProps) {
  const services = getServiceBlocks(brand);

  return (
    <section className="py-[72px]">
      <div className="section-inner">
        <span className="section-tag">خدماتنا</span>
        <h2 className="section-title">خدمات صيانة {brand.nameAr} في {governorateNameAr}</h2>
        <p className="section-sub">
          نصلح جميع أجهزة {brand.nameAr} المنزلية بقطع غيار أصلية وضمان معتمد
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-5">
          {services.map((s) => (
            <article
              key={s.name}
              className="group bg-white border-[1.5px] border-[var(--border)] rounded-xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all relative overflow-hidden"
            >
              <span className="absolute top-0 right-0 left-0 h-[3px] bg-[var(--brand)] scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
              <span className="text-4xl block mb-3.5">{s.icon}</span>
              <h3 className="font-bold text-[15px] mb-1.5">{s.name}</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-snug">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
