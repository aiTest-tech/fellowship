// @ts-nocheck
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Media = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const fontsize = useSelector((state: RootState) => state.fontSize.size);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode)
    
    return (
        <>
            <section className={`section-pt-110 section-pb-110 ${darkMode ? "bg-black" : "ourportfolio"}`}>
                <div className="container">
                    <div className="row align-items-center">
                        {
                            language === 'English' ? (
                                <>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="section__title port_double">
                                            <h2 className={`title ${darkMode && "text-white"}`} style={{fontSize:fontsize + 4}}>Our Media Gallery and TimeLine</h2>
                                        </div>
                                    </div>
                                </>
                            ) :
                                (
                                    <>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="section__title port_double">
                                                <h2 className="title">અમારી મીડિયા ગેલેરી અને સમયરેખા</h2>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                    <div className="row justify-content-center gutter-24">
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="portfoliosub">
                                <NavLink to="/media">
                                    <img src="assets/img/imagegallary.jpeg" alt="img" />
                                </NavLink>
                                <div className="vector1">
                                    <img src="assets/img/Vector.png" />
                                </div>
                                <div className="vector2">
                                    <img src="assets/img/Vector1.png" />
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-12 col-xl-12 ">
                            {/* <div className="portfoliosub bg-black shadow-lg"> */}
                                <NavLink to="/media">
                                    <img src="assets/img/timeline.png" alt="img" className="scale" />
                                </NavLink>
                            {/* </div> */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Media