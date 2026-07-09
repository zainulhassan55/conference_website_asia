import { conference } from "../data/conferenceData";

function SponsorLogoCard({ src, alt, imageScale = 1 }) {
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

export default function TechnicalSponsor() {
  return (
    <section id="technical-sponsor" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-slate-900">
            Technical Co-Sponsors
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-center text-slate-600">
            AISCN 2027 is supported by the following technical co-sponsors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto place-items-center">
          <SponsorLogoCard
            src={conference.ieeeSmcLogo}
            alt="IEEE Systems, Man, and Cybernetics Society logo"
            imageScale={1.75}
          />
          <SponsorLogoCard src={conference.ieeeLogo} alt="IEEE logo" imageScale={1.15} />
        </div>
      </div>
    </section>
  );
}
