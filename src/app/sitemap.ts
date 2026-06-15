import type { MetadataRoute } from "next";
import { BRANDS } from "@/lib/data/brands";
import { GOVERNORATES } from "@/lib/data/governorates";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.5,
  }));

  const brandPages = BRANDS.map((b) => ({
    url: `${SITE_URL}/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const governoratePages = BRANDS.flatMap((b) =>
    GOVERNORATES.map((g) => ({
      url: `${SITE_URL}/${b.slug}/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  return [...staticPages, ...brandPages, ...governoratePages];
}
