export const HOTLINE = "01026684959";
export const HOTLINE_TEL = "tel:01026684959";
export const WHATSAPP_NUMBER = "01026684959";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً، أريد حجز صيانة أجهزة منزلية")}`;
export const SITE_NAME = " Appliance Maintenance";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export const DISCLAIMER_AR = `نحن مزود خدمة صيانة مستقل متخصص في إصلاح جميع ماركات الأجهزة المنزلية. نستخدم قطع غيار أصلية ونقدم ضماناً على عيوب التصنيع.

لسنا تابعين لأي مصنع أو موزع أو مالك علامة تجارية أو مركز خدمة رسمي، ولا نمثل أي علاقة رسمية معهم.

أي استخدام لمصطلحات مثل "وكيل معتمد" أو "خدمة رسمية" أو "مركز خدمة معتمد" على هذا الموقع يهدف فقط لتحسين محركات البحث (SEO) وللمساعدة في العثور على خدماتنا. ولا يعني ذلك أي علاقة أو شراكة أو اعتماد رسمي من أي مالك علامة تجارية.

شكراً لثقتكم. نحن متاحون لخدمتكم طوال الأسبوع.`;

export const DISCLAIMER_EN = `We are an independent maintenance service provider specializing in the repair of all home appliance brands. We use genuine spare parts and provide warranty coverage against manufacturing defects.

We are not affiliated with, authorized by, or officially connected to any manufacturer, distributor, trademark owner, or official service center.

Any usage of terms such as "authorized agent", "official service", "authorized service center", or similar expressions on this website is intended solely for search engine optimization (SEO) and to help customers easily find our services through Google Search. Such usage does not imply any official relationship, partnership, or endorsement by any trademark owner.

Thank you for your trust. We are available to serve you throughout the week.`;

export const TRUST_BADGES = [
  { label: "قطع غيار أصلية", labelEn: "Genuine Spare Parts" },
  { label: "خدمة منزلية", labelEn: "Home Service" },
  { label: "ضمان بعد الصيانة", labelEn: "Warranty After Maintenance" },
  { label: "متاح طوال الأسبوع", labelEn: "Available All Week" },
] as const;

export const SERVICES = [
  { id: "refrigerator", nameAr: "صيانة الثلاجات", nameEn: "Refrigerator Maintenance" },
  { id: "washing-machine", nameAr: "صيانة الغسالات", nameEn: "Washing Machine Maintenance" },
  { id: "deep-freezer", nameAr: "صيانة الديب فريزر", nameEn: "Deep Freezer Maintenance" },
  { id: "air-conditioner", nameAr: "صيانة المكيفات", nameEn: "Air Conditioner Maintenance" },
] as const;

export const COMMON_ISSUES = [
  { icon: "🧊", ar: "الثلاجة لا تبرد", detail: "خلل في الكمبروسر أو فريون أو ثيرموستات" },
  { icon: "🌀", ar: "الغسالة لا تعمل", detail: "موتور، برنامج التحكم، أو قفل الباب" },
  { icon: "💧", ar: "تسريب مياه", detail: "خراطيم، طلمبات صرف، أحكام الباب" },
  { icon: "❄️", ar: "تبريد ضعيف في المكيف", detail: "شحن فريون، تنظيف فلاتر، فحص الكمبروسر" },
  { icon: "⚡", ar: "خلل في لوحة التحكم", detail: "أعطال الكارت الإلكتروني والبرمجة" },
  { icon: "🔊", ar: "أصوات غير طبيعية", detail: "تحمل موتور، تضخم تبادل حراري، فحص كامل" },
] as const;

export const DEFAULT_FAQ = [
  {
    questionAr: "هل تقدمون خدمة صيانة منزلية؟",
    questionEn: "Do you offer home maintenance service?",
    answerAr: "نعم، نوفر صيانة منزلية في جميع المناطق المغطاة مع فنيين متخصصين.",
    answerEn: "Yes, we provide home maintenance across all covered areas with expert technicians.",
  },
  {
    questionAr: "هل قطع الغيار أصلية؟",
    questionEn: "Are genuine spare parts available?",
    answerAr: "نعم، نستخدم قطع غيار أصلية مع ضمان على عيوب التصنيع.",
    answerEn: "Yes, we use genuine spare parts with warranty against manufacturing defects.",
  },
  {
    questionAr: "هل يوجد ضمان على الصيانة؟",
    questionEn: "Is there a maintenance warranty?",
    answerAr: "نعم، نقدم ضماناً على أعمال الصيانة ضد عيوب التصنيع.",
    answerEn: "Yes, we provide warranty on maintenance work against manufacturing defects.",
  },
  {
    questionAr: "هل الخدمة متاحة في جميع المناطق؟",
    questionEn: "Is service available in all areas?",
    answerAr: "نعم، نغطي جميع المناطق المذكورة في صفحة المحافظة.",
    answerEn: "Yes, we cover all areas listed on the governorate page.",
  },
] as const;
