import PageBanner from "../components/PageBanner";
import Workshops from "../components/Workshops";

export default function WorkshopsPage() {
  return (
    <>
      <PageBanner
        badge="Workshops"
        title="Call for Workshop Proposal"
        subtitle="Submit your workshop proposal to be held in conjunction with AISCN 2027."
      />
      <Workshops />
    </>
  );
}
