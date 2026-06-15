import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DISCLAIMER_EN, DISCLAIMER_AR } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | 15912",
  description: "Terms and conditions for 15912 appliance maintenance services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "الشروط والأحكام" }]} />
      <h1 className="text-3xl font-bold mb-6">الشروط والأحكام</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          By using this website and our maintenance services, you agree to these terms.
          We provide independent repair services and are not affiliated with manufacturers.
        </p>
        <p>
          Warranty covers manufacturing defects on parts we install. Service availability
          depends on your area and technician schedule.
        </p>
        <h2 className="text-xl font-semibold pt-4">Disclaimer</h2>
        <p className="text-sm">{DISCLAIMER_EN}</p>
        <p className="text-sm" dir="rtl">{DISCLAIMER_AR}</p>
      </div>
    </div>
  );
}
