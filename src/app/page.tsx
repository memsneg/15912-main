import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { Reviews } from "@/components/sections/Reviews";
import { CTASection } from "@/components/sections/CTASection";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";
import { BRANDS } from "@/lib/data/brands";
import { GOVERNORATES } from "@/lib/data/governorates";
import { DEFAULT_FAQ } from "@/lib/constants";

const HOME_REVIEWS = [
  { text: "خدمة ممتازة وصيانة سريعة. الفني محترف والأسعار واضحة.", name: "أحمد م.", location: "المنصورة" },
  { text: "اتصلت على الخط الساخن ووصل الفني في نفس اليوم. أنصح بالتعامل معهم.", name: "سارة ك.", location: "مدينة نصر" },
  { text: "صيانة بقطع غيار أصلية مع ضمان. شكراً للفريق.", name: "محمد ع.", location: "دمنهور" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        h1="صيانة أجهزة منزلية — خط ساخن "
        subheadline="صيانة الثلاجات و الغسالات في القاهرة والدقهلية والبحيرة والغربية وكفر الشيخ. خدمة منزلية، قطع غيار أصلية، وضمان بعد الصيانة."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">الماركات المدعومة</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BRANDS.map((b) => (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                className="rounded-xl p-6 border-2 hover:border-brand-primary transition-colors text-center"
                style={{ borderColor: `${b.color}40` }}
              >
                <span className="text-xl font-bold" style={{ color: b.color }}>
                  {b.nameAr}
                </span>
                <p className="text-sm text-gray-600 mt-2">{b.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">المحافظات المغطاة</h2>
          <GovernoratesGrid />
        </div>
      </section>

      <Reviews items={HOME_REVIEWS} governorateNameAr="مصر" />
      <FAQ
        items={DEFAULT_FAQ.map((f) => ({
          question: f.questionAr,
          answer: f.answerAr,
        }))}
      />
      <CTASection brandName="أجهزتك المنزلية" />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <DisclaimerBanner />
        </div>
      </section>
    </>
  );
}

function GovernoratesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {GOVERNORATES.map((g) => (
        <div key={g.slug} className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">{g.nameAr}</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {BRANDS.slice(0, 3).map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/${b.slug}/${g.slug}`}
                  className="text-brand-primary hover:underline"
                >
                  صيانة {b.nameAr} — {g.nameAr}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`/lg/${g.slug}`} className="text-gray-500 text-xs">
                + المزيد من الماركات
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
