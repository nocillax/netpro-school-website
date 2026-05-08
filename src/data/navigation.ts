import type { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our History", href: "/about#history" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Chairman's Message", href: "/about#chairman" },
      { label: "Principal's Message", href: "/about#principal" },
      { label: "Governing Body", href: "/about#governing-body" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Admissions", href: "/academics#admissions" },
      { label: "Class Routine", href: "/academics#routine" },
      { label: "Exam Results", href: "/academics#results" },
    ],
  },
  { label: "Notice Board", href: "/notices" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Notice Board", href: "/notices" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  academics: [
    { label: "Admissions", href: "/academics#admissions" },
    { label: "Curriculum", href: "/academics#curriculum" },
    { label: "Exam Results", href: "/academics#results" },
    { label: "Class Routine", href: "/academics#routine" },
  ],
  resources: [
    { label: "Notice Board", href: "/notices" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Admin Login", href: "/admin" },
  ],
};
