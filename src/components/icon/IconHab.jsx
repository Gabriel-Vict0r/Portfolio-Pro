import React from 'react'
import '../../sass/components/iconHab.sass'
const IconHab = ({iconName, name}) => {
  return (
    <div className="hab">
      <span className='hab-icon'>{iconName}</span>
      <p className='hab-text'>{name}</p>
    </div>
  );
}

export default IconHab