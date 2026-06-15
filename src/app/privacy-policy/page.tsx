import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DISCLAIMER_EN, DISCLAIMER_AR } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | 15912",
  description: "Privacy policy for 15912 appliance maintenance services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="سياسة الخصوصية" titleEn="Privacy Policy">
      <p>
        We collect information you provide through contact forms, phone calls, and
        analytics tools to improve our services and respond to maintenance requests.
      </p>
      <p>
        Data may include name, phone number, location, device type, UTM parameters,
        IP address, and browsing behavior. We do not sell personal data to third parties.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Disclaimer</h2>
      <p className="text-sm text-gray-600">{DISCLAIMER_EN}</p>
      <p className="text-sm text-gray-600 mt-4" dir="rtl">
        {DISCLAIMER_AR}
      </p>
    </LegalPage>
  );
}

function LegalPage({
  title,
  titleEn,
  children,
}: {
  title: string;
  titleEn: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: title }]} />
      <h1>{title}</h1>
      <p className="text-gray-500">{titleEn}</p>
      <div className="mt-8 space-y-4 text-gray-700">{children}</div>
    </div>
  );
}
