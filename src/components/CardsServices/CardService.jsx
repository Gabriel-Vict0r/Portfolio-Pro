import React from 'react'
import '../../sass/components/CardService.sass'
const CardService = ({title, text}) => {
  return (
      <div className="card-service">
          <h1 className='card-service-title'>{title}</h1>
          <p className='car-service-text'>{text}</p>
    </div>
  )
}

export default CardService