import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import
import "../styles/App.css";

function Header() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
  document.body.appendChild(script);

  // Initialize AOS after the script has loaded
  script.onload = () => {
    window.AOS.init();
  };
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
            className="text-blue-300 text-3xl font-bold ml-4 md:ml-0 pl-6"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            JR Photography
          </Link>

          {/* Hamburger menu icon for mobile view */}
          <div className="md:hidden" onClick={toggleMenu}>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}></div>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link
              to="/work"
              className="text-blue-300 hover:text-gray-400 text-3xl pr-6"
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className="text-blue-300 hover:text-gray-400 text-3xl pr-6"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/work" onClick={closeMenu}>
          My Work
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
