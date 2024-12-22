// import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PagenoFound = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>
      {/* This is an example component */}
      <div className="h-screen w-screen bg-gray-50 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-blue-500 font-dark font-extrabold mb-8">
              {" "}
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we couldn't find the page you're looking for
            </p>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default PagenoFound;
