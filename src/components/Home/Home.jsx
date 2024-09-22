import React from "react";
import BannerImage from "../../assets/banner-img.png";
import BgBlob from "../../assets/Regular_blob.png";
import SixYears from "../../assets/sis.png";
import Student from "../../assets/student.png";
import Congratulation from "../../assets/Congratulation.png";
import IdeaBulb from "../../assets/IdeaBulb.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-blue-100 relative overflow-hidden">
      {/* Blob background */}
      <div className="absolute -top-20 -right-40 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-red-500 to-blue-500 rounded-full filter blur-3xl opacity-70 animate-blob"></div>

      <div className="container mx-auto py-12 relative z-10">
        <div className="lg:flex justify-between items-center">
          {/* Left side: Text content */}
          <div className="lg:flex flex-col lg:w-1/2 w-full">
            <p className="text-blue-600 text-center lg:text-left lg:text-3xl text-xl font-semibold uppercase tracking-wide">
              Welcome to Felix Eastern Educational Consultancy
            </p>
            <section>
              <p className="text-gray-900 text-center lg:text-left lg:text-7xl text-3xl font-bold mt-5 tracking-wide">
                Study in UK, USA, Canada and Australia
              </p>
            </section>
            <p className="text-gray-600 text-center lg:text-left sm:text-left mt-4 lg:mt-6 text-lg px-2 lg:px-0 tracking-wide leading-7">
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
          <div className="mt-8 lg:mt-10 lg:w-1/2 w-full h-auto">
            <div className="relative left-4 sm:left-9 lg:left-32">
              <div>
                {/* Background Blob behind the Banner Image */}
                <svg
                  viewBox="20 30 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-16 left-16 md:left-5 md:top-24 lg:top-36 lg:left-16 w-[21rem] sm:top-24 sm:w-[28rem] md:w-[38rem] lg:w-[40rem]"
                >
                  <path
                    fill="#8A3FFC"
                    d="M44.6,-34.3C60.7,-15.3,78.7,3.4,76.2,18.5C73.7,33.7,50.5,45.2,29.9,50.9C9.2,56.6,-8.9,56.4,-27.7,50.2C-46.6,43.9,-66.1,31.7,-68.9,16.5C-71.8,1.3,-58,-17,-43.7,-35.6C-29.5,-54.1,-14.7,-73,-0.3,-72.8C14.2,-72.6,28.4,-53.3,44.6,-34.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <img
                  src={BannerImage}
                  loading="lazy"
                  alt="Student with books"
                  className="w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[30rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem] z-10 left-14 relative"
                />

                <div>
                  <img
                    src={IdeaBulb}
                    alt="Bulb"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 absolute top-20 right-28 sm:top-24 sm:right-40 md:top-28 md:right-48"
                  />
                </div>
              </div>

              {/* Shaking card: Student's Choice */}
              <div className="hidden lg:flex justify-between items-center flex-row w-54 absolute bottom-60 left-4 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
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
              <div className="flex flex-row justify-between items-center absolute w-54 bottom-10 left-4 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
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

              <div className="hidden lg:flex justify-between items-center flex-row absolute w-auto bottom-32 right-32 sm:right-40 md:right-52 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
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
    </div>
  );
};

export default Home;
