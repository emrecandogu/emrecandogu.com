import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://emrecandogu.com/",
    author: "Emrecan Doğu",
    desc: "Emrecan Doğu'nun teorik matematik, cebir, fizik, öğretim, projeler ve yazılar odağındaki akademik kişisel web sitesi.",
    title: "Emrecan Doğu",
    ogImage: "main_page.jpg",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "tr",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_academic",
    themeDark: "dark_academic",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: false,
    showRSSInFooter: false,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
