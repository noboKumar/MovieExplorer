import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-black bg-white rounded-full px-4 py-2"
      : "hover:text-primary";

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
      <Logo></Logo>
      <ul className="flex gap-5 bg-gray-100 border-2 border-gray-100 px-4 py-2 rounded-full text-black/70">
        {navLinks}
      </ul>
      <button className="bg-primary px-5 py-2 text-white rounded-full font-semibold">
        Explore Movies
      </button>
    </div>
  );
};

export default NavBar;
