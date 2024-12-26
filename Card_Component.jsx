import React from 'react';
import carImage from '../assets/Picture → 1729500323849.webp.png'; 

const CardComponents = () => {
    const cards = [
        { id: 1, title: 'Выгода для автолюбителей', description: 'Автокредит, ОСАГО и полезные сервисы' },
        { id: 2, title: 'Кредит для бизнеса', description: 'Выгодные условия для предпринимателей' },
        { id: 3, title: 'Ипотека', description: 'Кредит на жильё с низкой ставкой' },
        { id: 4, title: 'Потребительский кредит', description: 'Наличные на любые цели' },
    ];

    return (
        <div className="cards-container">
            {cards.map(card => (
                <div key={card.id} className="card">
                    <div className="card-content">
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                    </div>
                    <div className="card-image-home" style ={{width:"200px", height:'auto'}}>
                        <img src={carImage} alt={card.title} />
                    </div>
                    <div className="card-button">
                        <button>&#8250;</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponents;
