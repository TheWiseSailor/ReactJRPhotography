// App.js

import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"; // Import the Home component

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Home /> {/* Render the Home component */}
      <Footer />
    </div>
  );
}

export default App;
