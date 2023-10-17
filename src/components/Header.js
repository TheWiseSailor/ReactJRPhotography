import React, { useState } from "react";
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
          <a
            href="/"
            className="text-blue-300 text-3xl font-bold ml-4 md:ml-0 pl-6"
          >
            J&R.CO
          </a>

          {/* Hamburger menu icon for mobile view */}
          <div className="md:hidden" onClick={toggleMenu}>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}></div>
          </div>

          <nav className="hidden md:flex space-x-4">
            <a
              href="/work"
              className="text-blue-300 hover:text-gray-400 text-3xl pr-6"
            >
              My Work
            </a>
            <a
              href="/contact"
              className="text-blue-300 hover:text-gray-400 text-3xl pr-6"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/work" onClick={closeMenu}>
          My Work
        </a>
        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;
