import Link from "next/link";
import { BRANDS } from "@/lib/data/brands";
import { GOVERNORATES } from "@/lib/data/governorates";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Ad Assets CMS",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Media Buyer Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Copy landing URLs, headlines, and keywords from governorate pages. Each page
        includes an Ad Assets section at the bottom.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Brand</th>
              <th className="p-3 border">Governorate</th>
              <th className="p-3 border">Areas</th>
              <th className="p-3 border">Landing URL</th>
            </tr>
          </thead>
          <tbody>
            {BRANDS.flatMap((brand) =>
              GOVERNORATES.map((gov) => (
                <tr key={`${brand.slug}-${gov.slug}`} className="hover:bg-gray-50">
                  <td className="p-3 border font-medium">{brand.name}</td>
                  <td className="p-3 border">{gov.nameEn}</td>
                  <td className="p-3 border text-gray-600">
                    {gov.areas.map((a) => a.nameEn).join(", ")}
                  </td>
                  <td className="p-3 border">
                    <Link
                      href={`/${brand.slug}/${gov.slug}#ad-assets`}
                      className="text-brand-primary hover:underline break-all"
                    >
                      {SITE_URL}/{brand.slug}/{gov.slug}
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Analytics data: check <code>/api/admin/stats</code> (protect in production).
        Lead exports stored in <code>data/leads.json</code>.
      </p>
    </div>
  );
}
