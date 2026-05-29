export const DEFAULT_LOCALE = "tr";

export const LOCALES = {
    tr: {
        label: "Türkçe",
        pathPrefix: "",
    },
    en: {
        label: "English",
        pathPrefix: "/en",
    },
} as const;

export type Locale = keyof typeof LOCALES;

export const UI_TEXT = {
    tr: {
        introEyebrow: "MATEMATİK · CEBİR · FİZİK",
        introTitle: "Emrecan Doğu",
        introSubtitle:
            "Matematikçi adayı, matematik öğrencisi ve eğitmen.",
        introBody:
            "Teorik matematik, özellikle cebir alanında derinleşmeye çalışan bir matematik öğrencisiyim. Fizik, matematiksel düşünme ve bilimsel araştırmaya ilgi duyuyorum. TÜBİTAK 2209-A projem kapsamında matematiksel modelleme, veri analizi ve makine öğrenmesi yöntemlerini uygulamalı bir çevresel problem üzerinde öğreniyor ve kullanıyorum.",
        introPrimary: "Projeler",
        introSecondary: "Dersler",
        introTertiary: "İletişim",
        currentTitle: "Güncel",
        currentItems: [
            {
                date: "Mayıs 2026",
                title: "İzmir Tutam Tutam Matematik Festivali 2026 — Graf Teori Etkinlik Masası",
                description:
                    "İzmir'de düzenlenen Tutam Tutam Matematik Festivali'nde görev aldım. Etkinlik masamızda graf teori üzerine katılımcılarla etkileşimli çalışmalar yürüttük.",
                href: "",
            },
            {
                date: "Haziran 2026",
                title: "ODTÜ Cebir ve Kümeler Teorisi Dersleri",
                description:
                    "Cebir ve kümeler teorisi üzerine düzenlenen derslere katılarak teorik matematik alanındaki çalışmalarımı derinleştirmeyi planlıyorum.",
                href: "",
            },
            {
                date: "Haziran 2026",
                title: "İYTE Anadolu Cebir Günleri 2026",
                description:
                    "Cebir alanındaki güncel konuşmaları ve akademik çalışmaları takip etmek üzere Anadolu Cebir Günleri 2026 etkinliğine katılmayı planlıyorum.",
                href: "",
            },
        ],
        focusTitle: "Odak Alanları",
        focusAreas: [
            {
                title: "Cebir & Teorik Matematik",
                body: "Soyut yapılar, ispat teknikleri ve teorik matematiğin temel kavramları üzerine çalışıyorum.",
            },
            {
                title: "Matematik Eğitimi",
                body: "Lise ve üniversite düzeyinde kavramsal öğrenme, problem çözme ve matematiksel düşünme odaklı dersler veriyorum.",
            },
            {
                title: "Fizik & Matematiksel Düşünme",
                body: "Matematik ile fizik arasındaki kavramsal ilişkilere ve bilimsel düşünme biçimlerine ilgi duyuyorum.",
            },
            {
                title: "Modelleme & Araştırma Projeleri",
                body: "TÜBİTAK 2209-A projem kapsamında veri analizi, matematiksel modelleme ve makine öğrenmesi yöntemlerini uygulamalı bir problem üzerinde kullanıyorum.",
            },
        ],
        nav: ["Ana Sayfa", "Hakkımda", "CV", "Projeler", "Dersler", "Yazılar", "İletişim"],
    },
    en: {
        introEyebrow: "MATHEMATICS · ALGEBRA · PHYSICS",
        introTitle: "Emrecan Doğu",
        introSubtitle:
            "Prospective mathematician, mathematics student, and educator.",
        introBody:
            "I am a mathematics student focused on theoretical mathematics, especially algebra. I am also interested in physics, mathematical thinking, and scientific research; through my TÜBİTAK 2209-A project, I use mathematical modeling, data analysis, and machine learning methods on an applied environmental problem.",
        introPrimary: "Projects",
        introSecondary: "Teaching",
        introTertiary: "Contact",
        currentTitle: "Current",
        currentItems: [
            {
                date: "May 2026",
                title: "Izmir Tutam Tutam Mathematics Festival 2026 — Activity Table and Graph Theory",
                description:
                    "I took part in the Tutam Tutam Mathematics Festival in Izmir. At our activity table, we ran interactive graph theory activities with participants.",
                href: "",
            },
            {
                date: "June 2026",
                title: "METU Algebra and Set Theory Lectures",
                description:
                    "I plan to attend lectures on algebra and set theory to deepen my work in theoretical mathematics.",
                href: "",
            },
            {
                date: "June 2026",
                title: "IYTE Anatolian Algebra Days 2026",
                description:
                    "I plan to attend Anatolian Algebra Days 2026 to follow current talks and academic work in algebra.",
                href: "",
            },
        ],
        focusTitle: "Focus Areas",
        focusAreas: [
            {
                title: "Algebra & Theoretical Mathematics",
                body: "I focus on abstract mathematical structures, proof techniques, and theoretical foundations.",
            },
            {
                title: "Mathematics Education",
                body: "High-school and university-level mathematics teaching, problem solving, and conceptual learning.",
            },
            {
                title: "Physics & Mathematical Thinking",
                body: "I am interested in the conceptual relationships between mathematics and physics and in scientific modes of thought.",
            },
            {
                title: "Modeling & Research Projects",
                body: "In my TÜBİTAK 2209-A project, I use data analysis, mathematical modeling, and machine learning on an applied problem.",
            },
        ],
        nav: ["Home", "About", "CV", "Projects", "Teaching", "Writing", "Contact"],
    },
} as const;
