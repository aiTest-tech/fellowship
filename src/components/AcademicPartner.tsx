// @ts-nocheck
import React, { useEffect, useState } from 'react'
import '../index.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';


const AcademicPartner = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const fontsize = useSelector((state: RootState) => state.fontSize.size);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
    
    const [scrollProgress, setScrollProgress] = useState(0);
    const updateScrollProgress = () => {
        // Get total scrollable height
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
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
        window.addEventListener('scroll', updateScrollProgress);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
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
            {/* <div className="relative mt-[140px] max-w-md:mt-[50px] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img
                    src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">Academic Paetner</h2>
                </div>
            </div> */}
            <main className="fix sm:mt-[120px] mt-[100px]">
                <div className={`min-h-screen  py-10 ${darkMode ? "bg-black" : "bg-illusion-pattern"}`}>
                    <div className="container py-3 ">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="section__title port_double">
                                    <h2 className={`title ${darkMode && "text-white"}`} style={{fontSize:fontsize + 8}}>{language === 'English' ? 'Academic Partner' : 'શૈક્ષણિક ભાગીદાર'}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            {/* Header with image */}
                            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                                <img
                                    src="assets/img/iima.jpg"
                                    alt="Banner Image"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200" style={{fontSize:fontsize + 16}}>{language === 'English' ? 'Indian Institute of Management - Ahmedabad Role in Fellowship Program' : 'IIM-એ ફેલોશિપ પ્રોગ્રામમાં ભૂમિકા'}</h2>
                                </div>
                            </div>


                            {/* Content Section */}
                            <div className={`py-8 px-6 sm:px-12 ${darkMode && "bg-black"}`}>
                                <div className="space-y-6 text-gray-700">
                                    <p className={`text-xl ${darkMode && "text-white"}`} style={{fontSize:fontsize + 4}}>
                                        {
                                            language === 'English' ? 'The Indian Institute of Management Ahmedabad (IIM-A) plays a significant role in a program involving the selection and training of fellows.' : 'ઇન્ડિયન ઇન્સ્ટિટ્યૂટ ઑફ મેનેજમેન્ટ અમદાવાદ (IIM-A) ફેલોની પસંદગી અને તાલીમ સાથે સંકળાયેલા કાર્યક્રમમાં મહત્ત્વપૂર્ણ ભૂમિકા ભજવે છે.'
                                        }
                                    </p>

                                    {/* List of Responsibilities */}
                                    <div className="space-y-4">
                                        {/* <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold">• Evaluation of Personal Statement by IIM-A</h2>
                                        </div> */}

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold" style={{fontSize:fontsize + 8}}> {language === 'English' ? 'Selection & Recommendation Committee (SRC):' : 'પસંદગી અને ભલામણ સમિતિ (SRC):'}</h2>
                                            <ul className="list-disc pl-6" style={{fontSize:fontsize + 4}}>
                                                <li>{language === 'English' ? 'IIM-A is a part of the Committee as an Expert panelist. This committee is responsible for the final recommendation of fellows.' : 'IIM-A નિષ્ણાત પેનલિસ્ટ તરીકે સમિતિનો એક ભાગ છે. આ સમિતિ ફેલોની અંતિમ ભલામણ માટે જવાબદાર છે.'}</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold" style={{fontSize:fontsize + 8}}>• {language === 'English' ? 'Training Program:' : 'તાલીમ કાર્યક્રમ:'}</h2>
                                            <ul className="list-disc pl-6" style={{fontSize:fontsize + 4}}>
                                                <li>{language === 'English' ? 'Duration: The training program lasts for one week.' : 'સમયગાળો: તાલીમ કાર્યક્રમ એક અઠવાડિયા સુધી ચાલે છે.'}</li>
                                                <li>{language === 'English' ? 'Sessions: There are four sessions per day, each lasting 1 hour and 15 minutes.' : 'સત્રો: દરરોજ ચાર સત્રો હોય છે, દરેક 1 કલાક અને 15 મિનિટ ચાલે છે.'}</li>
                                                <li>{language === 'English' ? 'Teaching Methodology: The program utilizes the "Case Method" for immersive learning.' : 'ટીચિંગ મેથડોલોજી: પ્રોગ્રામ ઇમર્સિવ લર્નિંગ માટે "કેસ મેથડ" નો ઉપયોગ કરે છે.'}</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold" style={{fontSize:fontsize + 8}}>• {language === 'English' ? 'Fellow Evaluation:' : 'સાથી મૂલ્યાંકન:'}</h2>
                                            <ul className="list-disc pl-6" style={{fontSize:fontsize + 4}}>
                                                <li>{language === 'English' ? "IIM-A is also involved in the evaluation of the fellows during their tenure. The evaluation process likely includes criteria related to the fellow's engagement, contributions, and overall development during the program." : "IIM-A તેમના કાર્યકાળ દરમિયાન ફેલોના મૂલ્યાંકનમાં પણ સામેલ છે. મૂલ્યાંકન પ્રક્રિયામાં સંભવતઃ કાર્યક્રમ દરમિયાન સાથીઓની સગાઈ, યોગદાન અને એકંદર વિકાસ સંબંધિત માપદંડોનો સમાવેશ થાય છે."}</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                            <h2 className="text-2xl font-semibold" style={{fontSize:fontsize + 8}}>• {language === 'English' ? "Awarding Certification:" : 'પુરસ્કાર પ્રમાણપત્ર:'}</h2>
                                            <ul className="list-disc pl-6" style={{fontSize:fontsize + 4}}>
                                                <li>{language === 'English' ? "After the completion of the fellow's tenure, IIM-A collaborates with the GoG to award Fellowship Certification." : "સાથીનો કાર્યકાળ પૂર્ણ થયા પછી, IIM-A ફેલોશિપ પ્રમાણપત્ર આપવા માટે GoG સાથે સહયોગ કરે છે."}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Faculty Section */}
                                    {/* <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                                        <h2 className="text-2xl font-semibold">Faculty Resources</h2>
                                        <p className="mt-2 text-lg">
                                            Prof Satish Deodhar is the Dean (Faculty) and Professor of Economics at IIM-A. He has a Bachelor's and a Master's in Economics from the Gokhale Institute of Politics and Economics, and a PhD in Agricultural Economics from The Ohio State University. He is the recipient of the Outstanding PhD Dissertation Award from the Food Distribution Research Society, USA.
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}

export default AcademicPartner