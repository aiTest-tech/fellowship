// @ts-nocheck
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer__area-two fix">
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-xl-3 col-lg-5 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <a href="index.html">
                      <img src="assets/img/logo.jpeg" alt="logo" />
                    </a>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>
                      Administrative Reforms & Training Division, General
                      Administration Department,Govt. of Gujarat. Block No. 7,
                      1st Floor, New Sachivalaya,Gandhinagar, Gujarat
                    </p>
                  </div>
                  <div className="footer__social footer__social-two">
                    <ul className="list-wrap">
                      <li>
                        <a
                          href="https://www.facebook.com/CMOGuj"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/cmoguj" target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="https://www.instagram.com/cmogujarat/"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6 ">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">CM Fellowship</h4>
                  <div className="footer__link footer__link-two">
                    <ul className="list-wrap">
                      <li>
                        <NavLink to="/about">About Fellowship</NavLink>
                      </li>
                      <li>
                        <NavLink to="/meet-our-fellows">
                          Meet our fellows
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/academic-partner">
                          Academic Partner
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/media">Media</NavLink>
                      </li>
                      <li>
                        <NavLink to="/joinUs">Join Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/faqs">FAQS</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contactUs">Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title footer__widget-title-two">
                    Important Links
                  </h4>
                  <div className="footer__link footer__link-two">
                    <ul className="list-wrap">
                      <li>
                        <a href="https://cmogujarat.gov.in/en" target="_blank">
                          CMO Gujarat
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://spipa.gujarat.gov.in/home"
                          target="_blank"
                        >
                          SPIPA{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://artd.gujarat.gov.in/" target="_blank">
                          Administrative Reforms & Training Division
                        </a>
                      </li>
                      <li>
                        <a href="https://www.iima.ac.in/" target="_blank">
                          IIM Ahmedabad
                        </a>
                      </li>
                      <li>
                        <a href="https://www.niti.gov.in/" target="_blank">
                          Niti aayog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.digitalindia.gov.in/"
                          target="_blank"
                        >
                          Digital India
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title footer__widget-title-two">
                                        Programs
                                    </h4>
                                    <div className="footer__link footer__link-two">
                                        <ul className="list-wrap">

                                            <li>
                                                <a href="javascript:;">Infrastructure</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Special Economic Zones</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Focus Sectors</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Investment Regions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
