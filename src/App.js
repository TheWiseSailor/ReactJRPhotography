import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work"; // Import the Work component
import Contact from "./components/Contact"; // Import the Contact component

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
