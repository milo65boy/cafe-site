import React from "react";

const CafeLanding = () => {
  return (
    <div style={styles.page}>
      
      {/* Hero Section */}
      <div style={styles.hero}>
        <img
          src="/images/hero.jpg"
          alt="CoffeeLand"
          style={styles.heroImage}
        />
        <h1 style={styles.title}>CoffeeLand</h1>
        <p style={styles.subtitle}>به دنیای طعم واقعی قهوه خوش آمدید ☕</p>
      </div>

      {/* Gallery */}
      <div style={styles.gallery}>
        <img src="/images/coffee1.jpg" alt="قهوه" style={styles.galleryImg} />
        <img src="/images/coffee2.jpg" alt="کافه" style={styles.galleryImg} />
        <img src="/images/coffee3.jpg" alt="لاته" style={styles.galleryImg} />
      </div>

      {/* Contact */}
      <div style={styles.contact}>
        <h2>تماس با ما</h2>
        <p>📞 09153870131</p>
        <p>📍 خراسان شمالی، بجنورد، مابین میدان کارگر و میدان شهید، کوچه شهید دستپاک (کوچه برق)، روبروی سکه زرین، پلاک 143</p>
        <p>
          📸 Instagram:{" "}
          <a
            href="https://instagram.com/coffeeland.boj"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#e6ffe6" }}
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
    backgroundColor: "#1f3d2b", // سبز کله‌قازی
    color: "#ffffff",
    minHeight: "100vh",
    direction: "rtl",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  hero: {
    padding: "40px 20px",
  },
  heroImage: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  title: {
    fontSize: "48px",
    marginTop: "20px",
  },
  subtitle: {
    fontSize: "20px",
    opacity: 0.9,
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px 20px",
    flexWrap: "wrap",
  },
  galleryImg: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  contact: {
    padding: "30px 20px",
    backgroundColor: "#173021",
    marginTop: "40px",
  },
};

export default CafeLanding;
