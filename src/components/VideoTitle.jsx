import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 text-white bg-gradient-to-r from-black via-black/50 to-transparent w-full h-full">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-lg mb-8 line-clamp-3 drop-shadow-lg">{overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition duration-300 flex items-center gap-2 hover:scale-105">
            Play
          </button>
          <button className="bg-gray-600 text-white font-bold py-3 px-8 rounded hover:bg-gray-700 transition duration-300 bg-opacity-70 hover:scale-105">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
