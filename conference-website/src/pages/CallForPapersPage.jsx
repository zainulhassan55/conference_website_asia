import PageBanner from "../components/PageBanner";
import Tracks from "../components/Tracks";
import { callForPapersIntro, conference } from "../data/conferenceData";

export default function CallForPapersPage() {
  return (
    <>
      <PageBanner
        badge="Authors"
        title="Call for Papers"
        subtitle={`${conference.dates.display} · ${conference.location.display}`}
      />

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {callForPapersIntro}
          </p>
        </div>
      </section>

      <Tracks home />
    </>
  );
}
