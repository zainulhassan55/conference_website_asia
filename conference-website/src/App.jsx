import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";
import CallForPapers from "./components/CallForPapers";
import Submission from "./components/Submission";
import Tracks from "./components/Tracks";
import Awards from "./components/Awards";
import Committee from "./components/Committee";
import TutorialsWorkshops from "./components/TutorialsWorkshops";
import Speakers from "./components/Speakers";
import Registration from "./components/Registration";
import Sponsorship from "./components/Sponsorship";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <CallForPapers />
      <Submission />
      <Tracks />
      <Awards />
      <Committee />
      <TutorialsWorkshops />
      <Speakers />
      <Registration />
      <Sponsorship />
      <Venue />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
