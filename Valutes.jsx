import React from "react";


const Valutes = () => {
  return (
    <div className="dashboard">
      {/* Компонент курса валют */}
      <div className="card_currency">
        <h2 className="card-title">Курс валют</h2>
        <div className="currency-row">
          <img
            src="USA_flag.png"
            alt="USA"
            className="currency-flag"
          />
          <p className="currency-value">83.6</p>
          <p className="currency-value">83.7</p>
        </div>
        <div className="currency-row">
          <img
            src="Russia_flag.png"
            alt="Russia"
            className="currency-flag"
          />
          <p className="currency-value">83.6</p>
          <p className="currency-value">83.7</p>
        </div>
        <div className="currency-row">
          <img
            src="Kazakhstan_flag.png"
            alt="Kazakhstan"
            className="currency-flag"
          />
          <p className="currency-value">83.6</p>
          <p className="currency-value">83.7</p>
        </div>
      </div>

      {/* Компонент новостей */}
      <div className="card_news">
        <h2 className="card-title">News</h2>
        <div className="news-item">
          <p className="news-title">Ants lol</p>
          <p className="news-date">05.12.24</p>
        </div>
        <div className="news-item">
          <p className="news-title">Poopie Dookie</p>
          <p className="news-date">05.12.24</p>
        </div>
      </div>
    </div>
  );
};

export default Valutes;
