import SectionHeading from "./SectionHeading";
import { conference, sponsorshipBenefits } from "../data/conferenceData";

export default function Sponsorship() {
  return (
    <section id="sponsorship" className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-ieee-dark to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sponsorship"
          title="Partner With AISCN 2027"
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
          light
        />

        <div className="max-w-4xl mx-auto mb-12 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p>
            The International Conference on AI, Security, Computing, and Networking (AISCN 2027) invites
            organizations, technology companies, research institutions, government agencies, and industry leaders
            to become sponsors of this premier international event.
          </p>
          <p>
            AISCN 2027 aims to bring together researchers, practitioners, academics, innovators, and policymakers
            working in the areas of Artificial Intelligence, Cybersecurity, Computing Technologies, Data Science,
            Networking, and Emerging Digital Systems. Sponsorship offers a unique opportunity to showcase your
            organization, engage with leading experts, recruit talented researchers and students, and strengthen
            your presence within the global technology community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-6">
              Why Sponsor AISCN 2027?
            </h3>
            <p className="text-slate-400 text-sm mb-5">As a sponsor, your organization will have the opportunity to:</p>
            <ul className="space-y-3">
              {sponsorshipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
              Sponsorship Inquiry
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Organizations interested in sponsoring AISCN 2027 are encouraged to contact the conference organizing
              committee. Please include your organization details, sponsorship interests, and any specific collaboration proposals.
            </p>
            <div className="p-5 rounded-2xl bg-gold/10 border border-gold/20 mb-6">
              <p className="text-gold font-semibold text-sm">Contact for Sponsorship</p>
              <a
                href={`mailto:${conference.contact.sponsorshipEmail}`}
                className="text-white text-lg font-bold mt-1 hover:text-ieee-light transition-colors break-all"
              >
                {conference.contact.sponsorshipEmail}
              </a>
            </div>
            <a
              href={`mailto:${conference.contact.sponsorshipEmail}?subject=AISCN 2027 Sponsorship Inquiry`}
              className="inline-flex justify-center px-8 py-3.5 bg-gradient-to-r from-gold to-gold-light text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/30 transition-all"
            >
              Send Sponsorship Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
