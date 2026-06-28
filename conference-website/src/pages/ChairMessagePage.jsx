import PageBanner from "../components/PageBanner";
import WelcomeMessage from "../components/WelcomeMessage";

export default function ChairMessagePage() {
  return (
    <>
      <PageBanner
        badge="Authors"
        title="Chair Message"
        subtitle="Welcome message from the General Chair of AISCN 2027."
      />
      <WelcomeMessage showHeading={false} />
    </>
  );
}
