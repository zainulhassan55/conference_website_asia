import SectionHeading from "./SectionHeading";
import { speakers } from "../data/conferenceData";

export default function Speakers({ showHeading = true }) {
  const speaker = speakers[0];

  return (
    <section id="speakers" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Keynote Speakers"
            title="Learn from the Best"
            subtitle="Distinguished experts sharing insights on cutting-edge research and industry trends."
          />
        )}

        <div className="max-w-md mx-auto">
          <div className="card-hover rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
            <div className="h-32 bg-gradient-to-br from-ieee-blue to-ieee-light relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-3xl tracking-wider">TBA</span>
              </div>
            </div>

            <div className="py-8 px-6 text-center">
              <h3 className="font-bold text-slate-900 text-xl">{speaker.name}</h3>
              <p className="text-ieee-blue text-sm font-medium mt-2">{speaker.title}</p>
              <p className="text-slate-500 text-sm mt-1">{speaker.affiliation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
