import SectionHeading from "./SectionHeading";

export default function CallForPapers() {
  const guidelines = [
    "Original, unpublished research not under review elsewhere",
    "Maximum 8 pages including references (IEEE two-column format)",
    "Submitted via Microsoft CMT or EasyChair platform",
    "Double-blind peer review process",
    "At least one author must register and present the paper",
  ];

  return (
    <section id="cfp" className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-ieee-dark to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-ieee-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Call for Papers"
          title="Share Your Research"
          subtitle="We invite researchers and practitioners to submit their original contributions to ICISEA 2026."
          light
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="glass rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-6">
              Submission Guidelines
            </h3>
            <ul className="space-y-4">
              {guidelines.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-ieee-light shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-gold/10 border border-gold/20">
              <p className="text-gold font-semibold">Paper Submission Deadline</p>
              <p className="text-white text-2xl font-bold mt-1">May 31, 2026</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
                Publication & Indexing
              </h3>
              <p className="text-slate-300 leading-relaxed">
                All accepted papers will be published in the conference proceedings and submitted to the{" "}
                <strong className="text-ieee-light">IEEE Xplore Digital Library</strong>. Selected high-quality
                papers will be invited for extension and publication in partner journals.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
                Paper Templates
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Authors must use the official IEEE conference template for paper preparation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-ieee-dark font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Download IEEE Template
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
                >
                  Contact Program Chair
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
