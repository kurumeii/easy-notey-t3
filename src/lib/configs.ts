import { type NextSeoProps } from "next-seo"
import { type ThemeProviderProps } from "next-themes/dist/types"

export const nextSeoConfig: NextSeoProps = {
  title: "Easy Notey | Note taking app",
  description: "A web app for easy taking note",
  defaultTitle: "Notey",
  themeColor: "(prefers-color-scheme: system)",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
  ],
  openGraph: {
    site_name: "Easy notey",
    url: "https://easy-notey.vercel.app/",
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    handle: "@Kurumeii",
    site: "@Kurumeii",
    cardType: "summary_large_image",
  },
}

export const themeConfig: ThemeProviderProps = {
  storageKey: "note-theme",
  attribute: "class",
  disableTransitionOnChange: false,
  enableColorScheme: true,
  enableSystem: true,
  defaultTheme: "system",
  themes: ["dark", "light", "system"],
}
