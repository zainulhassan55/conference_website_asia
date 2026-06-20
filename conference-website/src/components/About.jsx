import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About the Conference"
          title={`Welcome to ${conference.name} ${conference.edition}`}
          subtitle="A premier IEEE-approved forum bringing together researchers, academicians, and industry professionals from around the world."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              The <strong className="text-slate-900">{conference.fullName} ({conference.name} {conference.edition})</strong> is
              an IEEE-approved international conference dedicated to advancing research and innovation in intelligent systems,
              engineering applications, and emerging technologies.
            </p>
            <p>
              Join us in {conference.location.city} for three days of inspiring keynote speeches, technical paper presentations,
              panel discussions, and networking opportunities with leading experts from academia and industry worldwide.
            </p>
            <p>
              All accepted and presented papers will be submitted for inclusion in the{" "}
              <strong className="text-ieee-blue">IEEE Xplore Digital Library</strong>, ensuring global visibility
              and citation for your research contributions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "IEEE Approved", desc: "Officially recognized by IEEE with proceedings in Xplore", color: "from-ieee-blue to-ieee-light" },
              { title: "Global Reach", desc: "Participants from 30+ countries across 6 continents", color: "from-gold to-gold-light" },
              { title: "Expert Review", desc: "Double-blind peer review by 50+ domain experts", color: "from-ieee-dark to-ieee-blue" },
              { title: "Networking", desc: "Connect with researchers, industry leaders & innovators", color: "from-slate-700 to-slate-900" },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-2xl p-6 bg-slate-50 border border-slate-100"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} mb-4`} />
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
