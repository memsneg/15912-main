import type { Brand } from "./data/brands";
import type { Area, Governorate } from "./data/governorates";

export interface AdAssets {
  headlines: string[];
  descriptions: string[];
  keywords: string[];
  targetAreas: string[];
  landingPageUrl: string;
}

function formatAreasAr(areas: Area[]): string {
  const names = areas.map((a) => a.nameAr);
  if (names.length <= 2) return names.join(" و");
  return `${names.slice(0, -1).join(" و")} و${names[names.length - 1]}`;
}

export function generateAdAssets(
  brand: Brand,
  governorate: Governorate,
  baseUrl: string
): AdAssets {
  const areas = governorate.areas;
  const a0 = areas[0]?.nameAr || governorate.nameAr;
  const a1 = areas[1]?.nameAr || governorate.nameAr;
  const areasAr = formatAreasAr(areas.slice(0, 3));

  const headlines = [
    `صيانة ${brand.nameAr} ${governorate.nameAr}`,
    `مركز خدمة ${brand.nameAr} ${a0}`,
    `دعم ${brand.nameAr} ${a1}`,
    `صيانة غسالات ${brand.nameAr}`,
    `خط ساخن ${brand.nameAr} 15912`,
    `صيانة ${brand.nameAr} منزلية`,
    `فني ${brand.nameAr} ${governorate.nameAr}`,
    `صيانة ثلاجات ${brand.nameAr}`,
    `خدمة ${brand.nameAr} معتمدة`,
    `إصلاح ${brand.nameAr} سريع`,
    `قطع غيار ${brand.nameAr} أصلية`,
    `ضمان صيانة ${brand.nameAr}`,
    `أفضل مركز صيانة ${brand.nameAr}`,
    `صيانة ${brand.nameAr} في نفس اليوم`,
    `إصلاح أجهزة ${brand.nameAr}`,
  ];

  const descriptions = [
    `خدمات صيانة ${brand.nameAr} في ${governorate.nameAr} مع خدمة منزلية وضمان وقطع غيار أصلية.`,
    `احجز صيانة ${brand.nameAr} في ${areasAr} مع دعم سريع وفنيين متخصصين.`,
    `صيانة احترافية لجميع أجهزة ${brand.nameAr} مع دعم عملاء متاح طوال الأسبوع.`,
    `خدمة صيانة منزلية سريعة في جميع مناطق ${governorate.nameAr} مع ضمان بعد الإصلاح.`,
  ];

  const keywords = [
    `صيانة ${brand.nameAr} ${governorate.nameAr}`,
    `مركز صيانة ${brand.nameAr} ${governorate.nameAr}`,
    `خط ساخن صيانة ${brand.nameAr}`,
    ...areas.map((a) => `صيانة ${brand.nameAr} ${a.nameAr}`),
    ...areas.map((a) => `فني ${brand.nameAr} ${a.nameAr}`),
    `صيانة ثلاجة ${brand.nameAr} ${a0}`,
    `صيانة غسالة ${brand.nameAr} ${a1}`,
    `صيانة مكيف ${brand.nameAr} ${governorate.nameAr}`,
    `أفضل مركز صيانة ${brand.nameAr} ${a0}`,
  ];

  return {
    headlines,
    descriptions,
    keywords: [...new Set(keywords)],
    targetAreas: areas.map((a) => a.nameAr),
    landingPageUrl: `${baseUrl}/${brand.slug}/${governorate.slug}`,
  };
}

const AREA_SEO_VARIANTS: ((brand: string, area: string, gov?: string) => string)[] = [
  (brand: string, area: string, gov = "") =>
    `يوفر فريقنا المتخصص خدمات صيانة ${brand} في ${area} مع ضمان الوصول السريع لجميع أحياء المنطقة. سواء كانت لديك مشكلة في ثلاجة أو غسالة أو مكيف ${brand}، يصلك فنيونا بقطع الغيار الأصلية خلال نفس اليوم. نغطي ${area} وجميع الأحياء والقرى التابعة لمحافظة ${gov}.`,
  (brand: string, area: string) =>
    `خدمات صيانة ${brand} في ${area} متاحة طوال أيام الأسبوع. فريقنا يعمل على إصلاح جميع أجهزة ${brand} بكفاءة عالية وأسعار مناسبة. نوفر ضماناً على الصيانة واستبدال القطع بضمان الجودة. تواصل معنا عبر الخط الساخن 15912 للحجز الفوري.`,
  (brand: string, area: string) =>
    `نصل إليك في ${area} سريعاً لصيانة جميع أجهزة ${brand} المنزلية. خبرتنا في صيانة الثلاجات والمكيفات والغسالات تضمن أعلى مستوى من الجودة بأسعار تنافسية. الخدمة المنزلية متاحة في جميع أحياء وقرى ${area}.`,
  (brand: string, area: string) =>
    `فريق صيانة ${brand} في ${area} جاهز لاستقبال طلباتكم على مدار اليوم. نوفر قطع غيار أصلية لجميع أجهزة ${brand} مع ضمان على أعمال الصيانة. خدمتنا تشمل جميع مناطق ${area}.`,
  (brand: string, area: string) =>
    `تغطي خدمات صيانة ${brand} في ${area} جميع احتياجاتك من إصلاح الأجهزة المنزلية. فنيونا المدربون يحملون قطع الغيار الأصلية لإتمام الصيانة في أقل وقت. اتصل الآن على 15912 للحجز المباشر.`,
  (brand: string, area: string) =>
    `خدمة صيانة ${brand} في ${area} تشمل الأعطال الطارئة والصيانة الدورية لجميع الأجهزة. نضمن سرعة الاستجابة ودقة التشخيص والإصلاح الفعّال بقطع غيار موثوقة وأسعار شفافة.`,
];

export function generateAreaSeoContent(
  brand: Brand,
  governorate: Governorate,
  area: Area,
  index: number
): { title: string; paragraph: string } {
  const variant = AREA_SEO_VARIANTS[index % AREA_SEO_VARIANTS.length];
  const paragraph =
    index % 3 === 0
      ? variant(brand.nameAr, area.nameAr, governorate.nameAr)
      : variant(brand.nameAr, area.nameAr);

  return {
    title: `صيانة ${brand.nameAr} في ${area.nameAr}`,
    paragraph,
  };
}
