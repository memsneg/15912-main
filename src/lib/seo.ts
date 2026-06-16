import type { Metadata } from "next";
import type { Brand } from "./data/brands";
import type { Governorate } from "./data/governorates";
import { SITE_NAME, SITE_URL } from "./constants";

function formatAreaListAr(areas: { nameAr: string }[], max = 6): string {
  const names = areas.slice(0, max).map((a) => a.nameAr);
  if (names.length <= 1) return names[0] || "";
  const last = names.pop();
  return `${names.join(" و")} و${last}`;
}

export function buildBrandMetadata(brand: Brand): Metadata {
  const title = `صيانة ${brand.nameAr} | مركز خدمة ${brand.nameAr} — خط ساخن `;
  const description = `خدمات صيانة ${brand.nameAr} في القاهرة والدقهلية والبحيرة والغربية وكفر الشيخ — خدمة منزلية وقطع غيار أصلية وضمان بعد الصيانة. اتصل علي الخط الساخن.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${brand.slug}` },
    openGraph: {
      title: `صيانة ${brand.nameAr} | مركز خدمة ${brand.nameAr}`,
      description,
      url: `${SITE_URL}/${brand.slug}`,
      siteName: SITE_NAME,
      locale: "ar_EG",
      type: "website",
    },
  };
}

export function buildGovernorateMetadata(
  brand: Brand,
  governorate: Governorate
): Metadata {
  const areasFormatted = formatAreaListAr(governorate.areas);
  const title = `صيانة ${brand.nameAr} ${governorate.nameAr} | مركز خدمة ${brand.nameAr} في ${areasFormatted}`;
  const description = `خدمات صيانة ${brand.nameAr} في ${governorate.nameAr} تشمل ${areasFormatted} — خدمة منزلية وقطع غيار أصلية وضمان بعد الصيانة. الخط الساخن .`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${brand.slug}/${governorate.slug}`,
    },
    openGraph: {
      title: `صيانة ${brand.nameAr} ${governorate.nameAr} | مركز خدمة ${brand.nameAr}`,
      description: `خدمات صيانة ${brand.nameAr} في ${governorate.nameAr} مع خدمة منزلية وقطع غيار أصلية`,
      url: `${SITE_URL}/${brand.slug}/${governorate.slug}`,
      siteName: SITE_NAME,
      locale: "ar_EG",
      type: "website",
    },
    keywords: [
      `صيانة ${brand.nameAr}`,
      `مركز صيانة ${brand.nameAr}`,
      `خط ساخن ${brand.nameAr}`,
      `صيانة ${brand.nameAr} ${governorate.nameAr}`,
      ...governorate.areas.map((a) => `صيانة ${brand.nameAr} ${a.nameAr}`),
      ...governorate.areas.map((a) => `فني ${brand.nameAr} ${a.nameAr}`),
    ],
  };
}

export function buildHomeMetadata(): Metadata {
  return {
    title: "صيانة أجهزة منزلية | خط ساخن  — LG وكريازي وزانوسي",
    description:
      "صيانة مستقلة لجميع ماركات الأجهزة المنزلية في مصر — LG وكريازي وأريستون ووايت ويل وزانوسي. خدمة منزلية، قطع غيار أصلية، ضمان. اتصل .",
    alternates: { canonical: SITE_URL },
    openGraph: {
      title: "صيانة أجهزة منزلية | خط ساخن ",
      description: "صيانة منزلية متعددة الماركات في المحافظات المصرية",
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: "ar_EG",
      type: "website",
    },
  };
}
