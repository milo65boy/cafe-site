import React from "react";

const ContactPage = ({ lang }) => {
  return (
    <div style={{ padding: "50px", color: "#fff" }}>
      <h2>{lang === "fa" ? "تماس با ما" : "Contact"}</h2>
      <p>
        📞 {lang === "fa" ? "09153870131" : "09153870131"}
      </p>
      <p>
        📍 {lang === "fa" 
          ? "خراسان شمالی، بجنورد، مابین میدان کارگر و میدان شهید، کوچه شهید دستپاک (کوچه برق)، روبروی سکه زرین، پلاک 143"
          : "North Khorasan, Bojnord, between Kargar & Shahid squares, Shahid Dastpak (Electric) Alley, opposite Zarrin Coin, No.143"}
      </p>
      <p>
        📸{" "}
        <a
          href="https://instagram.com/coffeeland.boj"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ff8c00" }}
        >
          coffeeland.boj
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
