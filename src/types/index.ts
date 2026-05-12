/** Shared type definitions for the Netpro School website */

export interface Notice {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  isPinned: boolean;
  [key: string]: string | boolean | undefined;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  isFeatured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface QuickStat {
  label: string;
  value: string;
  icon: string;
}
