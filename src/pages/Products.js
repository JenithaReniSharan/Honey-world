import React from "react";
import "./Products.css";

import blackdateshoney from "../assets/blackdateshoney.jpeg";
import foresthoney from "../assets/foresthoney.jpeg";
import garlichoney from "../assets/garlichoney.jpeg";
import honeycomb from "../assets/honeycomb.jpeg";
import morigahoney from "../assets/morigahoney.jpeg";
import navalhoney from "../assets/navalhoney.jpeg";
import countrydateshoney from "../assets/countrydateshoney.jpeg";
import honeyamla from "../assets/honeyamla.jpeg";

const products = [
  {
    id: 1,
    name_en: "Pure Forest Honey",
    name_ta: "தூய காட்டு தேன்",
    price: "₹700/kg",
    image: foresthoney,
  },
  {
    id: 2,
    name_en: "Honey with Amla",
    name_ta: "நெல்லிக்காய் தேன்",
    price: "₹500/kg",
    image: honeyamla,
  },
  {
    id: 3,
    name_en: "Honey with Garlic",
    name_ta: "பூண்டு தேன்",
    price: "₹600/kg",
    image: garlichoney,
  },
  {
    id: 4,
    name_en: "Naval Honey",
    name_ta: "நாவல் தேன்",
    price: "₹1300/kg",
    image: navalhoney,
  },
  {
    id: 5,
    name_en: "Moriga Honey",
    name_ta: "முருங்கை தேன்",
    price: "₹1000/kg",
    image: morigahoney,
  },
  {
    id: 6,
    name_en: "Black Dates Honey",
    name_ta: "கருப்பு பேரீச்சம் தேன்",
    price: "₹700/kg",
    image: blackdateshoney,
  },
  {
    id: 7,
    name_en: "Premium Dates Honey",
    name_ta: "பேரீச்சம் தேன்",
    price: "₹900/kg",
    image: blackdateshoney,
  },
  {
    id: 8,
    name_en: "Honey Comb",
    name_ta: "தேன் கூடு",
    price: "₹1000/kg",
    image: honeycomb,
  },
  {
    id: 9,
    name_en: "Country Dates Honey",
    name_ta: "நாட்டு பேரீச்சம் தேன்",
    price: "₹600/kg",
    image: countrydateshoney,
  },
];

function Products({ language }) {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5 honey-title">
        {language === "ta" ? "எங்கள் தயாரிப்புகள்" : "Our Products"}
      </h1>

      <div className="row g-4">

        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4">

            <div className="product-card">

              <div className="product-img-wrapper">
                <img
                  src={product.image}
                  alt={product.name_en}
                  className="product-img"
                />
              </div>

              <div className="product-body text-center">

                <h5 className="product-title">
                  {language === "ta"
                    ? product.name_ta
                    : product.name_en}
                </h5>

                <p className="product-price">{product.price}</p>

                <a
                  href="https://wa.me/919715123277"
                  className="orderBtn"
                >
                  {language === "ta"
                    ? "WhatsApp மூலம் வாங்க"
                    : "Order on WhatsApp"}
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;