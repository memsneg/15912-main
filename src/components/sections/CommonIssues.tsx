import { COMMON_ISSUES } from "@/lib/constants";

export function CommonIssues({ brandName }: { brandName: string }) {
  return (
    <section className="py-[72px]">
      <div className="section-inner">
        <span className="section-tag">أعطال شائعة</span>
        <h2 className="section-title">المشاكل الشائعة في أجهزة {brandName}</h2>
        <p className="section-sub">
          خبرتنا الطويلة مع أجهزة {brandName} تجعلنا الأقدر على تشخيص وحل جميع الأعطال
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {COMMON_ISSUES.map((issue) => (
            <div
              key={issue.ar}
              className="flex items-start gap-3.5 p-5 bg-white border border-[var(--border)] rounded-lg"
            >
              <div className="w-10 h-10 bg-[rgba(200,16,46,0.08)] rounded-lg flex items-center justify-center text-xl shrink-0">
                {issue.icon}
              </div>
              <div>
                <strong className="block font-bold text-sm mb-1">{issue.ar}</strong>
                <span className="text-[13px] text-[var(--text-muted)]">{issue.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
