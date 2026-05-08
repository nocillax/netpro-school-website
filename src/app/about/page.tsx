import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Netpro Model School & College",
  description:
    "Learn about the history, mission, and leadership of Netpro Model School & College, Bogura.",
};

export default function AboutPage() {
  return (
    <main className="section-container section-padding">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-text-body text-lg">
        This page will contain the school&apos;s history, mission &amp; vision,
        chairman&apos;s message, and governing body information.
      </p>
    </main>
  );
}
