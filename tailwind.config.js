import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];
export const theme = {
  container: {
    center: true,
    padding: "1rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
      heading: ["CalSans Semibold", ...fontFamily.sans],
    },
    height: {
      18: "4.5rem",
    },
    spacing: {
      18: "4.5rem",
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        secondary: "hsl(var(--primary-secondary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      dark: {
        DEFAULT: "hsl(var(--dark))",
        foreground: "hsl(var(--dark-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
};
export const plugins = [];
