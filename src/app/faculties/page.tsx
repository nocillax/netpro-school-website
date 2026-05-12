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
    name: "Dr. Rafiqul Alam",
    designation: "Head of Science Department",
    image: "/images/faculty/teacher-1.webp",
  },
  {
    id: 2,
    name: "Ms. Salma Begum",
    designation: "Senior Mathematics Teacher",
    image: "/images/faculty/teacher-3.webp",
  },
  {
    id: 3,
    name: "Mr. Kamrul Hasan",
    designation: "Head of Humanities",
    image: "/images/faculty/teacher-2.webp",
  },
  {
    id: 4,
    name: "Mrs. Nasrin Akter",
    designation: "Senior English Teacher",
    image: "/images/faculty/teacher-5.webp",
  },
  {
    id: 5,
    name: "Mr. Abdus Sabur",
    designation: "Physical Education Instructor",
    image: "/images/faculty/teacher-4.webp",
  },
  {
    id: 6,
    name: "Mrs. Ayesha Siddiqa",
    designation: "Biology & Chemistry Teacher",
    image: "/images/faculty/teacher-6.webp",
  },
  {
    id: 7,
    name: "Mr. Hasan Mahmud",
    designation: "Physics Lecturer",
    image: "/images/faculty/teacher-2.webp",
  },
  {
    id: 8,
    name: "Ms. Nafisa Akter",
    designation: "Computer Science Teacher",
    image: "/images/faculty/teacher-1.webp",
  }
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
            Our experienced and dedicated faculty members are committed to providing the highest quality education and shaping the future leaders of tomorrow.
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
