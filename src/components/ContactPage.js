import React from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";

const ContactPage = ({ lang }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{lang === "fa" ? "تماس با ما" : "Contact Us"}</h1>

      {/* شماره تماس */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{lang === "fa" ? "شماره تماس" : "Phone Numbers"}</h2>
        <ul style={styles.list}>
         <li><FaPhone /> 09153870131</li>
          <li><FaPhone /> 09354310734</li>
          <li><FaPhone /> 09386134144</li>
          <li><FaPhone /> 05832234977</li>
        </ul>
      </div>

      {/* آدرس */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{lang === "fa" ? "آدرس مغازه" : "Address"}</h2>
        <p>
          {lang === "fa"
            ? "خراسان شمالی، بجنورد، مابین میدان کارگر و میدان شهید، کوچه شهید دستپاک (کوچه برق)، روبروی سکه زرین، پلاک 143"
            : "Khorasan Shomali, Bojnord, between Kargar Square and Shaheed Square, Koocheh Shaheed Dastpak (Bargh Alley), opposite Sekkeh Zarrin, No.143"}
        </p>
      </div>

      {/* اینستاگرام */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{lang === "fa" ? "اینستاگرام" : "Instagram"}</h2>
        <p>
          <FaInstagram style={{ marginRight: "8px", verticalAlign: "middle" }} />
          <a href="https://www.instagram.com/coffeeland.boj" target="_blank" rel="noopener noreferrer" style={styles.link}>
            coffeeland.boj
          </a>
        </p>
      </div>

      {/* نقشه */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>{lang === "fa" ? "محل مغازه روی نقشه" : "Location on Map"}</h2>
        <div style={styles.mapWrapper}>
          <iframe
            title="Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.9123456789!2d57.326789!3d37.474567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fdf123456789abc%3A0xabcdef1234567890!2sCoffeeland!"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#fff",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "36px",
    color: "#ff8c00",
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "30px",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "20px",
    borderRadius: "12px",
  },
  subtitle: {
    fontSize: "24px",
    color: "#ff8c00",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0",
    fontSize: "18px",
  },
  link: {
    color: "#ff8c00",
    textDecoration: "none",
    fontWeight: "bold",
  },
  mapWrapper: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
  },
  "@media(max-width:768px)": {
    title: {
      fontSize: "28px",
    },
    subtitle: {
      fontSize: "20px",
    },
    list: {
      fontSize: "16px",
    },
  },
};

export default ContactPage;
