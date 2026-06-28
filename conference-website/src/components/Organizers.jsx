import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";

function OrganizerLogoCard({ src, alt, imageScale = 1 }) {
  return (
    <div className="w-full sm:w-[22rem] lg:w-[24rem] rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex h-36 sm:h-40 lg:h-44 w-full items-center justify-center p-4 sm:p-6">
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

export default function Organizers() {
  return (
    <section id="organizers" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Organizers"
          subtitle="AISCN 2027 is organized by the following institutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto place-items-center">
          <OrganizerLogoCard
            src={conference.auLogo}
            alt="Asia University logo"
            imageScale={1.1}
          />
          <OrganizerLogoCard
            src={conference.ccriLogo}
            alt="International Center for AI and Cyber Security Research and Innovations (CCRI) logo"
            imageScale={1.15}
          />
        </div>
      </div>
    </section>
  );
}
