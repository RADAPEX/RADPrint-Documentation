import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RADPrint",
  description:
    "A simple document printing system.",
  base: "/RADPrint-Documentation",
  head: [["link", { rel: "icon", href: "/radapex-favicon.png" }]],
  cleanUrls: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/radapex-favicon.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/getting-started" },
    ],
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