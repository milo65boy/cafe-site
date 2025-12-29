import React from "react";

const MenuPage = ({ lang }) => {
  return (
    <div style={{ padding: "50px", color: "#fff" }}>
      <h2>{lang === "fa" ? "منو" : "Menu"}</h2>
      <p>
        {lang === "fa"
          ? "اینجا فهرست قهوه‌ها و نوشیدنی‌ها قرار می‌گیرد."
          : "Here is the list of our coffees and drinks."}
      </p>
    </div>
  );
};

export default MenuPage;
