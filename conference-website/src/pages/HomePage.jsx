import Hero from "../components/Hero";
import AimAndScope from "../components/AimAndScope";
import Tracks from "../components/Tracks";
import Awards from "../components/Awards";
import Organizers from "../components/Organizers";
import TechnicalSponsor from "../components/TechnicalSponsor";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechnicalSponsor />
      <AimAndScope />
      <Tracks home />
      <Awards hideBadge />
      <Organizers />
    </>
  );
}
