import PageBanner from "../components/PageBanner";
import Registration from "../components/Registration";
import { conference } from "../data/conferenceData";

export default function RegistrationPage() {
  return (
    <>
      <PageBanner
        badge="Authors"
        title="Registration"
        subtitle={`${conference.dates.display} · ${conference.location.display}`}
      />
      <Registration showHeading={false} />
    </>
  );
}
