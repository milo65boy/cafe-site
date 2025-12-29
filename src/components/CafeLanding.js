import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Slider from "react-slick";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* 🔹 انیمیشن تغییر صفحه */
const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} style={styles.pageAnimation}>
      {children}
    </div>
  );
};

const CafeLanding = () => {
  const [lang, setLang] = useState("fa");
  const toggleLang = () => setLang(lang === "fa" ? "en" : "fa");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    arrows: true,
    pauseOnHover: false,
  };

  const navItems =
    lang === "fa"
      ? [
          { label: "خانه", path: "/" },
          { label: "منو", path: "/menu" },
          { label: "درباره ما", path: "/about" },
          { label: "تماس با ما", path: "/contact" },
        ]
      : [
          { label: "Home", path: "/" },
          { label: "Menu", path: "/menu" },
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
        ];

  return (
    <Router>
      <div style={styles.page}>
        <div style={styles.overlay}>
          {/* Language */}
          <div style={styles.langSwitcher}>
            <button onClick={toggleLang} style={styles.langButton}>
              {lang === "fa" ? "EN" : "FA"}
            </button>
          </div>

          {/* Nav */}
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    end
                    style={({ isActive }) => ({
                      ...styles.link,
                      color: isActive ? "#fff" : "#ff8c00",
                      borderBottom: isActive ? "3px solid #ff8c00" : "none",
                    })}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hero */}
          <div style={styles.hero}>
            <h1 style={styles.title}>CoffeeLand</h1>
            <p style={styles.subtitle}>
              {lang === "fa"
                ? "قهوه‌ای که طعمش یادت می‌مونه ☕"
                : "Coffee you'll never forget ☕"}
            </p>
          </div>

          {/* Slider */}
          <div style={styles.sliderWrapper}>
            <Slider {...sliderSettings}>
              {["1","2","3","4","5","6"].map((num) => (
                <div key={num}>
                  <img
                    src={`/images/coffee${num}.jpg`}
                    alt="coffee"
                    style={styles.slideImg}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Pages with animation */}
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage lang={lang} />} />
              <Route path="/menu" element={<MenuPage lang={lang} />} />
              <Route path="/about" element={<AboutPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage lang={lang} />} />
            </Routes>
          </PageWrapper>
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
    backgroundAttachment: "fixed",
    direction: "rtl",
  },
  overlay: {
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#fff",
    textAlign: "center",
  },
  langSwitcher: {
    textAlign: "right",
    padding: "15px 30px 0",
  },
  langButton: {
    backgroundColor: "#ff8c00",
    border: "none",
    padding: "6px 14px",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
  },
  nav: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "20px 0",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    paddingBottom: "6px",
    transition: "all 0.3s ease",
  },
  hero: {
    padding: "60px 20px 30px",
  },
  title: {
    fontSize: "56px",
    color: "#ff8c00",
  },
  subtitle: {
    fontSize: "20px",
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
    height: "450px",        // 🔥 همه دقیقاً هم‌سایز
    objectFit: "cover",
  },
  pageAnimation: {
    animation: "fadeSlide 0.6s ease",
  },
};

/* 🔹 انیمیشن */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`, styleSheet.cssRules.length);

export default CafeLanding;
