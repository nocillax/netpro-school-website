import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100">
      {/* ——— Main Footer ——— */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/branding/logo.png"
                alt="Netpro Model School & College"
                width={52}
                height={52}
                className="w-13 h-13 object-contain"
              />
              <div className="leading-tight">
                <span className="block font-heading font-bold text-text-on-dark text-[15px]">
                  Netpro Model School
                </span>
                <span className="block font-heading text-primary-200 text-xs tracking-wide">
                  &amp; College, Bogura
                </span>
              </div>
            </Link>
            <p className="text-primary-300 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students with quality education, moral values, and the
              skills to excel in an ever-changing world since establishment.
            </p>

            {/* Social Links */}
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/netpromodelschoolandcollege.edu.bd" label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-text-on-dark text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-300 text-sm hover:text-text-on-dark transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h3 className="font-heading font-semibold text-text-on-dark text-sm uppercase tracking-wider mb-5">
              Academics
            </h3>
            <ul className="space-y-3">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-300 text-sm hover:text-text-on-dark transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-text-on-dark text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <ContactItem icon={<MapPin size={16} />}>
                Fuldighi, Bogura,
                <br />
                Opposite to Jahangirabad Cantonment,
                <br />
                Bangladesh
              </ContactItem>
              <ContactItem icon={<Phone size={16} />}>
                <a
                  href="tel:+8801324726900"
                  className="hover:text-text-on-dark transition-colors"
                >
                  +880 1324-726900
                </a>
              </ContactItem>
              <ContactItem icon={<Mail size={16} />}>
                <a
                  href="mailto:nmsc.education@gmail.com"
                  className="hover:text-text-on-dark transition-colors"
                >
                  nmsc.education@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={<Clock size={16} />}>
                Sun – Thu: 8:00 AM – 4:00 PM
              </ContactItem>
            </ul>
          </div>
        </div>
      </div>

      {/* ——— Bottom Bar ——— */}
      <div className="border-t border-primary-800">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-400">
          <p>
            © {currentYear} Netpro Model School &amp; College. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="hover:text-text-on-dark transition-colors"
            >
              Admin Login
            </Link>
            <span className="text-primary-700">•</span>
            <span>Bogura, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ——— Helper Components ——— */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-primary-700 flex items-center justify-center text-primary-300 hover:text-text-on-dark transition-all duration-200"
    >
      {children}
    </a>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-sm text-primary-300">
      <span className="mt-0.5 text-primary-400 shrink-0">{icon}</span>
      <span>{children}</span>
    </li>
  );
}
