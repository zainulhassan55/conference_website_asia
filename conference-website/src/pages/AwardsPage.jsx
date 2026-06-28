import PageBanner from "../components/PageBanner";
import Awards from "../components/Awards";

export default function AwardsPage() {
  return (
    <>
      <PageBanner
        badge="Program"
        title="Awards"
        subtitle="Recognizing outstanding research contributions and presentations."
      />
      <Awards showHeading={false} />
    </>
  );
}
