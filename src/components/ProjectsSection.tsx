
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

const videos = [
  { title: 'Farming Robot', file: project1 },
  { title: 'Stair Climbing robot', file: project2 },
  { title: 'FaceRecognition Doorlock&AlertSystem', file: project3 },
  { title: 'Self Driving Car ', file: project4 },
  { title: 'WIFI Controlling Robot', file: project5},
  { title: 'Gesture based LED Control', file: project6 },
  { title: 'Smart Helmet', file: project7 },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">🎥 Our Working Projects</h2>
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
                  <p className="text-gray-600 mt-2 text-sm">{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
