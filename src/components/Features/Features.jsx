import React from "react";
import featureIcon1 from "../../assets/feature-icon-1.png";
import featureIcon2 from "../../assets/feature-icon-2.png";
import featureIcon3 from "../../assets/feature-icon-3.png";
import coreFeatureImage from "../../assets/coure-features-img.jpg";

const Features = () => {
  return (
    <div className="bg-gray-900 w-full">
      {/* Wrapper container */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between w-full mb-44">
        
        {/* Left side content */}
        <div className="w-full lg:w-1/2 mb-10 sm:px-16 lg:mb-0 lg:ml-36 text-center lg:text-left space-x-5 lg:space-x-0">
          <h1 className="text-gray-500 uppercase text-2xl tracking-wider mt-10 leading-10 font-bold mb-6">
            Core Feature
          </h1>
          <header className="text-4xl md:text-5xl lg:text-6xl text-gray-100 tracking-wide font-bold leading-tight mb-8">
            See What Our <br />
            Mission Are
          </header>
          <div className="space-y-8 lg:mr-36">
            {/* Mission Section */}
            <div className="flex items-center">
            <div className="w-32 h-16 bg-blue-900 rounded-md flex justify-center items-center">
              <img src={featureIcon1} alt="featureIcon2" className="w-12 h-12" />
                </div>
              <section className="ml-6">
                <h2 className="text-gray-200 text-2xl font-bold leading-10">
                  Mission
                </h2>
                <p className="text-gray-300 leading-7">
                  To provide full support and help to the students who aim to be part
                  of different international universities around the globe.
                </p>
              </section>
            </div>
            {/* Vision Section */}
            <div className="flex items-center">
                <div className="w-32 h-16 bg-green-600 rounded-md flex justify-center items-center">
              <img src={featureIcon2} alt="featureIcon2" className="w-12 h-12" />
                </div>
              <section className="ml-6">
                <h2 className="text-gray-200 text-2xl font-bold leading-10">Vision</h2>
                <p className="text-gray-300 leading-7">
                  We are established with a vision to provide quality services that
                  exceed the expectations of our esteemed students.
                </p>
              </section>
            </div>
            {/* Objective Section */}
            <div className="flex items-center">
            <div className="w-32 h-16 bg-blue-800 rounded-md flex justify-center items-center">
              <img src={featureIcon3} alt="featureIcon2" className="w-12 h-12" />
                </div>
              <section className="ml-6">
                <h2 className="text-gray-200 text-2xl font-bold leading-10">Objective</h2>
                <p className="text-gray-300 leading-7">
                  To be one of the trusted leaders in the Educational Counseling Service
                  industry by providing enhanced services and relationships.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={coreFeatureImage} 
            alt="coreFeatureImage" 
            className="w-full h-screen object-cover" 
          />
        </div>

      </div>
    </div>
  );
};

export default Features;
