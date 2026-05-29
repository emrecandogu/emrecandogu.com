import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "Emrecan Doğu",
        subtitle: "",
        isActive: true,
    },
    about: {
        title: "Hakkımda",
        subtitle: "Akademik profil, araştırma ilgileri ve öğretim çalışmaları.",
        isActive: true,
    },
    blog: {
        title: "Writing",
        subtitle: "Notes, essays, and research-adjacent writing.",
        isActive: false,
    },
    writing: {
        title: "Yazılar",
        subtitle: "Matematiksel düşünme, öğrenme, cebir, fizik ve araştırma üzerine notlar.",
        isActive: true,
    },
    publications: {
        title: "Publications",
        subtitle: "A collection of research papers and scientific articles.",
        isActive: false,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: false,
    },
    projects: {
        title: "Projeler",
        subtitle: "Akademik ve araştırma odaklı seçili çalışmalar.",
        isActive: true,
    },
    teaching: {
        title: "Dersler",
        subtitle: "Lise ve üniversite düzeyinde matematik eğitimi.",
        isActive: true,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "CV",
        subtitle: "Eğitim, öğretim deneyimi, projeler ve akademik ilgi alanları.",
        isActive: true,
    },
    contact: {
        title: "İletişim",
        subtitle: "Akademik çalışmalar, projeler ve dersler için iletişim.",
        isActive: true,
    },
};
