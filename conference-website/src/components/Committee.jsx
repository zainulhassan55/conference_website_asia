import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { conference, committees } from "../data/conferenceData";

function CommitteePanel({ title, members, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isLarge = members.length > 6;

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-display)]">
            {title}
          </h3>
        </div>
        <svg
          className={`w-5 h-5 text-ieee-light shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <ul className={isLarge ? "grid sm:grid-cols-2 gap-2" : "space-y-2"}>
            {members.map((member) => (
              <li
                key={member}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 text-sm sm:text-base text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ieee-light shrink-0" />
                <span className="leading-relaxed">{member}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Committee() {
  return (
    <section id="committee" className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 to-ieee-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Committees"
          title="Organizing & Program Committees"
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
          light
        />

        <div className="space-y-3 max-w-4xl mx-auto">
          {committees.map((group, index) => (
            <CommitteePanel
              key={group.title}
              title={group.title}
              members={group.members}
              defaultOpen={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
