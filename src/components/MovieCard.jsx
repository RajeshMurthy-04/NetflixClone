import { IMG_BASE_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 flex-shrink-0">
      <img src={IMG_BASE_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
