import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getVideoUrl = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        return;
      }
      const youtubeTrailers = data.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );
      const trailer =
        youtubeTrailers.length > 0
          ? youtubeTrailers[0]
          : data.results.find((video) => video.site === "YouTube") ||
            data.results[0];
      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getVideoUrl();
    }
  }, [movieId]);
};

export default useMovieTrailer;
