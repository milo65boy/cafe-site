import React from "react";
import Navbar from "./Navbar";
import "./CafeLanding.css";

function CafeLanding() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="header" id="home">
        <h1>کافه قهوه ما</h1>
        <p>بهترین قهوه‌ها و دسرها در شهر شما</p>
      </header>

      {/* Products Section */}
      <section className="images-section" id="menu">
        <div className="product">
          <img src="/images/coffee1.jpg" alt="قهوه داغ" />
          <h2>قهوه داغ</h2>
        </div>
        <div className="product">
          <img src="/images/coffee2.jpg" alt="کاپوچینو" />
          <h2>کاپوچینو</h2>
        </div>
        <div className="product">
          <img src="/images/cake.jpg" alt="دسر" />
          <h2>دسر</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>درباره ما</h2>
        <p>
          کافه ما با عشق و تجربه، بهترین قهوه و دسرها را برای شما آماده می‌کند.
          محیطی دنج و آرام برای لحظات خاص شما.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <h3>تماس با ما</h3>
        <p className="phone">📞 09153870131</p>
        <p className="phone">📞 09354310734</p>
      </footer>
    </div>
  );
}

export default CafeLanding;
