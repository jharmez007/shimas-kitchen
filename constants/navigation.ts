export interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "About",
    href: "/#about",
    isSection: true,
  },
  {
    label: "Why Us",
    href: "/#why-us",
    isSection: true,
  },
  {
    label: "Reviews",
    href: "/#testimonials",
    isSection: true,
  },
  {
    label: "FAQ",
    href: "/#faq",
    isSection: true,
  },
  {
    label: "Contact",
    href: "/#contact",
    isSection: true,
  },
];