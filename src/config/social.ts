import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/",
        linkTitle: `Emrecan Doğu on Github`,
        isActive: false,
    },
    {
        name: "Mail",
        label: "emrecandogu20@gmail.com",
        href: "mailto:emrecandogu20@gmail.com",
        linkTitle: `E-posta gönder`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/",
        linkTitle: `Emrecan Doğu on Google Scholar`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/",
        linkTitle: `Emrecan Doğu on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        label: "emrecandogu1",
        href: "https://www.linkedin.com/in/emrecandogu1/",
        linkTitle: `LinkedIn`,
        isActive: true,
    },
    {
        name: "Instagram",
        label: "@emrecandogu",
        href: "https://www.instagram.com/emrecandogu/",
        linkTitle: `Instagram`,
        isActive: true,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/",
        linkTitle: `Emrecan Doğu on YouTube`,
        isActive: false,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    LinkedIn: "LinkedIn",
    Instagram: "Instagram",
    YouTube: "ExternalLink",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
