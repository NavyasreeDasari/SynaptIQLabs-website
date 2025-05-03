import React from 'react';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <CoursesSection />
    </div>
  );
};

export default Home;