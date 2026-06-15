export interface Brand {
  slug: string;
  name: string;
  nameAr: string;
  descriptionAr: string;
  descriptionEn: string;
  categoriesAr: string[];
  categoriesEn: string[];
  color: string;
}

export const BRANDS: Brand[] = [
  {
    slug: "kiriazi",
    name: "Kiriazi",
    nameAr: "كريازي",
    descriptionAr: "صيانة أجهزة كريازي المنزلية بقطع غيار أصلية وخدمة منزلية سريعة.",
    descriptionEn: "Kiriazi home appliance maintenance with genuine parts and fast home service.",
    categoriesAr: ["ثلاجات", "غسالات", "ديب فريزر","مكيفات"],
    categoriesEn: ["Refrigerators", "Washing machines", "Deep freezers", "Air conditioners" ],
    color: "#5fde10",
  },
  {
    slug: "lg",
    name: "LG",
    nameAr: "إل جي",
    descriptionAr: "صيانة أجهزة LG بفنيين متخصصين ودعم عملاء على مدار الأسبوع.",
    descriptionEn: "LG appliance maintenance by expert technicians with weekly customer support.",
    categoriesAr: ["ثلاجات", "غسالات", "ديب فريزر","مكيفات" ],
    categoriesEn: ["Refrigerators", "Washing machines", "Deep freezers", "Air conditioners" ],
    color: "#a50034",
  },
  {
    slug: "ariston",
    name: "Ariston",
    nameAr: "أريستون",
    descriptionAr: "صيانة أريستون للغسالات والسخانات والأجهزة المنزلية في جميع المحافظات.",
    descriptionEn: "Ariston maintenance for washers, heaters, and home appliances across governorates.",
    categoriesAr: ["ثلاجات", "غسالات", "ديب فريزر","مكيفات"],
    categoriesEn: ["Refrigerators", "Washing machines", "Deep freezers", "Air conditioners" ],
    color: "#b71c1c",
  },
  {
    slug: "white-whale",
    name: "White Whale",
    nameAr: "وايت ويل",
    descriptionAr: "صيانة وايت ويل للثلاجات والديب فريزر مع ضمان بعد الإصلاح.",
    descriptionEn: "White Whale refrigerator and deep freezer maintenance with post-repair warranty.",
    categoriesAr: ["ثلاجات", "غسالات", "ديب فريزر","مكيفات"],
    categoriesEn: ["Refrigerators", "Washing machines", "Deep freezers", "Air conditioners" ],
    color: "#0277bd",
  },
  {
    slug: "zanussi",
    name: "Zanussi",
    nameAr: "زانوسي",
    descriptionAr: "صيانة زانوسي للأجهزة المنزلية بخدمة منزلية وقطع غيار معتمدة.",
    descriptionEn: "Zanussi home appliance maintenance with home service and quality spare parts.",
    categoriesAr: ["ثلاجات", "غسالات", "ديب فريزر","مكيفات"],
    categoriesEn: ["Refrigerators", "Washing machines", "Deep freezers", "Air conditioners" ],
    color: "#fff200",
  },
  {
    slug: "toshiba",
    name: "Toshiba",
    nameAr: "توشيبا",
    descriptionAr: "صيانة توشيبا للأجهزة المنزلية بخدمة منزلية وقطع غيار أصلية معتمدة.",
    descriptionEn: "Toshiba home appliance maintenance with home service and genuine spare parts.",
    categoriesAr: ["ثلاجات", "غسالات", "شاشات", "ديب فريزر", "مكيفات"],
    categoriesEn: ["Refrigerators", "Washing machines", "TVs", "Deep freezers", "Air conditioners"],
    color: "#E60012",
  },
  {
    slug: "beko",
    name: "Beko",
    nameAr: "بيكو",
    descriptionAr: "صيانة بيكو للأجهزة المنزلية بخدمة منزلية سريعة وقطع غيار عالية الجودة.",
    descriptionEn: "Beko home appliance maintenance with fast home service and high-quality spare parts.",
    categoriesAr: ["ثلاجات", "غسالات", "بوتاجازات", "ديب فريزر", "مكيفات"],
    categoriesEn: ["Refrigerators", "Washing machines", "Cookers", "Deep freezers", "Air conditioners"],
    color: "#0099DA",
  },
];

export function getBrand(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function getAllBrandPaths(): { brand: string }[] {
  return BRANDS.map((b) => ({ brand: b.slug }));
}
