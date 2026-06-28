import PageBanner from "../components/PageBanner";
import Submission from "../components/Submission";
import { conference } from "../data/conferenceData";

export default function SubmissionPage() {
  return (
    <>
      <PageBanner
        badge="Authors"
        title="Paper Submission"
        subtitle={`${conference.dates.display} · ${conference.location.display}`}
      />
      <Submission showHeading={false} />
    </>
  );
}
