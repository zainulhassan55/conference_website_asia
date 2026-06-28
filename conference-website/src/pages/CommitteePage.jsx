import PageBanner from "../components/PageBanner";
import Committee from "../components/Committee";

export default function CommitteePage() {
  return (
    <>
      <PageBanner
        badge="Organizing Committee"
        title="Committee"
        subtitle="Meet the team organizing AISCN 2027."
      />
      <Committee showHeading={false} />
    </>
  );
}
