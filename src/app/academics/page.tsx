import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics & Admissions — Netpro Model School & College",
  description:
    "Explore the curriculum, admission process, class routines, and exam results at Netpro Model School & College.",
};

export default function AcademicsPage() {
  return (
    <main className="section-container section-padding">
      <h1 className="text-4xl font-bold mb-6">Academics &amp; Admissions</h1>
      <p className="text-text-body text-lg">
        This page will contain curriculum details, admission guidelines, class
        routines, and examination results.
      </p>
    </main>
  );
}
