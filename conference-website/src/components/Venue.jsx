import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";
import { IconLocation } from "./Icons";

export default function Venue() {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${conference.location.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="venue" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Venue"
          title="Conference Location"
          subtitle={`${conference.dates.display} · ${conference.location.display}`}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-ieee-dark to-ieee-blue p-8 lg:p-10 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ieee-light/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <IconLocation className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-display)]">
                {conference.location.venue}
              </h3>
              <p className="mt-3 text-ieee-light text-lg">
                {conference.location.city}, {conference.location.country}
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {conference.location.address}
              </p>
              <p className="mt-6 text-slate-300 leading-relaxed">
                Asia University is a leading private university in Taichung, Taiwan, offering world-class
                facilities and a vibrant academic environment — an ideal setting for an international conference
                on AI, security, computing, and networking.
              </p>
              <a
                href={conference.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                <IconLocation className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg h-[300px] sm:h-[400px] lg:h-full lg:min-h-[420px]">
            <iframe
              title="Asia University, Taichung, Taiwan - Conference Venue"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
