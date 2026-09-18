
const SearchBar = ({ search, setSearch, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row"
    >
      <div className="flex flex-1 items-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-[#E5A93C] focus-within:ring-2 focus-within:ring-[#E5A93C]/20">
        <svg
          className="mr-3 h-5 w-5 text-slate-400 shrink-0"
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full bg-transparent py-3.5 text-sm text-secondary outline-none placeholder:text-slate-400"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="text-slate-400 hover:text-slate-600 text-xs px-2 cursor-pointer shrink-0"
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="submit"
        className="rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#d99b2f] hover:shadow-md cursor-pointer shrink-0"
      >
        Search Movies
      </button>
    </form>
  );
};

export default SearchBar;
