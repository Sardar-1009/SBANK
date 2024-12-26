import React from 'react';
import News_Maldives from '../assets/News_Maldives.jpeg'; // Импорт изображения
import "./News_Page.css"; // Создайте CSS файл для оформления стилей

const NewsItem = ({ date, title, image, link }) => {
  return (
    <div className="news-item">
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <p className="news-date">{date}</p>
        <h3 className="news-title">{title}</h3>
        <a href={link} className="news-link">
          ПОДРОБНЕЕ &gt;
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const newsData = [
    {
      date: "28.10.2024",
      title: "Лети на Мальдивы с MBANK",
      image: News_Maldives, // Замените на URL изображения
      link: "#",
      
    },
    {
      date: "28.10.2024",
      title: "Лети на Мальдивы с MBANK",
      image: News_Maldives,
      link: "#",
    },
    {
      date: "28.10.2024",
      title: "Лети на Мальдивы с MBANK",
      image: News_Maldives,
      link: "#",
    },
    {
      date: "28.10.2024",
      title: "Лети на Мальдивы с MBANK",
      image: News_Maldives,
      link: "#",
    },
    {
      date: "28.10.2024",
      title: "Лети на Мальдивы с MBANK",
      image: News_Maldives,
      link: "#",
    },
  ];

  return (
    <div className="news-container">
      {newsData.map((news, index) => (
        <NewsItem
          key={index}
          date={news.date}
          title={news.title}
          image={news.image}
          link={news.link}
        />
      ))}
    </div>
  );
};

export default App;


