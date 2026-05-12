import { Building2, GraduationCap, Users, Trophy } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "2,500+",
    label: "Students Enrolled",
    icon: Users,
  },
  {
    id: 2,
    value: "98%",
    label: "SSC Pass Rate",
    icon: GraduationCap,
  },
  {
    id: 3,
    value: "120+",
    label: "Qualified Teachers",
    icon: Building2,
  },
  {
    id: 4,
    value: "20+",
    label: "Years of Excellence",
    icon: Trophy,
  },
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-4 md:py-8 bg-surface">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center text-center transition-transform hover:-translate-y-1 group"
        >
          {/* <div className="mb-4 text-text-heading group-hover:text-primary-600 transition-colors">
            <stat.icon size={40} strokeWidth={1.5} />
          </div> */}
          <p className="text-sm font-bold text-text-muted">
            {stat.label}
          </p>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-text-heading mb-1">
            {stat.value}
          </h3>

        </div>
      ))}
    </div>
  );
}
