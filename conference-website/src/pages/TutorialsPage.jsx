import PageBanner from "../components/PageBanner";
import TutorialsWorkshops from "../components/TutorialsWorkshops";

export default function TutorialsPage() {
  return (
    <>
      <PageBanner
        badge="Tutorials & Workshops"
        title="Call for Workshop Proposal"
        subtitle="Submit your workshop proposal to be held in conjunction with AISCN 2027."
      />
      <TutorialsWorkshops />
    </>
  );
}
