import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const featuredMovies = [
  {
    id: 1,

    title: "The odyssey",
    year: "2026",
    rating: "9.0",
    genre: "Action / Drama",
    poster:
      "https://image.tmdb.org/t/p/w600_and_h900_face/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
  },
  {
    id: 2,
    title: "Inception",
    year: "2010",
    rating: "8.8",
    genre: "Sci-Fi / Thriller",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    genre: "Action / Crime",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    genre: "Sci-Fi / Drama",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
];

const Hero = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % featuredMovies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeMovie = featuredMovies[activeIdx];

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] text-secondary py-12 lg:py-20">
      {/* Warm background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E5A93C]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#E5A93C]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(229,169,60,0.12),transparent_35%)]" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E5A93C]/10 px-3.5 py-1 text-xs font-semibold text-[#b8801f] mb-6 border border-[#E5A93C]/20">
              <span className="h-2 w-2 rounded-full bg-[#E5A93C] animate-pulse" />
              <span>Explore Curated Cinema</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Discover Movies.
              <span className="block text-[#E5A93C]">Find Your Story.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Explore acclaimed movies and television shows from around the
              world. Curated perspectives, comprehensive records, and
              distraction-free discovery.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/movies"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg cursor-pointer"
              >
                Browse All Movies
              </Link>
              <Link
                to="/about"
                className="rounded-full bg-white border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 cursor-pointer"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-200/80 pt-6">
              <div>
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  Movies & Shows
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  Genres
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">4.8/5</p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  User Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Movie Posters Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              className="relative w-full max-w-md"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Featured Shows
                </span>
                <span className="text-xs font-medium text-slate-400 bg-slate-200/60 px-2.5 py-0.5 rounded-full">
                  {activeIdx + 1} / {featuredMovies.length}
                </span>
              </div>

              {/* Main Poster Showcase Card */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-200/50 aspect-[2/3] group">
                <img
                  key={activeMovie.id}
                  src={activeMovie.poster}
                  alt={activeMovie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop";
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent opacity-90" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 border border-white/10 shadow-lg">
                  <span className="text-amber-400 text-xs">★</span>
                  <span className="text-xs font-bold text-white">
                    {activeMovie.rating}
                  </span>
                </div>

                {/* Genre Tag */}
                <div className="absolute top-4 left-4 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 border border-white/20">
                  <span className="text-xs font-medium text-white">
                    {activeMovie.genre}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs font-semibold text-[#E5A93C] tracking-wide uppercase">
                    {activeMovie.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {activeMovie.title}
                  </h3>

                  {/* Poster Thumbnails Selector */}
                  <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between gap-2">
                    {featuredMovies.map((movie, idx) => (
                      <button
                        key={movie.id}
                        onClick={() => setActiveIdx(idx)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                          activeIdx === idx
                            ? "border-[#E5A93C] scale-105 shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`Show ${movie.title}`}
                      >
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="w-12 h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
