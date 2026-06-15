import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CommonIssues } from "@/components/sections/CommonIssues";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";
import { BrandTheme } from "@/components/BrandTheme";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBrand, getAllBrandPaths } from "@/lib/data/brands";
import { GOVERNORATES } from "@/lib/data/governorates";
import { buildBrandMetadata } from "@/lib/seo";
import { getGovernorateFaq } from "@/lib/content/governorate-content";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
export async function generateStaticParams() {
  return getAllBrandPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return buildBrandMetadata(brand);
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const faqSample = getGovernorateFaq(brand, GOVERNORATES[0]);

  return (
    <BrandTheme brand={brand}>
      <JsonLd
        data={[
          serviceSchema(brand),
          breadcrumbSchema([
            { name: "الرئيسية", url: SITE_URL },
            { name: brand.nameAr, url: `${SITE_URL}/${brand.slug}` },
          ]),
        ]}
      />

      <Hero
        brand={brand}
        h1={`مركز صيانة ${brand.nameAr} في مصر`}
        h1Highlight={brand.nameAr}
        subheadline={brand.descriptionAr}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: brand.nameAr },
        ]}
      />

      <section className="py-[72px] bg-[var(--surface)]">
        <div className="section-inner">
          <span className="section-tag">المحافظات</span>
          <h2 className="section-title">صيانة {brand.nameAr} حسب المحافظة</h2>
          <p className="section-sub">اختر محافظتك للوصول إلى صفحة الخدمة المحلية</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GOVERNORATES.map((g) => (
              <Link
                key={g.slug}
                href={`/${brand.slug}/${g.slug}`}
                className="block p-5 rounded-xl border-[1.5px] border-[var(--border)] bg-white hover:border-[var(--brand)] hover:shadow-md transition-all"
              >
                <span className="font-bold text-lg block mb-1">
                  صيانة {brand.nameAr} — {g.nameAr}
                </span>
                <p className="text-sm text-[var(--text-muted)]">
                  {g.areas.map((a) => a.nameAr).join("، ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services brand={brand} governorateNameAr="جميع المحافظات" />
      <CommonIssues brandName={brand.nameAr} />
      <FAQ
        items={faqSample}
        title={`أسئلة عن صيانة ${brand.nameAr}`}
      />
      <CTASection brandName={brand.nameAr} />

      <section className="py-8 section-inner">
        <DisclaimerBanner compact />
      </section>
    </BrandTheme>
  );
}
