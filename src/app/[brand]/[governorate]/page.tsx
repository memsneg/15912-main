import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AreasSection } from "@/components/sections/AreasSection";
import { AreaSeoSections } from "@/components/sections/AreaSeoSections";
import { CommonIssues } from "@/components/sections/CommonIssues";
import { FAQ } from "@/components/sections/FAQ";
import { Reviews } from "@/components/sections/Reviews";
import { CTASection } from "@/components/sections/CTASection";
import { AdAssetsSection } from "@/components/sections/AdAssetsSection";
import { BrandTheme } from "@/components/BrandTheme";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBrand, getAllBrandPaths } from "@/lib/data/brands";
import { getGovernorate, getAllGovernoratePaths } from "@/lib/data/governorates";
import { buildGovernorateMetadata } from "@/lib/seo";
import {
  getGovernorateHero,
  getGovernorateFaq,
  getGovernorateReviews,
} from "@/lib/content/governorate-content";
import {
  localBusinessSchema,
  governorateFaqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { generateAdAssets } from "@/lib/ads";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const brands = getAllBrandPaths();
  const governorates = getAllGovernoratePaths();
  return brands.flatMap(({ brand }) =>
    governorates.map(({ governorate }) => ({ brand, governorate }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; governorate: string }>;
}) {
  const { brand: brandSlug, governorate: govSlug } = await params;
  const brand = getBrand(brandSlug);
  const governorate = getGovernorate(govSlug);
  if (!brand || !governorate) return {};
  return buildGovernorateMetadata(brand, governorate);
}

export default async function GovernoratePage({
  params,
}: {
  params: Promise<{ brand: string; governorate: string }>;
}) {
  const { brand: brandSlug, governorate: govSlug } = await params;
  const brand = getBrand(brandSlug);
  const governorate = getGovernorate(govSlug);
  if (!brand || !governorate) notFound();

  const hero = getGovernorateHero(brand, governorate);
  const faqItems = getGovernorateFaq(brand, governorate);
  const reviews = getGovernorateReviews(governorate);
  const adAssets = generateAdAssets(brand, governorate, SITE_URL);

  return (
    <BrandTheme brand={brand}>
      <JsonLd
        data={[
          localBusinessSchema(brand, governorate),
          governorateFaqSchema(faqItems),
          breadcrumbSchema([
            { name: "الرئيسية", url: SITE_URL },
            { name: brand.nameAr, url: `${SITE_URL}/${brand.slug}` },
            {
              name: governorate.nameAr,
              url: `${SITE_URL}/${brand.slug}/${governorate.slug}`,
            },
          ]),
        ]}
      />

      <Hero
        brand={brand}
        h1={hero.h1}
        h1Highlight={hero.h1Highlight}
        subheadline={hero.subheadline}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: brand.nameAr, href: `/${brand.slug}` },
          { label: governorate.nameAr },
        ]}
      />

      <AreasSection
        brandName={brand.nameAr}
        governorateNameAr={governorate.nameAr}
        areas={governorate.areas}
      />

      <Services brand={brand} governorateNameAr={governorate.nameAr} />

      <AreaSeoSections brand={brand} governorate={governorate} />

      <CommonIssues brandName={brand.nameAr} />

      <AdAssetsSection assets={adAssets} />

      <FAQ
        items={faqItems}
        title={`أسئلة عن خدمات صيانة ${brand.nameAr} في ${governorate.nameAr}`}
        subtitle="إجابات على أكثر الأسئلة التي يطرحها عملاؤنا"
      />

      <Reviews items={reviews} governorateNameAr={governorate.nameAr} />

      <CTASection brandName={brand.nameAr} governorateNameAr={governorate.nameAr} />
    </BrandTheme>
  );
}
