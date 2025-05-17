import React from 'react';
import { Link } from 'react-router-dom';
import robotVideo from '../assets/vid.mp4';
import VideoBackground from './VideoBackground';

const HeroSection: React.FC = () => {
  const videoUrl = robotVideo;

  return (
    <VideoBackground videoUrl={videoUrl}>
      <div id="home" className="container mx-auto px-4 h-full flex items-center pt-10">
        <div className="max-w-xl text-white text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Build The</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Future With Robotics
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover our cutting-edge robotics courses designed for all skill levels. 
            From beginners to advanced innovators, start your journey today.
          </p>
          <Link
            to="https://forms.gle/LLmtWg4ANpGwHC9Z6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Register for Free Demo Class
          </Link>
        </div>
      </div>
    </VideoBackground>
  );
};

export default HeroSection;
