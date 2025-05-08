import React from 'react';
import { Link } from 'react-router-dom';

import diyKit from '../assets/images/diykit.jpg';
import programming from '../assets/images/programming.jpg';
import curriculum from '../assets/images/curriculum.jpg';
import training from '../assets/images/training.jpg';
import hackathon from '../assets/images/hackathon.jpg';

const features = [
  { image: diyKit, title: 'DIY Kit' },
  { image: programming, title: 'Robot Programming' },
  { image: curriculum, title: 'Curriculum' },
  { image: training, title: 'Hands-On Training' },
  { image: hackathon, title: 'Robotics Hackathon' },
];

const PlatformSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-100 via-indigo-100 to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-0"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Complete Platform for <span className="text-blue-600">AI and Robotics</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From foundational tools to advanced experiences, our platform equips learners with everything they need to master AI and robotics through engaging, hands-on learning.
        </p>
      </div>

      {/* Staggered Layout - updated for uniform grid alignment */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-white"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">{feature.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformSection;
