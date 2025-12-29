import React, { useState } from "react";

const MenuPage = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const menuData = [
    {
      title: { fa: "آبمیوه طبیعی", en: "Fresh Juice" },
      items: [{ fa: "آب پرتقال", en: "Orange Juice" }],
    },
    {
      title: { fa: "میکس شیر", en: "Milk Mix" },
      items: [
        { fa: "شیر موز", en: "Banana Milk" },
        { fa: "شیر موز بستنی", en: "Banana Ice Cream Milk" },
        { fa: "شیر موز انبه", en: "Banana Mango Milk" },
        { fa: "شیر انبه بستنی", en: "Mango Ice Cream Milk" },
      ],
    },
    {
      title: { fa: "موکتل", en: "Mocktail" },
      items: [{ fa: "موهیتو", en: "Mojito" }],
    },
    {
      title: { fa: "میلک شیک", en: "Milkshake" },
      items: [
        { fa: "شیک شکلات", en: "Chocolate Shake" },
        { fa: "شیک نسکافه", en: "Nescafe Shake" },
        { fa: "شیک میوه‌ای", en: "Fruit Shake" },
        { fa: "شیک ترکیبی", en: "Mixed Shake" },
      ],
    },
    {
      title: { fa: "قهوه سرد", en: "Iced Coffee" },
      items: [
        { fa: "آیس لته", en: "Iced Latte" },
        { fa: "آیس آمریکانو", en: "Iced Americano" },
        { fa: "آیس موکا", en: "Iced Mocha" },
        { fa: "آیس کارامل ماکیاتو", en: "Iced Caramel Macchiato" },
        { fa: "فراپاچینو", en: "Frappuccino" },
        { fa: "لمون کافی", en: "Lemon Coffee" },
      ],
    },
    {
      title: { fa: "قهوه داغ", en: "Hot Coffee" },
      items: [
        { fa: "اسپرسو", en: "Espresso" },
        { fa: "کاپوچینو", en: "Cappuccino" },
        { fa: "آمریکانو", en: "Americano" },
        { fa: "لته", en: "Latte" },
        { fa: "موکا", en: "Mocha" },
        { fa: "کارامل ماکیاتو", en: "Caramel Macchiato" },
      ],
    },
    {
      title: { fa: "نوشیدنی گرم", en: "Hot Drinks" },
      items: [
        { fa: "هات چاکلت", en: "Hot Chocolate" },
        { fa: "پینک چاکلت", en: "Pink Chocolate" },
      ],
    },
    {
      title: { fa: "دان و پودر قهوه", en: "Coffee Beans & Powder" },
      items: [
        { fa: "100٪ روبوستا", en: "100% Robusta" },
        { fa: "100٪ عربیکا", en: "100% Arabica" },
        { fa: "80 روبوستا 20 عربیکا", en: "80 Robusta 20 Arabica" },
        { fa: "70 روبوستا 30 عربیکا", en: "70 Robusta 30 Arabica" },
        { fa: "50 روبوستا 50 عربیکا", en: "50 Robusta 50 Arabica" },
        { fa: "30 عربیکا 70 روبوستا", en: "30 Arabica 70 Robusta" },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {menuData.map((section, idx) => (
        <div key={idx} style={styles.section}>
          <h2 style={styles.title} onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            {section.title[lang]}
          </h2>

          {openIndex === idx && (
            <ul style={styles.list}>
              {section.items.map((item, i) => (
                <li key={i} style={styles.item}>
                  {item[lang]}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#fff",
  },
  section: {
    marginBottom: "20px",
    background: "rgba(0,0,0,0.45)",
    padding: "15px 20px",
    borderRadius: "12px",
  },
  title: {
    fontSize: "26px",
    color: "#ff8c00",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
    lineHeight: 2,
  },
  item: {
    fontSize: "17px",
  },
};

export default MenuPage;
