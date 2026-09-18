import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";

const MovieDetails = ({ movieId, isOpen, onClose }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId || !isOpen) return;

    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      {/* Backdrop overlay (click outside to close) */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800 cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {loading ? (
          <div className="py-12 flex justify-center">
            <Loading />
          </div>
        ) : error ? (
          <div className="py-8">
            <Error message={error} />
          </div>
        ) : movie ? (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-6">
              {movie.image?.medium && (
                <img
                  src={movie.image.medium}
                  alt={movie.name}
                  className="w-44 rounded-xl object-cover shadow-md mx-auto sm:mx-0 shrink-0"
                />
              )}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {movie.rating?.average && (
                    <span className="rounded-full bg-amber-100 text-amber-800 text-xs px-2.5 py-1 font-bold">
                      ★ {movie.rating.average}
                    </span>
                  )}
                  {movie.language && (
                    <span className="rounded-full bg-slate-100 text-slate-700 text-xs px-2.5 py-1 font-medium">
                      {movie.language}
                    </span>
                  )}
                  {movie.premiered && (
                    <span className="text-xs text-slate-500 font-medium">
                      {movie.premiered.split("-")[0]}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {movie.name}
                </h2>

                {movie.genres && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {movie.genres.map((g) => (
                      <span
                        key={g}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                )}

                {movie.officialSite && (
                  <div className="pt-2">
                    <a
                      href={movie.officialSite}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-xs font-semibold text-primary hover:underline"
                    >
                      Visit Official Site →
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Summary
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {movie.summary?.replace(/<[^>]*>/g, "") ||
                  "No summary available."}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieDetails;
