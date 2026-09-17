const Error = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-secondary">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          We couldn't load the movies. Please try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
