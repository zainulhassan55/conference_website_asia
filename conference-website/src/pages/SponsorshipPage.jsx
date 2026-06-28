import PageBanner from "../components/PageBanner";
import Sponsorship from "../components/Sponsorship";

export default function SponsorshipPage() {
  return (
    <>
      <PageBanner
        badge="Partners"
        title="Sponsorship"
        subtitle="Partner with AISCN 2027 to connect with a global research community."
      />
      <Sponsorship showHeading={false} />
    </>
  );
}
