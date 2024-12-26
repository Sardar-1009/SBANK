import React from "react";
import Lining from "../assets/Lining.png"; // Укажите правильный путь к логотипу

const PartnerPoints = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100vh" }}>
        {/* Левая часть: Текст */}
        <div style={{ width: "50%", marginLeft:'300px'}}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>Получайте баллы от наших партнеров</h1>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
            Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </p>
        </div>

        {/* Правая часть: Логотип */}
        <div style={{ width: "40%", textAlign: "center",marginRight:'300px' }}>
          <img
            src={Lining}
            alt="Li-Ning"
            style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerPoints;
