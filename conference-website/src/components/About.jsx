import SectionHeading from "./SectionHeading";
import { conference, aboutContent } from "../data/conferenceData";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About the Conference"
          title={`Welcome to ${conference.name} ${conference.edition}`}
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {aboutContent.highlights.map((item) => (
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
