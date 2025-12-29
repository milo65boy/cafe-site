import React from "react";

const HomePage = ({ lang }) => {
  return (
    <div style={styles.container}>

      {/* دستگاه‌های قهوه */}
      <section style={styles.section}>
        <h2 style={styles.title}>{lang === "fa" ? "دستگاه‌های قهوه" : "Coffee Machines"}</h2>
        <p style={styles.text}>
          {lang === "fa"
            ? "ما انواع دستگاه‌های قهوه حرفه‌ای و خانگی را عرضه و تعمیر می‌کنیم تا نوشیدنی‌های شما همیشه با کیفیت عالی آماده شوند."
            : "We provide and service all kinds of professional and home coffee machines to ensure your beverages are always made with top quality."}
        </p>
        <img src="/images/machine.jpg" alt="coffee machine" style={styles.image} />
      </section>

      {/* نوشیدنی‌های قهوه */}
      <section style={styles.section}>
        <h2 style={styles.title}>{lang === "fa" ? "نوشیدنی‌های قهوه" : "Coffee Drinks"}</h2>
        <p style={styles.text}>
          {lang === "fa"
            ? "انواع نوشیدنی‌های گرم و سرد، از قهوه‌های کلاسیک تا نوشیدنی‌های فصلی و خلاقانه، برای همه سلیقه‌ها."
            : "All kinds of hot and cold drinks, from classic coffees to seasonal and creative beverages for every taste."}
        </p>
        <img src="/images/drink.jpg" alt="coffee drinks" style={styles.image} />
      </section>

      {/* قهوه */}
      <section style={styles.section}>
        <h2 style={styles.title}>{lang === "fa" ? "قهوه" : "Coffee Beans"}</h2>
        <p style={styles.text}>
          {lang === "fa"
            ? "ما دانه‌های قهوه باکیفیت را از بهترین منابع تهیه می‌کنیم تا طعم واقعی و غنی قهوه را تجربه کنید."
            : "We source high-quality coffee beans from the best origins so you can experience the true and rich taste of coffee."}
        </p>
        <img src="/images/coffee-beans.jpg" alt="coffee beans" style={styles.image} />
      </section>

    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#fff",
    textAlign: "center",
  },
  section: {
    marginBottom: "60px",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "20px",
    borderRadius: "12px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "15px",
    color: "#ff8c00",
  },
  text: {
    fontSize: "18px",
    lineHeight: 1.8,
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxHeight: "350px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default HomePage;
