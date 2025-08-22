import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const buttonClass =
    "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400";

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0">
        <Link to="/" className="group">
          <h1 className="text-xl font-extrabold text-orange-500 tracking-wide transition-colors duration-300 group-hover:text-orange-400 cursor-pointer">
            Islamic Finance GPT Assistant
          </h1>
        </Link>

        {location.pathname === "/get-started" ? (
          <Link to="/report">
            <button
              className={buttonClass}
              aria-label="Navigate to Report page"
            >
              Report
            </button>
          </Link>
        ) : location.pathname === "/report" ? null : (
          <Link to="/get-started">
            <button
              className={buttonClass}
              aria-label="Navigate to Get Started page"
            >
              Get Started
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
