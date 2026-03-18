import React from "react";
import "./Home.css";

function Home({ language }) {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero-section text-center text-white d-flex align-items-center">
        <div className="container">
          <h1 className="hero-title">
            🍯 {language === "ta" ? "தூய இயற்கை தேன்" : "Pure Natural Honey"}
          </h1>

          <p className="hero-subtitle">
            {language === "ta"
              ? "42 ஆண்டுகளாக இயற்கையான தூய தேன்"
              : "Trusted for 42+ Years of Pure Natural Honey"}
          </p>

          <a
            href="https://wa.me/919715123277"
            className="btn btn-warning hero-btn"
          >
            {language === "ta"
              ? "WhatsApp மூலம் ஆர்டர்"
              : "Order on WhatsApp"}
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="container py-5 text-center">
        <h2>
          {language === "ta" ? "எங்கள் தேன் பற்றி" : "About Our Honey"}
        </h2>

        <p className="mt-3">
          {language === "ta"
            ? "42 ஆண்டுகளுக்கும் மேலாக நாங்கள் தூய இயற்கை தேனை பாரம்பரிய முறையில் சேகரித்து மக்களுக்கு வழங்கி வருகிறோம்."
            : "For more than 42 years we have been producing pure natural honey collected directly from nature using traditional methods."}
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            {language === "ta"
              ? "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?"
              : "Why Choose Our Honey?"}
          </h2>

          <div className="row text-center">

            <div className="col-md-3">
              <div className="feature-box">
                🍯
                <h5>
                  {language === "ta"
                    ? "100% தூய தேன்"
                    : "100% Pure Honey"}
                </h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                🌿
                <h5>
                  {language === "ta"
                    ? "இயற்கை சேகரிப்பு"
                    : "Natural Collection"}
                </h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                ⭐
                <h5>
                  {language === "ta"
                    ? "42 ஆண்டுகள் அனுபவம்"
                    : "42 Years Experience"}
                </h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                ❤️
                <h5>
                  {language === "ta"
                    ? "வாடிக்கையாளர் நம்பிக்கை"
                    : "Trusted by Customers"}
                </h5>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;