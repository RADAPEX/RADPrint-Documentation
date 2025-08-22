import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RADPrint",
  description:
    "A simple document printing system.",
  base: "/RADPrint-Documentation/",
  head: [["link", { rel: "icon", href: "/radapex-favicon.png" }]],
  cleanUrls: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/radapex-favicon.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/getting-started" },
    ],
    footer: {
      message: 'If you require any APEX specialist support or consultancy contact us at contact@radapex.com or visit <a href="https://www.radapex.com">www.radapex.com</a>',
    },
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Usage", link: "/usage" },
        ],
      }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RADAPEX/RADPrint-Free",
      },
    ],
  },
});