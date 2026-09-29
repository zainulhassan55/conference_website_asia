import SectionHeading from "./SectionHeading";
import { knowledgePartners } from "../data/conferenceData";

function PartnerLogoCard({ src, alt, imageScale = 1 }) {
  return (
    <div className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex h-28 sm:h-32 lg:h-36 w-full items-center justify-center p-3 sm:p-4">
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain"
          style={{
            width: "100%",
            height: "100%",
            transform: `scale(${imageScale})`,
          }}
        />
      </div>
    </div>
  );
}

export default function KnowledgePartners() {
  return (
    <section id="knowledge-partners" className="pt-0 pb-20 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Knowledge Partners"
          subtitle="AISCN 2027 is supported by the following knowledge partners."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto place-items-stretch">
          {knowledgePartners.map((partner) => (
            <PartnerLogoCard
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              imageScale={partner.imageScale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
