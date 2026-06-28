import PageBanner from "../components/PageBanner";
import Speakers from "../components/Speakers";

export default function SpeakersPage() {
  return (
    <>
      <PageBanner
        badge="Program"
        title="Keynote Speakers"
        subtitle="Distinguished experts sharing insights on cutting-edge research and industry trends."
      />
      <Speakers showHeading={false} />
    </>
  );
}
