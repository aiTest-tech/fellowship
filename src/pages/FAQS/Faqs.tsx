// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

// Define a type for the FAQ item
type FaqItem = {
  question: string;
  answer: string;
};

// Define the FAQ data based on the provided questions and answers
const faqDataEnglish: FaqItem[] = [
  {
    question:
      "What is the Sardar Patel Chief Minister Fellowship Program by the Government of Gujarat?",
    answer:
      "To contribute to the enhancement of governance in the state of Gujarat by infusing innovative and effective approaches into policy-making and service delivery processes. To serve as a catalyst for transformation within government departments promoting a culture of innovation, efficiency, and excellence.",
  },
  {
    question: "Who launched the Chief Minister Fellowship Program?",
    answer:
      "In 2009, the then Chief Minister, Shri Narendra Modi, launched the CM’s Fellowship Program",
  },
  {
    question: "What is the duration of the Chief Minister Fellowship Program?",
    answer:
      "Fellows will be engaged for a fixed period of 1 year, which may be extended by 1" +
      " year at a time, However, their continuation in their respective positions beyond the first" +
      " year would depend on a satisfactory Annual Performance Review based on clearly" +
      " defined Key Performance Indicators. Extension beyond two years for one more year" +
      " may be considered under exceptional circumstances with the approval of the" +
      " Government of Gujarat",
  },
  // {
  //     question: "When can I apply for the Chief Minister Fellowship, 2023?",
  //     answer: "The application process for the Chief Minister Fellowship starts on 2nd Dec 2023. The last date for the submission of the application is 30th Dec, 2023."
  // },
  {
    question:
      "What is the application fee of Chief Minister Fellowship Program Application?",
    answer:
      "A non-refundable application fee of ₹500 is required to complete the application.",
  },
  {
    question:
      "What are Educational Qualifications, Age and Experience required for the Chief Minister Fellowship Program Application?",
    answer:
      "• Standard 10th and 12th passed with minimum 60%\n• Bachelor’s Degree with minimum 60% Importance will be given to the prime national institutes\n• Age shall not be more than 35 years on last date of application\n• Minimum 3 years of experience of relevant subject",
  },
  {
    question: "What are the various stages of the selection process?",
    answer:
      "The selection process for the Sardar Patel Good Governance CM Fellowship in Gujarat adheres to specific guidelines and regulations set by the government. Interested applicants must apply through the official website https://spipa.gujarat.gov.in and pay an application fee of Rs. 500/-. The selection process follows principles of equal access, open competition, and transparency. Initially, a Scrutiny & Shortlisting Committee (SSC) reviews applications, shortlisting eligible candidates. Personal Statement will be evaluated by experts from IIM-Ahmedabad. The final selection is conducted by a Selection Committee (SC), considering educational qualifications, work experience (40% weightage), personal statement (20% evaluated by IIM-A), and a personal interview (40% weightage). The SC may also include outside experts on a case-by-case basis, a reserve list valid for a year.",
  },
  {
    question: "How Many Fellows will be selected?",
    answer:
      "Upto 20 fellows will be appointed at the end of the selection process in the fellowship programme, however, the actual need will be determined over time.",
  },
  {
    question: "What will be the Stipend paid to the Fellows?",
    answer:
      "•	Fellows selected for this program will receive a monthly stipend of Rs. 1,00,000 +  Rs. 10,000 L.T.A. The continuation of the fellowship will be determined by mutual consent, and Individual." +
      "•	Fellows will get a 10% increase in their Stipend. The increase in stipend will be based on their performance during the year, following the recommendation of the Selection Committee (SC) and duly approved by the competent authority within the Government of Gujarat.",
  },
  {
    question: "Do I require the original documents at the time of application?",
    answer:
      "The original documents are not required at the time of application. The information from these documents is to be filled in the application form. The original documents of candidates selected for the interviews are verified on the day of interview. The candidate may get debarred or may have to face the legal proceedings for any discrepancy in the stated information and original documents.",
  },
  {
    question: "As a fellow, who will I report to?",
    answer:
      "Fellows will work directly under the senior government officials, who will mentor the fellows. Fellows will interact frequently with these officials and update them on their assignments. Fellows will have to submit their monthly report to their mentors. Hon’ble Chief Minister will also review the assignments of the fellows as and when required.",
  },
  {
    question: "What is nature of work / assignments undertaken by the fellows?",
    answer:
      "The task will revolve around specific topics, each accompanied by a predetermined problem statement to guide the assignment. The Topics are as follows:\n\n• 1) Improvement in implementation of PM Poshan (MDM) and ICDS schemes\n• 2) Developmental Areas/Block Programme: Reducing wasting/stunting in children\n• 3) To improve enrolment of students in science and mathematics stream at secondary / higher secondary level.\n•  4) Improvement in total Students enrolment in secondary and higher secondary Schools\n• 5) Revising the annual revenue share of government hospitals/facilities under PMJAY scheme\n• 6) To develop a strategy for adoption of light house technology in Government for public programs\n• 7) Recycling of Municipal Waste – Liquid and Solid Waste\n• 8) Develop strategies to promote natural farming in the state\n• 9) Achievement of complete irrigation capacity and optimal utilization of Narmada water resources\n• 10) Tourism Promotion: Heritage, Wildlife, Beach, Conference, Sports, City, Border, Religious, Circuit etc\n• 11) Pollution Control: Industrial and Urban: Problem Statement on the said subject\n• 12) Policy Intelligence Unit Framework\n• 13) To establish Training and Capacity building as a Good Governance practice.\n• 14) Recycling of Rural Waste – Liquid and Solid Waste\n• 15) Technical and financial - work of DISCOMs\n• 16) Viksit 2047 Gujarat Goal and working of various indices\n• 17) Study of cultural relations between Gujarat and other states\n• 18) MBKVY – Mukhyamantri Bhavishyalakshi Kaushalya Vikas Yojana\n• 19) Scholarship Program for International Studies offered by the developing cast welfare Department (Videsh Abhyas Loan Yojana) Financial Assistance Scheme to the Elderly and Handicapped\n• 20) Sustainable livelihood for economic and social development in tribal area",
  },
  {
    question: "Is there a provision of training for the fellows?",
    answer:
      "Upon enrolment, a mandatory two-week training program will be arranged for all Individual Fellows, jointly conducted by SPIPA and IIM-A.",
  },
  {
    question: "What are the future career opportunities available to fellows?",
    answer:
      "The experience of working with an important and mammoth institution like the government is a very rare and unique experience. The fellowship program enhances various skills related to management, communication, problem solving, resourcefulness, etc. This experience presents various academic and career opportunities to fellows. Careers in civil services, public policy, policy making, management, consultancy, social sector are some of the avenues.",
  },
];

const faqDataGujarati: FaqItem[] = [
  {
    question:
      "ગુજરાત સરકાર દ્વારા સરદાર પટેલ મુખ્યમંત્રી ફેલોશિપ પ્રોગ્રામ શું છે?",
    answer:
      "નીતિ-નિર્માણ અને સેવા વિતરણ પ્રક્રિયાઓમાં નવીન અને અસરકારક અભિગમોનો ઉપયોગ કરીને ગુજરાત રાજ્યમાં શાસનની વૃદ્ધિમાં યોગદાન આપવું. નવીનતા, કાર્યક્ષમતા અને શ્રેષ્ઠતાની સંસ્કૃતિને પ્રોત્સાહન આપતા સરકારી વિભાગોમાં પરિવર્તન માટે ઉત્પ્રેરક તરીકે સેવા આપવી.",
  },
  {
    question: "મુખ્યમંત્રી ફેલોશિપ પ્રોગ્રામ કોણે શરૂ કર્યો?",
    answer:
      "આ કાર્યક્રમ 31મી ઑક્ટોબર 2023ના રોજ માનનીય મુખ્યમંત્રી શ્રી ભૂપેન્દ્રભાઈ પટેલ દ્વારા શરૂ કરવામાં આવ્યો હતો.",
  },
  {
    question: "મુખ્ય પ્રધાન ફેલોશિપ, 2024 ની અવધિ શું છે?",
    answer:
      "ફેલો 1 વર્ષના નિશ્ચિત સમયગાળા માટે રોકાયેલા રહેશે, જે એક સમયે 1 વર્ષ સુધી લંબાવી શકાય છે. જો કે, પ્રથમ વર્ષ પછી તેમની સંબંધિત હોદ્દા પર તેમનું ચાલુ રાખવું સ્પષ્ટ રીતે વ્યાખ્યાયિત મુખ્ય પ્રદર્શન સૂચકાંકોના આધારે સંતોષકારક વાર્ષિક પ્રદર્શન સમીક્ષા પર આધારિત છે.",
  },
  {
    question: "હું મુખ્ય પ્રધાન ફેલોશિપ, 2023 માટે ક્યારે અરજી કરી શકું?",
    answer:
      "મુખ્યમંત્રી ફેલોશિપ માટેની અરજી પ્રક્રિયા 2જી ડિસેમ્બર 2023થી શરૂ થાય છે. અરજી સબમિટ કરવાની છેલ્લી તારીખ 30મી ડિસેમ્બર, 2023 છે.",
  },
  {
    question: "મુખ્યમંત્રી ફેલોશિપ, 2023 માટે અરજી ફી કેટલી છે?",
    answer: "મુખ્યમંત્રી ફેલોશિપ માટેની અરજી ફી રૂ. 500.",
  },
  {
    question: "ફેલોશિપ માટે જરૂરી શૈક્ષણિક લાયકાત, ઉંમર અને અનુભવ શું છે?",
    answer:
      "• ધોરણ 10 અને 12 લઘુત્તમ 60% સાથે પાસ\n• ન્યૂનતમ 60% સાથે સ્નાતકની ડિગ્રી\n• મુખ્ય રાષ્ટ્રીય સંસ્થાઓને મહત્વ આપવામાં આવશે\n• અરજીની છેલ્લી તારીખે ઉંમર 35 વર્ષથી વધુ હોવી જોઈએ નહીં\n• સંબંધિત વિષયનો ઓછામાં ઓછો 3 વર્ષનો અનુભવ",
  },
  {
    question: "પસંદગી પ્રક્રિયાના વિવિધ તબક્કા શું છે?",
    answer:
      "ગુજરાતમાં સરદાર પટેલ ગુડ ગવર્નન્સ સીએમ ફેલોશિપ માટેની પસંદગી પ્રક્રિયા સરકાર દ્વારા નિર્ધારિત ચોક્કસ માર્ગદર્શિકા અને નિયમોનું પાલન કરે છે. રસ ધરાવતા અરજદારોએ સત્તાવાર વેબસાઇટ https://spipa.gujarat.gov.in મારફતે અરજી કરવી પડશે અને રૂ.ની અરજી ફી ચૂકવવી પડશે. 500/-. પસંદગી પ્રક્રિયા સમાન પ્રવેશ, ખુલ્લી સ્પર્ધા અને પારદર્શિતાના સિદ્ધાંતોને અનુસરે છે. શરૂઆતમાં, સ્ક્રુટિની એન્ડ શોર્ટલિસ્ટિંગ કમિટી (એસએસસી) અરજીઓની સમીક્ષા કરે છે, યોગ્ય ઉમેદવારોને શોર્ટલિસ્ટ કરે છે. IIM-અમદાવાદના નિષ્ણાતો દ્વારા વ્યક્તિગત નિવેદનનું મૂલ્યાંકન કરવામાં આવશે. અંતિમ પસંદગી પસંદગી સમિતિ (SC) દ્વારા હાથ ધરવામાં આવે છે, જેમાં શૈક્ષણિક લાયકાત, કાર્ય અનુભવ (40% વેઇટેજ), વ્યક્તિગત નિવેદન (20% IIM-A દ્વારા મૂલ્યાંકન), અને વ્યક્તિગત ઇન્ટરવ્યુ (40% વેઇટેજ) ધ્યાનમાં લેવામાં આવે છે. SC કેસ-બાય-કેસ આધારે બહારના નિષ્ણાતોનો પણ સમાવેશ કરી શકે છે, જે એક વર્ષ માટે માન્ય અનામત યાદી છે.",
  },
  {
    question: "How Many Fellows will be selected?",
    answer:
      "Upto 20 fellows will be appointed at the end of the selection process in the fellowship programme, however, the actual need will be determined over time.",
  },
  {
    question: "What will be the Stipend paid to the Fellows?",
    answer:
      "Fellows selected for this program will receive a monthly stipend of Rs. 1,00,000. The continuation of the fellowship will be determined by mutual consent, and Individual Fellows will get a 10% increase in their Stipend.",
  },
  {
    question: "શું મને અરજી કરતી વખતે મૂળ દસ્તાવેજોની જરૂર છે?",
    answer:
      "અરજી કરતી વખતે મૂળ દસ્તાવેજોની જરૂર નથી. આ દસ્તાવેજોમાંથી માહિતી અરજી ફોર્મમાં ભરવાની છે. ઇન્ટરવ્યુ માટે પસંદ કરાયેલા ઉમેદવારોના મૂળ દસ્તાવેજો ઇન્ટરવ્યુના દિવસે ચકાસવામાં આવે છે. જણાવેલ માહિતી અને મૂળ દસ્તાવેજોમાં કોઈપણ વિસંગતતા માટે ઉમેદવારને પ્રતિબંધિત કરવામાં આવી શકે છે અથવા કાનૂની કાર્યવાહીનો સામનો કરવો પડી શકે છે.",
  },
  {
    question: "એક સાથી તરીકે, હું કોને જાણ કરીશ?",
    answer:
      "ફેલો સીધા વરિષ્ઠ સરકારી અધિકારીઓ હેઠળ કામ કરશે, જે ફેલોને માર્ગદર્શન આપશે. ફેલો આ અધિકારીઓ સાથે વારંવાર વાર્તાલાપ કરશે અને તેમને તેમની સોંપણીઓ પર અપડેટ કરશે. ફેલોએ તેમનો માસિક અહેવાલ તેમના માર્ગદર્શકોને સબમિટ કરવાનો રહેશે. માનનીય મુખ્યમંત્રી જ્યારે જરૂર પડશે ત્યારે ફેલોની સોંપણીઓની પણ સમીક્ષા કરશે.",
  },
  {
    question: "ફેલો દ્વારા હાથ ધરવામાં આવેલા કામ / સોંપણીઓનું સ્વરૂપ શું છે?",
    answer:
      "આ કાર્ય ચોક્કસ વિષયોની આસપાસ ફરશે, દરેક સોંપણીને માર્ગદર્શન આપવા માટે પૂર્વનિર્ધારિત સમસ્યાનું નિવેદન સાથે હશે. વિષયો નીચે મુજબ છે.\n\n• PM Poshan (MDM) અને ICDS યોજનાઓના અમલીકરણમાં સુધારો\n• વિકાસલક્ષી વિસ્તારો/બ્લોક પ્રોગ્રામ: બાળકોમાં બગાડ/સ્ટન્ટિંગ ઘટાડવું\n• માધ્યમિક/ઉચ્ચતર માધ્યમિક સ્તરે વિજ્ઞાન અને ગણિત પ્રવાહમાં વિદ્યાર્થીઓની નોંધણીમાં સુધારો કરવો.\n• માધ્યમિક અને ઉચ્ચતર માધ્યમિક શાળાઓમાં કુલ વિદ્યાર્થીઓની નોંધણીમાં સુધારો\n• PMJAY યોજના હેઠળ સરકારી હોસ્પિટલો/સુવિધાઓના વાર્ષિક આવકના હિસ્સામાં સુધારો કરવો\n• જાહેર કાર્યક્રમો માટે સરકારમાં લાઇટ હાઉસ ટેકનોલોજી અપનાવવા માટેની વ્યૂહરચના વિકસાવવી\n• મ્યુનિસિપલ કચરાનું રિસાયક્લિંગ – પ્રવાહી અને ઘન કચરો\n• રાજ્યમાં કુદરતી ખેતીને પ્રોત્સાહન આપવા વ્યૂહરચના બનાવો\n• સંપૂર્ણ સિંચાઈ ક્ષમતાની સિદ્ધિ અને નર્મદા જળ સંસાધનોનો શ્રેષ્ઠ ઉપયોગ\n• પ્રવાસન પ્રમોશન: હેરિટેજ, વન્યજીવન, બીચ, કોન્ફરન્સ, રમતગમત, શહેર, સરહદ, ધાર્મિક, સર્કિટ વગેરે\n• પ્રદૂષણ નિયંત્રણ: ઔદ્યોગિક અને શહેરી: આ વિષય પર સમસ્યા નિવેદન\n• પોલિસી ઇન્ટેલિજન્સ યુનિટ ફ્રેમવર્ક\n• સુશાસન પ્રથા તરીકે તાલીમ અને ક્ષમતા નિર્માણની સ્થાપના કરવી.\n• ગ્રામીણ કચરાનું રિસાયક્લિંગ – પ્રવાહી અને ઘન કચરો\n• તકનીકી અને નાણાકીય - ડિસ્કોમનું કાર્ય\n• Viksit 2047 ગુજરાત ધ્યેય અને વિવિધ સૂચકાંકોની કામગીરી\n• Study of cultural relations between Gujarat and other states\n• એમબીકેવીવાય – મુખ્ય મંત્રી ભવિષ્યલક્ષી કૌશલ્યા વિકાસ યોજના\n• વિકાસશીલ કાસ્ટ કલ્યાણ વિભાગ (વિદેશ અભ્યાસ લોન યોજના) દ્વારા ઓફર કરાયેલ આંતરરાષ્ટ્રીય અભ્યાસ માટે શિષ્યવૃત્તિ કાર્યક્રમ\n• વૃદ્ધો અને વિકલાંગોને નાણાકીય સહાય યોજના\n• આદિવાસી વિસ્તારમાં આર્થિક અને સામાજિક વિકાસ માટે ટકાઉ આજીવિકા",
  },
  {
    question: "Is there a provision of training for the fellows?",
    answer:
      "Upon enrolment, a mandatory two-week training program will be arranged for all Individual Fellows, jointly conducted by SPIPA and IIM-A.",
  },
  {
    question: "ફેલો માટે ભાવિ કારકિર્દીની તકો શું ઉપલબ્ધ છે?",
    answer:
      "સરકાર જેવી મહત્વપૂર્ણ અને વિશાળ સંસ્થા સાથે કામ કરવાનો અનુભવ ખૂબ જ દુર્લભ અને અનોખો અનુભવ છે. ફેલોશિપ પ્રોગ્રામ મેનેજમેન્ટ, કોમ્યુનિકેશન, પ્રોબ્લેમ સોલ્વિંગ, કોઠાસૂઝ વગેરે સંબંધિત વિવિધ કૌશલ્યોને વધારે છે. આ અનુભવ ફેલો માટે વિવિધ શૈક્ષણિક અને કારકિર્દીની તકો રજૂ કરે છે. નાગરિક સેવાઓ, જાહેર નીતિ, નીતિ નિર્માણ, મેનેજમેન્ટ, કન્સલ્ટન્સી, સામાજિક ક્ષેત્રમાં કારકિર્દી એ કેટલાક માર્ગો છે.",
  },
];

const Faq: React.FC = () => {
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
  // State to track which question's answer is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Handle the toggling of the answer visibility
  const toggleAnswer = (index: number) => {
    // Toggle the selected question's answer
    setOpenIndex(openIndex === index ? null : index);
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
            {language === "English" ? "Frequently Asked Questions" : "ગેલેરી"}
          </h2>
        </div>
      </div>
      <div
        className={`w-full bg-repeat-y ${
          darkMode ? "bg-black" : "bg-illusion-pattern"
        }`}
      >
        <div className="container py-3 ">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="section__title port_double">
                <h2
                  className={`title ${darkMode && "text-white"}`}
                  style={{ fontSize: fontsize + 6 }}
                >
                  {language === "English"
                    ? "Frequently Asked Questions"
                    : "વારંવાર પૂછાતા પ્રશ્નો"}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[90%] mx-auto py-8 px-4">
          <h2
            className={`text-3xl text-center font-semibold mb-6 ${
              darkMode && "text-white"
            }`}
            style={{ fontSize: fontsize + 8 }}
          >
            {language === "English"
              ? "Sardar Patel Chief Minister Fellowship Program - Frequently Asked Questions"
              : "સરદાર પટેલ મુખ્યમંત્રી ફેલોશિપ પ્રોગ્રામ - વારંવાર પૂછાતા પ્રશ્નો"}
          </h2>
          <div className="space-y-4">
            {language === "English" ? (
              <>
                {faqDataEnglish.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white shadow-md rounded-lg overflow-hidden`}
                  >
                    <button
                      onClick={() => toggleAnswer(index)}
                      className={`w-full px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none ${
                        darkMode ? "bg-black" : ""
                      }`}
                    >
                      <span
                        className="font-medium text-lg"
                        style={{ fontSize: fontsize + 8 }}
                      >
                        <span className="mr-3 text-orange-500">
                          {index + 1}
                        </span>{" "}
                        {item.question}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div
                        className={`px-4 py-3 text-gray-700 bg-gray-50 ${
                          darkMode && "bg-black"
                        }`}
                      >
                        {item.answer.split("•").length > 1 ? (
                          // If multiple points, render each point in a new paragraph
                          item.answer.split("•").map(
                            (point, idx) =>
                              point.trim() && ( // Check if point is not empty after trimming
                                <p
                                  key={idx}
                                  className="py-3 ml-5"
                                  style={{ fontSize: fontsize + 6 }}
                                >
                                  {point.trim()}
                                </p>
                              )
                          )
                        ) : (
                          // Render as a single paragraph if only one point
                          <p
                            className="ml-5"
                            style={{ fontSize: fontsize + 6 }}
                          >
                            {item.answer}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {faqDataGujarati.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAnswer(index)}
                      className="w-full px-4 py-3 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
                    >
                      <span className="font-medium text-lg">
                        {item.question}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-4 py-3 text-gray-700 bg-gray-50">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
