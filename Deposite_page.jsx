import React from 'react';
import Background from '../assets/Background.png'; 
import Background2 from '../assets/Background2.png';
import Background3 from '../assets/Background3.png'; 
import Deposite12 from '../assets/Deposite12.png'
import Srochniy_deposite from '../assets/Srochniy_deposite.png'
import Babys_deposite from '../assets/Babys_deposite.png'
import Third_deposite from '../assets/Third_deposite.png'

import { Link } from "react-router";

const DepositePage = () => {
  return (
    <div className="deposits-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1 style ={{marginTop:'150px'}}>Депозиты</h1>
            <p>Откройте вклад и получайте проценты</p>
            <div className="header-icons">
              <div>
                <img src={Background} alt="Проценты" />
                <p>Доходность до 16% в сомах</p>
              </div>
              <div>
                <img src={Background2} alt="Срок" />
                <p>Срок вклада до 36 месяцев</p>
              </div>
              <div>
                <img src={Background3} alt="Сумма" />
                <p>Сумма вклада от 1 000 сом</p>
              </div>
            </div>
          </div>
          <div className="header-image">
            <img src={Deposite12} alt="Deposit Graphic" />
          </div>
        </div>
      </header>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="step">
          <h2>1</h2>
          <p>
            Мы готовы предложить выгодные процентные ставки, отвечающие рыночным условиям, чем больше средств вы
            держите и дольше срок размещения, тем выше будет ваш доход.
          </p>
        </div>
        <div className="step">
          <h2>2</h2>
          <p>
            Комбинируйте и используйте доходную выгоду в правильном порядке — получайте доход на доход,
            а также уникальные возможности универсальных и накопительных депозитных продуктов.
          </p>
        </div>
        <div className="step">
          <h2>3</h2>
          <p>
            Чтобы открыть депозит, вам необходимо обратиться в ближайшее отделение "Коммерческий банк КЫРГЫЗСТАН";
            при себе необходимо иметь паспорт. Открытие вклада — БЕСПЛАТНО!
          </p>
        </div>
      </section>

      {/* Deposit Cards */}
      <section className="deposit-cards" >
        {/* Срочный Вклад */}
        <div className="card_deposite">
          <div className="card-imageD sr-image"><img src={Srochniy_deposite}></img></div>
          <div className="card-content">
            <h3>Срочный</h3>
            <p>Срочный вклад с возможностью снятия накопленных процентов</p>
            <ul>
              <li><b>Доходность:</b> до 14,5% в сомах</li>
              <li><b>Сумма вклада:</b> от 1 000 сом</li>
              <li><b>Срок вклада:</b> до 36 мес</li>
              <li><b>Валюта:</b> Сом / $ / € / ₽</li>
            </ul>
            <Link to="/deposite_page">
             <button>Подробнее</button>
            </Link>
          </div>
        </div>

        {/* Детский Вклад */}
        <div className="card_deposite">
          <div className="card-imageD child-image"><img src={Babys_deposite}></img></div>
          <div className="card-content">
            <h3>Детский</h3>
            <p>Детский вклад с возможностью снятия накопленных процентов</p>
            <ul>
              <li><b>Доходность:</b> до 14,5% в сомах</li>
              <li><b>Сумма вклада:</b> от 1 000 сом</li>
              <li><b>Срок вклада:</b> до 36 мес</li>
              <li><b>Валюта:</b> Сом / $ / € / ₽</li>
            </ul>
            <button>Подробнее</button>
          </div>
        </div>

        {/* Ещё один Детский Вклад */}
        <div className="card_deposite">
          <div className="card-imageD child2-image"><img src={Third_deposite}></img></div>
          <div className="card-content">
            <h3>Детский</h3>
            <p>Детский вклад с возможностью снятия накопленных процентов</p>
            <ul>
              <li><b>Доходность:</b> до 14,5% в сомах</li>
              <li><b>Сумма вклада:</b> от 1 000 сом</li>
              <li><b>Срок вклада:</b> до 36 мес</li>
              <li><b>Валюта:</b> Сом / $ / € / ₽</li>
            </ul>
            <button>Подробнее</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepositePage;
