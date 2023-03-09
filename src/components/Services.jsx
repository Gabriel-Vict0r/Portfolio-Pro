import React from "react";
import CardService from "./CardsServices/CardService";
import Track from "./tracks/Track";
import copyServices from "../Copy/copyServices";
import "../sass/components/services.sass";
import ButtonContact from "./buttons/buttonContact";
function Services() {
  return (
    <section className="container-services">
      <div className="services">
        <img
          src="src\img\services\Elemento1 - left.svg"
          alt=""
          className="elemento-left"
        />
        {copyServices.map((element) => (
          <CardService
            title={element.name}
            text={element.text}
            pathImg={element.img}
            key={element.name}
          />
        ))}
        <img
          src="src/img/services/Luz 3 - right.svg"
          alt=""
          className="light-right"
        />
        <img
          src="src/img/services/Rectangle Background.svg"
          alt="detalhe de um retângulo"
          className="retangle-right"
        />
        <img src="src\img\services\Luz.svg" alt="Luz" className="light-left"/>
      </div>
      <ButtonContact
        subClass="btn_contactMe btnService"
        textButton="Tirar Idéia do papel"
      />
    </section>
  );
}

export default Services;
