import React from "react";
import { NavLink } from "react-router-dom";
import footerVideo from "../assets/bkVid.mp4";
import "./Footer.css";

function Footer({ language }) {
  const content = {
    en: {
      brand: "O.I.Honey World",
      desc: "Pure natural honey collected using traditional methods. Trusted for more than 42 years.",
      quick: "Quick Links",
      honey: "Our Honey",
      contact: "Get in Touch",
      products: [
        "Forest Honey",
        "Naval Honey",
        "Moriga Honey",
        "Garlic Honey",
        "Amla Honey"
      ],
      address:
        "1/14, Sivankudietru, Padukkapathu, Sathankulam Block, Thoothukudi, Tamil Nadu - 628703",
      phone: "97151 23277",
      made: "Made with 🍯 & ❤️ for honey lovers",
    },

    ta: {
      brand: "தேன் உலகம்",
      desc: "42 ஆண்டுகளாக பாரம்பரிய முறையில் சேகரிக்கப்பட்ட தூய இயற்கை தேன்.",
      quick: "விரைவு இணைப்புகள்",
      honey: "எங்கள் தேன்",
      contact: "தொடர்பு கொள்ள",
      products: [
        "காட்டு தேன்",
        "நாவல் தேன்",
        "முருங்கை தேன்",
        "பூண்டு தேன்",
        "நெல்லிக்காய் தேன்"
      ],
      address:
        "1/14, Sivankudietru, Padukkapathu, Sathankulam Block, Thoothukudi, Tamil Nadu - 628703",
      phone: "97151 23277",
      made: "🍯 தேன் நேசிகளுக்காக உருவாக்கப்பட்டது",
    },
  };

  const data = content[language];

  return (
    <footer className="honey-footer">

      {/* Video Background */}
      <video autoPlay loop muted playsInline className="footer-video-bg">
        <source src={footerVideo} type="video/mp4" />
      </video>

      <div className="footer-video-overlay"></div>

      <div className="container py-5 position-relative">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-brand">🍯 {data.brand}</h5>

            <p className="footer-text small mt-2">{data.desc}</p>

            <div className="d-flex gap-3 mt-3">
              {["facebook", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social"
                >
                  <i className={`bi bi-${social}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">{data.quick}</h6>

            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <NavLink to="/" className="footer-link">
                  {language === "ta" ? "முகப்பு" : "Home"}
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink to="/about" className="footer-link">
                  {language === "ta" ? "எங்களை பற்றி" : "About"}
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink to="/products" className="footer-link">
                  {language === "ta" ? "தயாரிப்புகள்" : "Products"}
                </NavLink>
              </li>

              <li className="mb-2">
                <NavLink to="/contact" className="footer-link">
                  {language === "ta" ? "தொடர்பு" : "Contact"}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">{data.honey}</h6>

            <ul className="list-unstyled mb-0">
              {data.products.map((item) => (
                <li key={item} className="mb-2 footer-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">{data.contact}</h6>

            <ul className="list-unstyled mb-0 footer-text">
              <li className="mb-2">📍 {data.address}</li>
              <li className="mb-2">📞 {data.phone}</li>
              {/* <li className="mb-2">✉️ honeyworld@gmail.com</li> */}
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <p className="mb-0 small footer-bottom">
            © {new Date().getFullYear()} {data.brand}
          </p>

          <p className="mb-0 small footer-bottom">{data.made}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;