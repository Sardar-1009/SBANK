import React from 'react';
import Credit_card from '../assets/Credit_Card.png'

const CreditCardPage = () => {
  const cards = [
    { id: 1, number: '**** **** **** 1690', name: 'Platinum Plus', service: '200 сом/год', price: '500сом' },
    { id: 2, number: '**** **** **** 1690', name: 'Platinum Plus', service: '200 сом/год', price: '500сом' },
    { id: 3, number: '**** **** **** 1690', name: 'Platinum Plus', service: '200 сом/год', price: '500сом' },
    { id: 4, number: '**** **** **** 1690', name: 'Platinum Plus', service: '200 сом/год', price: '500сом' },
    { id: 5, number: '**** **** **** 1690', name: 'Platinum Plus', service: '200 сом/год', price: '500сом' },
    { id: 6, number: '**** **** **** 1690', name: 'Platinum Plus', service: '200 сом/год', price: '500сом' },
  ];

  return (
    <div className="creditcards-container">
      <h1 className="title">Кредитки</h1>
      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card_credit">
            <div className="card-image">
              <img src={Credit_card}  alt="Visa Card" />
            </div>
            <div className="card-details">
              <h3 >VISA</h3>
              <p>{card.number}</p>
              <p>{card.name}</p>
              <p>
                <b>Обслуживание:</b> {card.service}
              </p>
              <p>
                <b>Стоимость:</b> {card.price}
              </p>
              <button className="details-button">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCardPage;
