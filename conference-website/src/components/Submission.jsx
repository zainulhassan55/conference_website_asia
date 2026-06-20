import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";

export default function Submission() {
  const { submission } = conference;
  const guidelines = [
    "All submissions must be written in English and must present original, unpublished work",
    "Papers must be submitted electronically in PDF format before the deadline",
    `Maximum length for full papers is ${submission.maxPages} pages, including all text, tables, figures, and references`,
    "Authors are encouraged to utilize the full length to thoroughly present their research",
    "Use the official IEEE conference manuscript templates (LaTeX and Word)",
    "Submit papers via Microsoft CMT in PDF format before the deadline",
  ];

  return (
    <section id="submission" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Paper Submission"
          title="Submit Your Paper"
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          <div className="rounded-3xl p-8 lg:p-10 bg-slate-50 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-display)] mb-6">
              Submission Guidelines
            </h3>
            <ul className="space-y-4">
              {guidelines.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <svg className="w-5 h-5 text-ieee-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-ieee-blue/5 border border-ieee-blue/20">
              <p className="text-ieee-blue font-semibold">Paper Submission Deadline</p>
              <p className="text-slate-900 text-2xl font-bold mt-1">{submission.deadline}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-ieee-dark to-ieee-blue text-white">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                Submission System
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                Authors are requested to submit their papers via{" "}
                <strong className="text-white">{submission.platform}</strong> in PDF format before the deadline.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Microsoft CMT service is used for managing the peer-reviewing process for this conference.
                This service is provided for free by Microsoft and they bear all expenses, including costs for
                Azure cloud services as well as for software development and support.
              </p>
            </div>

            <div className="rounded-3xl p-8 lg:p-10 bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-display)] mb-4">
                IEEE Manuscript Templates
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Standard manuscript templates for conference proceedings in LaTeX and Word can be found at the official IEEE Templates page.
              </p>
              <a
                href={submission.templateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-ieee-blue/30 transition-all"
              >
                Download IEEE Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
