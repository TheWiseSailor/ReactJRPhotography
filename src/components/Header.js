import React from "react";
import "../styles/App.css";
function Header() {
  return (
    <nav className="bg-white py-4 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-blue-300 text-3xl font-bold ml-4 md:ml-0 pl-6"
        >
          J&R.CO
        </a>
        <nav className="space-x-4">
          <a
            href="#"
            className=" text-blue-300 hover:text-gray-400 text-3xl pr-6"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </nav>
  );
}

export default Header;
