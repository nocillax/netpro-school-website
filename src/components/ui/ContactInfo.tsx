import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="max-w-6xl w-full mx-auto pb-16 md:pb-24">
      <div className="flex flex-col items-start mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading">
          We&apos;d love to{" "}
          <span className="text-primary-600">Hear From You.</span>
        </h2>
        <p className="text-lg text-text-body mt-6 max-w-2xl leading-relaxed">
          Have questions about admissions, curriculum, or school life? Our
          dedicated team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Email Support */}
        <div className="group p-8 rounded-3xl bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
            <Mail size={28} />
          </div>
          <h3 className="text-xl font-bold text-text-heading mb-3 font-heading">
            Email Support
          </h3>
          <p className="text-text-muted text-sm mb-6 leading-relaxed">
            Our administrative team responds within 24 working hours.
          </p>
          <a
            href="mailto:nmsc.education@gmail.com"
            className="text-primary-600 font-bold hover:underline decoration-2 underline-offset-4"
          >
            nmsc.education@gmail.com
          </a>
        </div>

        {/* Visit Our Office */}
        <div className="group p-8 rounded-3xl bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="w-14 h-14 bg-secondary-50 text-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-600 group-hover:text-white transition-colors">
            <MapPin size={28} />
          </div>
          <h3 className="text-xl font-bold text-text-heading mb-3 font-heading">
            Visit Our Office
          </h3>
          <p className="text-text-muted text-sm mb-6 leading-relaxed">
            Visit our campus to experience our learning environment.
          </p>
          <address className="not-italic text-secondary-700 font-bold">
            Fuldighi, Bogura <br />
            <span className="text-xs text-text-muted font-normal">
              (Opposite to Jahangirabad Cantonment)
            </span>
          </address>
        </div>

        {/* Call Us Directly */}
        <div className="group p-8 rounded-3xl bg-surface border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="w-14 h-14 bg-accent-50 text-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-600 group-hover:text-white transition-colors">
            <Phone size={28} />
          </div>
          <h3 className="text-xl font-bold text-text-heading mb-3 font-heading">
            Call Us Directly
          </h3>
          <p className="text-text-muted text-sm mb-6 leading-relaxed">
            Available during school hours: Sat - Thu, 8 AM - 4 PM.
          </p>
          <a
            href="tel:+8801324726900"
            className="text-accent-600 font-bold hover:underline decoration-2 underline-offset-4"
          >
            +880 1324-726900
          </a>
        </div>
      </div>
    </div>
  );
}
