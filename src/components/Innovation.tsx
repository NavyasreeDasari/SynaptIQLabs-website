import React, { useState } from 'react';
import { Link } from 'react-router-dom';




// Import your 15 images here
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
];

const TransformingSection = () => {
  const repeatedImages = [...images, ...images]; // Repeat for seamless marquee effect

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Transforming Young Minds Into <span className="text-blue-600">Innovators</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our approach blends imagination with education, empowering students to build a strong foundation
          in creativity, technology, and critical thinking from a young age.
        </p>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeatedImages.map((img, index) => (
            <div
              key={index}
              className="md:w-64 md:h-64 w-48 h-48 flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`scroll-img-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformingSection;
