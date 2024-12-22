// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const JoinUs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const language = useSelector((state: RootState) => state.language.language);
  const fontsize = useSelector((state: RootState) => state.fontSize.size);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

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
    // AOS.init();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState("");

  // Sample array of project data (replace with actual data)
  const projectsEnglish = [
    {
      name: "Government Resolution no. GAD/MSM/e-file/1/2024/6058/ARTD2 dated 18/11/2024 in English.",
      viewUrl: "assets/docs/GAD_MSM_E-file_1_2023_6058_ARTD2_18112024_GU.pdf",
      downloadUrl:
        "assets/docs/GAD_MSM_E-file_1_2023_6058_ARTD2_18112024_GU.pdf",
    },
    {
      name: "Last Advertisement for the SARDAR PATEL GOOD GOVERNANCE CM FELLOWSHIP PROGRAM 2025-26",
      viewUrl: "assets/docs/Last_Advertisement_2025_26.pdf",
      downloadUrl: "assets/docs/Last_Advertisement_2025_26.pdf",
    },
    {
      name: "General Administration Department Government Resolution no. GAD/MSM/e-file/1/2023/7162/ARTD2 dated 24/11/2023 in Gujarati",
      viewUrl: "assets/docs/GAD_MSM_e-file_1_2023_7162_ARTD2_24112023_GU.pdf",
      downloadUrl:
        "assets/docs/GAD_MSM_e-file_1_2023_7162_ARTD2_24112023_GU.pdf",
    },
  ];

  const projectsGujarati = [
    {
      name: "સરકારી ઠરાવ નં. GAD/MSM/e-file/1/2024/6058/ARTD2 તારીખ 18/11/2024 ગુજરાતીમાં.",
      viewUrl: "assets/docs/GAD_MSM_E-file_1_2023_6058_ARTD2_18112024_GU.pdf",
      downloadUrl:
        "assets/docs/GAD_MSM_E-file_1_2023_6058_ARTD2_18112024_GU.pdf",
    },
    {
      name: "સરદાર પટેલ ગુડ ગવર્નન્સ સીએમ ફેલોશિપ પ્રોગ્રામ 2025-26 માટેની છેલ્લી જાહેરાત",
      viewUrl: "assets/docs/Last_Advertisement_2025_26.pdf",
      downloadUrl: "assets/docs/Last_Advertisement_2025_26.pdf",
    },
    {
      name: "સામાન્ય વહીવટ વિભાગ સરકારી ઠરાવ નં. GAD/MSM/e-file/1/2023/7162/ARTD2 તારીખ 24/11/2023 ગુજરાતીમાં",
      viewUrl: "assets/docs/GAD_MSM_e-file_1_2023_7162_ARTD2_24112023_GU.pdf",
      downloadUrl:
        "assets/docs/GAD_MSM_e-file_1_2023_7162_ARTD2_24112023_GU.pdf",
    },
  ];

  const handleOpenPdf = (url) => {
    setPdfSrc(url);
    setIsPdfOpen(true);
  };

  const handleClosePdf = () => {
    setIsPdfOpen(false);
  };

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
            {language === "English" ? "Join Us" : "ગેલેરી"}
          </h2>
        </div>
      </div>
      <div
        className={`min-h-screen  p-8 ${darkMode ? "bg-black" : "bg-[url('assets/img/illusion.png')]"
          }`}
      >
        <div className="container py-3 ">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="section__title port_double">
                <h2
                  className={`title ${darkMode && "text-white"}`}
                  style={{ fontSize: fontsize + 8 }}
                >
                  {language === "English" ? "Join Us" : "અમારી સાથે જોડાઓ"}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1
              className="text-3xl font-semibold text-center"
              style={{ fontSize: fontsize + 8 }}
            >
              {language === "English"
                ? "Useful information for CM Fellow Recruitment"
                : "સીએમ ફેલોની ભરતી માટે ઉપયોગી માહિતી"}
            </h1>
            <p className="mt-4 text-center" style={{ fontSize: fontsize + 2 }}>
              {language === "English"
                ? "Please read the instructions and follow carefully"
                : "કૃપા કરીને સૂચનાઓ વાંચો અને કાળજીપૂર્વક અનુસરો"}
            </p>
          </div>

          {/* Key Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2
              className="text-xl font-semibold"
              style={{ fontSize: fontsize + 8 }}
            >
              {language === "English" ? "Key Information" : "મુખ્ય માહિતી"}
            </h2>
            <ul
              className="list-disc pl-6 space-y-2 mt-4"
              style={{ fontSize: fontsize + 2 }}
            >
              <li>
                <strong>Monthly Stipend:</strong>{" "}
                {language === "English"
                  ? "Rs. 1,00,000/- + Rs. 10,000 (LTA)"
                  : "રૂ. 1,00,000/- + રૂ. 10,000 (LTA)"}
              </li>
              <li>
                <strong>Age Criteria:</strong>{" "}
                {language === "English"
                  ? "Should not be more than 35 years as on the last date of application"
                  : "અરજીની છેલ્લી તારીખે 35 વર્ષથી વધુ ન હોવી જોઈએ"}
              </li>
              <li>
                <strong>Application Fees:</strong>{" "}
                {language === "English"
                  ? "Rs. 500/- (Non-refundable)"
                  : "રૂ. 500/- (નૉન-રિફંડપાત્ર)"}
              </li>
            </ul>
          </div>

          {/* Important Things to Consider */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2
              className="text-xl font-semibold"
              style={{ fontSize: fontsize + 8 }}
            >
              {language === "English"
                ? "Important Things to Consider While Applying"
                : "અરજી કરતી વખતે ધ્યાનમાં લેવા જેવી મહત્વની બાબતો"}
            </h2>
            <ul
              className="list-disc pl-6 space-y-2 mt-4"
              style={{ fontSize: fontsize + 2 }}
            >
              <li>
                {language === "English"
                  ? "Applicants must fill their name as per the name in the SSC marksheet."
                  : "અરજદારોએ SSC માર્કશીટમાં નામ પ્રમાણે તેમનું નામ ભરવાનું રહેશે."}
              </li>
              <li>
                {language === "English"
                  ? "Applicants must have passed 10th, 12th, and graduation with 60% marks."
                  : "અરજદારોએ 60% માર્ક્સ સાથે 10મું, 12મું અને ગ્રેજ્યુએશન પાસ કરેલ હોવું જોઈએ."}
              </li>
              <li>
                {language === "English"
                  ? "Applicant also has to fill the details if graduation or post graduation is done from Prime national institute"
                  : "જો પ્રાઇમ નેશનલ ઇન્સ્ટિટ્યૂટમાંથી સ્નાતક અથવા અનુસ્નાતક કર્યું હોય તો અરજદારે વિગતો પણ ભરવાની રહેશે"}{" "}
              </li>
              <li>
                {language === "English"
                  ? "Applicant also has to fill the details if graduation or post graduation is done from International/foreign University/Institute"
                  : "આંતરરાષ્ટ્રીય/વિદેશી યુનિવર્સિટી/સંસ્થામાંથી ગ્રેજ્યુએશન કે પોસ્ટ ગ્રેજ્યુએશન કર્યું હોય તો અરજદારે વિગતો પણ ભરવાની રહેશે."}
              </li>
              <li>
                {language === "English"
                  ? "If the applicant has experience in a Government/Private organization for a period of three years or more, it should be indicated."
                  : "જો અરજદારને સરકારી/ખાનગી સંસ્થામાં ત્રણ વર્ષ કે તેથી વધુ સમયગાળાનો અનુભવ હોય, તો તે દર્શાવવો જોઈએ."}
              </li>
              <li>
                {language === "English"
                  ? "In the online application, the applicant has to write a personal statement in 1000 to 1200 words about his/her suitability as a fellow And don't use special characters"
                  : "ઓનલાઈન અરજીમાં, અરજદારે સાથી તરીકેની તેની યોગ્યતા વિશે 1000 થી 1200 શબ્દોમાં વ્યક્તિગત નિવેદન લખવું પડશે અને વિશેષ અક્ષરોનો ઉપયોગ કરશો નહીં."}
              </li>
              <li>
                {language === "English"
                  ? "The subject/project mentioned in row-12, column-2 of the sheet mentioned in Annexure-2 of the resolution dated 24/11/2023 attached herewith shall be considered valid."
                  : "આ સાથે જોડાયેલ 24/11/2023 ના ઠરાવના પરિશિષ્ટ-2 માં ઉલ્લેખિત શીટની પંક્તિ-12, કૉલમ-2 માં ઉલ્લેખિત વિષય/પ્રોજેક્ટ માન્ય ગણવામાં આવશે."}
              </li>
            </ul>
          </div>

          {/* Document Download */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2
              className="text-xl font-semibold"
              style={{ fontSize: fontsize + 8 }}
            >
              {language === "English"
                ? "Government Resolutions"
                : "સરકારી ઠરાવો"}
            </h2>
            <p className="mt-4" style={{ fontSize: fontsize + 2 }}>
              {language === "English"
                ? "The following document contains the General Administration Department GR no. GAD/MSM/e-file/1/202/7162/ARTD2 dated 24/11/2023 in Gujarati and English and GR no. GAD/MSM/e-file/1/2024/6058/ARTD2 dated 18/11/2024 in Gujarati."
                : "નીચેના દસ્તાવેજમાં સામાન્ય વહીવટ વિભાગનો GR નં. GAD/MSM/e-file/1/202/7162/ARTD2 તારીખ 24/11/2023 ગુજરાતી અને અંગ્રેજીમાં અને GR નં. GAD/MSM/e-file/1/2024/6058/ARTD2 તારીખ 18/11/2024 ગુજરાતીમાં."}
            </p>
            <p className="py-2" style={{ fontSize: fontsize + 2 }}>
              {language === "English"
                ? "In case of any issue concerning out of the GR, the Gujarati version will be considered final."
                : "GR ની બહાર કોઈ પણ મુદ્દાના કિસ્સામાં, ગુજરાતી સંસ્કરણને અંતિમ ગણવામાં આવશે."}
            </p>
            {/* <div className="space-x-4">
                            <a
                                href="assets/docs/useful.pdf"
                                className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                                download
                            >
                            </a>
                        </div> */}

            {/* PDF Viewer Modal */}
            {isPdfOpen && (
              <div
                className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 p-4"
                onClick={handleClosePdf} // Close when clicking outside
              >
                {/* Modal Container */}
                <div
                  className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl h-[80vh]"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                >
                  {/* Close Button */}
                  <button
                    onClick={handleClosePdf}
                    className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
                  >
                    <IoCloseSharp size={20} />
                  </button>

                  {/* PDF Viewer */}
                  <div className="w-full h-full">
                    <embed
                      src={pdfSrc}
                      type="application/pdf"
                      className="w-full h-full rounded-b-lg"
                    />
                  </div>
                </div>
              </div>
            )}



            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Annexure
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Document
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {language === "English" ? (
                    <>
                      {projectsEnglish.map((project, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                          >
                            {project.name}
                          </th>
                          <td className="px-6 py-4">
                            <div className="flex justify-between items-center gap-2">
                              <div className="cursor-pointer">
                                <FaRegEye
                                  onClick={() => handleOpenPdf(project.viewUrl)}
                                />
                              </div>
                              <div className="cursor-pointer">
                                <a href={project.downloadUrl} download>
                                  <FaDownload />
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {projectsGujarati.map((project, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                          >
                            {project.name}
                          </th>
                          <td className="px-6 py-4">
                            <div className="flex justify-between items-center gap-2">
                              <div className="cursor-pointer">
                                <FaRegEye
                                  onClick={() => handleOpenPdf(project.viewUrl)}
                                />
                              </div>
                              <div className="cursor-pointer">
                                <a href={project.downloadUrl} download>
                                  <FaDownload />
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinUs;
