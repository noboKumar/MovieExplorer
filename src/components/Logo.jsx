import logo from "../assets/movie_explorer_logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img height={60} width={60} src={logo} alt="movie-logo" />
      <h1 className="text-xl font-bold text-secondary">
        Movie<span className="text-primary">Explorer</span>
      </h1>
    </div>
  );
};

export default Logo;
