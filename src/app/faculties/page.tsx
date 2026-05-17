import type { Metadata } from "next";
import FacultyCard from "@/components/ui/FacultyCard";
import { faculties } from "@/data/faculties";

export const metadata: Metadata = {
  title: "Our Faculties — Netpro Model School & College",
  description:
    "Meet the experienced and dedicated faculty members of Netpro Model School & College, Bogura.",
};

export default function FacultiesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
            Our <span className="text-primary-600">Faculties</span>
          </h1>
          <p className="text-lg text-text-body leading-relaxed">
            Our experienced and dedicated faculty members are committed to
            providing the highest quality education and shaping the future
            leaders of tomorrow.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((teacher) => (
            <FacultyCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </main>
  );
}
