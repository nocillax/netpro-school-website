import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics & Admissions — Netpro Model School & College",
  description:
    "Explore the curriculum, admission process, class routines, and exam results at Netpro Model School & College.",
};

export default function AcademicsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
            Academics & <span className="text-primary-600">Admissions</span>
          </h1>
          <p className="text-lg text-text-body leading-relaxed">
            At Netpro, we maintain high standards of academic discipline and character building. We believe that co-operation between the institution, students, and guardians is key to success.
          </p>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold text-text-heading mb-8 border-b border-border pb-4">Our Curriculum</h2>
          <div className="bg-surface rounded-3xl p-8 shadow-card border border-border">
            <p className="text-text-body mb-6 leading-relaxed">
              Netpro Model School & College strictly follows the curriculum mandated by the National Curriculum and Textbook Board (NCTB) under the Ministry of Education, Bangladesh. We offer English Version and Bangla Medium tracks to cater to diverse student needs, ensuring a robust foundation in science, commerce, and humanities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-surface-alt rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-primary-700 mb-2">Primary Level</h3>
                <p className="text-sm text-text-muted">Playgroup to Class 5. Focus on cognitive development, basic numeracy, literacy, and moral education.</p>
              </div>
              <div className="p-6 bg-surface-alt rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-secondary-700 mb-2">Secondary Level</h3>
                <p className="text-sm text-text-muted">Class 6 to Class 10 (SSC). Comprehensive coverage of Science, Business Studies, and Humanities streams.</p>
              </div>
              <div className="p-6 bg-surface-alt rounded-2xl border border-border">
                <h3 className="text-lg font-bold text-accent-700 mb-2">Higher Secondary</h3>
                <p className="text-sm text-text-muted">Class 11 & 12 (HSC). Specialized preparation for board examinations and university admission tests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Student Guidelines */}
          <div id="student-guidelines" className="bg-surface rounded-3xl p-8 lg:p-10 shadow-card border border-border">
            <h2 className="text-2xl font-heading font-bold text-text-heading mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">1</span>
              Guidelines for Students
            </h2>
            <ul className="space-y-4 text-text-body">
              <li className="flex gap-3 items-start">
                <span className="text-primary-600 font-bold">•</span>
                <span>Pay due respect saying &quot;Assalamu-Alaikum&quot; to all faculty members and seniors.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-600 font-bold">•</span>
                <span>Ensure shoes are cleaned and polished daily.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-600 font-bold">•</span>
                <span>Dress must be clean, tidy, and ironed properly.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-600 font-bold">•</span>
                <span>Maintain a proper haircut (2-6 inch for boys; white ribbon pony tails for girls).</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-600 font-bold">•</span>
                <span>Fancy watches, clips, and ear tops (for girls) are not allowed. Only simple ear rings for girls.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary-600 font-bold">•</span>
                <span>Keep finger nails properly trimmed and maintain daily hygiene.</span>
              </li>
            </ul>
          </div>

          {/* Guardian Guidelines */}
          <div id="guardian-guidelines" className="bg-surface rounded-3xl p-8 lg:p-10 shadow-card border border-border">
            <h2 className="text-2xl font-heading font-bold text-text-heading mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center text-sm">2</span>
              Guidelines for Guardians
            </h2>
            <div className="space-y-6 text-text-body">
              <p>
                Parents/Guardians should be aware that without their help and co-operation, the goal of moulding a child&apos;s character cannot be fully achieved.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-secondary-600 font-bold">•</span>
                  <span>Review the rules and advice set in the school diary regularly.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-secondary-600 font-bold">•</span>
                  <span>Ensure your child strictly observes the school rules.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-secondary-600 font-bold">•</span>
                  <span>Monitor your child&apos;s daily lessons and encourage participation in all school activities.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-secondary-600 font-bold">•</span>
                  <span>Maintain regular communication with the institution regarding your ward&apos;s progress.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Routine Section */}
        <div id="routine" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold text-text-heading mb-8 border-b border-border pb-4">Class Routine</h2>
          <div className="bg-surface rounded-3xl p-8 shadow-card border border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-xl font-bold text-text-heading">Current Academic Session Routine</h3>
              <p className="text-text-body">
                The updated class routine for the current academic session is now available. Students are strictly advised to follow the provided timetable for their respective classes and sections.
              </p>
            </div>
            <button className="shrink-0 px-6 py-3 bg-primary-50 text-primary-600 font-bold rounded-xl hover:bg-primary-100 transition-colors border border-primary-200">
              Download PDF Routine
            </button>
          </div>
        </div>

        {/* Exam Results Section */}
        <div id="results" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold text-text-heading mb-8 border-b border-border pb-4">Exam Results</h2>
          <div className="bg-surface rounded-3xl p-8 shadow-card border border-border">
            <p className="text-text-body mb-6">
              Access your internal assessment marks, term exam results, and board exam statistics here. Please enter your Student ID and Date of Birth to view your individual progress report.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input type="text" placeholder="Enter Student ID" className="flex-1 px-4 py-3 rounded-xl border border-border bg-surface-alt focus:outline-none focus:border-primary-400" />
              <input type="date" className="flex-1 px-4 py-3 rounded-xl border border-border bg-surface-alt focus:outline-none focus:border-primary-400 text-text-muted" />
              <button type="button" className="px-6 py-3 bg-secondary-600 text-white font-bold rounded-xl hover:bg-secondary-700 transition-colors">
                View Result
              </button>
            </form>
          </div>
        </div>

        {/* Admission Section */}
        <div id="admissions" className="bg-primary-50 rounded-3xl p-8 md:p-12 border border-primary-100 relative overflow-hidden scroll-mt-24">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-200/50 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">Admissions Open 2026</h2>
            <div className="max-w-3xl space-y-4 text-primary-800 mb-8">
              <p>
                Netpro Model School & College is now accepting applications for the 2026 academic session. As a top-tier institution in Bogura, we invite parents to join our vibrant community.
              </p>
              <p>
                Please visit our office for a detailed prospectus and admission form, or contact us at **+880 1324-726900**.
              </p>
            </div>
            <button className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
              Download Admission Form
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
