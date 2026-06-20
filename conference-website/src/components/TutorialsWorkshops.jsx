import SectionHeading from "./SectionHeading";
import { tutorialsWorkshops } from "../data/conferenceData";

export default function TutorialsWorkshops() {
  return (
    <section id="tutorials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tutorials & Workshops"
          title="Deep Dive Sessions"
          subtitle="Complementing the main technical program with focused learning and collaborative discussions."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tutorialsWorkshops.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{section.description}</p>
              <ul className="mt-6 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ieee-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
