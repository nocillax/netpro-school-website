import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import FacultyCard from "@/components/ui/FacultyCard";

const mockFaculty = [
  {
    id: 1,
    name: "Dr. Robert Chen",
    designation: "Head of Science Department",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=300&auto=format&fit=crop",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Ms. Sarah Jenkins",
    designation: "Senior Mathematics Teacher",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=300&auto=format&fit=crop",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Mr. David Rahman",
    designation: "Head of Humanities",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Mrs. Fatima Khatun",
    designation: "Senior English Teacher",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Mr. James Wilson",
    designation: "Physical Education Instructor",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=300&auto=format&fit=crop",
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
