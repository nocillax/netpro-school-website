import { Users, Award, BookOpen, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Students Enrolled",
    color: "text-primary-500",
    bg: "bg-primary-50",
  },
  {
    icon: Award,
    value: "98%",
    label: "SSC Pass Rate",
    color: "text-secondary-600",
    bg: "bg-secondary-50",
  },
  {
    icon: BookOpen,
    value: "120+",
    label: "Qualified Teachers",
    color: "text-accent-500",
    bg: "bg-accent-50",
  },
  {
    icon: Calendar,
    value: "15+",
    label: "Years of Excellence",
    color: "text-primary-500",
    bg: "bg-primary-50",
  },
];

export default function QuickStats() {
  return (
    <section className="section-container -mt-6 relative z-10 pb-16 md:pb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <stat.icon size={22} className={stat.color} />
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-text-heading mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-text-muted font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
