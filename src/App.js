import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";


function App() {

  // Global language state
  const [language, setLanguage] = useState("en");

  return (
    <Router>
       <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">

        {/* Pass language to Navbar */}
        <Navbar language={language} setLanguage={setLanguage} />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/products" element={<Products language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>

        <Footer language={language} />

      </div>
    </Router>
  );
}

export default App;