import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            
            <ul className="navbar-links">
                <li><a href="/">Домой</a></li>
                <li><a href="/credit_card">Кредитная карточка</a></li>
                <li><a href="/credit">Кредиты</a></li>
                <li><a href="/deposite">Депозиты</a></li>
                <li><a href="/osago">Осаго</a></li>
                <li><a href="/news">Новости</a></li>
                
                
            </ul>
            <div className="navbar-actions">
                <button className="btn login">SBANK</button>
                
            </div>
        </nav>
    );
};

export default NavBar;
