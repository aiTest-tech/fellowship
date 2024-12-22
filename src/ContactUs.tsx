// @ts-nocheck
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContactCard from "./components/ContactCard";
import { GiWorld } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import EmailImage from "./assets/edpspipa@gmail.com.png";
import PhoneImage from "./assets/phonenumber.png";

const ContactUs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const language = useSelector((state: RootState) => state.language.language);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const fontsize = useSelector((state: RootState) => state.fontSize.size);

  const updateScrollProgress = () => {
    // Get total scrollable height
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    // Calculate the percentage of page scrolled
    const progress = (scrollPosition / scrollHeight) * 100;

    // Update state with the calculated progress
    setScrollProgress(progress);
  };

  useEffect(() => {
    // Initialize AOS for animations
    // Aos.init();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-200 ease-in-out z-50"
      ></div>
      <div className="relative sm:mt-[120px] mt-[100px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="assets/img/fellows/banner.jpeg"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">
            {language === "English" ? "Contact Us" : "ગેલેરી"}
          </h2>
        </div>
      </div>
      <main className="fix">
        <div
          className={`container-fluid contact bg-light py-5 ${
            darkMode ? "bg-black" : "bg-illusion-pattern"
          }`}
        >
          {/* <div className="container-fluid contact bg-light py-5 bg-[url('assets/img/about-bg.jpg')]"> */}
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="section__title port_double">
                <h2
                  className={`title ${darkMode && "text-white"}`}
                  style={{ fontSize: fontsize + 8 }}
                >
                  {language === "English" ? "Contact Us" : "અમારો સંપર્ક કરો"}
                </h2>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row g-5">
              <div className="relative mb-32 max-w-sm mx-auto mt-24">
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50 h-[220px]">
                  <div className="absolute -mt-16 w-full flex justify-center">
                    <div className="w-[110px] h-[110px]  border-4 border-gray-200 rounded-md bg-[#0A4C7B]">
                      <GiWorld color="white" className="w-[100px] h-[100px]" />
                    </div>
                  </div>
                  <div className="px-6 mt-20">
                    <h1
                      className="font-semibold text-4xl text-center mb-1 text-blue-600"
                      style={{ fontSize: fontsize + 8 }}
                    >
                      Address
                    </h1>
                    <p
                      className="text-gray-700 text-sm text-center italic"
                      style={{ fontSize: fontsize - 1 }}
                    >
                      Administrative Reforms & Training Division, General
                      Administration Department,Govt. of Gujarat. Block No. 7,
                      1st Floor, New Sachivalaya,Gandhinagar, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mb-32 max-w-sm mx-auto mt-24">
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50 h-[220px]">
                  <div className="absolute -mt-16 w-full flex justify-center">
                    <div className="w-[110px] h-[110px]  border-4 border-gray-200 rounded-md bg-[#0A4C7B]">
                      <CgMail color="white" className="w-[100px] h-[100px]" />
                    </div>
                  </div>
                  <div className="px-6 mt-20">
                    <h1
                      className="font-semibold text-4xl text-center mb-1 text-blue-600"
                      style={{ fontSize: fontsize + 8 }}
                    >
                      Email
                    </h1>
                    <img src={EmailImage} className="ml-10" />
                  </div>
                </div>
              </div>

              <div className="relative mb-32 max-w-sm mx-auto mt-24">
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50 h-[220px]">
                  <div className="absolute -mt-16 w-full flex justify-center">
                    <div className="w-[110px] h-[110px]  border-4 border-gray-200 rounded-md bg-[#0A4C7B]">
                      <FaPhone color="white" className="w-[100px] h-[100px]" />
                    </div>
                  </div>
                  <div className="px-6 mt-20">
                    <h1
                      className="font-semibold text-4xl text-center mb-1 text-blue-600"
                      style={{ fontSize: fontsize + 8 }}
                    >
                      Phone
                    </h1>
                    <img src={PhoneImage} className="ml-10" />
                  </div>
                </div>
              </div>

              <div
                className="col-12 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="h-100 overflow-hidden rounded-5">
                  <iframe
                    width="100%"
                    height={600}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=new%20sachivalay%20block%20number%207+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  >
                    &lt;a href="https://www.gps.ie/"&gt;gps trackers&lt;/a&gt;
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
