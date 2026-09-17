import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

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
      <div>
        {allMovies.map((movie) => {
          return <p key={movie.id}>{movie.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Movies;
