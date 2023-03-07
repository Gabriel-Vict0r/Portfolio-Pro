import React from "react";
import CardService from "./CardsServices/CardService";
import Track from "./tracks/Track";
import copyServices from "../Copy/copyServices";
import '../sass/components/services.sass'
function Services() {
  return (
    <section className="services">
      {copyServices.map((element) => (
        <CardService title={element.name} text={element.text} />
      ))}
    </section>
  );
}

export default Services;
