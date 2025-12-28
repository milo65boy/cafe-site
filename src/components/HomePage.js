import React from "react";
import Slider from "react-slick";
import "./CafeLanding.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
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
        <h1>خانه</h1>
        <p>به صفحه اصلی CoffeeLand خوش آمدید.</p>
      </header>

      <Slider {...settings}>
        <div className="slider-item">
          <img src="/images/coffee1.jpg" alt="قهوه داغ" />
          <h2>قهوه داغ</h2>
        </div>
        <div className="slider-item">
          <img src="/images/coffee2.jpg" alt="کاپوچینو" />
          <h2>کاپوچینو</h2>
        </div>
        <div className="slider-item">
          <img src="/images/cake.jpg" alt="دسر" />
          <h2>دسر</h2>
        </div>
      </Slider>
    </div>
  );
}

export default HomePage;
