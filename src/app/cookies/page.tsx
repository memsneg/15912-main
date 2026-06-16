import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الكوكيز | ",
  description: "Cookie policy for  website.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "سياسة الكوكيز" }]} />
      <h1 className="text-3xl font-bold mb-6">سياسة الكوكيز</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          نستخدم ملفات تعريف الارتباط (Cookies) وGoogle Analytics وGoogle Tag Manager
          وMeta Pixel وMicrosoft Clarity لتحليل الزيارات وتحسين الإعلانات.
        </p>
        <p>
          يمكنك تعطيل الكوكيز من إعدادات المتصفح. قد يؤثر ذلك على بعض وظائف الموقع.
        </p>
      </div>
    </div>
  );
}
