import React from 'react';

const cards = [
  {
    title: 'Project Ideation & Planning',
    points: [
      'Select topics aligned with industry trends',
      'Define problem statements and objectives',
      'Documentation support',
    ],
  },
  {
    title: 'Embedded Systems Development',
    points: [
      'Arduino, ESP32, STM32 coding',
      'Sensor & actuator integration',
      'Real-time testing & PCB guidance',
    ],
  },
  {
    title: 'IoT Project Support',
    points: [
      'IoT architecture & cloud integration',
      'App & data connectivity',
      'Wi-Fi, BLE, LoRa, GSM support',
    ],
  },
  {
    title: 'Machine Learning Integration',
    points: [
      'Data collection & preprocessing',
      'Model training (TensorFlow, Scikit-learn)',
      'Edge deployment (Raspberry Pi, Jetson)',
    ],
  },
];

const ProjectHub = () => {
  return (
    <div className="py-16 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Project Support Hub for Embedded Systems, IoT & ML
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
        End-to-end help for academic and innovative hardware projects. From ideas to real systems, we help students and makers build.
      </p>

      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">What We Offer</h2>

      <div className="flex flex-col items-center space-y-10">
        {/* Row 1 */}
        <div className="flex space-x-10">
          {cards.slice(0, 2).map((card, idx) => (
            <div
              key={idx}
              className="relative group hover:cursor-pointer w-[280px] h-[280px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            >
              <div className="p-6 flex justify-center items-center h-full">
                <h3 className="text-xl font-bold text-blue-700 text-center">{card.title}</h3>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-700 text-white px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <ul className="list-disc pl-5 text-sm space-y-2">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 with offset */}
        <div className="flex space-x-10 translate-x-14 sm:translate-x-20">
          {cards.slice(2, 4).map((card, idx) => (
            <div
              key={idx}
              className="relative group hover:cursor-pointer w-[280px] h-[280px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            >
              <div className="p-6 flex justify-center items-center h-full">
                <h3 className="text-xl font-bold text-blue-700 text-center">{card.title}</h3>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-700 text-white px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <ul className="list-disc pl-5 text-sm space-y-2">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-center text-blue-700 mt-16"> Who Is This For?</h3>
      <p className="text-center text-gray-700 mt-4 text-lg">
        ● B.Tech / M.Tech / Diploma Students<br />
        ● Makers and Innovators<br />
        ● Engineering Colleges & Training Institutes
      </p>
    </div>
  );
};

export default ProjectHub;
