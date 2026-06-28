import PageBanner from "../components/PageBanner";
import ImportantDates from "../components/ImportantDates";

export default function DatesPage() {
  return (
    <>
      <PageBanner
        badge="Timeline"
        title="Important Dates"
        subtitle="Mark your calendar with these key deadlines and milestones for the conference."
      />
      <ImportantDates />
    </>
  );
}
