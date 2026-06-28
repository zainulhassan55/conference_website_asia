import Hero from "../components/Hero";
import AimAndScope from "../components/AimAndScope";
import Tracks from "../components/Tracks";
import Awards from "../components/Awards";
import TechnicalSponsor from "../components/TechnicalSponsor";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AimAndScope />
      <Tracks home />
      <Awards hideBadge />
      <TechnicalSponsor />
    </>
  );
}
