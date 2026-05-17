import type { Metadata } from "next";
import FacultyCard from "@/components/ui/FacultyCard";

export const metadata: Metadata = {
  title: "Our Faculties — Netpro Model School & College",
  description:
    "Meet the experienced and dedicated faculty members of Netpro Model School & College, Bogura.",
};

const allFaculty = [
  {
    id: 1,
    name: "Md Alamgir Hossain",
    designation: "Academic Head",
    image: "/images/faculty/academic-head.webp",
  },
  {
    id: 2,
    name: "Mst. Jasmine Sultana Mili",
    designation: "Full School Coordinator",
    image: "/images/faculty/school-coordinator.webp",
  },
  {
    id: 3,
    name: "Mst. Sharmin Akter",
    designation: "School Coordinator (Secondary)",
    image: "/images/faculty/school-coordinator(secondary).webp",
  },
  {
    id: 4,
    name: "Md. Delowar Hossain",
    designation: "Head of Events & Activities",
    image: "/images/faculty/head-of-event-&-activity.webp",
  },
  {
    id: 5,
    name: "Md. Mokbul Hossain",
    designation: "Senior Assistant Teacher (Math)",
    image: "/images/faculty/sr-assistant-teacher-math.webp",
  },
  {
    id: 6,
    name: "Md. Atiqur Rahman Rasel",
    designation: "Assistant Teacher (ICT)",
    image: "/images/faculty/assistant-teacher-ict.webp",
  },
  {
    id: 7,
    name: "Mst. Farhana Ferdousi",
    designation: "Senior Assistant Teacher (Science)",
    image: "/images/faculty/sr-assistant-teacher-science.webp",
  },
  {
    id: 8,
    name: "Md. Ruhul Amin Sheikh",
    designation: "Assistant Teacher (English)",
    image: "/images/faculty/assistant-teacher-english.webp",
  },
];

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
          {allFaculty.map((teacher) => (
            <FacultyCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </main>
  );
}
