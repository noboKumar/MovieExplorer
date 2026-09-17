import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div>
            <Logo />

            <p className="mt-2 text-sm text-slate-500">
              Discover movies. Find your story.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <a href="/" className="transition hover:text-primary">
              Home
            </a>

            <a href="/movies" className="transition hover:text-primary">
              Movies
            </a>

            <a href="/about" className="transition hover:text-primary">
              About
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MovieExplorer. All rights reserved.
          </p>

          <p>Built for movie lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
