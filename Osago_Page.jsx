import React from "react";
import Osago from "../assets/Osago_img.png"; // Укажите правильный путь к логотипу

const Osago_Page = () => {
  return (
    <div className="insurance-page">
      <header className="insurance-header" style = {{marginTop:"100px"}}>
        <img
          src={Osago} // замените на ссылку на ваше изображение
          alt="Insurance Promo"
          className="insurance-image"
        />
      </header>
      <main className="insurance-content">
        <h1>Страхование авто ОСАГО</h1>
        <p>
          Теперь оформить ОСАГО стало проще и быстрее благодаря новому сервису от
          «Бакай Банка»! В мобильном приложении вы можете получить полис от
          дочерней компании «Бакай Иншуранс» всего за несколько минут.
        </p>

        <section>
          <h2>Почему это удобно:</h2>
          <ul>
            <li>Полный контроль в руках клиента</li>
            <li>Оформление происходит без походов в офис</li>
            <li>Надежно и просто</li>
          </ul>
        </section>

        <section>
          <h2>Как это работает:</h2>
          <ol>
            <li>Обновите приложение BakAi до последней версии.</li>
            <li>Выберите в разделе «Сервисы» – ОСАГО.</li>
            <li>
              Загрузите скан-копии фото документов: ID паспорт, водительское
              удостоверение, свидетельство о регистрации ТС.
            </li>
            <li>Внесите данные о своей машине и водителе.</li>
            <li>Подтвердите оплату.</li>
          </ol>
        </section>

        <p className="insurance-footer">
          Оформите ОСАГО в BakAi и чувствуйте себя в безопасности на дорогах!
          <br />
          Ваш безопасный банк.
        </p>
      </main>
    </div>
  );
};

export default Osago_Page;