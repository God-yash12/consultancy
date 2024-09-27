import React from "react";
import AboutImage from "../../assets/about-img.png";
import SixYears from "../../assets/sis.png";
import Congratulation from "../../assets/Congratulation.png"
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="text-center">
          <h1 className="text-gray-800 text-6xl pt-20 font-bold font-poppins uppercase ">
            About Us
          </h1>
        </div>
        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left side: Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative "> 
             
              <div className="relative right-14">
                <img src={AboutImage} alt="About Us" className="w-full h-full" />
              </div>
              {/* Shaking card: 6 Years of Excellence */}
              <div className="flex flex-row justify-between items-center absolute w-54 top-72 right-24 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
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
               {/* Shaking card: Student's Choice */}
               <div className="hidden lg:flex justify-between items-center flex-row w-54 absolute bottom-52 right-16 bg-white p-3 rounded-md shadow-lg text-center animate-shake z-20">
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
            </div>
          </div>

          {/* Right side: Text and content */}
          <div className="lg:w-1/2 lg:mt-20">
            <h1 className="text-4xl font-bold tracking-wide leading-loose text-center lg:text-left">
              Pathway To Success
            </h1>
            <p className="mb-8 text-gray-600 text-center lg:text-left px-10 lg:px-0">
              Felix Eastern Education Consultancy is a government-registered and
              test-preparation center with a long history. With a central office
              in Nepal and a branch office in Australia, we have been delivering
              services since 2016. Felix is here to assist you in selecting the
              best destination and university for your objectives and
              aspirations. We collaborate closely with the Students, bringing
              challenges and concerns to the table. The resolution of our
              students' issues and complaints is critical to the company's
              overall effectiveness. Our experienced staff will assist you
              throughout the full process of pursuing higher education in
              another country.
            </p>

            <div className="mb-8">
              <ul className="leading-10 ml-10 lg:ml-0">
                <li className="flex items-center gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-7 h-7" />
                  Experienced and Skilled Team of Experts
                </li>
                <li className="flex items-center gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-7 h-7" />
                  6 years of experience
                </li>
                <li className="flex items-center gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-7 h-7" />
                  Authorised representatives for multiple colleges and
                  Universities
                </li>
                <li className="flex items-center gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-7 h-7" />
                  High Visa Success Rate
                </li>
                <li className="flex items-center gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-7 h-7" />
                  Assistance throughout and after the process
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <button className="bg-orange-500 p-3 px-8 rounded-lg text-white uppercase text-center hover:bg-green-700 transition-all duration-500 mb-64">
                <Link to={"/team"}>Explore More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
