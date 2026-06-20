import SectionHeading from "./SectionHeading";
import { tracks } from "../data/conferenceData";
import { TrackIcon } from "./Icons";

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Research Tracks"
          title="Conference Topics"
          subtitle="Explore the diverse research areas covered at ICISEA 2026."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="card-hover group rounded-2xl p-6 lg:p-8 bg-white border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ieee-blue/10 to-ieee-light/10 flex items-center justify-center text-ieee-blue group-hover:from-ieee-blue group-hover:to-ieee-light group-hover:text-white transition-all duration-300">
                <TrackIcon name={track.icon} className="w-7 h-7" />
              </div>
              <h3 className="mt-5 font-bold text-slate-900 text-lg leading-snug">{track.title}</h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
