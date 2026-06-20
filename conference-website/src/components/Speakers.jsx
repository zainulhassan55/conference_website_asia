import SectionHeading from "./SectionHeading";
import { speakers } from "../data/conferenceData";
import { getInitials } from "./Icons";

const avatarColors = [
  "from-ieee-blue to-ieee-light",
  "from-gold to-gold-light",
  "from-purple-600 to-purple-400",
  "from-emerald-600 to-emerald-400",
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Keynote Speakers"
          title="Learn from the Best"
          subtitle="Distinguished experts sharing insights on cutting-edge research and industry trends."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={`${speaker.name}-${index}`}
              className="card-hover group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100"
            >
              <div className={`h-32 bg-gradient-to-br ${avatarColors[index % avatarColors.length]} relative`}>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-4 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{getInitials(speaker.name)}</span>
                </div>
              </div>

              <div className="pt-14 pb-6 px-5 text-center">
                <h3 className="font-bold text-slate-900 text-lg">{speaker.name}</h3>
                <p className="text-ieee-blue text-sm font-medium mt-1">{speaker.title}</p>
                <p className="text-slate-500 text-sm mt-1">{speaker.affiliation}</p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Keynote Topic</p>
                  <p className="text-slate-700 text-sm font-medium leading-snug">{speaker.topic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
