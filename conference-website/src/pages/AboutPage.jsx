import PageBanner from "../components/PageBanner";
import About from "../components/About";
import { conference } from "../data/conferenceData";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="About"
        title="About the Conference"
        subtitle={`${conference.dates.display} · ${conference.location.display}`}
      />
      <About />
    </>
  );
}
