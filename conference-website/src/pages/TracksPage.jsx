import PageBanner from "../components/PageBanner";
import Tracks from "../components/Tracks";

export default function TracksPage() {
  return (
    <>
      <PageBanner
        badge="Program"
        title="Conference Topics"
        subtitle="The conference welcomes original research contributions in, but not limited to, the following areas."
      />
      <Tracks showHeading={false} />
    </>
  );
}
