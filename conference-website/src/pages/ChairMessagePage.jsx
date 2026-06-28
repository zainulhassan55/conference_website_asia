import PageBanner from "../components/PageBanner";
import WelcomeMessage from "../components/WelcomeMessage";

export default function ChairMessagePage() {
  return (
    <>
      <PageBanner
        badge="Authors"
        title="Chairs Message"
        subtitle="Welcome message from the General Chairs of AISCN 2027."
      />
      <WelcomeMessage showHeading={false} />
    </>
  );
}
