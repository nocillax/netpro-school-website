const stats = [
  {
    id: 1,
    value: "2,500+",
    label: "Students Enrolled",
  },
  {
    id: 2,
    value: "98%",
    label: "SSC Pass Rate",
  },
  {
    id: 3,
    value: "120+",
    label: "Qualified Teachers",
  },
  {
    id: 4,
    value: "15+",
    label: "Years of Excellence",
  },
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-8 md:pt-12">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-surface rounded-2xl p-6 shadow-sm border border-border flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mb-1">
            {stat.value}
          </h3>
          <p className="text-sm font-medium text-text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
