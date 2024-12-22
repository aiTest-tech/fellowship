// @ts-nocheck
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { FaYoutube } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

import Modal from "react-modal";

// interface VideoCardProps {
//     videoUrl: string;
// }

// const VideoCard: React.FC<VideoCardProps> = ({ videoUrl }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div>
//             {/* Card */}
//             <div
//                 className="card"
//                 style={cardStyle}
//                 onClick={openModal}
//             >
//                 <h3>Click to Watch Video</h3>
//                 <p>Click this card to open a YouTube video</p>
//             </div>

//             {/* Modal for YouTube Video */}
//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="YouTube Video Modal"
//                 style={modalStyle}
//             >
//                 <button onClick={closeModal} style={closeButtonStyle}>Close</button>
//                 <div style={iframeWrapperStyle}>
//                     <iframe
//                         width="100%"
//                         height="315"
//                         src={videoUrl}
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     />
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// // Card Style
// const cardStyle: React.CSSProperties = {
//     width: '300px',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
// };

// const modalStyle = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         transform: 'translate(-50%, -50%)',
//         width: '80%',
//         maxWidth: '600px',
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
// };

// const closeButtonStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
// };

// const iframeWrapperStyle: React.CSSProperties = {
//     position: 'relative',
//     paddingBottom: '56.25%',
//     height: '0',
//     overflow: 'hidden',
//     maxWidth: '100%',
// };

// VideoCard;
// const ResponsiveCard = () => {
//   const darkMode = useSelector((state: RootState) => state.theme.darkMode);

//   // State for handling modal
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Card data
//   const cards = [
//     {
//       id: 1,
//       title:
//         "4th edition of the Global Renewable Energy Investors Meet and Expo (4th RE-INVEST) from 16th to 18th September, 2024 at Mahatma Mandir, Gandhinagar, Gujarat.",
//       image: "assets/img/fellows/renuableEnergy.jpeg",
//     },
//     {
//       id: 2,
//       title: "Participation of CM Fellows at 11th Chintan Shibir, Somnath 2024",
//       image: "assets/img/fellows/chintansibir.jpeg",
//     },
//     {
//       id: 3,
//       title: "Field Visit SWAGAT",
//       image: "assets/img/fellows/swagat.jpeg",
//     },
//     {
//       id: 4,
//       title: "Field visit at GST bhavan",
//       image: "assets/img/fellows/gstbhavan.jpeg",
//     },
//     {
//       id: 5,
//       title:
//         "SPIPA Organizes two weeks training program on date-11 June to 22 June 2024",
//       image: "assets/img/fellows/spipatraining.jpeg",
//     },
//   ];

//   // Open modal with selected card
//   const openModal = (card) => {
//     setSelectedCard(card);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCard(null);
//   };

//   return (
//     <div className={`p-4 ${darkMode && "bg-black"}`}>
//       <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
//             onClick={() => openModal(card)}
//           >
//             <img
//               className="w-full h-48 object-cover"
//               src={card.image}
//               alt={card.title}
//             />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2">
//                 {card.title.length > 50
//                   ? card.title.substring(0, 50) + "..."
//                   : card.title}
//               </div>
//               {card.title.length > 50 && (
//                 <button
//                   onClick={() => openModal(card)}
//                   className="text-blue-500 hover:underline"
//                 >
//                   Read more
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Popup */}
//       {isModalOpen && selectedCard && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               className="w-full h-64 object-cover mb-4"
//               src={selectedCard.image}
//               alt={selectedCard.title}
//             />
//             <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
//             <button
//               onClick={closeModal}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const ResponsiveCard = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  // States for handling modals
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaSrc, setMediaSrc] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Card data
  const cards = [
    {
      id: 1,
      title:
        "Chief Minister Meets Young Fellows of the Sardar Patel Good Governance CM Fellowship",
      image: "https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg",
    },
    {
      id: 2,
      title:
        "4th edition of the Global Renewable Energy Investors Meet and Expo (4th RE-INVEST) from 16th to 18th September, 2024 at Mahatma Mandir, Gandhinagar, Gujarat.",
      image: "assets/img/fellows/renuableEnergy.jpeg",
    },
    {
      id: 3,
      title: "Participation of CM Fellows at 11th Chintan Shibir, Somnath 2024",
      image: "assets/img/fellows/chintansibir.jpeg",
    },
    {
      id: 4,
      title: "CM Fellow Visit of State Wide Attention on Grievances by Application of Technology (SWAGAT) Program As Part Of Orientation and Learning",
      image: "assets/img/fellows/swagat.jpeg",
    },
    {
      id: 5,
      title: "CM Fellow Visit of GST Bhavan Program As Part Of Orientation and Learning",
      image: "assets/img/fellows/gstbhavan.jpeg",
    },
    {
      id: 6,
      title:
        "SPIPA Organizes two weeks training program on date-11 June to 22 June 2024",
      image: "assets/img/fellows/spipatraining.jpeg",
    },
  ];

  // Video card data
  const video = {
    id: 0,
    title:
      "In 2009, the then Chief Minister, Shri Narendra Modi, speech on the CM’s Fellowship Program.",
    thumbnail: "https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/T84-zpPbkhM?t=1s",
  };

  // Open modal for image cards
  const openImageModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  // Open modal for video
  const openVideoModal = (url) => {
    setMediaSrc(url);
    setIsVideoModalOpen(true);
  };

  // Close video modal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setMediaSrc("");
  };

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "relative",
      width: "80%",
      maxWidth: "800px",
      background: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
    },
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "20px",
      cursor: "pointer",
      color: "#000",
    },
    iframe: {
      width: "100%",
      height: "450px",
      border: "none",
    },
  };

  return (
    <div className={`p-4 ${darkMode && "bg-black"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Video Card as the first card */}
        <div
          key={video.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
          onClick={() => openVideoModal(video.videoUrl)}
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src={video.thumbnail}
              alt={video.title}
            />
            <FaYoutube
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-red-500"
              size={50}
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {video.title.length > 50
                ? video.title.substring(0, 250) + "..."
                : video.title}
            </div>
          </div>
        </div>

        {/* Image cards */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
            onClick={() => openImageModal(card)}
          >
            <img
              className="w-full h-48 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {card.title.length > 50
                  ? card.title.substring(0, 100) + "..."
                  : card.title}
              </div>
              {card.title.length > 50 && (
                <button
                  onClick={() => openImageModal(card)}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeImageModal}
            >
              <IoCloseCircle size={30} className="text-red-700" />
            </button>
            <img
              className="w-full h-64 object-cover mb-4"
              src={selectedCard.image}
              alt={selectedCard.title}
            />
            <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div style={modalStyles.overlay} onClick={closeVideoModal}>
          <div
            style={modalStyles.content}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeVideoModal}
            >
              <IoCloseCircle size={30} className="text-white" />
            </button>
            <iframe
              src={mediaSrc}
              style={modalStyles.iframe}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

// const VideoCard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [mediaType, setMediaType] = useState(""); // 'photo' or 'video'
//   const [mediaSrc, setMediaSrc] = useState(""); // URL of the clicked media

//   // Function to open the modal
//   const openModal = (type, src) => {
//     setMediaType(type);
//     setMediaSrc(src);
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setMediaSrc(""); // Clear the media source
//   };

// const modalStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     zIndex: 1000,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   content: {
//     position: "relative",
//     width: "80%",
//     maxWidth: "800px",
//     background: "#fff",
//     borderRadius: "8px",
//     overflow: "hidden",
//   },
//   close: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     fontSize: "20px",
//     cursor: "pointer",
//     color: "#000",
//   },
//   iframe: {
//     width: "100%",
//     height: "450px",
//     border: "none",
//   },
// };

//   return (
//     <>
//       <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded overflow-hidden shadow-lg mx-auto mt-10">
//         {/* Thumbnail Section */}
//         <div className="relative">
//           <img
//             className="w-full object-cover"
//             src="https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg"
//             alt="Video Thumbnail"
//           />
//           <div>
//             <FaYoutube
//               className="absolute top-[50%] left-[50%] text-red-500"
//               size={50}
//               onClick={() =>
//                 openModal(
//                   "video",
//                   "https://www.youtube.com/embed/T84-zpPbkhM?t=1s"
//                 )
//               }
//             />
//           </div>
//         </div>
//         {/* Content Section */}
//         <div className="px-4 py-3">
//           {/* Title */}
//           <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 truncate">
//             Sardar Patel Good Governance CM Fellowship Program
//           </h2>
//           {/* Channel and Date Info */}
//           <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
//             <div className="flex items-center space-x-2">
//               <img
//                 className="w-8 h-8 rounded-full"
//                 src="assets/img/logo.jpeg"
//                 alt="Channel Avatar"
//               />
//               <span className="font-semibold text-gray-700">
//                 Sardar Patel Good Governance CM Fellowship Program
//               </span>
//             </div>
//             {/* <span>1 day ago</span> */}
//           </div>
//           {/* Views Info */}
//           <div className="mt-1 text-sm text-gray-500">
//             {/* <span>5.2K views</span> */}
//           </div>
//         </div>
//       </div>

//       {/* Modal for Viewing Media */}
// {isModalOpen && (
//   <div className="modal" onClick={closeModal} style={modalStyles.overlay}>
//     <div
//       className="modal-content"
//       onClick={(e) => e.stopPropagation()}
//       style={modalStyles.content}
//     >
//       <span
//         className="close"
//         onClick={closeModal}
//         style={modalStyles.close}
//       >
//         ×
//       </span>
//       <div style={modalStyles.videoWrapper}>
//         <iframe
//           src={mediaSrc}
//           frameBorder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           title="YouTube Video"
//           style={modalStyles.iframe}
//         />
//       </div>
//     </div>
//   </div>
// )}
//     </>
//   );
// };

const VideoCard = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaSrc, setMediaSrc] = useState("");

  // Open modal
  const openModal = (src) => {
    setMediaSrc(src);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setMediaSrc("");
  };

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "relative",
      width: "80%",
      maxWidth: "800px",
      background: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
    },
    close: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "20px",
      cursor: "pointer",
      color: "#000",
    },
    iframe: {
      width: "100%",
      height: "450px",
      border: "none",
    },
  };

  const videos = [
    {
      id: 1,
      title:
        "In 2009, the then Chief Minister, Shri Narendra Modi, speech on the CM’s Fellowship Program.",
      thumbnail: "https://i.ytimg.com/vi/T84-zpPbkhM/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/T84-zpPbkhM?t=1s",
    },
  ];

  return (
    <div className={`p-4 ${darkMode && "bg-black"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer"
            onClick={() => openModal(video.videoUrl)}
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                src={video.thumbnail}
                alt={video.title}
              />
              <FaYoutube
                className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-red-500"
                size={50}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {video.title.length > 50
                  ? video.title.substring(0, 50) + "..."
                  : video.title}
              </div>
              {video.title.length > 50 && (
                <button
                  onClick={() => openModal(video.videoUrl)}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal} style={modalStyles.overlay}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={modalStyles.content}
          >
            <span
              className="close"
              onClick={closeModal}
              style={modalStyles.close}
            >
              ×
            </span>
            <div style={modalStyles.videoWrapper}>
              <iframe
                src={mediaSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
                style={modalStyles.iframe}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Modal styles
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    position: "relative",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "90%",
    maxHeight: "80%",
    overflow: "auto",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "30px",
    cursor: "pointer",
  },
  media: {
    width: "100%",
    height: "auto",
    maxHeight: "80vh", // Limit the max height to 80% of viewport height
  },
  videoWrapper: {
    position: "relative",
    paddingTop: "56.25%", // 16:9 Aspect Ratio (height = 9 / 16 * width)
    width: "100%",
    maxHeight: "80vh", // Adjust the height of the video to be responsive
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
};

const MediaPage = () => {
  // const { data, error, isError, isLoading } = useGetMediaDataQuery();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const language = useSelector((state: RootState) => state.language.language);
  const [scrollProgress, setScrollProgress] = useState(0);
  // const updateScrollProgress = () => {
  //   // Get total scrollable height
  //   const scrollHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const scrollPosition = window.scrollY;

  //   // Calculate the percentage of page scrolled
  //   const progress = (scrollPosition / scrollHeight) * 100;

  //   // Update state with the calculated progress
  //   setScrollProgress(progress);
  // };

  // useEffect(() => {
  //   // Initialize AOS for animations
  //   // AOS.init();

  //   // Add scroll event listener
  //   window.addEventListener("scroll", updateScrollProgress);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", updateScrollProgress);
  //   };
  // }, []);
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
            {language === "English" ? "Media" : "ગેલેરી"}
          </h2>
        </div>
      </div>
      <main className="fix">
        {/* <section className="ourportfolio section-pt-110 section-pb-110"> */}
        <section
          className={`${
            darkMode
              ? "bg-black section-pt-110 section-pb-110"
              : "section-pt-110 section-pb-110"
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <div className="section__title port_double">
                  <h2 className={`title ${darkMode && "text-white"}`}>
                    {language === "English" ? "Our Gallery" : "અમારી ગેલેરી"}
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center gutter-24 py-6 ">
                            {
                                data?.map((element, index) => (
                                    <>
                                        <div className="max-w-md rounded overflow-hidden shadow-lg">
                                            <img
                                                className="w-full py-2"
                                                src={element.img}
                                                alt="Sunset in the mountains"
                                            />
                                            <div className="px-6 py-4">
                                                <p className="text-gray-700 text-base">
                                                    {language === 'English' ? `${element.title_eng}` : `${element.title_guj}`}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div> */}

            <div className="flex justify-between flex-wrap">
              {data?.map((element, index) => (
                <>
                  <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                      <img src={element.img} alt="card-image" />
                    </div>
                    <div class="p-4">
                      <p class="text-slate-600 leading-normal font-light">
                        {element.title_eng}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <ResponsiveCard />
          {/* <VideoCard videoUrl='https://www.youtube.com/watch?v=T84-zpPbkhM' /> */}

          {/* <div className="row align-items-center pt-10">
            <div className="col-lg-12 col-md-12">
              <div className="section__title port_double">
                <h2 className={`title ${darkMode && "text-white"}`}>
                  {language === "English" ? "Our Gallery" : "અમારી ગેલેરી"}
                </h2>
              </div>
            </div>
          </div> */}

          {/* <VideoCard /> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MediaPage;
