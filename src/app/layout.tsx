import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://netpromodelschool.edu.bd"),
  title: {
    default: "Netpro Model School & College, Bogura",
    template: "%s — Netpro Model School & College",
  },
  description:
    "Netpro Model School & College, Bogura — Empowering students with quality education, moral values, and the skills to excel in an ever-changing world.",
  keywords: [
    "Netpro",
    "Model School",
    "College",
    "Bogura",
    "Education",
    "Bangladesh",
    "Netpro Bogura",
    "School in Bogura",
    "College in Bogura",
    "Best school in Bogura",
  ],
  authors: [{ name: "Netpro Model School & College" }],
  creator: "Netpro Model School & College",
  publisher: "Netpro Model School & College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Netpro Model School & College, Bogura",
    description:
      "Empowering students with quality education, moral values, and the skills to excel in an ever-changing world.",
    url: "https://nocillax-netpro.vercel.app/",
    siteName: "Netpro Model School & College",
    images: [
      {
        url: "/images/branding/logo.png",
        width: 800,
        height: 800,
        alt: "Netpro Model School & College Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netpro Model School & College, Bogura",
    description:
      "Empowering students with quality education, moral values, and the skills to excel in an ever-changing world.",
    images: ["/images/branding/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
