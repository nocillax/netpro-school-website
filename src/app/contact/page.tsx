import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Netpro Model School & College",
  description:
    "Get in touch with Netpro Model School & College, Bogura. Find our address, phone number, and email.",
};

export default function ContactPage() {
  return (
    <main className="section-container section-padding">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-text-body text-lg">
        This page will contain a contact form, Google Maps embed, and contact
        details.
      </p>
    </main>
  );
}
