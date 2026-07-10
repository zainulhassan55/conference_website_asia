import { conference, workshopProposal } from "../data/conferenceData";

export default function TutorialsWorkshops() {
  return (
    <section id="tutorials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10 lg:space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-[family-name:var(--font-display)]">
              Important Dates
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {workshopProposal.importantDates.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm"
                >
                  <p className="text-ieee-blue font-semibold text-sm">{item.label}</p>
                  <p className="mt-2 text-slate-900 text-xl font-bold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-[family-name:var(--font-display)]">
              Scope
            </h2>
            <div className="mt-6 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              {workshopProposal.scope.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-[family-name:var(--font-display)]">
              Technical Special Sessions Proposal Template
            </h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base">
              Proposals should include the following information:
            </p>
            <ul className="mt-6 space-y-4">
              {workshopProposal.templateFields.map((field, index) => (
                <li key={field} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-light text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1.5 text-slate-700 text-base sm:text-lg font-medium">{field}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-ieee-dark to-ieee-blue text-white shadow-xl shadow-ieee-blue/20">
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)]">
              Submission
            </h2>
            <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              Please submit the final proposal to:
            </p>
            <div className="mt-6 p-5 rounded-2xl bg-white/10 border border-white/20">
              <a
                href={`mailto:${conference.contact.email}?subject=AISCN 2027 Workshop Proposal`}
                className="text-white text-lg sm:text-xl font-bold hover:text-ieee-light transition-colors break-all"
              >
                {conference.contact.email}
              </a>
            </div>
            <a
              href={`mailto:${conference.contact.email}?subject=AISCN 2027 Workshop Proposal`}
              className="mt-6 inline-flex px-8 py-3.5 bg-white text-ieee-blue font-semibold rounded-xl hover:bg-slate-100 transition-colors"
            >
              Submit Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
