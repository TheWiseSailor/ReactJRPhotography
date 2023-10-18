import React from "react";
import "../styles/App.css";
function Footer() {
  return (
    <footer className="bg-white py-6 text-blue-400 text-center border-t border-gray-300">
      <p className="text-sm ">
        © 2023 JR Photography
        <a href="#" className="hover:underline pl-2">
          Terms
        </a>
        <a href="#" className="hover:underline pl-2">
          Site map
        </a>
        <a href="#" className="hover:underline pl-2">
          Privacy
        </a>
        <a href="#" className="hover:underline pl-2">
          Your Privacy Choices
        </a>
      </p>
    </footer>
  );
}

export default Footer;
