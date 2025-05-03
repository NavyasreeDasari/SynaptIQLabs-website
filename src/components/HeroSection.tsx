import React from 'react';
import { Link } from 'react-router-dom';
import robotVideo from '../assets/back_video.mp4';
import VideoBackground from './VideoBackground';

const HeroSection: React.FC = () => {
  const videoUrl = robotVideo;

  return (
    <VideoBackground videoUrl={videoUrl}>
      <div className="container mx-auto px-4 h-full flex items-center pt-16">
        <div className="max-w-xl text-white">
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
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/courses/robospark-juniors"
              className="px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="px-8 py-3 rounded-md bg-transparent border border-white text-white font-medium text-center transition-colors duration-300 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default HeroSection;