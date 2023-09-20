import React from 'react'
import './TechnologyIcon.css'
const TechnologyIcon = ({icon, name}) => {
  return (
    <div className="technology__wrapper">
        <div className="technology__wrapper__box">
            {icon}
            <h3 className='name'>{name}</h3>
        </div> 
    </div>
  )
}

export default TechnologyIcon