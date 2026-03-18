import React from "react";
import banner from "../assets/banner.jpeg"; // replace with your image path

function Contact({ language }) {
  return (
    <div className="container py-5">

      {/* Title */}
      <h1 className="text-center mb-4">
        {language === "ta" ? "தொடர்பு கொள்ள" : "Contact Us"}
      </h1>

      {/* Banner */}
      <div className="text-center mb-5">
        <img
          src={banner}
          alt="Honey Contact"
          className="img-fluid rounded shadow"
        />
      </div>

      <div className="row g-4">

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body">

              <h4 className="mb-3">
                {language === "ta" ? "தொடர்பு விவரங்கள்" : "Contact Details"}
              </h4>

              <p>
                <strong>
                  {language === "ta" ? "உரிமையாளர்" : "Owner"}:
                </strong>{" "}
                R. சிவபாலன்
              </p>

              <p>
                <strong>
                  {language === "ta" ? "தொலைபேசி" : "Phone"}:
                </strong>{" "}
                97151 23277
              </p>

              <p>
                <strong>
                  {language === "ta" ? "முகவரி" : "Address"}:
                </strong>
                <br />
                1/14, Sivankudietru,
                <br />
                Padukkapathu, Sathankulam Block,
                <br />
                Thoothukudi,
                <br />
                Tamil Nadu - 628703
              </p>

            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center">

              <h4 className="mb-4">
                {language === "ta"
                  ? "உடனே ஆர்டர் செய்யுங்கள்"
                  : "Order Honey Now"}
              </h4>

              <a
                href="https://wa.me/919715123277"
                className="btn btn-success mb-3"
              >
                {language === "ta"
                  ? "WhatsApp மூலம் ஆர்டர்"
                  : "Order on WhatsApp"}
              </a>

              <a
                href="tel:+919715123277"
                className="btn btn-warning"
              >
                {language === "ta"
                  ? "இப்போது அழைக்கவும்"
                  : "Call Now"}
              </a>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;