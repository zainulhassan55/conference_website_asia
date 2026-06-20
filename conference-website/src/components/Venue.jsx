import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";
import { IconLocation } from "./Icons";

export default function Venue() {
  const nearby = [
    { name: "Indira Gandhi International Airport", distance: "15 km" },
    { name: "New Delhi Railway Station", distance: "12 km" },
    { name: "Metro Station (Dwarka Sector 25)", distance: "2 km" },
  ];

  const hotels = [
    { name: "The Leela Ambience", rating: "5 Star", distance: "3 km" },
    { name: "Radisson Blu Plaza", rating: "5 Star", distance: "5 km" },
    { name: "Holiday Inn Express", rating: "4 Star", distance: "2 km" },
  ];

  return (
    <section id="venue" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Venue & Travel"
          title="Conference Location"
          subtitle={`Join us at the prestigious ${conference.location.venue} in the heart of ${conference.location.city}.`}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-ieee-dark to-ieee-blue p-8 lg:p-10 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ieee-light/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <IconLocation className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-display)]">
                {conference.location.venue}
              </h3>
              <p className="mt-3 text-ieee-light text-lg">{conference.location.city}, {conference.location.country}</p>
              <p className="mt-6 text-slate-300 leading-relaxed">
                A world-class convention center equipped with state-of-the-art audiovisual facilities,
                spacious halls, and excellent connectivity — the perfect setting for an international conference.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-semibold text-gold-light mb-4">Nearby Transport</h4>
                <div className="space-y-3">
                  {nearby.map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-white font-medium bg-white/10 px-3 py-1 rounded-full">{item.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-display)] mb-6">
              Recommended Hotels
            </h3>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.name}
                  className="card-hover flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{hotel.name}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{hotel.rating}</p>
                  </div>
                  <span className="text-ieee-blue font-medium text-sm bg-ieee-blue/10 px-4 py-1.5 rounded-full">
                    {hotel.distance} from venue
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gold/10 border border-gold/20">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-slate-900">Visa Information:</strong> International participants may require
                a conference visa. Contact the organizing committee for invitation letters after registration confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
