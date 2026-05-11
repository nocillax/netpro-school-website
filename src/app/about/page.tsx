import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Netpro Model School & College",
  description:
    "Learn about the history, mission, and leadership of Netpro Model School & College, Bogura.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
            About Our <span className="text-primary-600">Institution</span>
          </h1>
          <p className="text-lg text-text-body leading-relaxed">
            Netpro Model School & College, Bogura, is a premier educational institution dedicated to nurturing nobility, enlightenment, and truthfulness in every student since 2005.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-primary-50 rounded-3xl p-8 lg:p-10 border border-primary-100">
            <h2 className="text-2xl font-heading font-bold text-primary-900 mb-4">Our Mission</h2>
            <p className="text-primary-800 leading-relaxed">
              Our mission is to educate all the students to the highest levels of academic achievement, to enable them to reach and to expand their potential and to prepare them to become productive, responsible, ethical, creative and compassionate members of society.
            </p>
          </div>
          <div className="bg-secondary-50 rounded-3xl p-8 lg:p-10 border border-secondary-100">
            <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-4">Our Vision</h2>
            <p className="text-secondary-800 leading-relaxed">
              Our vision is to prepare our students for a rapidly changing world by instilling in them critical thinking skills, all-round development and a respect for core values.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div id="history" className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-bold text-text-heading mb-6">Our Journey</h2>
              <div className="space-y-4 text-text-body leading-relaxed">
                <p>
                  Netpro Model School & College started its journey on 1 December 2005. The name &quot;Netpro&quot; stands for **Nation-wide English Teaching Program**, as it was initially established as an English teaching institution.
                </p>
                <p>
                  This Alma-mater was turned into a full-fledged school by our visionary leader, **A K M Mejanur Islam**. He defined the core values of the school through every letter of Netpro:
                </p>
                <ul className="grid grid-cols-2 gap-2 font-semibold text-primary-700">
                  <li>N — Nobility</li>
                  <li>E — Enlightenment</li>
                  <li>T — Truthfulness</li>
                  <li>P — Perseverance</li>
                  <li>R — Resilience</li>
                  <li>O — Obedience</li>
                </ul>
                <p>
                  Based on these qualities, the school has been sailing in the right direction in the city of Bogura. We are currently expanding with a new campus at Fuldighi, Bogura, equipped with modern facilities.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary-900/10 z-10"></div>
              {/* Image will be placed here by the user */}
              <div className="w-full h-full bg-surface-alt flex items-center justify-center text-text-muted italic">
                School History Image
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-center text-text-heading mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Honesty", icon: "🤝" },
              { name: "Patriotism", icon: "🇧🇩" },
              { name: "Honour & Pride", icon: "🎖️" },
              { name: "Empathy", icon: "❤️" },
              { name: "Perseverance", icon: "💪" },
              { name: "Wisdom", icon: "🧠" },
            ].map((value, index) => (
              <div key={index} className="bg-surface p-6 rounded-2xl border border-border text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{value.icon}</div>
                <div className="font-bold text-text-heading text-sm uppercase tracking-wider">{value.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Motto Section */}
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center text-text-on-dark mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-400 rounded-full blur-[120px]"></div>
          </div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-800 text-xs font-bold uppercase tracking-widest mb-6">
              Our Core Motto
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 italic">
              &quot;Get Enlightened to Serve the Humanity&quot;
            </h2>
            <p className="max-w-2xl mx-auto text-primary-200 text-lg">
              This philosophy guides every interaction and educational program at Netpro, ensuring our students look beyond academic success towards global service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
