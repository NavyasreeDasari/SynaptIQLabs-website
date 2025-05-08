import React from 'react';
import HeroSection from '../components/HeroSection';
import TransformingSection from '../components/Innovation';
import PlatformSection from '../components/PlatformSection';
import CoursesSection from '../components/CoursesSection';
import Clients from '../components/Client';
import ProjectsSection from '../components/ProjectsSection';


const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <TransformingSection />
      <PlatformSection />
      <CoursesSection />
      <ProjectsSection />
      <Clients />

    </div>
  );
};

export default Home;