import PageBanner from "../components/PageBanner";
import Venue from "../components/Venue";
import { conference } from "../data/conferenceData";

export default function VenuePage() {
  return (
    <>
      <PageBanner
        badge="Location"
        title="Venue"
        subtitle={conference.location.display}
      />
      <Venue showHeading={false} />
    </>
  );
}
