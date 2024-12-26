import React from "react";
import NewsImage from "../assets/News_Maldives.jpeg"; // Замените на ваш путь к изображению

const News_Detailed_Page = () => {
  return (
    <div style={{backgroundColor:"#0D0D0D", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "80%", marginBottom: "20px",marginLeft:'400px', marginRight:'400px' }}>
          <img src={NewsImage} alt="Promotion" style={{ width: "80%", borderRadius: "8px",marginTop: '100px'}} />
          {/* <button
            style={{
              backgroundColor: "#1E90FF",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
              borderRadius: "4px",
            }}
          >
            
          </button> */}
        </div>
        <div style={{ width: "80%", lineHeight: "1.6",backgroundColor:"#0D0D0D" }}>
          <h1 style ={{marginTop:'100px'}}>MBANK и VISA запускают акцию «Лети на Мальдивы с MBANK»</h1>
          <p>
            ОАО «Коммерческий банк Кыргызстан» | MBANK объявляет о старте новой акции совместно с VISA —
            «Лети на Мальдивы с MBANK». Эта уникальная инициатива нацелена на увеличение объемов международных переводов,
            осуществляемых пользователями приложения MBANK с использованием карт VISA. Участники акции не только
            получают возможность отправлять деньги за границу, но и смогут выиграть замечательные призы!
          </p>
          <h2>Как принять участие в акции?</h2>
          <p>Чтобы стать участником акции «Лети на Мальдивы с MBANK», необходимо выполнить несколько простых условий:</p>
          <ol>
            <li>
              Производите переводы с карты Visa на карту Visa: Используйте мобильное приложение MBANK для осуществления переводов,
              выбрав сервисы «Пополнение карт Visa» и «Перевод по номеру карты».
            </li>
            <li>
              Переводы должны быть международными: Убедитесь, что ваши переводы отправляются на карты, выпущенные в других странах.
            </li>
            <li>
              Минимальная сумма перевода: Каждый перевод должен составлять не менее 20 долларов США (или эквивалент этой суммы).
            </li>
            <li>
              Территория участия: Акция доступна на территории Кыргызской Республики.
            </li>
          </ol>
          <h2>Сроки проведения акции</h2>
          <p>
            Акция продлится с 28 октября 2024 года по 26 декабря 2024 года (включительно). В течение этого периода
            пользователи могут активно участвовать и зарабатывать шансы на выигрыш.
          </p>
          <h2>Подарки для участников</h2>
          <p>Каждый участник акции имеет возможность выиграть привлекательные призы:</p>
          <ul>
            <li>Apple AirPods 3</li>
            <li>Garmin Venu 3</li>
            <li>iPhone 15 Pro</li>
            <li>Поездка на Мальдивы</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News_Detailed_Page;
