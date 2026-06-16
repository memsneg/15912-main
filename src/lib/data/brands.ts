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
 
];

export function getBrand(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function getAllBrandPaths(): { brand: string }[] {
  return BRANDS.map((b) => ({ brand: b.slug }));
}
