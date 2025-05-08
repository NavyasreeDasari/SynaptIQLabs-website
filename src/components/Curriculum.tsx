import React from 'react';
import curriculumImg from '../assets/images/pillars.jpg'; // adjust path if needed

const CurriculumSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={curriculumImg}
            alt="Curriculum"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">🎓 Empowering Future Innovators</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our curriculum blends hands-on robotics, coding, and AI with real-world problem-solving.
            Designed for all levels, it inspires curiosity, builds technical skills, and nurtures
            creativity — preparing students for the future of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
