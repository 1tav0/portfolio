import React from 'react'
import './Intro.css'
import neatDesk from '../images/neatdesk.jpg'

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro__title">
        <h1>Octavio Cruz</h1>
        <p>My Work Showcase</p>
      </div>
      <div className="intro__picture">
        <img src={neatDesk} alt="desk" />
      </div>
    </div>
  )
}

export default Intro