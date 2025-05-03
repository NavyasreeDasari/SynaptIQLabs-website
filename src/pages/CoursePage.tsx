import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseData, CourseDataItem } from '../data/courseData';
import { ArrowLeft } from 'lucide-react';

const CoursePage: React.FC = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  
  // Find the course data based on the slug
  const course = courseData.find((c) => c.slug === courseSlug) as CourseDataItem;

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-8">The course you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div 
        className="h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${course.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="text-white pb-12 relative z-10 max-w-3xl">
            <div className="bg-blue-600/20 text-blue-200 text-sm font-medium py-1 px-4 rounded-full w-fit mb-4 backdrop-blur-sm">
              Level {course.level}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">
                {course.fullDescription || course.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Fundamentals of robotics design and construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Programming concepts specific to robotic control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sensor integration and environmental interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Problem-solving through engineering challenges</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Course Structure</h3>
              <p className="text-gray-700 mb-4">
                This {course.level * 4}-week course consists of weekly sessions, each building on previous knowledge.
                Students will complete a capstone project that demonstrates their new skills.
              </p>
            </div>
            
            {/* Curriculum */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
              
              <div className="space-y-4">
                {[1, 2, 3, 4].map((week) => (
                  <div key={week} className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold mb-2">Week {week}</h3>
                    <p className="text-gray-700">
                      {week === 1 && "Introduction to core concepts and basic build techniques"}
                      {week === 2 && "Sensor integration and environmental interaction"}
                      {week === 3 && "Programming logic and control mechanisms"}
                      {week === 4 && "Final project design and implementation"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Course Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.level * 4} Weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">In-person & Online</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Prerequisites:</span>
                    <span className="font-medium">
                      {course.level > 1 ? `Level ${course.level - 1}` : 'None'}
                    </span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md shadow-blue-500/20 transform hover:scale-[1.02]">
                Enroll Now
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our advisors are available to help you choose the right course for your needs.
                </p>
                <button className="w-full py-2 border border-blue-500 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300">
                  Contact an Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;