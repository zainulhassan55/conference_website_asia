import PageBanner from "../components/PageBanner";
import TutorialsWorkshops from "../components/TutorialsWorkshops";

export default function TutorialsPage() {
  return (
    <>
      <PageBanner
        badge="Program"
        title="Tutorials & Workshops"
        subtitle="Expert-led sessions and interactive workshops on emerging research directions."
      />
      <TutorialsWorkshops showHeading={false} />
    </>
  );
}
