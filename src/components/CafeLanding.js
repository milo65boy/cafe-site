import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CafeLanding = () => {
  const [lang, setLang] = useState("fa"); // fa = فارسی, en = انگلیسی

  const toggleLang = () => setLang(lang === "fa" ? "en" : "fa");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  const navItems = lang === "fa"
    ? ["خانه", "منو", "درباره ما", "تماس با ما"]
    : ["Home", "Menu", "About", "Contact"];

  return (
    <Router>
      <div style={styles.page}>
        <div style={styles.overlay}>

          {/* Language Switch */}
          <div style={styles.langSwitcher}>
            <button onClick={toggleLang} style={styles.langButton}>
              {lang === "fa" ? "EN" : "FA"}
            </button>
          </div>

          {/* Nav */}
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index} style={styles.navItem}>
                  <Link
                    to={["خانه","Home"].includes(item) ? "/" :
                        ["منو","Menu"].includes(item) ? "/menu" :
                        ["درباره ما","About"].includes(item) ? "/about" :
                        "/contact"}
                    style={styles.link}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hero */}
          <div style={styles.hero}>
            <h1 style={styles.title}>
              CoffeeLand
            </h1>
            <p style={styles.subtitle}>
              {lang === "fa" ? "قهوه‌ای که طعمش یادت می‌مونه ☕" : "Coffee you'll never forget ☕"}
            </p>
          </div>

          {/* Slider */}
          <div style={styles.sliderWrapper}>
            <Slider {...sliderSettings}>
              <img src="/images/coffee1.jpg" alt="coffee" className="slide-img" style={styles.slideImg} />
              <img src="/images/coffee2.jpg" alt="coffee" className="slide-img" style={styles.slideImg} />
              <img src="/images/coffee3.jpg" alt="coffee" className="slide-img" style={styles.slideImg} />
            </Slider>
          </div>

          {/* Pages */}
          <div style={{ marginTop: "40px" }}>
            <Routes>
              <Route path="/" element={<HomePage lang={lang} />} />
              <Route path="/menu" element={<MenuPage lang={lang} />} />
              <Route path="/about" element={<AboutPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage lang={lang} />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // پارالکس
    direction: "rtl",
    fontFamily: "sans-serif",
  },
  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "#fff",
    textAlign: "center",
  },
  langSwitcher: {
    textAlign: "right",
    padding: "15px 30px 0 0",
  },
  langButton: {
    backgroundColor: "#ff8c00",
    border: "none",
    padding: "6px 12px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
  },
  nav: {
    padding: "20px 0",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
    fontSize: "18px",
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  navItem: {
    margin: "5px 10px",
    transition: "all 0.3s ease",
  },
  link: {
    textDecoration: "none",
    color: "#ff8c00",
    transition: "all 0.3s ease",
  },
  hero: {
    padding: "60px 20px 30px",
  },
  title: {
    fontSize: "56px",
    color: "#ff8c00",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "20px",
    opacity: 0.95,
  },
  sliderWrapper: {
    maxWidth: "900px",
    margin: "40px auto",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
  },
  slideImg: {
    width: "100%",
    height: "auto",
    maxHeight: "450px",
    objectFit: "cover",
    transition: "transform 1s ease",
  },

  /* Hover effect for slider images */
  slideImgHover: {
    transform: "scale(1.05)",
  },

  /* ریسپانسیو */
  "@media(max-width:768px)": {
    navList: {
      flexDirection: "column",
    },
    sliderWrapper: {
      width: "95%",
    },
    title: {
      fontSize: "36px",
    },
    subtitle: {
      fontSize: "16px",
    },
  },
};

export default CafeLanding;
