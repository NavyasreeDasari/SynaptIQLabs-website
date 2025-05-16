import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CourseSection from './components/CoursesSection';
import CoursePage from './pages/CoursePage';
import ProjectHub from './pages/ProjectHub';
import ReachOutPage from './pages/ReachOutPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<CourseSection />} />
        <Route path="courses/:courseSlug" element={<CoursePage />} />
        <Route path="project-hub" element={<ProjectHub />} />
        <Route path="reach-out-us" element={<ReachOutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
