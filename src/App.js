import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Router basename="/ReactJRPhotography">
        {" "}
        {/* Set the basename */}
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
