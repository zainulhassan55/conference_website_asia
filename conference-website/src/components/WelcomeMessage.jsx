import SectionHeading from "./SectionHeading";
import { welcomeMessage } from "../data/conferenceData";

export default function WelcomeMessage({ showHeading = true }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="General Chairs"
            title="Welcome Message from the General Chairs"
            subtitle={welcomeMessage.chair}
          />
        )}

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 lg:p-10 shadow-sm">
            <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
              {welcomeMessage.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="font-bold text-slate-900 text-lg">{welcomeMessage.chairNameOne}</p>
              <p className="font-bold text-slate-900 text-lg">{welcomeMessage.chairName}</p>
              <p className="text-ieee-blue font-medium">{welcomeMessage.chairTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
