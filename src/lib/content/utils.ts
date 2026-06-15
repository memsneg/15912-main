import type { Area } from "../data/governorates";

export function formatAreasAr(areas: Area[]): string {
  const names = areas.map((a) => a.nameAr);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} و${names[1]}`;
  return `${names.slice(0, -1).join(" و")} و${names[names.length - 1]}`;
}
