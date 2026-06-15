import type { Brand } from "@/lib/data/brands";

export function BrandTheme({
  brand,
  children,
}: {
  brand: Brand;
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          "--brand": brand.color,
          "--brand-dark": brand.color,
          "--brand-light": brand.color,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
