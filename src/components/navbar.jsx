import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-2xl font-extrabold flex items-center space-x-2 drop-shadow-lg">
          <FaPlane className="text-yellow-400 text-3xl" />
          <span>SkyJet Airlines</span>
        </h1>

       
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/flights">
                {/* Flights */}
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/bookings">
                {/* Bookings */}
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/check-in">
                Check-in
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/flight-status">
                Flight Status
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-400 transition-colors duration-300" to="/destinations">
                Destinations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
