import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images from your assets folder
import courseImg1 from '../assets/images/card1.png';
import courseImg2 from '../assets/images/card2.jpg';
import courseImg3 from '../assets/images/card3.jpg';
import courseImg4 from '../assets/images/card4.jpg';
import courseImg5 from '../assets/images/card5.png';
import courseImg6 from '../assets/images/card6.jpg';

interface CourseCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  level: number;
  description: string;
}

const CourseCardComponent: React.FC<CourseCardProps> = ({
  title,
  slug,
  imageUrl,
  level,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-md h-[300px] group transition-all duration-500 transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-500 ${
          isHovered ? 'transform -translate-y-14' : ''
        }`}
      >
        <div className="bg-blue-600/20 text-blue-200 text-xs font-medium py-1 px-2 rounded-full w-fit mb-3 backdrop-blur-sm">
          Level {level}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
      </div>

      {/* Button */}
      <div
        className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link
          to={`/courses/${slug}`}
          className="block w-full py-2 text-center text-white font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/20 relative overflow-hidden group"
        >
          <span className="relative z-10">Explore More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-purple-400/40 opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></div>
        </Link>
      </div>
    </div>
  );
};

// Exporting an array of course cards (if being used together)
export const CourseCardList: React.FC = () => {
  const courses: CourseCardProps[] = [
    {
      title: 'RoboSpark Juniors',
      slug: 'robospark-juniors',
      imageUrl: courseImg1,
      level: 1,
      description: 'An introductory course in robotics for young minds.',
    },
    {
      title: 'RoboBits Explorer',
      slug: 'robobits-explorer',
      imageUrl: courseImg2,
      level: 2,
      description: 'Explore electronics, circuits, and simple automation.',
    },
    {
      title: 'RoboMasters Builder',
      slug: 'robomasters-builder',
      imageUrl: courseImg3,
      level: 3,
      description: 'Mechanical design, construction, and creativity.',
    },
    {
      title: 'RoboCoders Pro',
      slug: 'robocoders-pro',
      imageUrl: courseImg4,
      level: 4,
      description: 'Code robots to respond and interact intelligently.',
    },
    {
      title: 'RoboNet Innovators',
      slug: 'robonet-innovators',
      imageUrl: courseImg5,
      level: 5,
      description: 'Connect, network, and control robots remotely.',
    },
    {
      title: 'RoboBrains AI',
      slug: 'robobrains-ai',
      imageUrl: courseImg6,
      level: 6,
      description: 'Integrate AI to create smart, learning robots.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCardComponent key={course.slug} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCardComponent;
