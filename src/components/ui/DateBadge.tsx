export default function DateBadge({
  date,
  className = "",
}: {
  date: string | Date;
  className?: string;
}) {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate().toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white border-2 border-primary-100 rounded-2xl min-w-[5rem] shrink-0 py-3.5 shadow-[0_2px_8px_-3px_rgba(44,54,145,0.08)] group-hover:border-primary-300 group-hover:shadow-[0_4px_12px_-3px_rgba(44,54,145,0.15)] transition-all duration-300 ${className}`}
    >
      <span className="font-heading text-3xl font-extrabold text-primary-700 tracking-tight leading-none mb-1">
        {day}
      </span>
      <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary-500 leading-none">
        {month}
      </span>
      <div className="w-8 h-[2px] bg-accent-500 my-1.5 rounded-full"></div>
      <span className="text-xs font-bold text-secondary-600 tracking-wider leading-none">
        {year}
      </span>
    </div>
  );
}
