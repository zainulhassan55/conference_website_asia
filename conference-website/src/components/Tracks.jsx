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
          subtitle="The conference welcomes original research contributions in, but not limited to, the following areas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.number}
              className="card-hover group rounded-2xl p-6 lg:p-8 bg-white border border-slate-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ieee-blue/10 to-ieee-light/10 flex items-center justify-center text-ieee-blue group-hover:from-ieee-blue group-hover:to-ieee-light group-hover:text-white transition-all duration-300 shrink-0">
                  <TrackIcon name={track.icon} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-ieee-blue uppercase tracking-wider">
                    Track {track.number}
                  </span>
                  <h3 className="mt-1 font-bold text-slate-900 text-base sm:text-lg leading-snug">
                    {track.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">{track.description}</p>
              <a
                href="#cfp"
                className="inline-flex items-center gap-1 mt-4 text-ieee-blue text-sm font-semibold hover:underline"
              >
                View all topics
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
