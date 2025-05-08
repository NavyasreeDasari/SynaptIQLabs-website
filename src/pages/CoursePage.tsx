import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseData, CourseDataItem } from '../data/courseData';
import { ArrowLeft } from 'lucide-react';

const CoursePage: React.FC = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
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

  const renderCourseContent = () => {
    const content: Record<string, JSX.Element> = {
      'robospark-juniors': (
        <>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 animate-pulse">🔰 Why Choose RoboSpark Juniors?</h2>
          <p className="mb-4">An engaging introduction to the world of coding through animations and games. Designed to build logical thinking in a fun, friendly environment.</p>
          <h3 className="text-xl font-semibold mb-2">🚀 Kids' Journey at RoboSpark Juniors</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Create stories, games, and cartoons</li>
            <li>Learn coding concepts visually</li>
            <li>Develop algorithmic thinking early</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">🎥 Check Out What a Class Looks Like</h3>
          <p>Children participate in game-based coding, story creation, and interactive problem-solving with vibrant visuals and intuitive interfaces.</p>
        </>
      ),
      'robobits-explorer': (
        <>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 animate-pulse">🔧 Why Choose RoboBits Explorer?</h2>
          <p className="mb-4">Combines creativity with electronics. Students learn how hardware and coding interact while building real circuits and gadgets.</p>
          <h3 className="text-xl font-semibold mb-2">🚀 Kids' Journey at RoboBits Explorer</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Simulate electronic circuits</li>
            <li>Use Micro:Bit to build projects</li>
            <li>Explore real-world sensors and inputs</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">🎥 Check Out What a Class Looks Like</h3>
          <p>Students experiment in virtual and real environments, creating circuits, coding them, and seeing immediate results.</p>
        </>
      ),
      'robomasters-builder': (
        <>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 animate-pulse">🤖 Why Choose RoboMasters Builder?</h2>
          <p className="mb-4">Empowers students to become actual robot makers. They build and code robots while understanding real-world robotics logic.</p>
          <h3 className="text-xl font-semibold mb-2">🚀 Kids' Journey at RoboMasters Builder</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Build robots from the ground up</li>
            <li>Learn about sensors, motors, and control logic</li>
            <li>Compete in challenges and obstacle courses</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">🎥 Check Out What a Class Looks Like</h3>
          <p>Sessions involve robot assembly, motion programming, and task execution — all under guided mentorship.</p>
        </>
      ),
      'robocoders-pro': (
        <>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 animate-pulse">🖥 Why Choose RoboCoders Pro?</h2>
          <p className="mb-4">Focuses on embedded systems, real-time coding, and circuit-level understanding using Arduino and C programming.</p>
          <h3 className="text-xl font-semibold mb-2">🚀 Kids' Journey at RoboCoders Pro</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Write code in Arduino IDE</li>
            <li>Interface sensors and develop prototypes</li>
            <li>Learn debugging and code structuring</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">🎥 Check Out What a Class Looks Like</h3>
          <p>Each session includes structured coding practice, component interfacing, and hands-on building of mini embedded systems.</p>
        </>
      ),
      'robonet-innovators': (
        <>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 animate-pulse">🌐 Why Choose RoboNet Innovators?</h2>
          <p className="mb-4">A deep dive into Internet of Things — where students make devices that sense, communicate, and react via the cloud.</p>
          <h3 className="text-xl font-semibold mb-2">🚀 Kids' Journey at RoboNet Innovators</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Work with ESP8266/ESP32 boards</li>
            <li>Connect devices to cloud services</li>
            <li>Automate actions using Blynk and Firebase</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">🎥 Check Out What a Class Looks Like</h3>
          <p>Interactive classes featuring cloud-connected systems, smart home setups, and real-time data exchange.</p>
        </>
      ),
      'robobrains-ai': (
        <>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 animate-pulse">🧠 Why Choose RoboBrains AI?</h2>
          <p className="mb-4">Introduces artificial intelligence, machine learning, and Python programming in an intuitive and beginner-friendly way.</p>
          <h3 className="text-xl font-semibold mb-2">🚀 Kids' Journey at RoboBrains AI</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Code in Python</li>
            <li>Train AI models for voice, face, and object recognition</li>
            <li>Build intelligent apps and games</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">🎥 Check Out What a Class Looks Like</h3>
          <p>Students explore machine learning tools, develop AI-based applications, and interact with real-world data in creative ways.</p>
        </>
      ),
    };
    return content[course.slug] || <p>{course.fullDescription || course.description}</p>;
  };

  const renderPillarsSection = () => (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-purple-700 animate-pulse">🌟 Pillars of Our Curriculum</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Hands-on Learning:</strong> Students build, code, test, and innovate in every session.</li>
        <li><strong>Progressive Skill Development:</strong> Structured levels build from basics to advanced tech.</li>
        <li><strong>Creativity & Problem-Solving:</strong> Projects enhance critical thinking and innovation.</li>
        <li><strong>Tech Exposure at an Early Age:</strong> Tools like Arduino, ESP32, Python are introduced early.</li>
        <li><strong>Project-Based & Outcome-Focused:</strong> Each course ends with capstone projects.</li>
        <li><strong>Future-Ready Curriculum:</strong> Prepares students with 21st-century STEM skills.</li>
      </ul>
    </div>
  );

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
              {renderCourseContent()}
              {renderPillarsSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
