import React from "react";

const AboutPage = ({ lang }) => {
  return (
    <div style={{ padding: "50px", color: "#fff", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
      <h2>{lang === "fa" ? "درباره ما" : "About"}</h2>
      
      {lang === "fa" ? (
        <p>
          ما از سال ۱۳۹۵ با عشق و علاقه وارد دنیای قهوه شدیم. از همون روز اول، هدف‌مون این بود که تجربه‌ای متفاوت و لذت‌بخش از قهوه و نوشیدنی‌های خاص برای همه فراهم کنیم. طی این سال‌ها مسیر یادگیری و فعالیت ما گسترده شد و تجربه‌های زیادی در زمینه راه‌اندازی کافه و فست فود کسب کردیم.
        </p>
      ) : (
        <p>
          Since 2016, we have entered the world of coffee with passion and dedication. From day one, our goal was to provide a unique and enjoyable experience of coffee and specialty drinks for everyone. Over the years, our learning and activities have expanded and we gained a lot of experience in running cafés and fast food.
        </p>
      )}

      {lang === "fa" ? (
        <p>
          تعمیر و تأمین دستگاه‌های قهوه‌ساز هم بخش مهمی از کار ماست؛ چون معتقدیم کیفیت نوشیدنی از دل دستگاه‌های حرفه‌ای و نگهداری درست اون‌ها شکل می‌گیره. با ارائه خدمات تخصصی در این زمینه، تلاش می‌کنیم همیشه همراهی مطمئن برای کافه‌داران و علاقه‌مندان به قهوه باشیم.
        </p>
      ) : (
        <p>
          Repairing and providing coffee machines is also a key part of our work; we believe the quality of the drinks comes from professional machines and their proper maintenance. By offering specialized services in this field, we strive to always be a reliable companion for café owners and coffee lovers.
        </p>
      )}

      {lang === "fa" ? (
        <p>
          امروز خودمون صاحب کافه‌ای هستیم که می‌تونید در اون انواع نوشیدنی‌های گرم و سرد، از قهوه‌های کلاسیک تا نوشیدنی‌های خلاقانه و فصلی، رو تجربه کنید. برای ما مهمه که هر نفر وقتی وارد کافه میشه، با حس خوب و طعمی دلنشین بیرون بره و دوباره مشتاق برگشت باشه.
        </p>
      ) : (
        <p>
          Today, we own a café where you can experience all kinds of hot and cold drinks, from classic coffees to creative and seasonal beverages. It is important to us that every person who enters the café leaves with a good feeling and delightful taste, eager to return.
        </p>
      )}

      {lang === "fa" ? (
        <p>
          ما نه فقط یک کافه، بلکه یک تجربه کامل از دنیای قهوه و نوشیدنی‌های خوشمزه ارائه می‌کنیم و امیدواریم شما هم بخشی از این سفر لذت‌بخش باشید.
        </p>
      ) : (
        <p>
          We are not just a café, but a complete experience of coffee and delicious drinks, and we hope you become a part of this enjoyable journey.
        </p>
      )}
    </div>
  );
};

export default AboutPage;
