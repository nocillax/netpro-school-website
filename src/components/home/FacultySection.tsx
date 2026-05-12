import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import FacultyCard from "@/components/ui/FacultyCard";

const mockFaculty = [
  {
    id: 1,
    name: "Dr. Rafiqul Alam",
    designation: "Head of Science Department",
    image: "/images/faculty/teacher-1.webp",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Ms. Salma Begum",
    designation: "Senior Mathematics Teacher",
    image: "/images/faculty/teacher-3.webp",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Mr. Kamrul Hasan",
    designation: "Head of Humanities",
    image: "/images/faculty/teacher-2.webp",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Mrs. Nasrin Akter",
    designation: "Senior English Teacher",
    image: "/images/faculty/teacher-5.webp",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Mr. Abdus Sabur",
    designation: "Physical Education Instructor",
    image: "/images/faculty/teacher-4.webp",
    isFeatured: false,
  }
];

export default function FacultySection() {
  const featuredFaculty = mockFaculty.filter((f) => f.isFeatured);

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users size={18} className="text-secondary-600" />
              <span className="text-sm font-bold text-secondary-600 tracking-wider uppercase">
                Expert Instructors
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading">
              Our <span className="text-primary-600">Faculty</span>
            </h2>
          </div>
          <Link
            href="/faculties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors group"
          >
            View All Teachers
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFaculty.map((teacher) => (
            <FacultyCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
