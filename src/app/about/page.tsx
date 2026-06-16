import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DisclaimerBanner } from "@/components/layout/DisclaimerBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | صيانة أجهزة منزلية",
  description:
    "تعرف على فريق  لصيانة الأجهزة المنزلية — خدمة مستقلة متعددة الماركات في مصر.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "من نحن" }]} />
      <h1 className="text-3xl font-bold mb-6">من نحن</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        نحن مزود خدمة صيانة مستقل متخصص في إصلاح الأجهزة المنزلية لجميع الماركات
        الشهيرة في مصر، بما في ذلك LG وكريازي وأريستون ووايت ويل وزانوسي.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        نقدم صيانة منزلية سريعة، قطع غيار أصلية، وضماناً بعد الإصلاح. فريقنا من
        الفنيين المدربين جاهز لخدمتكم طوال الأسبوع عبر الخط الساخن .
      </p>
      <DisclaimerBanner />
    </div>
  );
}
