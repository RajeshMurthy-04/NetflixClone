import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-transparent">
      {trailerVideo ? (
        <iframe
          className="absolute top-1/2 left-1/2"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1`}
          title="YouTube video player"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: "none",
            backgroundColor: "transparent",
            minWidth: "120%",
            minHeight: "120%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
          }}
        ></iframe>
      ) : (
        <div className="absolute inset-0 bg-black flex items-center justify-center text-white text-xl font-semibold animate-pulse">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            Loading trailer...
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
