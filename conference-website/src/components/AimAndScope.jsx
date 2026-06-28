import SectionHeading from "./SectionHeading";
import { aboutContent } from "../data/conferenceData";

export default function AimAndScope() {
  return (
    <section id="aim-scope" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About"
          title="Aim and Scope"
          subtitle="AISCN 2027 brings together researchers and practitioners to advance intelligent systems and digital transformation."
        />

        <div className="max-w-4xl mx-auto space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
