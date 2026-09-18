import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const desktopNavLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full transition-all duration-200 inline-block font-medium ${
      isActive
        ? "bg-white text-black font-semibold shadow-xs"
        : "text-gray-600 hover:text-primary"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-xl font-medium transition-all ${
      isActive
        ? "bg-primary/10 text-primary font-semibold"
        : "text-gray-600 hover:bg-gray-100 hover:text-slate-900"
    }`;

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="inline-block">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-2 bg-gray-100 border border-gray-200 p-1.5 rounded-full">
          <li>
            <NavLink to="/" className={desktopNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={desktopNavLinkClass}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={desktopNavLinkClass}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <Link
          to="/movies"
          className="hidden md:inline-block bg-primary px-5 py-2 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Explore Movies
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-5 py-4 space-y-3 bg-white shadow-lg">
          <ul className="flex flex-col gap-1">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="pt-2 border-t border-gray-100">
            <Link
              to="/movies"
              onClick={closeMenu}
              className="block w-full text-center bg-primary px-5 py-2.5 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Movies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
