export interface Area {
  slug: string;
  nameAr: string;
  nameEn: string;
}

export interface Governorate {
  slug: string;
  nameAr: string;
  nameEn: string;
  areas: Area[];
}

export const GOVERNORATES: Governorate[] = [
  {
    slug: "cairo",
    nameAr: "القاهرة",
    nameEn: "Cairo",
    areas: [
      { slug: "el-shorouk", nameAr: "الشروق", nameEn: "El Shorouk" },
      { slug: "sheikh-zayed", nameAr: "الشيخ زايد", nameEn: "Sheikh Zayed" },
      { slug: "new-cairo", nameAr: "التجمع / القاهرة الجديدة", nameEn: "New Cairo / Tagamoa" },
      { slug: "hadayek-el-kobba", nameAr: "حدائق القبة", nameEn: "Hadayek El Kobba" },
      { slug: "nasr-city", nameAr: "مدينة نصر", nameEn: "Nasr City" },
    ],
  },
  {
    slug: "gharbia",
    nameAr: "الغربية",
    nameEn: "Gharbia",
    areas: [
      { slug: "el-santa", nameAr: "السنطة", nameEn: "El Santa" },
      { slug: "zefta", nameAr: "زفتى", nameEn: "Zefta" },
      { slug: "kafr-el-zayat", nameAr: "كفر الزيات", nameEn: "Kafr El Zayat" },
    ],
  },
  {
    slug: "dakahlia",
    nameAr: "الدقهلية",
    nameEn: "Dakahlia",
    areas: [
      { slug: "aga", nameAr: "أجا", nameEn: "Aga" },
      { slug: "nabaroh", nameAr: "نبروه", nameEn: "Nabaroh" },
      { slug: "belqas", nameAr: "بلقاس", nameEn: "Belqas" },
      { slug: "sherbin", nameAr: "شربين", nameEn: "Sherbin" },
      { slug: "talkha", nameAr: "طلخا", nameEn: "Talkha" },
      { slug: "mansoura", nameAr: "المنصورة", nameEn: "Mansoura" },
    ],
  },
  {
    slug: "kafr-el-sheikh",
    nameAr: "كفر الشيخ",
    nameEn: "Kafr El Sheikh",
    areas: [
      { slug: "desouk", nameAr: "دسوق", nameEn: "Desouk" },
      { slug: "bella", nameAr: "بيلا", nameEn: "Bella" },
      { slug: "fowa", nameAr: "فوه", nameEn: "Fowa" },
      { slug: "kafr-el-sheikh-city", nameAr: "كفر الشيخ", nameEn: "Kafr El Sheikh" },
      { slug: "baltim", nameAr: "بلطيم", nameEn: "Baltim" },
      { slug: "borg-el-ghaleon", nameAr: "برج الغليون", nameEn: "Borg El Ghaleon" },
    ],
  },
  {
    slug: "beheira",
    nameAr: "البحيرة",
    nameEn: "Beheira",
    areas: [
      { slug: "damanhour", nameAr: "دمنهور", nameEn: "Damanhour" },
      { slug: "housh-issa", nameAr: "حوش عيسى", nameEn: "Housh Issa" },
      { slug: "el-delengat", nameAr: "الدلنجات", nameEn: "El Delengat" },
      { slug: "el-rahmaneya", nameAr: "الرحمانية", nameEn: "El Rahmaneya" },
      { slug: "mahmoudeya", nameAr: "المحمودية", nameEn: "Mahmoudeya" },
      { slug: "edko", nameAr: "إدكو", nameEn: "Edko" },
      { slug: "rosetta", nameAr: "رشيد", nameEn: "Rosetta" },
      { slug: "kom-hamada", nameAr: "كوم حمادة", nameEn: "Kom Hamada" },
      { slug: "itay-el-baroud", nameAr: "إيتاي البارود", nameEn: "Itay El Baroud" },
      { slug: "kafr-el-dawar", nameAr: "كفر الدوار", nameEn: "Kafr El Dawar" },
      { slug: "abu-el-matamir", nameAr: "أبو المطامير", nameEn: "Abu El Matamir" },
    ],
  },
  {
  slug: "alex",
  nameAr: "الإسكندرية",
  nameEn: "Alexandria",
  areas: [
    { slug: "sidi-bishr", nameAr: "سيدي بشر", nameEn: "Sidi Bishr" },
    { slug: "miami", nameAr: "ميامي", nameEn: "Miami" },
    { slug: "stanley", nameAr: "ستانلي", nameEn: "Stanley" },
    { slug: "smouha", nameAr: "سموحة", nameEn: "Smouha" },
    { slug: "sporting", nameAr: "سبورتنج", nameEn: "Sporting" },
    { slug: "gleem", nameAr: "جليم", nameEn: "Gleem" },
    { slug: "san-stefano", nameAr: "سان ستيفانو", nameEn: "San Stefano" },
    { slug: "laurent", nameAr: "لوران", nameEn: "Laurent" },
    { slug: "el-soyof", nameAr: "السيوف", nameEn: "El Soyof" },
    { slug: "asafra", nameAr: "العصافرة", nameEn: "Asafra" },
    { slug: "bakos", nameAr: "باكوس", nameEn: "Bakos" },
    { slug: "saba-pasha", nameAr: "سابا باشا", nameEn: "Saba Pasha" },
    { slug: "moharam-bek", nameAr: "محرم بك", nameEn: "Moharam Bek" },
    { slug: "ibrahimeya", nameAr: "الإبراهيمية", nameEn: "Ibrahimeya" },
    { slug: "shatby", nameAr: "الشاطبي", nameEn: "Shatby" },
    { slug: "agamy", nameAr: "العجمي", nameEn: "Agamy" },
    { slug: "hanoville", nameAr: "الهانوفيل", nameEn: "Hanoville" },
    { slug: "borg-el-arab", nameAr: "برج العرب", nameEn: "Borg El Arab" },
    { slug: "victoria", nameAr: "فيكتوريا", nameEn: "Victoria" },
    { slug: "camp-shezar", nameAr: "كامب شيزار", nameEn: "Camp Shezar" },
    { slug: "kafr-abdo", nameAr: "كفر عبده", nameEn: "Kafr Abdo" },
    { slug: "cleopatra", nameAr: "كليوباترا", nameEn: "Cleopatra" },
    { slug: "bolkly", nameAr: "بولكلي", nameEn: "Bolkly" },
    { slug: "fleming", nameAr: "فلمنج", nameEn: "Fleming" },
    { slug: "rushdy", nameAr: "رشدي", nameEn: "Rushdy" },
  ],
 },
 {
  slug: "north-coast",
  nameAr: "الساحل الشمالي",
  nameEn: "North Coast",
  areas: [
    { slug: "marina", nameAr: "مارينا", nameEn: "Marina" },
    { slug: "marassi", nameAr: "مراسي", nameEn: "Marassi" },
    { slug: "sidi-abdelrahman", nameAr: "سيدي عبد الرحمن", nameEn: "Sidi Abdelrahman" },
    { slug: "hacienda-bay", nameAr: "هاسيندا باي", nameEn: "Hacienda Bay" },
    { slug: "amwaj", nameAr: "أمواج", nameEn: "Amwaj" },
    { slug: "la-vista-bay", nameAr: "لا فيستا باي", nameEn: "La Vista Bay" },
    { slug: "diplo", nameAr: "الدبلوماسيين", nameEn: "Diplomats Village" },
    { slug: "sidi-heneish", nameAr: "سيدي حنيش", nameEn: "Sidi Heneish" },
    { slug: "alzohour", nameAr: "الزهور", nameEn: "Al Zohour" },
    { slug: "porto-marina", nameAr: "بورتو مارينا", nameEn: "Porto Marina" },
    { slug: "fouka-bay", nameAr: "فوكا باي", nameEn: "Fouka Bay" },
    { slug: "ras-el-hekma", nameAr: "رأس الحكمة", nameEn: "Ras El Hekma" },
    { slug: "gaia", nameAr: "جايا", nameEn: "Gaia" },
    { slug: "seashell", nameAr: "سي شيل", nameEn: "Seashell" },
    { slug: "zahra", nameAr: "زهرة", nameEn: "Zahra" },
    { slug: "silver-sands", nameAr: "سيلفر ساندس", nameEn: "Silver Sands" },
    { slug: "almaza-bay", nameAr: "المازا باي", nameEn: "Almaza Bay" },
    { slug: "marsa-matrouh", nameAr: "مرسى مطروح", nameEn: "Marsa Matrouh" },
    { slug: "el-alamein", nameAr: "العلمين", nameEn: "El Alamein" },
    { slug: "new-alamein", nameAr: "العلمين الجديدة", nameEn: "New Alamein" },
    { slug: "golden-beach", nameAr: "جولدن بيتش", nameEn: "Golden Beach" },
    { slug: "el-mohandeseen", nameAr: "المهندسين", nameEn: "El Mohandeseen" },
    { slug: "fakhr-el-behar", nameAr: "فخر البحار", nameEn: "Fakhr El Behar" },
    { slug: "sedra", nameAr: "سيدرا", nameEn: "Sedra" },
    { slug: "amoun", nameAr: "أمون", nameEn: "Amoun" },
    { slug: "el-shorouk", nameAr: "الشروق", nameEn: "El Shorouk" },
    { slug: "krir-gardens", nameAr: "كرير جاردنز", nameEn: "Krir Gardens" },
    { slug: "sidi-krir", nameAr: "سيدي كرير", nameEn: "Sidi Krir" },
    { slug: "lotus", nameAr: "اللوتس", nameEn: "Lotus" },
    { slug: "marakia", nameAr: "مراقيا", nameEn: "Marakia" },
    { slug: "zomoroda", nameAr: "زمرده", nameEn: "Zomoroda" },
    { slug: "tahiti", nameAr: "تهيتي", nameEn: "Tahiti" },
    { slug: "dimora", nameAr: "ديموره", nameEn: "Dimora" },
    { slug: "mountain-view", nameAr: "ماونتن فيو", nameEn: "Mountain View" },
    { slug: "soly", nameAr: "سولد", nameEn: "Soly" },
    { slug: "almaza-bay", nameAr: "المازة باي", nameEn: "Almaza Bay" },
    { slug: "jefaira", nameAr: "جفيرا", nameEn: "Jefaira" }

    
  ]
 }
];

export function getGovernorate(slug: string): Governorate | undefined {
  return GOVERNORATES.find((g) => g.slug === slug);
}

export function getAllGovernoratePaths(): { governorate: string }[] {
  return GOVERNORATES.map((g) => ({ governorate: g.slug }));
}
