import React from 'react';
import phoneImage from '../assets/phone image.png'; // Добавьте сюда изображение телефона
import googlePlayLogo from '../assets/Google_Play.png'; // Логотип Google Play
import appStoreLogo from '../assets/App_store.png'; // Логотип App Store


const Skachayte_Component = () => {
    return (
        <div className="download-app">
            <div className="download-app-content">
                <h1>
                    Скачайте наше приложение <span className="highlight">SBANK</span>
                </h1>
                <p>
                    Скачайте наше приложение прямо сейчас и управляйте своими
                    финансами удобно и безопасно в любое время и в любом месте!
                </p>
                <div className="download-buttons">
                    <img
                        src={googlePlayLogo}
                        alt="Google Play"
                        className="store-button"
                    />
                    <img
                        src={appStoreLogo}
                        alt="App Store"
                        className="store-button"
                    />
                </div>
            </div>
            <div className="download-app-image">
                <img src={phoneImage} alt="Phone Mockup" />
            </div>
        </div>
    );
};

export default Skachayte_Component;
