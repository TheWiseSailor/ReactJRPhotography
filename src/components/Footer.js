import React from "react";
import "../styles/App.css";
function Footer() {
  return (
    <footer className="bg-white py-6 text-blue-400 text-center border-t border-gray-300">
      <p className="text-sm">
        © 2023 J&R.CO
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Site map
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Your Privacy Choices
        </a>
      </p>
    </footer>
  );
}

export default Footer;
