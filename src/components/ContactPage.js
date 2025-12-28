import React from "react";
import Slider from "react-slick";
import "./CafeLanding.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from "react-icons/fa"; // آیکون اینستا

function ContactPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true
  };

  return (
    <div className="landing-container">
      <header className="header">
        <h1>تماس با ما</h1>
        <p>📞 09153870131</p>
        <p>📞 09354310734</p>
        <p>📍 خراسان شمالی، بجنورد، مابین میدان کارگر و میدان شهید، کوچه شهید دستپاک (کوچه برق)، روبروی سکه زرین، پلاک 143</p>
        <p>
          <FaInstagram style={{ marginRight: "8px", color: "#E1306C" }} />
          <a href="https://www.instagram.com/coffeeland.boj" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
            coffeeland.boj
          </a>
        </p>
      </header>

      <Slider {...settings}>
        <div className="slider-item">
          <img src="/images/coffee1.jpg" alt="قهوه داغ" />
        </div>
        <div className="slider-item">
          <img src="/images/coffee2.jpg" alt="کاپوچینو" />
        </div>
        <div className="slider-item">
          <img src="/images/cake.jpg" alt="دسر" />
        </div>
      </Slider>
    </div>
  );
}

export default ContactPage;
