// @ts-nocheck
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MediaPage from "./pages/MediaPage/MediaPage";
import Faqs from "./pages/FAQS/Faqs";
import ContactUs from "./ContactUs";
import JoinUs from "./pages/JoinUs/JoinUs";
import AcademicPartner from "./components/AcademicPartner";
import MeetOurFellows from "./pages/MeetOurFellows/MeetOurFellows";
import About from "./pages/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import AccessibilityOptions from "./components/Accassebility/AccessibilityOptions";
import ScreenRecorder from "./pages/ScreenRecorder/ScreenRecorder";
import PagenoFound from "./pages/PagenoFound";
function App() {
  useEffect(() => {
    console.log("app protocol", window.location.protocol);
    if (window.location.protocol === "https:") {
      const httpURL = window.location.href.replace("https:", "http:");
      window.location.replace(httpURL);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTopButton>
                  <HomePage />
                </ScrollToTopButton>
              </>
            }
          />
          {/* <Route path="/" element={<><HomePage /></>} /> */}
          <Route
            path="/academic-partner"
            element={
              <>
                <ScrollToTopButton>
                  <AcademicPartner />
                </ScrollToTopButton>
              </>
            }
          />
          <Route
            path="/media"
            element={
              <>
                <ScrollToTopButton>
                  <MediaPage />
                </ScrollToTopButton>
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
                <ScrollToTopButton>
                  <Faqs />
                </ScrollToTopButton>
              </>
            }
          />
          <Route
            path="/contactUs"
            element={
              <>
                <ScrollToTopButton>
                  <ContactUs />
                </ScrollToTopButton>
              </>
            }
          />
          <Route
            path="/joinus"
            element={
              <>
                <ScrollToTopButton>
                  <JoinUs />
                </ScrollToTopButton>
              </>
            }
          />
          <Route
            path="/meet-our-fellows"
            element={
              <>
                <ScrollToTopButton>
                  <MeetOurFellows />
                </ScrollToTopButton>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <ScrollToTopButton>
                  <About />
                </ScrollToTopButton>
              </>
            }
          />
          <Route path="/screen-recorder" element={<ScreenRecorder />} />
          <Route path="*" element={<PagenoFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
