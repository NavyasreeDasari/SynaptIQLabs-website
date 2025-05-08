import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import project1 from '../assets/videos/farmingRobot.mp4';
import project2 from '../assets/videos/climbingRobot.mp4';
import project3 from '../assets/videos/faceRecognition.mp4';
import project4 from '../assets/videos/selfdrivingCar.mp4';
import project5 from '../assets/videos/wifiRobot.mp4';
import project6 from '../assets/videos/ledControl.mp4';
import project7 from '../assets/videos/smartHelmet.mp4';

const cards = [
  {
    name: 'Project Ideation & Planning',
    points: [
      'Select topics aligned with industry trends',
      'Define problem statements and objectives',
      'Documentation support',
    ],
  },
  {
    name: 'Embedded Systems Development',
    points: [
      'Arduino, ESP32, STM32 coding',
      'Sensor & actuator integration',
      'Real-time testing & PCB guidance',
    ],
  },
  {
    name: 'IoT Project Support',
    points: [
      'IoT architecture & cloud integration',
      'App & data connectivity',
      'Wi-Fi, BLE, LoRa, GSM support',
    ],
  },
  {
    name: 'Machine Learning Integration',
    points: [
      'Data collection & preprocessing',
      'Model training (TensorFlow, Scikit-learn)',
      'Edge deployment (Raspberry Pi, Jetson)',
    ],
  },
];

const videos = [
  { title: 'Farming Robot', file: project1 },
  { title: 'Stair Climbing robot', file: project2 },
  { title: 'FaceRecognition Doorlock & AlertSystem', file: project3 },
  { title: 'Self Driving Car', file: project4 },
  { title: 'WIFI Controlling Robot', file: project5 },
  { title: 'Gesture based LED Control', file: project6 },
  { title: 'Smart Helmet', file: project7 },
];

const ProjectHub = () => {
  return (
    <div className="py-16 px-4 bg-gray-100 min-h-screen">
      {/* 🔧 Hero Section */}
      <h1 className="text-3xl font-bold text-center text-shadow text-blue-700 mb-6 pt-10 text-shadow">
         Project Support Hub for Embedded Systems, IoT & ML
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        End-to-end help for academic and innovative hardware projects. From ideas to real systems, we help students and makers build.
      </p>

      {/* 💡 What We Offer */}
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-10">💡 What We Offer</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative w-[280px] h-[280px] [perspective:1000px] group"
          >
           <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
  {/* Front - show title */}
  <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-6 backface-hidden">
    <h3 className="text-xl font-bold text-blue-700 text-center">{card.name}</h3>
  </div>

  {/* Back - show points */}
  <div className="absolute w-full h-full bg-blue-700 text-white rounded-xl p-6 [transform:rotateY(180deg)] backface-hidden">
    <ul className="list-disc pl-4 space-y-2 text-sm">
      {card.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* 🎥 Projects Section */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">🎥  Projects</h2>
        <p className="text-center text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
          Explore real-world hardware projects built by students and innovators using Embedded Systems, IoT, and Machine Learning.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-7xl mx-auto"
        >
          {videos.map((video, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <video
                  src={video.file}
                  controls
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-700">{video.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 📘 Who Is This For */}
      <div className="mt-20 text-center">
  <h3 className="text-2xl font-semibold text-blue-700 mb-6">📘 Who Is This For?</h3>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 text-lg font-medium">
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">🎓</span>
      <span>B.Tech / M.Tech / Diploma Students</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-green-600 text-xl">💡</span>
      <span>Makers and Innovators</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-purple-600 text-xl">🏫</span>
      <span>Engineering Colleges & Training Institutes</span>
    </div>
  </div>
</div>
</div>
  );
};

export default ProjectHub;
