const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] text-secondary">
      {/* Warm background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E5A93C]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#E5A93C]/10 blur-3xl" />

        {/* Subtle warm gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(229,169,60,0.12),transparent_35%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Discover Movies.
            <span className="block text-[#E5A93C]">Find Your Story.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Explore acclaimed movies and television shows from around the world.
            Curated perspectives, comprehensive records, and distraction-free
            discovery.
          </p>

          {/* Search */}
          <div className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-[#E5A93C] focus-within:ring-2 focus-within:ring-[#E5A93C]/20">
              <svg
                className="mr-3 h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search for a movie..."
                className="w-full bg-transparent py-4 text-sm text-secondary outline-none placeholder:text-slate-400"
              />
            </div>

            <button className="rounded-full bg-primary px-7 py-4 font-semibold text-white shadow-sm transition hover:bg-[#d99b2f] hover:shadow-md cursor-pointer">
              Search Movies
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-200 pt-8">
            <div>
              <p className="text-2xl font-bold">10K+</p>
              <p className="mt-1 text-sm text-slate-500">Movies</p>
            </div>

            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="mt-1 text-sm text-slate-500">Genres</p>
            </div>

            <div>
              <p className="text-2xl font-bold">4.8/5</p>
              <p className="mt-1 text-sm text-slate-500">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
