import React from "react";


const Bonus_Card = () => {
  return (
    <div className="points-container">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="points-card">
          <div className="text-section">
            <h1 className="title">Баллы там сям</h1>
            <p className="subtitle">Получайте Баллыe от Бублика</p>
          </div>
          <div className="image-section">
            <img
              src="Bublik.png"
              alt="Логотип Бублика"
              className="logo"
            />
            <img
              src="man.png"
              alt="Аватар пользователя"
              className="avatar"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bonus_Card;
