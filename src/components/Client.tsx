import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import client1 from '../assets/images/client1.jpg';
import client2 from '../assets/images/client2.jpg';
import client3 from '../assets/images/client3.jpg';
import client4 from '../assets/images/client4.jpg';
import client5 from '../assets/images/client4.jpg';

const testimonials = [
  {
    name: 'Gennext School, Madhapur, Hyderabad',
    content: `We are extremely grateful to NexMinds for their exceptional support and guidance during the preparation for National Science Day 2025. Their team conducted engaging and insightful robotics training sessions, empowering our students with hands-on experience and practical knowledge. The mentors not only inspired curiosity and creativity but also worked closely with the students to help them successfully build innovative robotics projects. Their dedication and mentorship made a significant impact, and we look forward to continued collaboration in the future.`,
    image: client1,
  },
  {
    name: 'Kriti The Concept School - Suraram - Hyderabad',
    content: `We are extremely grateful to NexMinds for their exceptional support during our preparations for National Science Day 2025. Their team conducted engaging and insightful training sessions, providing our students with hands-on experience in robotics.`,
    image: client2,
  },
  {
    name: 'Ascentia School - Miyapur - Hyderabad',
    content: `We are immensely grateful to NexMinds for the outstanding support and guidance they provided to our students in preparation for National Science Day 2025. Their team conducted excellent training sessions, during which students not only gained valuable knowledge but also successfully built various Robotics projects under their mentorship.\nThe hands-on learning experience and dedication shown by the NexMinds team significantly enhanced our students' confidence and technical skills.  Thanks to their expert training ,their guidance and mentorship, our students were able to successfully complete 10 innovative robotics projects. The trainers demonstrated great expertise and dedication, making complex concepts easy to understand and inspiring our students throughout the process.`,
    image: client3,
  },
  {
    name: 'Shiva Reddy - Vignana Bharathi Institute of Technology (VBIT) - Hyderabad',
    content: `I would like to extend my heartfelt gratitude to NexMinds for their exceptional guidance and support throughout the development of my graduation project, "ESP8266-based Underground Mining Safety Helmet using LoRa." Their technical mentorship, insightful feedback, and encouragement played a crucial role in successfully completing and presenting the project. I am proud to share that the project has been accepted for publication by IEEE an achievement that would not have been possible without NexMinds unwavering support.`,
    image: client4,
  },
  {
    name: 'Abhi - Vignana Bharathi Institute of Technology (VBIT) - Hyderabad',
    content: `I would like to sincerely thank NexMinds for their invaluable guidance and support throughout the development and presentation of my graduation project, "Face Detection Door Lock System using OpenCV". The system opens the gate only when a known face is detected. If an unknown face is detected, the gate remains locked, a buzzer is activated, and a Telegram alert is sent for added security.\nThe team at NexMinds not only helped me with the technical aspects but also encouraged me to understand the real-world applications and challenges of such systems. I’m grateful for their mentorship, expertise, and commitment to student success.`,
    image: client5,
  },
];

const Clients = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700 animate-pulse">
         What Our Clients Say
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col sm:flex-row items-center sm:items-start text-left gap-6"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
              />
              <div className="max-w-3xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{testimonial.name}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
