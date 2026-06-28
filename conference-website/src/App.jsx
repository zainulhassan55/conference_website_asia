import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DatesPage from "./pages/DatesPage";
import SubmissionPage from "./pages/SubmissionPage";
import RegistrationPage from "./pages/RegistrationPage";
import CommitteePage from "./pages/CommitteePage";
import TutorialsPage from "./pages/TutorialsPage";
import SpeakersPage from "./pages/SpeakersPage";
import TracksPage from "./pages/TracksPage";
import AwardsPage from "./pages/AwardsPage";
import SponsorshipPage from "./pages/SponsorshipPage";
import VenuePage from "./pages/VenuePage";
import ContactPage from "./pages/ContactPage";
import ChairMessagePage from "./pages/ChairMessagePage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="dates" element={<DatesPage />} />
          <Route path="submission" element={<SubmissionPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="chair-message" element={<ChairMessagePage />} />
          <Route path="committee" element={<CommitteePage />} />
          <Route path="tutorials" element={<TutorialsPage />} />
          <Route path="speakers" element={<SpeakersPage />} />
          <Route path="tracks" element={<TracksPage />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="sponsorship" element={<SponsorshipPage />} />
          <Route path="venue" element={<VenuePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
