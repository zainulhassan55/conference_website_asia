import SectionHeading from "./SectionHeading";
import { committee } from "../data/conferenceData";

function CommitteeGroup({ title, members }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)] mb-6 pb-3 border-b border-white/10">
        {title}
      </h3>
      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-ieee-light/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ieee-blue to-ieee-light flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">
                {member.name.split(" ").slice(-1)[0][0]}
                {member.name.split(" ")[0][0]}
              </span>
            </div>
            <div>
              <p className="text-white font-semibold">{member.name}</p>
              <p className="text-ieee-light text-sm font-medium">{member.role}</p>
              <p className="text-slate-400 text-sm mt-0.5">{member.affiliation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <section id="committee" className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 to-ieee-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Organizing Committee"
          title="Meet the Team"
          subtitle="Dedicated professionals ensuring a world-class conference experience."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <CommitteeGroup title="General Chairs" members={committee.general} />
          <CommitteeGroup title="Program Committee" members={committee.program} />
          <CommitteeGroup title="Organizing Committee" members={committee.organizing} />
        </div>
      </div>
    </section>
  );
}
