import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Instant Search & Discovery",
    description:
      "Search thousands of movies and shows instantly by title, genre, language, or rating with zero latency.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Rich Show Details",
    description:
      "Access complete show summaries, average ratings, official site links, runtime, and genre breakdowns.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Real-time Updates",
    description:
      "Always stay up to date with trending releases and latest premiering episodes powered by the TVMaze API.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Distraction-Free UI",
    description:
      "Clean, responsive glass morphism aesthetic built with Tailwind CSS for an immersive browsing experience.",
  },
];

const About = () => {
  return (
    <section className="py-16 bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        {/* Mission Statement Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <span>About Movie Explorer</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
            Connecting Film Lovers with World-Class Cinema
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600">
            Movie Explorer is a modern web application designed to make
            discovering movies and TV shows simple, fast, and inspiring. Powered
            by open APIs and crafted with care, we provide clean insights into
            stories from around the globe.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:border-primary/30"
            >
              <div className="rounded-xl bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story & Tech Stack Box */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Built for Speed, Elegance, and Accessibility
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether you're looking for a classic drama, a high-octane sci-fi
                adventure, or an upcoming trending release, Movie Explorer
                presents accurate show records, ratings, and summaries in a
                distraction-free environment.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/movies"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 cursor-pointer"
              >
                <span>Explore Movies Now</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
