// @ts-nocheck
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";

const ScreenRecorder = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <>
      <div className={`${darkMode && "bg-black"}`}>
        {/* Navbar Section */}
        <div className="w-full fixed top-0 left-0 z-50">
          <Navbar />
        </div>

        {/* Table Section */}
        <div className="mt-[131px]">

        </div>
        <div>
          <table className="table align-middle text-gray-700 font-medium text-sm  container">
            <thead>
              <tr>
                <th>SCREEN READER</th>
                <th>WEBSITE</th>
                <th>FREE / COMMERCIAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Non Visual Desktop Access (NVDA)",
                  url: "http://www.nvda-project.org/",
                  type: "Free",
                },
                {
                  name: "System Access To Go",
                  url: "http://www.satogo.com/",
                  type: "Free",
                },
                {
                  name: "Thunder",
                  url: "http://www.screenreader.net/index.php?pageid=11",
                  type: "Free",
                },
                {
                  name: "WebAnywhere",
                  url: "http://webanywhere.cs.washington.edu/wa.php",
                  type: "Free",
                },
                {
                  name: "Hal",
                  url: "http://www.yourdolphin.co.uk/productdetail.asp?id=5",
                  type: "Commercial",
                },
                {
                  name: "JAWS",
                  url: "http://www.freedomscientific.com/Products/Blindness/JAWS",
                  type: "Commercial",
                },
                {
                  name: "Supernova",
                  url: "http://www.yourdolphin.co.uk/productdetail.asp?id=1",
                  type: "Commercial",
                },
                {
                  name: "Window-Eyes",
                  url: "https://www.eyeway.org.in/?q=windows-eyes",
                  type: "Commercial",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url}
                    </a>
                  </td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-[20px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ScreenRecorder;
