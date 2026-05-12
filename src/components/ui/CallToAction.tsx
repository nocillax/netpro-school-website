import { cn } from "@/lib/utils";

interface CallToActionProps {
  className?: string;
}

export default function CallToAction({ className }: CallToActionProps) {
  return (
    <div className={cn(
      "max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-primary-600 to-primary-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden",
      className
    )}>
      {/* Abstract background blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-400 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-8 animate-fade-in">
          <div className="flex items-center">
            <img className="size-8 md:size-9 rounded-full border-2 border-white shadow-sm"
              src="/images/faculty/teacher-1.webp" alt="Student 1" />
            <img className="size-8 md:size-9 rounded-full border-2 border-white shadow-sm -translate-x-3"
              src="/images/faculty/teacher-3.webp" alt="Student 2" />
            <img className="size-8 md:size-9 rounded-full border-2 border-white shadow-sm -translate-x-6"
              src="/images/faculty/teacher-6.webp" alt="Student 3" />
          </div>
          <p className="-translate-x-3 font-semibold px-2">Join our community of 2,000+ students</p>
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-bold max-w-2xl leading-[1.1] mb-8 bg-gradient-to-r from-white to-primary-100 text-transparent bg-clip-text">
          Shape the future of your child today.
        </h2>
        
        <p className="text-primary-100 text-lg max-w-xl mb-10 leading-relaxed">
          Enrollment for the 2026 academic session is now open. Start the journey towards nobility, enlightenment, and truthfulness.
        </p>

        <button className="px-10 py-4 bg-white text-primary-900 font-bold rounded-full uppercase tracking-widest text-sm hover:bg-primary-50 transition-all shadow-xl hover:scale-105 active:scale-95">
          Apply for Admission
        </button>
      </div>
    </div>
  );
}
