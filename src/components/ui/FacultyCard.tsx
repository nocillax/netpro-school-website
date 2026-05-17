import Image from "next/image";

export default function FacultyCard({
  teacher,
}: {
  teacher: {
    id: string | number;
    name: string;
    image: string;
    designation: string;
  };
}) {
  return (
    <div className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 text-center flex flex-col flex-1">
        <h3 className="font-heading font-bold text-lg text-text-heading mb-1 group-hover:text-accent-600 transition-colors">
          {teacher.name}
        </h3>
        <p className="text-sm text-text-muted font-medium">
          {teacher.designation}
        </p>
      </div>
    </div>
  );
}
