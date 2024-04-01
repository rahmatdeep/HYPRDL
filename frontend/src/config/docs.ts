import { MainNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Developers",
      href: "/developers",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "DMCA and Abuse",
      href: "/dmca",
    },
    {
      title: "Discord",
      href: "/discord",
    },
  ],
};
