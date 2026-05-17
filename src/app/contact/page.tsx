import type { Metadata } from "next";
import Image from "next/image";
import ContactInfo from "@/components/ui/ContactInfo";
import CallToAction from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Contact Us — Netpro Model School & College",
  description:
    "Get in touch with Netpro Model School & College, Bogura. Find our address, phone number, and email.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Contact Info Section (based on demo.tsx) */}
        <ContactInfo />

        {/* Contact Form Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="bg-surface rounded-[2.5rem] p-8 md:p-12 shadow-card border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <Image src="/images/branding/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                  <h2 className="text-3xl font-heading font-bold text-text-heading">Send us a Message</h2>
                </div>
                <p className="text-text-body mb-8">
                  Prefer to write to us? Fill out the form and our team will get back to you as soon as possible.
                </p>
                <div className="aspect-video rounded-3xl bg-surface-alt border border-border overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-text-muted italic p-8 text-center text-sm">
                     Google Maps Integration Placeholder
                   </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-heading ml-1">Full Name</label>
                      <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-2xl border border-border bg-surface-alt focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-heading ml-1">Email Address</label>
                      <input type="email" placeholder="email@example.com" className="w-full px-5 py-4 rounded-2xl border border-border bg-surface-alt focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-heading ml-1">Subject</label>
                    <input type="text" placeholder="How can we help?" className="w-full px-5 py-4 rounded-2xl border border-border bg-surface-alt focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-heading ml-1">Message</label>
                    <textarea rows={5} placeholder="Tell us more about your inquiry..." className="w-full px-5 py-4 rounded-2xl border border-border bg-surface-alt focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto px-10 py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 active:scale-95">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section (based on call-to-action-1.tsx) */}
        <CallToAction />
      </div>
    </main>
  );
}
