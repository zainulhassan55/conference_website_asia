import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { conference, trackTopics } from "../data/conferenceData";

export default function CallForPapers() {
  const [openTrack, setOpenTrack] = useState(0);

  return (
    <section id="cfp" className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-ieee-dark to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-ieee-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Call for Papers"
          title="Share Your Research"
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
          light
        />

        <div className="max-w-4xl mx-auto mb-12 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
          <p>
            Accepted and presented papers will be considered for publication in the conference proceedings.
          </p>
          <div className="glass rounded-2xl p-6 border border-white/10">
            <p className="text-gold font-semibold mb-1">Publication Details</p>
            <p className="text-white">TBD</p>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Selected high-quality papers may be invited for extended versions in special issues of reputed international journals.
            </p>
          </div>
          <p>
            The conference welcomes original research contributions in, but not limited to, the following areas:
          </p>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {trackTopics.map((track, index) => (
            <div
              key={track.number}
              className="glass rounded-2xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => setOpenTrack(openTrack === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-ieee-blue to-ieee-light flex items-center justify-center text-white font-bold text-sm">
                    {track.number}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base leading-snug">
                    Track {track.number}: {track.title}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-ieee-light shrink-0 transition-transform ${openTrack === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openTrack === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <ul className="grid sm:grid-cols-2 gap-2 pl-14">
                    {track.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ieee-light shrink-0" />
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
    </section>
  );
}
