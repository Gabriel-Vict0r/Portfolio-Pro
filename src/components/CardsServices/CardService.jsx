import React from 'react'
import '../../sass/components/cardService.sass'
const CardService = ({ title, text, pathImg }) => {

  return (
    <div className="card-service">
      <img src="src\img\services\details_card_services.svg" alt="" className='details'/>
      <img src={pathImg} alt={title} className="card-service-img" />
      <h1 className="card-service-title">{title}</h1>
      <p className="card-service-text">{text}</p>
    </div>
  );
};

export default CardService