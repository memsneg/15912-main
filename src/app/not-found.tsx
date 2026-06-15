import Link from "next/link";
import { CallButton } from "@/components/ui/CallButton";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-8">الصفحة غير موجودة</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="text-brand-primary font-semibold hover:underline">
          العودة للرئيسية
        </Link>
        <CallButton />
      </div>
    </div>
  );
}
