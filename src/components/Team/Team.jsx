import React from 'react';
import netraImage from '../../assets/team/netra.jpg';
import premImage from '../../assets/team/prem.jpg';
import yugashaImage from '../../assets/team/yugasha.jpg';
import sailajImage from '../../assets/team/sailaj.jpg';
import sanamImage from '../../assets/team/sanam.jpg';
import sunainaImage from '../../assets/team/sunaina.jpg';
import shyamImage from '../../assets/team/shyam.jpg';

const teamMembers = [
  { name: "Netra Pandey", position: "Director/ Counsellor", image: netraImage },
  { name: "Prem Rai", position: "Director/ Counsellor", image: premImage },
  { name: "Yugasha Hamal", position: "Manager, Nepal Counsellor", image: yugashaImage },
  { name: "Sailaj Karki", position: "Admission Head- Nepal Counsellor", image: sailajImage },
  { name: "Sanam Rai", position: "Documentation Co-ordinator", image: sanamImage },
  { name: "Sunaina Shakya", position: "Front Desk", image: sunainaImage },
  { name: "Shyam Raj Thapa", position: "IT Specialist", image: shyamImage }
];

const Team = () => {
  return (
    <section className="py-10">
      <h1 className="text-center text-l font-bold text-blue-600 mb-6">TEAM OF EXPERTS</h1>
      <h2 className="text-center text-5xl font-bold text-blue-900 mb-12">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-64 bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform transform hover:scale-110"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-center text-blue-900 hover:text-orange-500 transition-colors">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
