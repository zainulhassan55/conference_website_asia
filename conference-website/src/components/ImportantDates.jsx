import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { importantDates } from "../data/conferenceData";

export default function ImportantDates({ preview = false }) {
  const dates = preview ? importantDates.slice(0, 4) : importantDates;

  return (
    <section id="dates" className={`py-20 lg:py-28 ${preview ? "bg-white" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {preview && (
          <SectionHeading
            badge="Timeline"
            title="Important Dates"
            subtitle="Mark your calendar with these key deadlines and milestones for the conference."
          />
        )}

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ieee-blue via-ieee-light to-gold" />

            <div className="space-y-6">
              {dates.map((item) => (
                <div key={item.label} className="relative flex gap-6 sm:gap-8 items-start pl-1">
                  <div
                    className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full shrink-0 mt-6 ${
                      item.status === "highlight"
                        ? "bg-gradient-to-br from-gold to-gold-light shadow-lg shadow-gold/30"
                        : "bg-ieee-blue border-2 border-white shadow-md"
                    }`}
                  />

                  <div
                    className={`flex-1 card-hover rounded-2xl p-5 sm:p-6 ${
                      item.status === "highlight"
                        ? "bg-gradient-to-r from-ieee-dark to-ieee-blue text-white shadow-xl shadow-ieee-blue/20"
                        : "bg-white border border-slate-100 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <h3
                        className={`font-semibold text-base sm:text-lg leading-snug ${
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

          {preview && (
            <div className="text-center mt-10">
              <Link
                to="/dates"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-ieee-blue/30 transition-all"
              >
                View All Dates
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
