// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

// Define the structure for each news item
interface NewsCard {
    date: string;
    description: string;
}

const newsData: NewsCard[] = [
    {
        date: "11 OCT",
        description: "Under the National e-Governance Plan (NeGP) of Government of India, State Data Centre (SDC) has been identified as one of...",
    },
    {
        date: "12 OCT",
        description: "The Gujarat government is working on creating a sustainable model for water resource management, improving local agriculture...",
    },
    {
        date: "13 OCT",
        description: "India’s first high-speed rail project will connect Ahmedabad and Mumbai, drastically reducing travel time...",
    },
    {
        date: "14 OCT",
        description: "A new initiative has been launched for digitalizing government services across rural areas in Gujarat...",
    },
    {
        date: "15 OCT",
        description: "Gujarat is set to launch a world-class offshore wind farm in Pipavav, bringing in clean energy to the state...",
    },
];

const FellowshipHighlights: React.FC = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const fontsize = useSelector((state: RootState) => state.fontSize.size);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
    return (
        // <section className="news section-pt-110 section-pb-110">
        //     <img
        //         src="assets/img/frame1.png"
        //         alt="shape"
        //         className="rotateme roate-event-bg"
        //     />
        //     <div className="container">
        //         <div className="text-center">
        //             <h2 className="title mb-5">Why Choose the Sardar Patel Fellowship?</h2>
        //         </div>
        //         <div className="col-lg-3 col-lg-12">
        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        //                 Noteworthy technology acquisitions 2021
        //             </h5>
        //             <p className="font-normal text-gray-700 dark:text-gray-400">
        //                 Here are the biggest enterprise technology acquisitions of 2021 so far, in
        //                 reverse chronological order.
        //             </p>
        //         </div>
        //     </div>
        // </section>
        <section className={`section-pt-110 section-pb-110 relative ${darkMode ? "bg-black" : "bg-illusion-pattern"}`}>
            {
                darkMode ? "" : (
                    <img
                        src="assets/img/frame1.png"
                        alt="shape"
                        className="rotateme roate-event-bg"
                    />
                )
            }
            <div className="max-w-6xl mx-auto px-4 relative z-40">
                <div className="container py-3 ">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="section__title port_double">
                                {
                                    language === 'English' ? (
                                        <>
                                            <h2 className={`title ${darkMode && "text-white"}`} style={{ fontSize: fontsize + 4 }}>Why Choose the Sardar Patel Fellowship</h2>
                                        </>
                                    ) :
                                        (
                                            <>
                                                <h2 className="title">શા માટે સરદાર પટેલ ફેલોશિપ પસંદ કરો</h2>
                                            </>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>


                {
                    language === 'English' ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: fontsize + 4 }}>Stipend</h3>
                                    <p className="text-lg text-gray-700" style={{ fontSize: fontsize + 4 }}>₹1,00,000/month + 10,000 L.T.A</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: fontsize + 4 }}>Duration</h3>
                                    <p className="text-lg text-gray-700" style={{ fontSize: fontsize + 4 }}>1 year</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: fontsize + 4 }}>Training</h3>
                                    <p className="text-lg text-gray-700" style={{ fontSize: fontsize + 4 }}>After joining, a minimum of 2 weeks of training shall be organized for all Individual
(In collaboration with SPIPA and IIM-A) 
</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: fontsize + 4 }}>Departments</h3>
                                    <p className="text-lg text-gray-700" style={{ fontSize: fontsize + 4 }}>Placement in 20+ government sectors</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: fontsize + 4 }}>Certificate</h3>
                                    <p className="text-lg text-gray-700" style={{ fontSize: fontsize + 4 }}>Recognized jointly by Indian Institute of Management Ahmedabad and Government of Gujarat</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: fontsize + 4 }}>Impact</h3>
                                    <p className="text-lg text-gray-700" style={{ fontSize: fontsize + 4 }}>Drive real change in governance processes</p>
                                </div>
                            </div>
                        </>
                    ) :
                        (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">સ્ટાઈપેન્ડ</h3>
                                        <p className="text-lg text-gray-700">₹1,00,000/મહિને</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">અવધિ</h3>
                                        <p className="text-lg text-gray-700">1 વર્ષ</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">તાલીમ</h3>
                                        <p className="text-lg text-gray-700">IIM-Aમાં 1-અઠવાડિયાનું ઇન્ડક્શન + 3-અઠવાડિયાની નોકરીની તાલીમ</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">વિભાગો</h3>
                                        <p className="text-lg text-gray-700">20+ સરકારી ક્ષેત્રોમાં પ્લેસમેન્ટ</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">પ્રમાણપત્ર</h3>
                                        <p className="text-lg text-gray-700">IIM-A અને GoG દ્વારા સંયુક્ત રીતે માન્યતા પ્રાપ્ત</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">અસર</h3>
                                        <p className="text-lg text-gray-700">શાસન પ્રક્રિયાઓમાં વાસ્તવિક પરિવર્તન લાવો</p>
                                    </div>
                                </div>
                            </>
                        )
                }
            </div>
        </section>

    );
};

export default FellowshipHighlights;