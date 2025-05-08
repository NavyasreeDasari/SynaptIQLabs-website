// src/data/courseData.ts
import course1 from '../assets/images/card1.png';
import course2 from '../assets/images/card2.jpg';
import course3 from '../assets/images/card3.jpg';
import course4 from '../assets/images/card4.jpg';
import course5 from '../assets/images/card5.png';
import course6 from '../assets/images/card6.jpg';

export interface CourseDataItem {
  title: string;
  slug: string;
  level: number;
  imageUrl: string;
  description: string;
  fullDescription?: string;
}

export const courseData: CourseDataItem[] = [
  {
    title: 'RoboSpark Juniors',
    slug: 'robospark-juniors',
    level: 1,
    imageUrl: course1,
    description: 'An introduction to robotics for beginners. Learn basic concepts through fun, hands-on activities.',
    fullDescription: 'RoboSpark Juniors is designed for children ages 6–9...'
  },
  {
    title: 'RoboBits Explorer',
    slug: 'robobits-explorer',
    level: 2,
    imageUrl: course2,
    description: 'Expand your knowledge with more advanced robotic components...',
    fullDescription: 'In RoboBits Explorer, students ages 10–12...'
  },
  {
    title: 'RoboMasters Builder',
    slug: 'robomasters-builder',
    level: 3,
    imageUrl: course3,
    description: 'Master mechanical construction and create functional robots...',
    fullDescription: 'RoboMasters Builder focuses on the mechanical aspects...'
  },
  {
    title: 'RoboCoders Pro',
    slug: 'robocoders-pro',
    level: 4,
    imageUrl: course4,
    description: 'Dive into programming languages specifically designed...',
    fullDescription: 'RoboCoders Pro transitions students ages 14–16...'
  },
  {
    title: 'RoboNet Innovators',
    slug: 'robonet-innovators',
    level: 5,
    imageUrl: course5,
    description: 'Connect your robots to the Internet of Things (IoT)...',
    fullDescription: 'RoboNet Innovators introduces students ages 16–18...'
  },
  {
    title: 'RoboBrains AI',
    slug: 'robobrains-ai',
    level: 6,
    imageUrl: course6,
    description: 'Implement artificial intelligence and machine learning...',
    fullDescription: 'Our most advanced course, RoboBrains AI...'
  }
];
