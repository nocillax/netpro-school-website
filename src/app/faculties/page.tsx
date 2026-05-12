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
    name: "Dr. Robert Chen",
    designation: "Head of Science Department",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ms. Sarah Jenkins",
    designation: "Senior Mathematics Teacher",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mr. David Rahman",
    designation: "Head of Humanities",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Mrs. Fatima Khatun",
    designation: "Senior English Teacher",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Mr. James Wilson",
    designation: "Physical Education Instructor",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Mrs. Ayesha Siddiqa",
    designation: "Biology & Chemistry Teacher",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Mr. Hasan Mahmud",
    designation: "Physics Lecturer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Ms. Nafisa Akter",
    designation: "Computer Science Teacher",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=300&auto=format&fit=crop",
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
