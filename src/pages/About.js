import React from "react";
import "./About.css";

function About({ language }) {

  const content = {
    en: {
      title: "About Our Honey",
      story: `For more than 42 years, we have been dedicated to producing pure,
natural and high-quality honey.

Our journey began with a simple mission — to bring the true taste of nature directly to people’s homes.

Our honey is carefully collected from natural sources using traditional methods passed down through generations.`,

      values: [
        "100% Pure Natural Honey",
        "42+ Years Experience",
        "Traditional Collection Methods",
        "Trusted by Hundreds of Customers"
      ],

      tagline: "🍯 Pure Honey | Natural Taste | Trusted for 42 Years"
    },

    ta: {
      title: "எங்கள் தேன் பற்றி",

      story: `42 ஆண்டுகளுக்கும் மேலாக நாங்கள் தூய இயற்கை தேனை தயாரித்து மக்களுக்கு வழங்கி வருகிறோம்.

இயற்கையின் உண்மையான சுவையை மக்களின் வீடுகளுக்கு கொண்டு செல்ல வேண்டும் என்பதே எங்கள் நோக்கம்.

எங்கள் தேன் இயற்கை மலர்களிலிருந்து பாரம்பரிய முறையில் சேகரிக்கப்படுகிறது.`,

      values: [
        "100% தூய இயற்கை தேன்",
        "42+ ஆண்டுகள் அனுபவம்",
        "பாரம்பரிய சேகரிப்பு முறை",
        "வாடிக்கையாளர் நம்பிக்கை"
      ],

      tagline: "🍯 தூய தேன் | இயற்கை சுவை | 42 ஆண்டுகள் நம்பிக்கை"
    }
  };

  const data = content[language];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="about-hero text-center">
        <div className="container">
          <h1>{data.title}</h1>
        </div>
      </section>

      {/* STORY */}
      <section className="container py-5">

        <div className="row align-items-center">

          <div className="col-md-6">
            <p style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
              {data.story}
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1587049352851-8d4e89133924"
              alt="honey"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="experience-section text-center py-5">

        <h2>42+</h2>
        <p>
          {language === "ta"
            ? "ஆண்டுகள் அனுபவம்"
            : "Years of Experience"}
        </p>

      </section>

      {/* VALUES */}
      <section className="container py-5">

        <h2 className="text-center mb-4">
          {language === "ta"
            ? "எங்கள் சிறப்புகள்"
            : "Why Choose Us"}
        </h2>

        <div className="row text-center">

          {data.values.map((value, index) => (
            <div key={index} className="col-md-3 py-2 ">
              <div className="about-card chooseUs">
                🍯
                <p>{value}</p>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* TAGLINE */}
      <section className="text-center pb-5">
        <h4>{data.tagline}</h4>
      </section>

    </div>
  );
}

export default About;