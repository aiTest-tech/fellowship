// // @ts-nocheck
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css'; // ag-Grid styles
// import 'ag-grid-community/styles/ag-theme-alpine.css'; // ag-Grid theme styles
// import Footer from '../../components/Footer/Footer';
// import ProfileCard from '../../components/ProfileCard';
// import { useDispatch, useSelector } from 'react-redux';



// // const fellows = [
// //     {
// //         id: 1,
// //         name: 'Rahul Sharma',
// //         image: 'assets/img/profile/placeholder.jpg',
// //         bio: 'Tech innovator with 5 years of experience in AI and machine learning.'
// //     },
// //     {
// //         id: 2,
// //         name: 'Priya Patel',
// //         image: 'assets/img/profile/placeholder.jpg',
// //         bio: 'Social entrepreneur focusing on sustainable development initiatives.'
// //     },
// //     // Add more fellows as needed
// // ];


// const FellowCard = ({ fellow }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const language = useSelector((state: RootState) => state.language.language);

//     return (
//         <div
//             className="relative rounded-lg overflow-hidden shadow-lg"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <div className="relative">
//                 <img
//                     src={fellow.image}
//                     alt={fellow.name}
//                     className="w-full h-[400px] object-cover transition-transform duration-300 ease-in-out"
//                 />

//                 <div
//                     className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center 
//                         transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//                 >
//                     <div className="text-center p-6 text-white">
//                         <h3 className="text-2xl font-bold mb-3">{fellow.name}</h3>
//                         <p className="text-base">{fellow.bio}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const MeetOurFellows = () => {
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const language = useSelector((state: RootState) => state.language.language);
//     const darkMode = useSelector((state: RootState) => state.theme.darkMode)


//     // Update scroll progress
//     const updateScrollProgress = () => {
//         const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         const scrollPosition = window.scrollY;
//         const progress = (scrollPosition / scrollHeight) * 100;
//         setScrollProgress(progress);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', updateScrollProgress);
//         return () => {
//             window.removeEventListener('scroll', updateScrollProgress);
//         };
//     }, []);

//     // TableRow interface for type safety
//     interface TableRow {
//         id: number;
//         deptAllocated: string;
//         fullName: string;
//         age: number;
//         postGraduation: string;
//         pgUniversity: string;
//         bachelorsDegree: string;
//         ugUniversity: string;
//         linkedinUrl: string;
//         imgUrl: string;

//     }

//     // Sample data
//     const initialData: TableRow[] = [
//         {
//             "id": 1,
//             "deptAllocated": "Health and Family Welfare ",
//             "fullName": "Mr. Aaron Rajesh Christian",
//             "age": 28,
//             "postGraduation": "MBA",
//             "pgUniversity": "IIT Madras",
//             "bachelorsDegree": "B.Com",
//             "ugUniversity": "Ahmedabad University",
//             "linkedinUrl": "https://www.linkedin.com/in/aaronch687/",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHbrvGjj1_SzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710917912446?e=1738800000&v=beta&t=PXurdVuHHjsMlSdoA1pOyR_5-nCd5d_gzTGytqCU0J0"
//         },
//         {
//             "id": 2,
//             "deptAllocated": "Sports, Youth and Cultural Activities ",
//             "fullName": "Ms. Abhilasha Solanki",
//             "age": 31,
//             "postGraduation": "MBA Marketing",
//             "pgUniversity": "N.R. Institute of Business Management,GLS Univeris",
//             "bachelorsDegree": "BE Computer",
//             "ugUniversity": "Silver Oak College of Engineering and Technology",
//             "linkedinUrl": "",
//             "imgUrl": "assets/img/profile/placeholder.jpg"
//         },
//         {
//             "id": 3,
//             "deptAllocated": "Education Department (Primary & Secondary Education - improvement in enrollment of secondary & higher secondary school students)",
//             "fullName": "Mr. Aman Arun Kumar Anand",
//             "age": 33,
//             "postGraduation": "Masters of Arts",
//             "pgUniversity": "Tata Institute of Social Sciences Mumbai",
//             "bachelorsDegree": "B.Tech",
//             "ugUniversity": "Kalinga Institute of Industrial Technology ",
//             "linkedinUrl": "https://www.linkedin.com/in/aman-anand-199b179a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHuGwlmqogBQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707743055900?e=1738800000&v=beta&t=GXyrmWR2iVrFMgKW3SF_yUQnNOsyyxJOspm--j3Z-ko"
//         },
//         {
//             "id": 4,
//             "deptAllocated": "ICDS - Women & Child Development ",
//             "fullName": "Ms. Apoorvi Garg",
//             "age": 31,
//             "postGraduation": "PGDM",
//             "pgUniversity": "Entrepreneurship Development Institute of India",
//             "bachelorsDegree": "BBA",
//             "ugUniversity": "Ahmedabad University",
//             "linkedinUrl": "http://linkedin.com/in/apoorvigarg26",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHIxDkjTEq9bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697092650908?e=1738800000&v=beta&t=xZFv9o5P0QmHrBxCGAgVaztP74OCkSHIS7phV2Mn9QA"
//         },
//         {
//             "id": 5,
//             "deptAllocated": "ICDS (Primary Education Nodal), Women & Child Development",
//             "fullName": "Mr. Ashutosh Ramesh Jalan",
//             "age": 28,
//             "postGraduation": "MTech Part of Integrated Dual Degree program",
//             "pgUniversity": "IIT-BHU Varanasi",
//             "bachelorsDegree": "B.Tech",
//             "ugUniversity": "IIT BHU Varanasi",
//             "linkedinUrl": "http://www.linkedin.com/in/ashutoshjalan",
//             "imgUrl": "https://media.licdn.com/dms/image/sync/v2/D4E27AQH7o5-U3G64Lg/articleshare-shrink_800/articleshare-shrink_800/0/1715815056733?e=1734015600&v=beta&t=KjbzPDtKIyuXQd-0TINb82kWXekFF5H2mIpNKhyArqo"
//         },
//         {
//             "id": 6,
//             "deptAllocated": "Forest & Environment",
//             "fullName": "Mr. Bhavdeep Keshavlal Nakum",
//             "age": 33,
//             "postGraduation": "M.TECH Mechanical Engineering",
//             "pgUniversity": "IIT-RAM",
//             "bachelorsDegree": "B.E. Mechanical ",
//             "ugUniversity": "Gujarat Technological University",
//             "linkedinUrl": "https://www.linkedin.com/in/bhavdeep-nakum-7831b859?trk=contact-info",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFfoRJ7n2arGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709878850672?e=1738800000&v=beta&t=SIWRy7pQQ4PUzU3q6Jfg597sd_sSDvVD8UT3Agr9lqs"
//         },
//         {
//             "id": 7,
//             "deptAllocated": "Commissionerate of Rural Development",
//             "fullName": "Mr. Jatan S Bhanvadiya",
//             "age": 29,
//             "postGraduation": "M.A in Political Science",
//             "pgUniversity": "University of Delhi",
//             "bachelorsDegree": "B.A Hons in Political Science",
//             "ugUniversity": "The Maharaja Sayajirao University of Baroda",
//             "linkedinUrl": "https://www.linkedin.com/in/jatan-bhanvadiya-a596991a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQHOQqJKjLrBng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588234424055?e=1738800000&v=beta&t=dKvEBTTPQwFuPckt2jyPMM3r4HcVBDBwGaXQ-JW1C4Q"
//         },
//         {
//             "id": 8,
//             "deptAllocated": "Planning Division- GAD",
//             "fullName": "Mr. Kapil Kantibhai Dayma",
//             "age": 30,
//             "postGraduation": "M.Tech Industrial Engineering",
//             "pgUniversity": "Indian Institute of Technology, Kanpur",
//             "bachelorsDegree": "B.E. Mechanical ",
//             "ugUniversity": "Gujarat Technological University",
//             "linkedinUrl": "https://www.linkedin.com/in/kapil-dayma/",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQGy2DWCkrqUCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1522288707754?e=1738800000&v=beta&t=tuxRKC8o6Yypa3iskJhYIhIr9oLSStHPVR8gR8lGBRQ"
//         },
//         {
//             "id": 9,
//             "deptAllocated": "Agriculture ",
//             "fullName": "Dr. Kuldeep Vaidebhai Malam",
//             "age": 28,
//             "postGraduation": "M.Sc. Agriculture Agronomy",
//             "pgUniversity": "Junagadh Agricultural University",
//             "bachelorsDegree": "B.Sc. Hons. Agriculture",
//             "ugUniversity": "Junagadh Agricultural University",
//             "linkedinUrl": "https://www.linkedin.com/in/dr-kuldeep-malam-3757aa13b",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4E03AQEFkT-hhdOS5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720802257473?e=1738800000&v=beta&t=8vptr48_ZUhUnn-YB6eIWYet3Ee57lyLoJFPbeCOwQk"
//         },
//         {
//             "id": 10,
//             "deptAllocated": "Chief Minister's Office",
//             "fullName": "Mr. Kunal  Apastamb",
//             "age": 25,
//             "postGraduation": "MSc Behavioural and Economic Science",
//             "pgUniversity": "University of Warwick United Kingdom",
//             "bachelorsDegree": "BSc Economics Honours",
//             "ugUniversity": "Symbiosis School of Economics",
//             "linkedinUrl": "https://www.linkedin.com/in/kunalha/",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFvCsqaWM21nQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691348366603?e=1738800000&v=beta&t=oI4a3kV12VBRc1ipnByg6tTHEYT4wpSMIpUxiSppCQ0"
//         },
//         {
//             "id": 11,
//             "deptAllocated": "Irrigation ",
//             "fullName": "Ms. Rupal Harishchandra Budhbhatti",
//             "age": 32,
//             "postGraduation": "Water Resources Management",
//             "pgUniversity": "Gujarat Technological University",
//             "bachelorsDegree": "B.E Civil ",
//             "ugUniversity": "Gujarat Technological University",
//             "linkedinUrl": "https://www.linkedin.com/in/rupal-budhbhatti-003a7b72?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             "imgUrl": "assets/img/profile/placeholder.jpg"
//         },
//         {
//             "id": 12,
//             "deptAllocated": "Urban Development & Housing",
//             "fullName": "Ms. Saumya Mukesh Lathia",
//             "age": 30,
//             "postGraduation": "Master of Planning MPL",
//             "pgUniversity": "University of Southern California USC",
//             "bachelorsDegree": "Bachelor of Planning ",
//             "ugUniversity": "CEPT University, Ahmedabad",
//             "linkedinUrl": "https://www.linkedin.com/in/saumya-lathia-24883891",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQFnAASMRSxqLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559888901064?e=1738800000&v=beta&t=hWUL8mcVzMLDB6vpwuc575oQZCs9Nt2ihHgXzNQnqUg"
//         },
//         {
//             "id": 13,
//             "deptAllocated": "Tribal Development ",
//             "fullName": "Ms. Shruti Ajay Kumar Singh",
//             "age": 29,
//             "postGraduation": "MSc Water Science and Policy",
//             "pgUniversity": "SHIV NADAR UNIVERSITY",
//             "bachelorsDegree": "BSc Agriculture",
//             "ugUniversity": "SRI DEV SUMAN",
//             "linkedinUrl": "https://www.linkedin.com/in/shruti-singh-80b5a5168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQGFiVLVJE27Qw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689939064249?e=1738800000&v=beta&t=K4NLNPkAr8wyFW69Zeyn5xPqV50Ix7MFYrhqzLmyQ-s"
//         },
//         {
//             "id": 14,
//             "deptAllocated": "Sardar Patel Institute of Public Administration (SPIPA)",
//             "fullName": "Mr. Tushar  Meshram",
//             "age": 36,
//             "postGraduation": "MA Society and Culture",
//             "pgUniversity": "IIT Gandhinagar",
//             "bachelorsDegree": "BA Journalism",
//             "ugUniversity": "Bangalore University",
//             "linkedinUrl": "https://www.linkedin.com/in/tusharmeshram88",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/C5103AQH0XuAdWMxb8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1558092310727?e=1738800000&v=beta&t=Xzy5JFotYyEeOBnDouScJ6N3L_DbEn7ll9OgBFyw0kA"
//         },
//         {
//             "id": 15,
//             "deptAllocated": "Energy & Petrochemical ",
//             "fullName": "Mr. Ajaj Sheikh ",
//             "age": 27,
//             "postGraduation": "ME Electrical",
//             "pgUniversity": "Gujarat Technological University",
//             "bachelorsDegree": "B.Tech Electrical",
//             "ugUniversity": "Gujarat Technological University",
//             "linkedinUrl": "https://www.linkedin.com/in/ajaj-shaikh-246231134",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQG3-Q0b2P42eQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682439173222?e=1738800000&v=beta&t=OM65cGU-yQUWpRBX7fbKT0vVv5Q22X9C-Zxttn_GSA4"
//         },
//         {
//             "id": 16,
//             "deptAllocated": "Labour and Employment ",
//             "fullName": "Mr. Deep Patel",
//             "age": 35,
//             "postGraduation": "ME Computer Science",
//             "pgUniversity": "Gujarat Technological University",
//             "bachelorsDegree": "BE Computer",
//             "ugUniversity": "Gujarat Technological University",
//             "linkedinUrl": "https://in.linkedin.com/in/deep-patel-66410636",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQFyj_2tEXzbsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713603615326?e=1738800000&v=beta&t=kfuL0p3WfsLtAvXP4Qr1Y9sUFtUrD5vi1Le8MVi393Y"
//         },
//         {
//             "id": 17,
//             "deptAllocated": "Urban Development Department- Swachh Bharat Mission",
//             "fullName": "Mr.Parag Patel",
//             "age": 33,
//             "postGraduation": "M.Pharm",
//             "pgUniversity": "Institute of Life Sciences, Ahmedabad",
//             "bachelorsDegree": "B.Pharm",
//             "ugUniversity": "N M Padaliya Pharmacy College",
//             "linkedinUrl": "https://www.linkedin.com/in/parag-patel-64228529?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//             "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQEeBZDL_7lQ6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730363825367?e=1738800000&v=beta&t=pjFnkutdhdeXIwAeWDaJUAAAfuFM4HrbcQ3buVsh0sw"
//         }
//     ];

//     // Column definitions for ag-Grid
//     const columns = [
//         { headerName: 'ID', field: 'id', sortable: true, filter: true },
//         { headerName: 'Dept Allocated', field: 'deptAllocated', sortable: true, filter: true },
//         { headerName: 'Name', field: 'fullName', sortable: true, filter: true },
//         { headerName: 'Age', field: 'age', sortable: true, filter: true },
//         { headerName: 'Post Graduation', field: 'postGraduation', sortable: true, filter: true },
//         { headerName: 'PG University', field: 'pgUniversity', sortable: true, filter: true },
//         { headerName: 'Bachelors Degree', field: 'bachelorsDegree', sortable: true, filter: true },
//         { headerName: 'UG University', field: 'ugUniversity', sortable: true, filter: true },
//         { headerName: 'linkedinUrl', field: 'linkedinUrl', sortable: true, filter: true },
//         { headerName: 'imgUrl', field: 'imgUrl', sortable: true, filter: true },
//     ];

//     // Grid options for ag-Grid
//     const gridOptions = {
//         paginationPageSize: 10,
//         pagination: true,
//     };

//     return (
//         <>
//             <div className="w-full fixed top-0 left-0 z-50">
//                 <Navbar />
//             </div>
//             <div
//                 style={{ width: `${scrollProgress}%` }}
//                 className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-200 ease-in-out z-50"
//             ></div>
//             <div className="relative mt-[140px] max-w-md:mt-12 font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
//                 <img
//                     src="public/assets/img/cm-fellowship.jpg"
//                     alt="Banner Image"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
//                     <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">{language === 'English' ? 'Meet Our Fellows': 'અમારા ફેલોને મળો'}</h2>
//                 </div>
//             </div>
//             <main className="fix">


//                 <div className={`flex justify-center items-center  my-3 w-[100vw] ${darkMode ? "bg-black" : "bg-[url('assets/img/illusion.png')]"}`}>
//                     {/* Grid Layout for Profile Cards */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
//                         {
//                             initialData.map((item, index) => (
//                                 <>
//                                     <ProfileCard
//                                         name={item.fullName}
//                                         department={item.deptAllocated}
//                                         linkedinUrl={item.linkedinUrl}
//                                         imageUrl={item.imgUrl}
//                                     />
//                                 </>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     );
// };

// export default MeetOurFellows;

// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProfileCard from '../../components/ProfileCard';
import { useSelector } from 'react-redux';
import { TfiClose } from "react-icons/tfi";


const MeetOurFellows = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedFellow, setSelectedFellow] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    const language = useSelector((state: RootState) => state.language.language);

    const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const progress = (scrollPosition / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    const initialData = [
        {
            "id": 1,
            "deptAllocated": "Health & Family Welfare Department",
            "fullName": "Aaron Christian",
            "age": 28,
            "postGraduation": "MBA in Finance & Analytics, IIT Madras",
            "bachelorsDegree": "B.Com, Ahmedabad University",
            "linkedinUrl": "https://www.linkedin.com/in/aaronch687/",
            "imgUrl": "assets/img/fellowimages/aaron_christian.JPG",
            "exp": "Aaron has 5+ years of experience in Education, Health, and Public Finance domain. He has previously served as Operations & Strategy Manager at SRM Group, liaising between the Promoter's Office and leadership teams of all the Group Entities. As a Good Governance Fellow with Punjab's Finance Department and Chief Secretary's Office, he has worked on strategies to increase State revenue, analysis of department budgets, and M&E of key initiatives such as doorstep delivery of services, doorstep delivery of ration and healthcare institutions. Currently, as a CM Fellow with the Health Department, he contributes to implementing the AB PMJAY-MA scheme, driving impactful healthcare reforms."
        },
        {
            "id": 2,
            "deptAllocated": "Commissioner Youth Services & Cultural Activities",
            "fullName": "Abhilasha Solanki",
            "age": 31,
            "postGraduation": "MBA (Marketing & Finance) - N.R. Institute of Business Management, GLS ",
            "bachelorsDegree": "B.E. (Computer), Silver Oak College of Engineering & Technolog, GTU",
            "linkedinUrl": "",
            "imgUrl": "assets/img/fellowimages/abhilasha_solanki.JPG",
            "exp": "Abhilasha Solanki has 7.5 years of experience across multiple sectors. She has worked with iNDEXTb on Vibrant Gujarat 2017 project and has also worked with the Office of Industries Commissionerate on the study of the GeM portal. Additionally, she has experience in the IT sector, where she contributed to smart city projects, focusing on technical documentation and pre-sales related activities."
        },
        {
            "id": 3,
            "deptAllocated": "Education Department",
            "fullName": "Aman Anand",
            "age": 33,
            "postGraduation": "M.A In Development Studies, TISS Mumbai | MBA, IIM-Visakhapatnam",
            "bachelorsDegree": "B.Tech in Civil Engineering, KIIT University",
            "linkedinUrl": "https://www.linkedin.com/in/aman-anand-199b179a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "imgUrl": "assets/img/fellowimages/aman_anand.JPG",
            "exp": "Aman Anand has 7.5 years of experience in various sectors and industries. He has also worked as an MGN-Fellow with the Ministry of Skill Development & Entrepreneurship. As a fellow, he has worked on Policymaking and its implementation at District Level. Prior to this, he worked with CARE as a Manager in the Health Domain and also with Accenture In the IT Sector. As a CM Fellow with the Education Department, he contributes to improving student enrollment in schools focusing on achieving NEP 2020 goals. His interest areas are Project Management, Data Analysis, and Digital Marketing."
        },
        {
            "id": 4,
            "deptAllocated": "ICDS, Women & Child Development ",
            "fullName": "Apoorvi Garg",
            "age": 31,
            "postGraduation": "PGDM, Development Studies, Entrepreneurship Development Institute of India",
            "bachelorsDegree": "BBA, Ahmedabad University",
            "linkedinUrl": "http://linkedin.com/in/apoorvigarg26",
            "imgUrl": "assets/img/fellowimages/apoorvi_garg.JPG",
            "exp": "Apoorvi is a development sector professional with over 9.5 years of experience in the areas of health, nutrition, early childhood learning, child protection, sanitation and menstrual hygiene. Have worked with corporates in corporate social responsibility and government advisory in the areas of social impact assessment, knowledge management, investment promotion, waste management and sustainability. Prior experience of working with community based organisations, CSRs, government agenices, academic institutions and international UN organisations "
        },
        {
            "id": 5,
            "deptAllocated": "Comissionerate of PM POSHAN, Education Department",
            "fullName": "Ashutosh Jalan",
            "age": 28,
            "postGraduation": "M. Tech in Power Electronics (Electrical Engineering), IIT (BHU) Varanasi",
            "bachelorsDegree": "B. Tech in Electrical Engineering, IIT (BHU) Varanasi",
            "linkedinUrl": "http://www.linkedin.com/in/ashutoshjalan",
            "imgUrl": "assets/img/fellowimages/ashutosh_jalan.JPG",
            "exp": "Ashutosh is a social impact consultant with over 4+ years of work experience. He believes government is the strongest lever to bring change in the society and thus aspires to work with Government in a higher capacity.During his stint with Haryana Govt., he established and managed a dedicated cadre set up across the state for a mission and also created projects for middle management. Earlier as a LAMP fellow, he has worked with a Member of Parliament wherein he got an experience of Policy formulation, got to appreciate the potential and constraints of an elected representative being a change maker. A graduate from IIT (BHU) Varanasi, he is an Engineer by education and changemaker by heart!"
        },
        {
            "id": 6,
            "deptAllocated": "GPCB",
            "fullName": "Bhavdeep Nakum",
            "age": 33,
            "postGraduation": "M.Tech (IITRAM, Ahmedabad)",
            "bachelorsDegree": "B.E. Mechanical Engineering, Babaria Institute of Technology (affiliated to GTU)",
            "linkedinUrl": "https://www.linkedin.com/in/bhavdeep-nakum-7831b859?trk=contact-info",
            "imgUrl": "assets/img/fellowimages/bhavdeep_nakum.JPG",
            "exp": "Bhavdeep brings extensive experience in product development and project management across diverse industries, including aerospace, Building hardware, and the energy sector. Prior to his fellowship, he was actively involved in a pioneering waste-to-hydrogen project."
        },
        {
            "id": 7,
            "deptAllocated": "Department of Rural Development",
            "fullName": "Jatan Bhanvadiya",
            "age": 29,
            "postGraduation": "M.A in Political Science, University of Delhi",
            "bachelorsDegree": "B.A (Hons) in Political Science, The Maharaja Sayajirao University of Baroda",
            "linkedinUrl": "https://www.linkedin.com/in/jatan-bhanvadiya-a596991a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "imgUrl": "assets/img/fellowimages/jatan_bhanvadiya.JPG",
            "exp": "Jatan is an ex-LAMP Fellow and has worked in the domain of Parliament, Legislative Research and Public Leadership. As a Legislative Associate to Member of Parliament (NCT of Delhi) his work revolved around legislature, law making process and constituency development. He has also worked with Indian School of Democracy which focused to strengthen grassroots public leaders having the moral courage and imagination for the country. His interest areas lie around Governance, Polity and Indian Philosophy."
        },
        {
            "id": 8,
            "deptAllocated": "Planning Division, General Administration Department ",
            "fullName": "Kapil Dayma",
            "age": 30,
            "postGraduation": "M.Tech (Industrial Engineering), IIT Kanpur",
            "bachelorsDegree": "B.E. (Mechanical Engineering), L.D. College of Engineering ",
            "linkedinUrl": "https://www.linkedin.com/in/kapil-dayma/",
            "imgUrl": "assets/img/fellowimages/kapil_dayma.JPG",
            "exp": "Kapil is a professional in Data Science and Supply Chain Management, with a strong background in Business Analytics, Microeconomics, Financial Behavior, Operations Management, and Market Research. Previously worked with Accenture Digital and contributed to impactful studies, including research on the effect of Tata Trust development projects in Uttarakhand following the 2013 catastrophe. He conducted extensive field surveys in collaboration with the International Water Management Institute (IWMI) and the Tata Water Policy Program, addressing water management challenges in Kachchh district. Additionally, Conducted a survey as part of the research project by the Institute of Energy and Environment at Pennsylvania State University, assessing groundwater depletion linked to the Government of Gujarat's SKY Scheme. Currently, as a Chief Minister's Fellow with the Planning Division, General Administration Department, where he continues to drive innovative solutions for public policy and development."
        },
        {
            "id": 9,
            "deptAllocated": "Directorate SAMETI and ATMA (Agriculture, Farmers' Welfare and Co-operation Department) ",
            "fullName": "Dr. Kuldeep Vaidebhai Malam",
            "age": 28,
            "postGraduation": "M.Sc. (Agri.) Agronomy and Ph.D. (Agri.) Agronomy (Chancellor's Gold Medallist), Junagadh Agricultural University, Junagadh",
            "bachelorsDegree": "B.Sc. (Hons.) Agriculture, Junagadh Agricultural University, Junagadh",
            "linkedinUrl": "https://www.linkedin.com/in/dr-kuldeep-malam-3757aa13b",
            "imgUrl": "public/assets/img/fellowimages/kuldeep_malam.JPG",
            "exp": "Dr. Kuldeep is an accomplished agricultural professional with over 4 years of experience in research and extension. He contributed to the FASAL project of IMD for more than 3 years, gaining significant expertise in research and teaching as a Senior Research Fellow at JAU. At SDAU Bhachau, he led farmer outreach and awareness initiatives under the SSNNL project. Additionally, he enhanced research efforts on the AICRP-Groundnut project as a Young Professional at ICAR-DGR. His diverse experience highlights a strong dedication to innovation and farmer-focused solutions in agriculture."
        },
        {
            "id": 10,
            "deptAllocated": "Chief Minister's Office",
            "fullName": "Kunal  Apastamb",
            "age": 25,
            "postGraduation": "MSc Behavioural and Economic Science, University of Warwick, UK",
            "bachelorsDegree": "B.Sc Economics (Hon) , Symbiosis School of Economics",
            "linkedinUrl": "https://www.linkedin.com/in/kunalha/",
            "imgUrl": "public/assets/img/fellowimages/kunal_apastamb.JPG",
            "exp": "Kunal Apastamb is a policy researcher and consultant with expertise in behavioral public policy, governance systems, and intervention design. Previously, as a Research Associate at the NSE Centre for Behavioural Science, IIM Ahmedabad, he conducted experimental studies on neuroeconomics and behavioral design while contributing to publications and lab management. At the Ministry of Home Affairs, he analyzed governance processes and administrative reforms to improve service delivery. Currently, as a Chief Minister’s Fellow, he focuses on capacity building and citizen engagement."
        },
        {
            "id": 11,
            "deptAllocated": "Narmada, Water Resources, Water Supply and Kalpasar Department",
            "fullName": "Rupal Budhbhatti",
            "age": 32,
            "postGraduation": "M.E. Water Resources Management, L. D.  College of Engineering (affliated to GTU)",
            "bachelorsDegree": "B.E. Civil Engineering, Vishwakarma Government Engienering College, Chandkheda (affiliated to GTU)",
            "linkedinUrl": "https://www.linkedin.com/in/rupal-budhbhatti-003a7b72?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "imgUrl": "assets/img/fellowimages/rupal_budhbhatti.JPG",
            "exp": "Rupal has diverse experience in Water Resources and Geoinformatics. She previously worked as a Research Scientist at NRSC-ISRO, where she was working on developing methodology for flood vulnerability and risk assessment for Bihar state at the village level. Her research experience includes GLOF modeling at IISc Bangalore, where she developed a Python-based tool for inundation studies using the open-source hydrodynamic model ANUGA. She also worked on mapping the dew potential of Gujarat at DA-IICT in collaboration with a French scientist, focusing on advancing dew harvesting techniques."
        },
        {
            "id": 12,
            "deptAllocated": "Urban Development & Urban Housing Department ",
            "fullName": "Saumya Mukesh Lathia",
            "age": 30,
            "postGraduation": "Master's in Planning (MPL), from University of Southern California (USC)",
            "bachelorsDegree": "Bachelors of Planning (B.Plan) from CEPT University",
            "linkedinUrl": "https://www.linkedin.com/in/saumya-lathia-24883891",
            "imgUrl": "public/assets/img/fellowimages/saumya_lathia.JPG",
            "exp": "Saumya Lathia is an urban planner and researcher, working to forward sustainable and equitable development in cities. Prior to her engagement as a CM Fellow, she worked as an Adjunct Professor and Research Scholar at Ahmedabad University. Saumya has also served as an Element Scientist & Contributing Author for The Third Assessment Report on Climate Change and Cities (ARC3.3), a Data & Research Analyst at Los Angeles Homeless Services Authority (LAHSA), a Research Associate at Sol Price Center for Social Innovation (CSI) and a Research Assistant at CEPT’s Center for Urban Equity (CUE). She received a prestigious scholarship at USC to study comparative public policy and administration approaches in the European Union and the US. At CEPT, Saumya received the UKIERI scholarship to study comparative urban development and planning in the UK and India."
        },
        {
            "id": 13,
            "deptAllocated": "Tribal Development Department",
            "fullName": "Shruti Singh",
            "age": 29,
            "postGraduation": "MSc. Water Science and Policy, Shiv Nadar University, Greater Noida",
            "bachelorsDegree": "Bsc. Agriculture, Sri Dev Suman University, Dehradun",
            "linkedinUrl": "https://www.linkedin.com/in/shruti-singh-80b5a5168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            "imgUrl": "public/assets/img/fellowimages/shruti_singh.JPG",
            "exp": "Shruti has been part of the development sector since 2020. She has the experience of conducting surveys regarding a specified topic (participatory action model for groundwater analysis, vulnerability in rural areas during and post COVID-19) and be involved in dissemination of data as well as relief materials to frontline workers located across the nation during COVID-19. She has created content for newsletters and annual reports, handled communications, built documents for different funders (international and national), and held interactions between various senior Government and corporate officials and social entrepreneurs. She enjoys visiting different locations in rural areas, trying to understand the perspective of the locals about their livelihood."
        },
        {
            "id": 14,
            "deptAllocated": "Sardar Patel Institute of Public Administration (SPIPA)",
            "fullName": "Tushar Meshram",
            "age": 36,
            "postGraduation": "MA Society & Culture, IIT Gandhinagar | PGP Policy Design & Management, Indian School of Public Policy",
            "bachelorsDegree": "BA Journalism, Surana College (affiliated to Bangalore University)",
            "linkedinUrl": "https://www.linkedin.com/in/tusharmeshram88",
            "imgUrl": "public/assets/img/fellowimages/tushar_meshram.JPG",
            "exp": "Tushar has prior experience in learning and development and higher education managment. Prior to joining the Chief Minister's Fellowship, he was a Program Manager in the Young India Fellowship team at Ashoka University. He has also worked as a Pedagogical Research Associate at IIM Bangalore and started his career as an Academic Associate at IIM Ahmedabad. "
        },
        {
            "id": 15,
            "deptAllocated": "Energy & Petrochemicals Department",
            "fullName": "Ajaj Sheikh ",
            "age": 27,
            "postGraduation": "M.E. (Electrical), Shantilal Shah Engineering College, GTU (IPCL Gold Medalist) and PGD in Industrial Safety from GSFC University",
            "bachelorsDegree": "B.E. (Electrical), Gyanmanjari Institute of Technology, GTU",
            "linkedinUrl": "https://www.linkedin.com/in/ajaj-shaikh-246231134",
            "imgUrl": "public/assets/img/fellowimages/ajaj_shaikh.JPG",
            "exp": "Ajaj Shaikh is a versatile professional with a broad range of skill-set in Electrical Engineering, Industrial Safety, and Management. Prior joining to CM Fellow, He worked at Bureau of Indian Standards, Department of Consumer Affairs, GoI. He played a key part in analyzing inspection and test reports to ensure adherence to applicable standards and regulations. Furthermore, he was actively involved in managing market surveillance cell, conducting failure analysis and risk assessments and Search and Seizure operations."
        },
        {
            "id": 16,
            "deptAllocated": "Labour, Skill Development and Employment Department(Directorate of Skill Development)",
            "fullName": "Deep Patel",
            "age": 35,
            "postGraduation": "M.E.(Computer Engineering)-Noble Engineering college(GTU)",
            "bachelorsDegree": "B.E.(Computer Engineering),R.C.Patel Institute of Technology, Shirpur, Maharashtra ",
            "linkedinUrl": "https://in.linkedin.com/in/deep-patel-66410636",
            "imgUrl": "assets/img/fellowimages/deep_patel.JPG",
            "exp": "Deep Patel is an accomplished academic professional with extensive experience as an Assistant Professor in the Computer Department. He specializes in teaching advanced topics such as data analysis, Python, IoT, Android programming, mobile computing, and wireless communication. With practical expertise as a Data Analyst. He was Senior Engineer at the District Superintendent of Police Office, he contributed to the Command and Control Centre under the Gujarat Government's VISWAS project. He excelled in managing sophisticated surveillance systems, facilitating data-driven decision-making, and optimizing operational efficiency, effectively bridging the gap between theoretical knowledge and real-world applications in cutting-edge technologies."
        },
        {
            "id": 17,
            "deptAllocated": "Swachh Bharat Mission, Urban Development & Urban Housing Department",
            "fullName": "Parag Patel",
            "age": 33,
            "postGraduation": "M. Pharm in Pharmaceutics and Pharmaceutical Technology, Ahmedabad University",
            "bachelorsDegree": "B. Pharm, N. M. Padaliya Pharmacy College (Affiliated to GTU)",
            "linkedinUrl": "https://www.linkedin.com/in/parag-patel-64228529?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            "imgUrl": "assets/img/fellowimages/parag_patel.JPG",
            "exp": "Parag is a pharmaceutical professional with expertise in Regulatory Compliance, Drug Safety, Quality by Design and Business Development. With 8 years of experience in the pharma industry and the Food and Drug Department of Gujarat Government, he has gained in-depth knowledge of government policies. During the COVID-19 pandemic, he played a pivotal role in ensuring the availability of essential medicines and oxygen supplies. His work also involved conducting inspections, audits, survey and enforcing pharmaceutical standards. "
        }
    ];

    const handleCardClick = (fellow) => {
        setSelectedFellow(fellow);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
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
            <main className="relative sm:mt-[120px] mt-[100px]">
                <div className={`flex justify-center items-center   pt-[20px] w-[100vw] ${darkMode ? "bg-black" : "bg-white"}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 ">
                        {initialData.map((fellow) => (
                            <ProfileCard
                                key={fellow.id}
                                name={fellow.fullName}
                                department={fellow.deptAllocated}
                                linkedinUrl={fellow.linkedinUrl}
                                imageUrl={fellow.imgUrl}
                                onClick={() => handleCardClick(fellow)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />

            {/* {showPopup && selectedFellow && (
                <div
                    className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50 p-4" // Full-screen overlay
                    onClick={closePopup} // Close popup when clicking outside
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg relative max-w-[90vw] max-h-[80vh] overflow-auto sm:max-w-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-300"
                            onClick={closePopup}
                        >
                            <TfiClose className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col items-center space-y-4">
                            <img
                                src={selectedFellow.imgUrl}
                                alt={selectedFellow.fullName}
                                className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-gray-200"
                            />

                            <h3 className="text-2xl font-bold text-blue-900">{selectedFellow.fullName}</h3>

                            <div className="w-full space-y-4 text-gray-700">
                                <p>
                                    <span className="font-semibold text-blue-900">Department: </span>
                                    {selectedFellow.deptAllocated}
                                </p>

                                <p>
                                    <span className="font-semibold text-blue-900">Post Graduate: </span>
                                    {selectedFellow.postGraduation}
                                </p>

                                <p>
                                    <span className="font-semibold text-blue-900">Bachelors: </span>
                                    {selectedFellow.bachelorsDegree}
                                </p>

                                <p>
                                    <span className="font-semibold text-blue-900">Experience: </span>
                                    {selectedFellow.exp}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            {showPopup && selectedFellow && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-[80vw] max-h-[500px] overflow-auto sm:max-h-[80vh] sm:max-w-2xl">
                        <button
                            className="absolute top-8 right-8 text-gray-500 hover:text-gray-700"
                            onClick={closePopup}    
                        >
                        <TfiClose />
                        </button>
                        <div className="flex justify-center">
                            <img
                                src={selectedFellow.imgUrl}
                                alt={selectedFellow.fullName}
                                className="w-40 h-40 object-cover rounded-full mb-4 shadow-lg border-2 border-black"
                            />
                        </div>
                        {/* <img
                            src={selectedFellow.imgUrl}
                            alt={selectedFellow.fullName}
                            className="w-full h-40 object-contain rounded-lg mb-4 shadow-lg"
                        /> */}
                        <h3 className="text-xl font-bold mb-2 text-blue-900 h-8">{selectedFellow.fullName}</h3>
                        <div className='border-b-2 border-black mb-2'></div>    
                        <p className='text-justify mb-2 text-black'><span className='font-bold text-blue-900'>Department: </span>{selectedFellow.deptAllocated}</p>
                        <div className='border-b-2 border-black border- mb-2'></div>   
                        <p className='text-justify text-black'><span className='font-bold text-blue-900'>Post Graduate: </span>{selectedFellow.bachelorsDegree}</p>
                        <p className='text-justify mb-2 text-black'><span className='font-bold text-blue-900'>Bachelors: </span>{selectedFellow.postGraduation}</p>
                        <div className='border-b-2 border-black border- mb-2'></div>   
                        <p className='text-justify mb-2 text-black'><span className='font-bold text-blue-900'>Experience: </span>{selectedFellow.exp}</p>
                    </div>
                </div>
            )}

        </>
    );
};

export default MeetOurFellows;