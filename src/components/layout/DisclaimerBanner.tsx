import Link from "next/link";
import { DISCLAIMER_AR } from "@/lib/constants";

export function DisclaimerBanner({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-gray-500 border-t pt-4 mt-8">
        * خدمة صيانة مستقلة — غير تابعة لأي مصنع.{" "}
        <Link href="/terms" className="underline">
          اقرأ المزيد
        </Link>
      </p>
    );
  }
  return (
    <aside className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
      <p>{DISCLAIMER_AR}</p>
    </aside>
  );
}
