import React from "react";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/images2.png";
import Image3 from "../../assets/images3.png";
import Image4 from "../../assets/images4.png";
import Image5 from "../../assets/images5.png";
import Image6 from "../../assets/images6.png";


const ServiceCard = ({ image, title, listItems }) => (
  <div className="flex justify-between items-center mt-10 border-2 border-gray-300 p-6 shadow-md rounded-xl group hover:bg-orange-600 hover:border-none hover:transition-all duration-300 hover:drop-shadow-lg">
    <div>
      <img
        src={image}
        alt={title}
        className="w-20 h-20 group-hover:filter group-hover:brightness-0 transition-all duration-300"
      />
    </div>
    <div className="flex flex-col justify-between items-start ml-4">
      <header className="text-gray-900 text-xl font-semibold group-hover:text-white">
        {title}
      </header>
      <ul className="mt-2 space-y-1">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-gray-700 mr-2 group-hover:text-white">→</span>
            <span className="group-hover:text-white">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Service = () => {
  const serviceData = [
    {
      title: "English Test Preparation Class IELTS&PTE",
      listItems: [
        "Experienced Trainers",
        "Free Intensive Materials",
        "Latest Resources",
        "Discussion Sessions",
        "Affordable Fees",
        "Real Home Test Environment",
        "Small Group classes with flexible hours",
        "Mock Exam & Individual Feedback",
      ],
      image: Image1, 
    },
    {
      title: "High Rate of College University Selection",
      listItems: [
        "University and College application Guidance",
        "Scholarship Guidance",
        "Health Insurance (OSHC, OVHC)",
        "Authorised Representatives for Universities and Colleges",
      ],
      image: Image2, 
    },
    {
      title: "Visa Documentation Guidance",
      listItems: ["Documentation Guidance", "Medical booking assistance"],
      image: Image3, 
    },
    {
      title: "Accommodation and Job Search Assistance",
      listItems: [
        "Resume Writing Guidance",
        "Job Interview Guidance",
        "Accommodation Guidance",
      ],
      image: Image4, 
    },
    {
      title: "Career Counselling",
      listItems: ["Guidance regarding Career"],
      image: Image5, 
    },
    {
      title: "Educational Loan Assistance",
      listItems: ["Provision of Educational Loan based on eligibility"],
      image: Image6, 
    },
  ];

  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mt-20 mb-10">
          <h1 className="text-gray-900 text-6xl font-bold font-poppins">
            Our Services
          </h1>
        </div>

        {/* Service Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image} 
              title={service.title}
              listItems={service.listItems}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Service;
