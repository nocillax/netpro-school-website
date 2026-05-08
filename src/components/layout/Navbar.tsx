"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import type { NavLink } from "@/types";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track scroll for navbar shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function handleDropdownEnter(label: string) {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav"
          : "bg-white"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-[72px]">
        {/* ——— Logo ——— */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.svg"
            alt="Netpro Model School & College Logo"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <span className="block text-primary-600 font-heading font-bold text-[15px] tracking-tight">
              Netpro Model School
            </span>
            <span className="block text-primary-500 font-heading text-[12px] tracking-wide">
              &amp; College, Bogura
            </span>
          </div>
        </Link>

        {/* ——— Desktop Nav Links ——— */}
        <ul className="hidden lg:flex items-center gap-1">
          {mainNavLinks.map((link) => (
            <DesktopNavItem
              key={link.label}
              link={link}
              isActive={isActive(link.href)}
              openDropdown={openDropdown}
              onEnter={handleDropdownEnter}
              onLeave={handleDropdownLeave}
            />
          ))}
        </ul>

        {/* ——— Desktop CTA ——— */}
        <Link
          href="/admin"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-sm"
        >
          Admin Portal
        </Link>

        {/* ——— Mobile Hamburger ——— */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 -mr-2 text-text-heading hover:text-primary-600 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ——— Mobile Menu Overlay ——— */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`relative bg-white w-full max-h-[calc(100vh-72px)] overflow-y-auto shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="section-container py-4 space-y-1">
            {mainNavLinks.map((link) => (
              <MobileNavItem
                key={link.label}
                link={link}
                isActive={isActive(link.href)}
                openDropdown={openDropdown}
                onToggle={(label) =>
                  setOpenDropdown(openDropdown === label ? null : label)
                }
              />
            ))}

            <li className="pt-4 border-t border-border mt-4">
              <Link
                href="/admin"
                className="flex items-center justify-center w-full py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                Admin Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

/* ===========================
   Desktop Nav Item (with optional dropdown)
   =========================== */
function DesktopNavItem({
  link,
  isActive: active,
  openDropdown,
  onEnter,
  onLeave,
}: {
  link: NavLink;
  isActive: boolean;
  openDropdown: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
}) {
  const hasChildren = link.children && link.children.length > 0;
  const isOpen = openDropdown === link.label;

  return (
    <li
      className="relative"
      onMouseEnter={() => hasChildren && onEnter(link.label)}
      onMouseLeave={() => hasChildren && onLeave()}
    >
      <Link
        href={link.href}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          active
            ? "text-primary-600 bg-primary-50"
            : "text-text-heading hover:text-primary-600 hover:bg-primary-50/60"
        }`}
      >
        {link.label}
        {hasChildren && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {/* Dropdown */}
      {hasChildren && (
        <div
          className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <ul className="bg-white rounded-xl shadow-card-hover border border-border py-2 min-w-[220px]">
            {link.children!.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  className="block px-4 py-2.5 text-sm text-text-body hover:text-primary-600 hover:bg-primary-50/50 transition-colors"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

/* ===========================
   Mobile Nav Item (with optional accordion)
   =========================== */
function MobileNavItem({
  link,
  isActive: active,
  openDropdown,
  onToggle,
}: {
  link: NavLink;
  isActive: boolean;
  openDropdown: string | null;
  onToggle: (label: string) => void;
}) {
  const hasChildren = link.children && link.children.length > 0;
  const isOpen = openDropdown === link.label;

  return (
    <li>
      <div className="flex items-center">
        <Link
          href={link.href}
          className={`flex-1 py-3 px-4 rounded-lg text-[15px] font-medium transition-colors ${
            active
              ? "text-primary-600 bg-primary-50"
              : "text-text-heading hover:text-primary-600 hover:bg-surface-alt"
          }`}
        >
          {link.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => onToggle(link.label)}
            className="p-3 text-text-muted hover:text-primary-600 transition-colors"
            aria-label={`Expand ${link.label} submenu`}
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Accordion children */}
      {hasChildren && (
        <ul
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {link.children!.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="block py-2.5 pl-10 pr-4 text-sm text-text-body hover:text-primary-600 transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
