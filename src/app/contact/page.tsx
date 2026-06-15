import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MaintenanceForm } from "@/components/forms/MaintenanceForm";
import { HOTLINE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتصل بنا | خط ساخن 15912",
  description: "تواصل معنا لحجز صيانة أجهزة منزلية — اتصال، واتساب، أو نموذج طلب.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "اتصل بنا" }]} />
      <h1 className="text-3xl font-bold mb-4">اتصل بنا</h1>
      <p className="text-gray-600 mb-8">
        الخط الساخن: <strong dir="ltr">{HOTLINE}</strong>
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <CallButton />
        <WhatsAppButton />
      </div>

      <div id="form" className="max-w-lg">
        <h2 className="text-xl font-bold mb-4">طلب صيانة</h2>
        <MaintenanceForm />
      </div>
    </div>
  );
}
