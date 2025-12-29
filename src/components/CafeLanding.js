import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CafeLanding = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={styles.page}>

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.title}>CoffeeLand</h1>
        <p style={styles.subtitle}>تجربه‌ای خاص از طعم واقعی قهوه ☕</p>
      </div>

      {/* Slider */}
      <div style={styles.sliderWrapper}>
        <Slider {...settings}>
          <img src="/images/coffee1.jpg" alt="coffee" style={styles.slideImg} />
          <img src="/images/coffee2.jpg" alt="coffee" style={styles.slideImg} />
          <img src="/images/coffee3.jpg" alt="coffee" style={styles.slideImg} />
        </Slider>
      </div>

      {/* Contact */}
      <div style={styles.contact}>
        <h2>تماس با ما</h2>
        <p style={styles.phone}>📞 09153870131</p>
        <p style={styles.address}>
          📍 خراسان شمالی، بجنورد، مابین میدان کارگر و میدان شهید، کوچه شهید دستپاک
          (کوچه برق)، روبروی سکه زرین، پلاک 143
        </p>
        <p>
          📸{" "}
          <a
            href="https://instagram.com/coffeeland.boj"
            target="_blank"
            rel="noreferrer"
            style={styles.insta}
          >
            coffeeland.boj
          </a>
        </p>
      </div>

    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#1f3d2b",
    color: "#fff",
    minHeight: "100vh",
    direction: "rtl",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  hero: {
    padding: "50px 20px 20px",
  },
  title: {
    fontSize: "52px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "20px",
    opacity: 0.9,
  },
  sliderWrapper: {
    maxWidth: "900px",
    margin: "40px auto",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  slideImg: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
  },
  contact: {
    backgroundColor: "#173021",
    padding: "30px 20px",
    marginTop: "50px",
  },
  phone: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  address: {
    maxWidth: "700px",
    margin: "10px auto",
    lineHeight: "1.8",
  },
  insta: {
    color: "#9affc6",
    fontSize: "18px",
    textDecoration: "none",
  },
};

export default CafeLanding;
