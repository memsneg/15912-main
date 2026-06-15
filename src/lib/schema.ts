import { HOTLINE, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "./constants";
import type { Brand } from "./data/brands";
import type { Governorate } from "./data/governorates";
import { SERVICES, DEFAULT_FAQ } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: HOTLINE,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: HOTLINE,
      contactType: "customer service",
      areaServed: "EG",
      availableLanguage: ["Arabic", "English"],
    },
  };
}

export function localBusinessSchema(
  brand: Brand,
  governorate: Governorate
) {
  const areaNames = governorate.areas.map((a) => a.nameAr);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `مركز صيانة ${brand.nameAr} ${governorate.nameAr}`,
    description: `خدمات صيانة ${brand.nameAr} في ${governorate.nameAr} — ${areaNames.join(" و")}`,
    url: `${SITE_URL}/${brand.slug}/${governorate.slug}`,
    telephone: HOTLINE,
    areaServed: areaNames,
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-22:00",
  };
}

export function governorateFaqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function serviceSchema(brand: Brand) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Appliance Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: HOTLINE,
    },
    areaServed: "Egypt",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${brand.name} Maintenance Services`,
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${brand.name} ${s.nameEn}`,
        },
      })),
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DEFAULT_FAQ.map((f) => ({
      "@type": "Question",
      name: f.questionEn,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answerEn,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
