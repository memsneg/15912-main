export function Reviews({
  items,
  governorateNameAr,
}: {
  items: { text: string; name: string; location: string }[];
  governorateNameAr: string;
}) {
  return (
    <section className="py-[72px] bg-[var(--surface)]">
      <div className="section-inner">
        <span className="section-tag">آراء العملاء</span>
        <h2 className="section-title">ماذا يقول عملاؤنا في {governorateNameAr}</h2>
        <p className="section-sub">تجارب حقيقية من عملائنا في المناطق المغطاة</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {items.map((r) => (
            <blockquote key={`${r.name}-${r.location}`} className="bg-white border border-[var(--border)] rounded-xl p-6">
              <div className="text-amber-500 mb-2">★★★★★</div>
              <p className="text-sm text-[var(--text-muted)] mb-3">{r.text}</p>
              <div className="font-bold text-sm">{r.name}</div>
              <div className="text-xs text-[var(--text-muted)]">{r.location}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
