import React from 'react';
import QEAC from '../../assets/QEAC.png'; 
import TITI from '../../assets/titi.png';
import NepalGov from '../../assets/NepalGov.png';
import NewZealand from '../../assets/NewZealand.png';

const Accreditation = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Accreditation</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Accreditation logos */}
        <img src={QEAC} alt="QEAC" className="w-32 md:w-40 hover:scale-105 transition-transform" />
        <img src={TITI} alt="TITI" className="w-32 md:w-40 hover:scale-105 transition-transform" />
        <img src={NepalGov} alt="Nepal Government" className="w-32 md:w-40 hover:scale-105 transition-transform" />
        <img src={NewZealand} alt="New Zealand Education" className="w-32 md:w-40 hover:scale-105 transition-transform" />
      </div>

      <div className="mt-8 bg-blue-600 h-3"></div> {/* Decorative blue bar */}
    </div>
  );
};

export default Accreditation;
