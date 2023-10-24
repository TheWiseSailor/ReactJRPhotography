import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="bg-white py-4 fixed w-full top-0 shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-blue-300 text-xl font-bold ml-4 md:ml-0 pl-6"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            JR/CO
          </Link>

          {/* Hamburger menu icon for mobile view */}
          <div className="md:hidden" onClick={toggleMenu}>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}></div>
          </div>

          <nav
            className={`md:flex space-x-4 ${
              menuOpen ? "mobile-menu-open" : ""
            }`}
          >
            <Link
              to="/work"
              className="text-blue-300 hover:text-gray-400 text-xl pr-6"
              onClick={closeMenu}
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className="text-blue-300 hover:text-gray-400 text-xl pr-6"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
