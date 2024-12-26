import React, { useState } from "react";

function Credit_Page() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(3);
  const [interestRate, setInterestRate] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const rate = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const payment = loanAmount * (rate / (1 - Math.pow(1 + rate, -n)));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="app">
      <h1 style={{marginTop:"150px"}}>Кредит</h1>
      <div className="summary">
        <p>Сумма кредита: от 5 000 до 12 000 000 сом</p>
        <p>Срок: от 3 до 60 мес.</p>
        <p>Ставка: от 20%</p>
        <button className="apply-btn">Оформить заявку</button>
      </div>

      <h2 style={{ marginTop: "150px" }}>Потребительский кредит</h2>
      <div className="categories">
        <div>Недвижимость</div>
        <div>Движимое имущество</div>
        <div>Строительство</div>
        <div>Ремонтные работы</div>
        <div>Лечение</div>
        <div>Обучение</div>
        <div>Путешествия</div>
        <div>Другие цели</div>
      </div>

      <h2 style={{ marginTop: "150px" }}>Рассчитать кредит</h2>
      <div className="calculator">
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          placeholder="Сумма кредита"
        />
        <input
          type="range"
          min="3"
          max="60"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          placeholder="Процентная ставка"
        />
        <button onClick={calculateLoan}>Рассчитать</button>
        <p>Ежемесячный платеж: {monthlyPayment} сом</p>
      </div>

      <h2 style={{ marginTop: "150px" }}>Как получить кредит</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <p>Обратитесь в отделение "SBank"</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <p>Заполните заявление-анкету и подготовьте необходимые документы</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <p>Передайте заполненное заявление-анкету и пакет документов</p>
        </div>
      </div>

      <form className="application-form" style={{ marginTop: "150px" }}>
        <input type="text" placeholder="ФИО" />
        <input type="email" placeholder="Email адрес" />
        <input type="text" placeholder="Регион" />
        <input type="text" placeholder="Сумма кредита" />
        <input type="text" placeholder="Ежемесячный платёж" />
        <label>
          <input type="checkbox" /> Согласие на обработку данных
        </label>
        <button type="submit">Отправить заявку</button>
      </form>

      <style jsx>{`
        .steps {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          margin-top: 20px;
          min-height:180px;
        }

        .step {
          text-align: center;
          max-width: 200px;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #007bff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          font-weight: bold;
        }

        .application-form input {
          display: block;
          width: 100%;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .application-form button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .application-form button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Credit_Page;
