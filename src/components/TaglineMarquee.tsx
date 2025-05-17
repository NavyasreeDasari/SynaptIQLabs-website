import React from 'react';

const TaglineMarquee: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2">
      <marquee behavior="scroll" direction="left" scrollamount="5" className="text-sm md:text-base font-semibold tracking-wide">
        Raising AI – Making Automations – Navigating Aspirations
      </marquee>
    </div>
  );
};

export default TaglineMarquee;
