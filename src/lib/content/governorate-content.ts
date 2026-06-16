import type { Brand } from "../data/brands";
import type { Governorate } from "../data/governorates";
import { formatAreasAr } from "./utils";

export function getGovernorateHero(
  brand: Brand,
  governorate: Governorate
) {
  const areas = formatAreasAr(governorate.areas);
  return {
    h1: `مركز صيانة ${brand.nameAr} في ${governorate.nameAr}`,
    h1Highlight: brand.nameAr,
    subheadline: `خدمة منزلية متخصصة في ${areas} — قطع غيار أصلية وضمان بعد الصيانة`,
  };
}

export function getGovernorateFaq(brand: Brand, governorate: Governorate) {
  const areas = formatAreasAr(governorate.areas);
  return [
    {
      question: `هل تقدمون خدمة صيانة ${brand.nameAr} في المنزل ب${governorate.nameAr}؟`,
      answer: `نعم، نوفر خدمة صيانة ${brand.nameAr} المنزلية في جميع مناطق ${governorate.nameAr} بما فيها ${areas}. يصلك فنيونا في أسرع وقت ممكن.`,
    },
    {
      question: `هل تستخدمون قطع غيار ${brand.nameAr} أصلية؟`,
      answer: `نعم، نلتزم باستخدام قطع الغيار الأصلية لجميع أجهزة ${brand.nameAr} لضمان أعلى مستوى من الأداء ومتانة الجهاز بعد الصيانة.`,
    },
    {
      question: "هل يوجد ضمان على الصيانة؟",
      answer:
        "نعم، نقدم ضماناً شاملاً على جميع عمليات الصيانة وقطع الغيار المستبدلة لفترة محددة تشمل حماية كاملة ضد أي خلل ناتج عن الصيانة.",
    },
    {
      question: `هل الخدمة متاحة في جميع مناطق ${governorate.nameAr}؟`,
      answer: `نعم، نغطي جميع مناطق محافظة ${governorate.nameAr} بما فيها ${areas} وجميع القرى التابعة لها.`,
    },
    {
      question: "ما هي مواعيد العمل؟",
      answer:
        "نعمل طوال أيام الأسبوع من الساعة 8 صباحاً حتى 10 مساءً. يمكنكم التواصل على الخط الساخن  أو عبر واتساب في أي وقت.",
    },
  ];
}

export function getGovernorateReviews(governorate: Governorate) {
  const templates = [
    {
      text: "الفني وصل خلال ساعة وصلح الجهاز بكفاءة عالية. قطع الغيار أصلية والسعر معقول. ممتاز جداً.",
      name: "أحمد السيد",
    },
    {
      text: "الصيانة كانت سريعة جداً. الفني محترف وشرح المشكلة بالتفصيل. موصى بهم لكل الناس.",
      name: "نهال إبراهيم",
    },
    {
      text: "خدمة ممتازة جداً. الجهاز شغّال تمام بعد الصيانة. هينفع الكل يتعامل معاهم.",
      name: "محمد عبد الله",
    },
  ];

  return governorate.areas.slice(0, 3).map((area, i) => ({
    ...templates[i % templates.length],
    location: area.nameAr,
  }));
}

export function getServiceBlocks(brand: Brand) {
  return [
    {
      icon: "🧊",
      name: `صيانة ثلاجات ${brand.nameAr}`,
      desc: "تبريد، كمبروسر، ثيرموستات، صيانة شاملة",
    },
    {
      icon: "🌀",
      name: `صيانة غسالات ${brand.nameAr}`,
      desc: "موتور، طلمبة، برمجة، لوحة تحكم، أحزمة",
    },
    {
      icon: "🧊",
      name: `صيانة فريزر ${brand.nameAr}`,
      desc: "كمبروسر، شعيرات تبريد، ثيرموستات، باب",
    },
    {
      icon: "❄️",
      name: `صيانة مكيفات ${brand.nameAr}`,
      desc: "شحن فريون، تنظيف، كارت، موتور، ريموت",
    },
  ];
}
