import logo from "../assets/movie_explorer_logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img height={60} width={60} src={logo} alt="movie-logo" />
      <h1 className="font-bold text-xl">Movie Explorer</h1>
    </div>
  );
};

export default Logo;
