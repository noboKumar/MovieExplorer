import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setAllMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  console.log(allMovies);
  return (
    <div className="w-11/12 mx-auto py-5 space-y-5">
      {/* title and heading */}
      <div>
        <h1 className="text-3xl font-bold">
          All <span className="text-primary">Movies</span>
        </h1>
        <p className="text-gray-600">
          Browse our curated archival repository of landmark world cinema,
          auteur <br />
          retrospectives, Cannes & Venice laurels, and meticulously restored
          contemporary prints.
        </p>
      </div>

      {/* movies cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              image={movie.image?.original || movie.image?.medium}
              title={movie.name}
              year={movie.premiered}
              runtime={movie.runtime}
              genres={movie.genres}
              summary={movie.summary}
              rating={movie.rating?.average}
              language={movie.language}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
