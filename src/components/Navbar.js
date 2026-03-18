import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar({ language, setLanguage }) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar labels based on language
  const NAV_LINKS = [
    { to: "/", label: language === "ta" ? "முகப்பு" : "Home" },
    { to: "/about", label: language === "ta" ? "எங்களை பற்றி" : "About" },
    { to: "/products", label: language === "ta" ? "தயாரிப்புகள்" : "Products" },
    { to: "/contact", label: language === "ta" ? "தொடர்பு" : "Contact" }
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top honey-navbar ${
        scrolled ? "honey-navbar--scrolled" : ""
      }`}
    >
      <div className="container">

        {/* Brand */}
        <NavLink className="navbar-brand honey-brand" to="/">
          <span className="honey-brand__icon">🍯</span>
          <span className="honey-brand__name">
            {language === "ta" ? "கோல்டன் ஹைவ்" : "O.I.Honey World"}
          </span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">

            {NAV_LINKS.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `nav-link honey-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Language Dropdown */}
           {/* <select
  className="form-select form-select-sm"
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
  style={{ width: "110px" }}
>
  <option value="en">English</option>
  <option value="ta">தமிழ்</option>
</select> */}

            {/* CTA Button */}
            {/* <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <NavLink to="/products" className="btn honey-btn-cta btn-sm px-4 py-2">
                {language === "ta" ? "வாங்க" : "Shop Now"}
              </NavLink>
            </li> */}

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;