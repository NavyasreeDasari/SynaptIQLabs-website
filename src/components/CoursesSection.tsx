import React from 'react';
import CourseCardComponent from './CourseCard';
import { courseData } from '../data/courseData';

const CoursesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-600">Learning</span> Paths
          </h2>
          <p className="text-gray-600">
            Choose from our carefully designed courses to begin your journey 
            in robotics, from junior levels to advanced AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <CourseCardComponent
              key={course.slug}
              title={course.title}
              slug={course.slug}
              imageUrl={course.imageUrl}
              level={course.level}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;