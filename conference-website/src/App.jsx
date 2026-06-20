import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";
import CallForPapers from "./components/CallForPapers";
import Speakers from "./components/Speakers";
import Tracks from "./components/Tracks";
import Committee from "./components/Committee";
import Registration from "./components/Registration";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <CallForPapers />
      <Speakers />
      <Tracks />
      <Committee />
      <Registration />
      <Venue />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
