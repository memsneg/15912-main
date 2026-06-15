import Link from "next/link";
import { BRANDS } from "@/lib/data/brands";
import { HOTLINE, HOTLINE_TEL, DISCLAIMER_AR } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0d0d1a] text-white/65 py-12 px-6 text-[13px] leading-relaxed">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-10 mb-8">
        <div>
          <h4 className="text-white font-bold text-[15px] mb-3.5">15912 — صيانة أجهزة</h4>
          <p className="mb-4">خدمات صيانة متخصصة لجميع ماركات الأجهزة المنزلية في مصر.</p>
          <a href={HOTLINE_TEL} className="text-[var(--brand-light)] font-bold text-lg">
            📞 {HOTLINE}
          </a>
        </div>
        <div>
          <h4 className="text-white font-bold text-[15px] mb-3.5">الماركات</h4>
          {BRANDS.map((b) => (
            <Link key={b.slug} href={`/${b.slug}`} className="block text-white/55 hover:text-white mb-1.5">
              صيانة {b.nameAr}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="text-white font-bold text-[15px] mb-3.5">روابط مهمة</h4>
          <Link href="/" className="block text-white/55 hover:text-white mb-1.5">الرئيسية</Link>
          <Link href="/contact" className="block text-white/55 hover:text-white mb-1.5">تواصل معنا</Link>
          <Link href="/privacy-policy" className="block text-white/55 hover:text-white mb-1.5">سياسة الخصوصية</Link>
          <Link href="/terms" className="block text-white/55 hover:text-white mb-1.5">الشروط والأحكام</Link>
        </div>
      </div>
      <hr className="border-white/10 max-w-[1000px] mx-auto mb-6" />
      <p className="max-w-[1000px] mx-auto text-[12px] text-white/35 leading-relaxed">
        <strong className="text-white/55">إخلاء المسؤولية:</strong> {DISCLAIMER_AR}
      </p>
      <p className="max-w-[1000px] mx-auto mt-4 text-white/30 text-xs">
        © {new Date().getFullYear()} 15912 — جميع الحقوق محفوظة
      </p>
    </footer>
  );
}
