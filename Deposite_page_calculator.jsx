import React, { useState } from "react";
import Srochniy_deposite from '../assets/Srochniy_deposite.png'
import "./Deposite_page_calculator.css"


const Deposit_Page_Calculator = () => {
    const [amount, setAmount] = useState(5000);
    const [currency, setCurrency] = useState("KGS");
    const [term, setTerm] = useState(3);
    const [rate, setRate] = useState("");
    const [result, setResult] = useState(null);
  
    const calculateDeposit = () => {
      const interestRate = parseFloat(rate) / 100;
      const total = amount + amount * interestRate * (term / 12);
      setResult(total.toFixed(2));
    };
  
    return (
      <div className="deposit-page">
        
        <section className="deposit-info">
          <div className="info-text">
            <h1>Срочный</h1>
            <p>Срочный вклад с возможностью снятия накопленных процентов</p>
            <div className="terms">
              <p>ДОХОДНОСТЬ <br /> <strong>до 14.5% в сомах</strong></p>
              <p>СУММА ВКЛАДА <br /> <strong>от 1 000 сом / ₽</strong></p>
              <p>СРОК ВКЛАДА <br /> <strong>до 36 мес</strong></p>
              <p>ВАЛЮТА <br /> <strong>Сом / $ / € / ₽</strong></p>
            </div>
          </div>
          <div className="info-image">
            <img src={Srochniy_deposite}  alt="Deposit" />
          </div>
        </section>
  
        <section className="conditions">
          <h2>Условия:</h2>
          <ul>
            <li>Оформляется два счета - "До востребования" и "Срочный".</li>
            <li>Клиенту бесплатно выдается карта Элкарт или VISA.</li>
            <li>Годовое обслуживание карты - бесплатно.</li>
            <li>Минимальная сумма вклада: 1 000 сом КР, 1 000 рублей РФ, 100 долларов США, 100 евро.</li>
            <li>По "срочному" счету нельзя докладывать и снимать денежные средства.</li>
            <li>Начисление процентов - ежемесячно.</li>
            <li>Возможность снятия начисленных процентов - ежемесячно.</li>
          </ul>
        </section>
  
        <section className="calculator">
          <h2>Рассчитать депозит</h2>
          <div className="input-group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="KGS">KGS</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
            </select>
          </div>
          <div className="term-slider">
            <label>Срок (месяц): {term}</label>
            <input
              type="range"
              min="3"
              max="36"
              step="3"
              value={term}
              onChange={(e) => setTerm(parseInt(e.target.value))}
            />
          </div>
          <div className="rate-input">
            <input
              type="number"
              placeholder="Процентная ставка"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <button className="calculate-btn" onClick={calculateDeposit}>
            Рассчитать
          </button>
          {result && (
            <div className="result">
              <h3>Итоговая сумма: {result} {currency}</h3>
            </div>
          )}
        </section>
  
        
      </div>
    );
  };

export default Deposit_Page_Calculator;
