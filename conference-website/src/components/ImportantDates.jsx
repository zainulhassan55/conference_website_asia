import SectionHeading from "./SectionHeading";
import { importantDates } from "../data/conferenceData";

export default function ImportantDates() {
  return (
    <section id="dates" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Timeline"
          title="Important Dates"
          subtitle="Mark your calendar with these key deadlines and milestones for the conference."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ieee-blue via-ieee-light to-gold" />

            <div className="space-y-6">
              {importantDates.map((item, index) => (
                <div key={item.label} className="relative flex gap-6 sm:gap-8 items-start">
                  <div
                    className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 ${
                      item.status === "highlight"
                        ? "bg-gradient-to-br from-gold to-gold-light shadow-lg shadow-gold/30"
                        : "bg-white border-2 border-ieee-blue shadow-md"
                    }`}
                  >
                    <span
                      className={`text-sm sm:text-base font-bold ${
                        item.status === "highlight" ? "text-slate-900" : "text-ieee-blue"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className={`flex-1 card-hover rounded-2xl p-5 sm:p-6 ${
                      item.status === "highlight"
                        ? "bg-gradient-to-r from-ieee-dark to-ieee-blue text-white shadow-xl shadow-ieee-blue/20"
                        : "bg-white border border-slate-100 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3
                        className={`font-semibold text-lg ${
                          item.status === "highlight" ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.label}
                      </h3>
                      <span
                        className={`inline-flex self-start px-4 py-1.5 rounded-full text-sm font-semibold ${
                          item.status === "highlight"
                            ? "bg-gold/20 text-gold-light"
                            : "bg-ieee-blue/10 text-ieee-blue"
                        }`}
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
