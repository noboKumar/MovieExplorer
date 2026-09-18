import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import MovieCard from "../components/MovieCard";
import MovieDetails from "./MovieDetails";
import SearchBar from "../components/SearchBar";

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movieId, setMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setAllMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const filteredMovies = allMovies.filter((movie) =>
    movie.name?.toLowerCase().includes(search.toLowerCase().trim()),
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="w-11/12 mx-auto py-5 space-y-6">
      {/* Title and heading */}
      <div>
        <h1 className="text-3xl font-bold">
          All <span className="text-primary">Movies</span>
        </h1>
        <p className="text-slate-600 mt-1">
          Browse our curated archival repository of landmark world cinema,
          auteur retrospectives, Cannes & Venice laurels, and meticulously
          restored prints.
        </p>
      </div>

      {/* Search bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Movies grid or Empty state */}
      {filteredMovies.length === 0 ? (
        <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-lg font-semibold text-slate-700">
            No movies found for "{search}"
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Try searching with a different keyword.
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-90 cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              image={movie.image?.original || movie.image?.medium}
              title={movie.name}
              year={movie.premiered}
              runtime={movie.runtime}
              genres={movie.genres}
              summary={movie.summary}
              rating={movie.rating?.average}
              language={movie.language}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              movieId={movieId}
              setMovieId={setMovieId}
            />
          ))}
        </div>
      )}

      {/* Movie Details Modal */}
      <MovieDetails
        movieId={movieId}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setMovieId(null);
        }}
      />
    </div>
  );
};

export default Movies;
