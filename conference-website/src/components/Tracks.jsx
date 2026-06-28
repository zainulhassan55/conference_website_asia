import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { tracks, trackTopics } from "../data/conferenceData";
import { TrackIcon } from "./Icons";

export default function Tracks({ showHeading = true, home = false }) {
  const [openTrack, setOpenTrack] = useState(-1);

  return (
    <section id="tracks" className={`py-20 lg:py-28 ${home ? "bg-slate-50" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge={home ? undefined : "Research Tracks"}
            title={home ? "Tracks" : "Conference Topics"}
            subtitle="The conference welcomes original research contributions in, but not limited to, the following areas."
          />
        )}

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${home ? "" : "mb-16"}`}>
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
            </div>
          ))}
        </div>

        {home && (
          <div className="text-center mt-10">
            <Link
              to="/tracks"
              className="inline-flex px-6 py-3 border border-ieee-blue/30 text-ieee-blue font-semibold rounded-xl hover:bg-ieee-blue/5 transition-all"
            >
              View All Topics
            </Link>
          </div>
        )}

        {!home && (
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-display)] mb-6 text-center">
              Detailed Topics
            </h3>

            <div className="space-y-3">
              {trackTopics.map((track, index) => (
                <div
                  key={track.number}
                  className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm"
                >
                  <button
                    onClick={() => setOpenTrack(openTrack === index ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-light flex items-center justify-center text-white font-bold text-sm">
                        {track.number}
                      </span>
                      <span className="text-slate-900 font-semibold text-sm sm:text-base leading-snug">
                        {track.title}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-ieee-blue shrink-0 transition-transform ${openTrack === index ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openTrack === index && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100">
                      <ul className="grid sm:grid-cols-2 gap-2 sm:pl-14 pt-4">
                        {track.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ieee-blue shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
