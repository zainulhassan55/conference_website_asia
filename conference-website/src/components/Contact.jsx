import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";
import { IconCalendar, IconLocation, IconMail } from "./Icons";

const inquiryTopics = [
  { label: "Paper Submission", subject: "AISCN 2027 - Paper Submission Inquiry" },
  { label: "Registration", subject: "AISCN 2027 - Registration Inquiry" },
  { label: "Sponsorship", subject: "AISCN 2027 - Sponsorship Inquiry" },
  { label: "Committee Inquiry", subject: "AISCN 2027 - Committee Inquiry" },
  { label: "General Inquiry", subject: "AISCN 2027 - General Inquiry" },
];

function ContactCard({ icon, title, children, className = "bg-white" }) {
  return (
    <div className={`rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-ieee-blue/10 flex items-center justify-center text-ieee-blue mb-5">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 text-lg font-[family-name:var(--font-display)]">{title}</h3>
      <div className="mt-4 space-y-2 text-slate-600 text-sm sm:text-base">{children}</div>
    </div>
  );
}

export default function Contact({ showHeading = true }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Contact Us"
            title="Get in Touch"
            subtitle="Have questions about paper submission, registration, or sponsorship? We're here to help."
          />
        )}

        <div className="max-w-5xl mx-auto mb-12">
          <div className="rounded-3xl bg-gradient-to-br from-ieee-dark to-ieee-blue p-8 lg:p-10 text-white text-center shadow-xl shadow-ieee-blue/20">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <IconMail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">Conference Email</h3>
            <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
              For all conference-related inquiries, please contact the organizing committee directly by email.
            </p>
            <a
              href={`mailto:${conference.contact.email}`}
              className="inline-flex mt-6 px-6 py-3 rounded-xl bg-white text-ieee-blue font-semibold hover:bg-slate-100 transition-colors break-all"
            >
              {conference.contact.email}
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ContactCard icon={<IconCalendar />} title="Conference Dates">
            <p className="font-semibold text-slate-900">{conference.dates.display}</p>
            <p>Hybrid conference format</p>
          </ContactCard>

          <ContactCard icon={<IconLocation />} title="Venue">
            <p className="font-semibold text-slate-900">{conference.location.venue}</p>
            <p>{conference.location.address}</p>
          </ContactCard>

          <ContactCard
            icon={<IconMail />}
            title="Sponsorship"
            className="sm:col-span-2 lg:col-span-1"
          >
            <p>For sponsorship opportunities, please contact:</p>
            <a
              href={`mailto:${conference.contact.sponsorshipEmail}?subject=AISCN 2027 Sponsorship Inquiry`}
              className="text-ieee-blue font-semibold hover:underline break-all"
            >
              {conference.contact.sponsorshipEmail}
            </a>
          </ContactCard>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="text-xl font-bold text-slate-900 text-center font-[family-name:var(--font-display)] mb-6">
            Inquiry Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {inquiryTopics.map((topic) => (
              <a
                key={topic.label}
                href={`mailto:${conference.contact.email}?subject=${encodeURIComponent(topic.subject)}`}
                className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:bg-ieee-blue/5 hover:border-ieee-blue/30 hover:text-ieee-blue transition-colors"
              >
                {topic.label}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-slate-900">{conference.fullName}</span>
            <br />
            ({conference.name} {conference.edition}) · {conference.location.display}
          </p>
        </div>
      </div>
    </section>
  );
}
