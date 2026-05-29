import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_academic: {
        background: "#f4f1ea",
        foreground: "#1f2933",
        accent: "#1f4e5f",
        accentSoft: "#e7f0f2",
        muted: "#667085",
        border: "#e5e2dc",
        surface: "#ffffff",
        isDark: false,
    },
    dark_academic: {
        background: "#171514",
        foreground: "#f2eee8",
        accent: "#8fbccc",
        accentSoft: "#22343a",
        muted: "#b7afa6",
        border: "#3a342f",
        surface: "#211f1d",
        isDark: true,
    },
    light_default: {
        background: "#f9fafb",
        foreground: "#111827",
        accent: "#3b82f6",
        accentSoft: "#dbeafe",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
        isDark: false,
    },
    dark_default: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        accentSoft: "#3b2b20",
        muted: "#343f60",
        border: "#ab4b08",
        surface: "#212737",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
        accentSoft: '#f3e4dc',
    },
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
        accentSoft: '#3a2a23',
    }
};
