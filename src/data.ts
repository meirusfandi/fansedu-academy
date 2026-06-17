import { EcosystemCard, WhyFeature, PathwayAgeGroup, StatisticItem, FAQItem } from "./types";

export const BRAND_NAME = "Fansedu Academy";
export const TAGLINE = "Belajar Terarah, Prestasi Nyata.";
export const ALT_TAGLINE = "Membantu Anak Menjadi Creator, Thinker, dan Problem Solver Masa Depan.";

export const ABOUT_TEXT = "Fansedu Academy adalah unit pendidikan di bawah Fans Digital Group yang berfokus pada pengembangan kemampuan matematika, teknologi, coding, dan keterampilan abad ke-21 untuk anak dan remaja Indonesia.";

export const ABOUT_HIGHLIGHTS = [
  "Project Based Learning",
  "Small Interactive Class",
  "Experienced Mentors",
  "Technology Driven Learning",
  "Future Skills Oriented"
];

export const ECOSYSTEM_PROGRAMS: EcosystemCard[] = [
  {
    id: "olympiad",
    name: "Fansedu Olympiad Academy",
    description: "Program persiapan Olimpiade Matematika dan Informatika untuk siswa SD, SMP, dan SMA.",
    iconName: "Award",
    features: [
      "Kelas Olimpiade khusus",
      "Tryout Nasional berkala",
      "Pembahasan Soal mendalam",
      "Pembinaan Kompetisi tingkat lanjut"
    ],
    ctaLabel: "Kunjungi Website",
    url: "https://olympiad.fansedu.web.id"
  },
  {
    id: "tech",
    name: "Fansedu Tech Academy",
    description: "Program coding, AI, game development, dan teknologi untuk anak dan remaja.",
    iconName: "Code2",
    features: [
      "Scratch Visual Programming",
      "Python untuk Anak & Remaja",
      "Roblox Studio Game Creation",
      "Artificial Intelligence & ML Basics"
    ],
    ctaLabel: "Kunjungi Website",
    url: "https://tech.fansedu.web.id"
  },
  {
    id: "camp",
    name: "Fansedu Holiday Coding Camp",
    description: "Program liburan intensif untuk belajar coding, game creation, dan kreativitas digital.",
    iconName: "Sparkles",
    features: [
      "Game Creator Camp",
      "Holiday Coding Camp",
      "Project Showcase & Presentation",
      "Official Certificate & Portfolio"
    ],
    ctaLabel: "Kunjungi Website",
    url: "https://camp.fansedu.web.id"
  },
  {
    id: "exam",
    name: "Fansedu Exam System",
    description: "Platform ujian, tryout, assessment, dan kompetisi online untuk sekolah, komunitas, dan lembaga pendidikan.",
    iconName: "Layers",
    features: [
      "Sistem Ujian Online Aman",
      "Real-time Ranking System",
      "Automatic Instant Scoring",
      "Multi-Tenant Portal untuk Sekolah"
    ],
    ctaLabel: "Kunjungi Platform",
    url: "https://exam.fansedu.web.id"
  },
  {
    id: "soon",
    name: "More Programs Coming Soon",
    description: "Fansedu Academy akan terus menghadirkan program baru untuk mendukung perkembangan akademik dan teknologi generasi muda Indonesia.",
    iconName: "Compass",
    features: [
      "Robotics & Electronics Camp",
      "Data Science for Teenagers",
      "UI/UX Design Essential Course",
      "Socio-Entrepreneurship Academy"
    ],
    ctaLabel: "Hubungi Untuk Usulan",
    url: "#contact",
    comingSoon: true
  }
];

export const WHY_FEATURES: WhyFeature[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description: "Kurikulum terpadu yang dirancang untuk melatih ketangkasan matematika dan logika tingkat olimpiade.",
    iconName: "GraduationCap",
    accentColor: "blue"
  },
  {
    id: "tech",
    title: "Technology Skills",
    description: "Membekali anak dengan keahlian programming, integrasi AI, dan pemanfaatan tools teknologi modern.",
    iconName: "Cpu",
    accentColor: "indigo"
  },
  {
    id: "creative",
    title: "Creative Thinking",
    description: "Mendorong imajinasi liar siswa dalam mendesain game, aset digital, dan menceritakan solusi kreatif.",
    iconName: "Palette",
    accentColor: "amber"
  },
  {
    id: "problem",
    title: "Problem Solving",
    description: "Melatih cara berpikir kritis (Computational Thinking) untuk merumuskan solusi atas masalah kompleks.",
    iconName: "Search",
    accentColor: "emerald"
  },
  {
    id: "competition",
    title: "Competition Readiness",
    description: "Mempersiapkan mentalitas dan kemampuan teknis juara dalam menghadapi olimpiade serta turnamen digital.",
    iconName: "Trophy",
    accentColor: "violet"
  },
  {
    id: "career",
    title: "Future Career Preparation",
    description: "Membangun portfolio berharga agar anak mempunyai kesiapan karir era digital sejak masa sekolah.",
    iconName: "Briefcase",
    accentColor: "red"
  }
];

export const PATHWAY_ROADMAP: PathwayAgeGroup[] = [
  {
    age: "Usia 8-10",
    title: "Coding Fundamentals",
    description: "Siswa memulai dengan bahasa visual yang ramah anak untuk memahami struktur logika pemrograman dasar.",
    skills: ["Scratch Block Programming", "Logika Sekuensial", "Desain Animasi Mini", "Computational Thinking Awal"],
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
  },
  {
    age: "Usia 10-13",
    title: "Game Development",
    description: "Siswa mulai beralih ke pembuatan game 3D interaktif dan logika penulisan kode yang lebih modular.",
    skills: ["Roblox Studio & Lua Math", "Sistem Koordinat 3D", "Physics Engine Config", "User Interface Game"],
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200"
  },
  {
    age: "Usia 13-16",
    title: "Python & AI",
    description: "Belajar sintaksis bahasa pemrograman profesional yang dipakai industri internasional untuk masa kini.",
    skills: ["Python Dasar & File Handling", "Struktur Data (List, Dict)", "Pengenalan AI & Prompting", "Kalkulasi Data Sederhana"],
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200"
  },
  {
    age: "Usia 10-18",
    title: "Olympiad & Advanced Problem Solving",
    description: "Mengasah ketajaman matematika tingkat tinggi dan algoritma efisien yang dirancang khusus untuk kompetisi resmi.",
    skills: ["Teori Bilangan & Aljabar", "Kombinatorika & Graf", "Algoritma Pemrograman C++", "Simulasi Tryout Nasional"],
    badgeColor: "bg-violet-100 text-violet-700 border-violet-200"
  },
  {
    age: "Karir Masa Depan",
    title: "Digital Creator & Innovator",
    description: "Siswa mandiri menciptakan inovasi, aplikasi real-world, serta siap bersaing di kancah global.",
    skills: ["Personal Digital Portfolio", "Software Development Lifecycle", "Startup Pitch & Presentation", "Sertifikasi Kompetensi Fansedu"],
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
  }
];

export const INITIAL_STATISTICS: StatisticItem[] = [
  {
    id: "students",
    label: "Siswa Aktif Belajar",
    value: 1250,
    suffix: "+",
    iconName: "Users",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "programs",
    label: "Program Unggulan",
    value: 12,
    suffix: "",
    iconName: "BookOpen",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: "projects",
    label: "Proyek Karya Kreatif",
    value: 3420,
    suffix: "+",
    iconName: "Code2",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "mentors",
    label: "Mentor Berpengalaman",
    value: 45,
    suffix: "+",
    iconName: "UserCheck",
    gradient: "from-amber-500 to-orange-600"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa saja program yang tersedia di Fansedu Academy?",
    answer: "Fansedu Academy saat ini menaungi 4 ekosistem utama: Fansedu Olympiad Academy (persiapan kompetisi matematika & informatika), Fansedu Tech Academy (belajar coding dan AI), Fansedu Holiday Coding Camp (camp intensif masa liburan), dan Fansedu Exam System (sistem asessment & tryout digital)."
  },
  {
    id: "faq-2",
    question: "Berapa batas usia minimal anak untuk mendaftar kelas di Fansedu?",
    answer: "Kelas pemrograman visual kami (seperti Scratch) dapat dimulai dari usia 8 tahun (kelas 3 SD). Untuk kelas Olimpiade Matematika dan program Tech yang lebih tinggi seperti Python, kami menerima siswa dengan rentang usia mulai 10 hingga 18 tahun (SD kelas akhir, SMP, dan SMA)."
  },
  {
    id: "faq-3",
    question: "Apakah sistem pembelajarannya online atau offline?",
    answer: "Sebagian besar program utama Fansedu dilaksanakan secara online interaktif (live virtual class) dengan dipandu langsung oleh mentor profesional secara real-time. Namun, untuk beberapa program khusus seperti Holiday Coding Camp, pameran showcase, atau kerja sama sekolah, kami juga melayani secara hybrid/offline."
  },
  {
    id: "faq-4",
    question: "Apakah siswa akan mendapatkan sertifikat setelah program selesai?",
    answer: "Ya. Setiap siswa yang berhasil menyelesaikan rangkaian proyek dan lulus evaluasi pembelajaran di akhir tingkat program akan diberikan Sertifikat Kelulusan Resmi Digital dari Fansedu Academy (di bawah naungan Fans Digital Group) yang siap digunakan sebagai portfolio akademik anak."
  },
  {
    id: "faq-5",
    question: "Bagaimana kualifikasi para mentor di Fansedu Academy?",
    answer: "Mentor kami direkrut melalui seleksi ketat. Mereka merupakan profesional di bidang teknologi, alumni universitas terkemuka, peraih medali olimpiade matematika nasional, serta praktisi industri yang telah berpengalaman dalam merancang pembelajaran interaktif dan ramah anak."
  },
  {
    id: "faq-6",
    question: "Bagaimana cara mendaftarkan anak saya di program Fansedu?",
    answer: "Anda dapat mengeklik tombol pendaftaran 'Jelajahi Program' atau form pendaftaran cepat pemicu lead yang kami sediakan di halaman ini. Tim Konsultan Pendidikan kami akan segera menghubungi Anda melalui WhatsApp untuk merekomendasikan kelas uji coba (Free Trial) gratis yang sesuai dengan minat anak."
  },
  {
    id: "faq-7",
    question: "Bagaimana jika siswa berhalangan hadir pada jadwal kelas yang ditentukan?",
    answer: "Setiap sesi kelas online kami direkam secara penuh. Siswa yang berhalangan hadir dapat dengan mudah mengakses rekaman tutor di platform belajar kami. Selain itu, siswa juga bisa mengajukan sesi tanya jawab singkat (1-on-1 Consultation) dengan mentor untuk mengejar materi yang tertinggal."
  },
  {
    id: "faq-8",
    question: "Apakah pembelajaran dilakukan secara interaktif atau hanya menonton rekaman?",
    answer: "Sistem kami 100% interaktif langsung (Tatap Muka Live). Kami membatasi jumlah siswa per kelas (Small Class Concept 1:5 atau 1:8) untuk memastikan setiap anak mendapat perhatian, bimbingan, serta umpan balik langsung dari mentor pada saat itu juga."
  },
  {
    id: "faq-9",
    question: "Komputer atau perangkat keras seperti apa yang diperlukan untuk belajar coding?",
    answer: "Dibutuhkan komputer portabel (Laptop) atau komputer desktop (PC) berbasis Windows atau macOS yang memiliki koneksi internet stabil serta webcam aktif. Spesifikasi standar (minimal RAM 4GB) sudah cukup untuk dapat menjalankan software Scratch, Python, dan aplikasi meeting online."
  },
  {
    id: "faq-10",
    question: "Bagaimana program Fansedu berkontribusi untuk karir masa depan siswa?",
    answer: "Melalui pendekatan Project-Based Learning, siswa kami tidak hanya sekadar menghafal sintaksis, namun secara aktif diarahkan untuk membuat solusi atas masalah nyata. Mereka membangun kemandirian, kepercayaan diri saat presentasi karya, dan logika analitis tingkat tinggi yang sangat dicari di bidang industri dan teknologi modern global."
  }
];

export const PARTNERS_LOGOS = [
  { name: "Yayasan Pendidikan Nasional", type: "School" },
  { name: "Indonesia Coding Community", type: "Community" },
  { name: "Youth Math Alliance", type: "Organization" },
  { name: "Fans Digital Network", type: "Group" }
];
