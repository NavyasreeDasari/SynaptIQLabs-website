import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl, children }) => {
  return (
    <div className="relative overflow-hidden h-screen">
      {/* Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;