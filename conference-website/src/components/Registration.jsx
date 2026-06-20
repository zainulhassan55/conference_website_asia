import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";

export default function Registration() {
  return (
    <section id="register" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Registration"
          title="Join the Conference"
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
        />

        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 bg-white border border-slate-100 shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-ieee-blue via-ieee-light to-gold" />
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-ieee-blue/10 to-ieee-light/10 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-ieee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-[family-name:var(--font-display)]">
              Registration Details Coming Soon
            </h3>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Registration details and fees will be announced soon. Please check back for updates or contact us for more information.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/30 text-gold font-bold text-lg">
              TBD
            </div>
            <div className="mt-8">
              <a
                href={`mailto:${conference.contact.email}`}
                className="inline-flex px-8 py-3.5 bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-ieee-blue/30 transition-all"
              >
                Contact Registration Chair
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
