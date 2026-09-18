const MovieCard = ({
  id,
  image,
  title,
  year,
  runtime,
  genres,
  summary,
  rating,
  language,
  setIsModalOpen,
  setMovieId,
}) => {
  const displayYear = year ? year.split("-")[0] : "N/A";
  const plainSummary =
    summary?.replace(/<[^>]*>/g, "") || "No summary available.";

  const handleDetailsModal = () => {
    setIsModalOpen(true);
    setMovieId(id)
  };

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30">
      {/* Poster & Overlay Container */}
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-100">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop"
          }
          alt={`${title} poster`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop";
          }}
        />

        {/* Top Badges */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
          {/* Language Badge */}
          {language ? (
            <span className="rounded-full bg-slate-900/75 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-200 border border-white/10 shadow-xs">
              {language}
            </span>
          ) : (
            <span />
          )}

          {/* Rating Badge */}
          <div className="flex items-center gap-1 rounded-full bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white border border-white/10 shadow-xs">
            <span className="text-amber-400">★</span>
            <span>{rating ?? "N/A"}</span>
          </div>
        </div>

        {/* Hover Summary Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            Summary
          </span>
          <p className="line-clamp-5 text-xs leading-relaxed text-slate-200">
            {plainSummary}
          </p>

          <button
            onClick={() => handleDetailsModal()}
            className="mt-4 w-full rounded-xl bg-primary py-2 text-xs font-semibold text-white shadow-md transition hover:opacity-90 cursor-pointer text-center"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          {/* Year & Runtime */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1.5">
            <span>{displayYear}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{runtime ? `${runtime} min` : "Runtime N/A"}</span>
          </div>

          {/* Title */}
          <h2 className="line-clamp-1 text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
            {title}
          </h2>
        </div>

        {/* Genres Pill Badges */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
          {genres?.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary"
            >
              {genre}
            </span>
          ))}
          {genres?.length > 3 && (
            <span className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-400">
              +{genres.length - 3}
            </span>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default MovieCard;
