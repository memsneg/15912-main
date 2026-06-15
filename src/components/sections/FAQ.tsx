"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQ({
  items,
  title = "أسئلة عن خدمات الصيانة",
  subtitle = "إجابات على أكثر الأسئلة التي يطرحها عملاؤنا",
}: {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[72px]">
      <div className="section-inner max-w-3xl">
        <span className="section-tag">الأسئلة الشائعة</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-sub">{subtitle}</p>

        <div>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border border-[var(--border)] rounded-lg mb-2.5 overflow-hidden ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="w-full p-4 font-bold text-[15px] flex justify-between items-center bg-white hover:bg-[var(--surface)] text-right"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span
                    className={`text-[var(--brand)] text-lg transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ⌄
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 bg-[var(--surface)] ${isOpen ? "max-h-80" : "max-h-0"}`}
                >
                  <div className="px-5 pb-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
