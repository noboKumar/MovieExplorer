import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full transition-all duration-200 inline-block font-medium ${
      isActive
        ? "bg-white text-black font-semibold shadow-xs"
        : "text-gray-600 hover:text-primary"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={navLinkClass}>
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="px-5 py-2 border-b-2 border-gray-100 flex items-center justify-between">
      <Link to="/" className="inline-block">
        <Logo />
      </Link>
      <ul className="flex items-center gap-2 bg-gray-100 border border-gray-200 p-1.5 rounded-full">
        {navLinks}
      </ul>
      <Link
        to="/movies"
        className="bg-primary px-5 py-2 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
      >
        Explore Movies
      </Link>
    </div>
  );
};

export default NavBar;
