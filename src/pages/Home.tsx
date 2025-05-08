import React from 'react';
import HeroSection from '../components/HeroSection';
import TransformingSection from '../components/Innovation';
import PlatformSection from '../components/PlatformSection';
import CoursesSection from '../components/CoursesSection';
import Clients from '../components/Client';
import CurriculumSection from '../components/Curriculum';


const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <TransformingSection />
      <PlatformSection />
      <CoursesSection />
      <CurriculumSection />
      <Clients />

    </div>
  );
};

export default Home;