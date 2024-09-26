import React from "react";
import BannerImage from "../../assets/banner-image.png";
import SixYears from "../../assets/sis.png";
import Student from "../../assets/student.png";
import Congratulation from "../../assets/Congratulation.png";
import IdeaBulb from "../../assets/IdeaBulb.png";
import Services from "../Service/Service";
import AboutPage from "../About/About";
import Features from "../Features/Features";
import Event from "../Event/Event";
import "./Home.css";
import Courses from "../Course/Courses";
import Teams from "../Team/Team";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-blue-100 relative overflow-hidden mt-20 lg:mt-0"
    >
      <div className="absolute -right-40 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-red-400 to-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="container mx-auto py-12 relative z-10">
        <div className="lg:flex justify-between items-center">
          {/* Left side: Text content */}
          <div className="lg:flex flex-col lg:w-1/2 w-full">
            <p className="text-blue-600 text-center lg:text-left lg:text-3xl text-xl font-semibold font-poppins uppercase tracking-wide px-20 md:px-0 lg:px-0">
              Welcome to Felix Eastern Educational Consultancy
            </p>
            <section>
              <p className="text-gray-900 text-center lg:text-left lg:text-7xl text-3xl font-bold mt-5 tracking-wide px-20 md:px-0 lg:px-0">
                Study in UK, USA, Canada and Australia
              </p>
            </section>
            
            <p className="text-gray-600 text-center lg:text-left sm:text-left mt-4 lg:mt-6 text-lg px-10 lg:px-0 tracking-wide leading-7 ">
              Felix is here to assist you in selecting the best destination and
              university for your objectives and aspirations. Our experienced
              staff with 6 years of excellence will assist you throughout the
              full process of pursuing higher education in the UK, USA, Canada,
              or Australia. We are authorised representatives for a number of
              Universities and Colleges.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mt-10">
              <button className="bg-orange-600 text-white py-4 px-7 rounded-md text-sm lg:text-base uppercase hover:bg-orange-700 transition duration-300">
                Explore Courses
              </button>
              <button className="bg-gray-900 text-white py-4 px-7 rounded-md text-sm lg:text-base uppercase hover:bg-orange-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="lg:w-1/2 w-full h-auto mt-24">
            <div className="relative left-4 sm:left-9 lg:left-24">
              <div>
                <img
                  src={BannerImage}
                  loading="lazy"
                  alt="Student with books"
                  className="w-[25rem] h-[25rem] sm:w-[28rem] sm:h-[28rem] md:w-[35rem] md:h-[35rem] lg:w-[45rem] lg:h-[45rem] left-24 lg:left-24 md:left-6 z-10 relative"
                />

                <div>
                  <img
                    src={IdeaBulb}
                    alt="Bulb"
                    className="hidden lg:flex w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 absolute  sm:top-24 md:top-28 right-10"
                  />
                </div>
              </div>

              {/* Shaking card: Student's Choice */}
              <div className="hidden lg:flex justify-between items-center flex-row w-54 absolute top-64 left-4 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
                <div>
                  <img
                    src={Congratulation}
                    alt="Congratulation"
                    className="w-12 h-12 mr-4"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold ">Congratulation</p>
                  <p className="text-gray-700 text-xs">
                    Your Admission is complete
                  </p>
                </div>
              </div>

              {/* Shaking card: 6 Years of Excellence */}
              <div className="flex flex-row justify-between items-center absolute w-54 bottom-32 left-4 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
                <div>
                  <img
                    src={SixYears}
                    alt="Six years Image"
                    className="w-12 h-12"
                  />
                </div>
                <div className="mr-4">
                  <p className="text-gray-900 font-bold">Experience Experts</p>
                  <p className="text-gray-700 text-sm">6 Years of Excellence</p>
                </div>
              </div>

              <div className="hidden lg:flex justify-between items-center flex-row absolute w-auto bottom-60 right-24 sm:right-40 md:right-44 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
                <div>
                  <img src={Student} alt="Student" className="w-12 h-12" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">Student Choice</p>
                  <p className="text-gray-700 text-sm">
                    Countless Students Assisted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div id="about">
        <AboutPage />
      </div>

      {/* Courses Section */}
      <div id="courses">
        <Courses />
      </div>

      {/* Event Section */}
      <div id="event">
        <Event />
      </div>
      <div>
        <Features />
      </div>

      {/* Team Section */}
      <div id="team">
        <Teams />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
