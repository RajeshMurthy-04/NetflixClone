import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex space-x-4 overflow-x-scroll py-4 hide-scrollbar">
        {movies?.length ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))
        ) : (
          <div className="text-gray-300">No movies available.</div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
