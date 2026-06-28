import PageBanner from "../components/PageBanner";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Get in Touch"
        title="Contact"
        subtitle="Reach out to the organizing committee for inquiries about the conference."
      />
      <Contact showHeading={false} />
    </>
  );
}
