import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";
import CallForPapers from "./components/CallForPapers";
import Submission from "./components/Submission";
import Tracks from "./components/Tracks";
import Awards from "./components/Awards";
import Committee from "./components/Committee";
import Registration from "./components/Registration";
import Sponsorship from "./components/Sponsorship";
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
      <Submission />
      <Tracks />
      <Awards />
      <Committee />
      <Registration />
      <Sponsorship />
      <Venue />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
