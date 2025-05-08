import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl, children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
