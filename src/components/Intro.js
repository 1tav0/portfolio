import React from 'react'
import './Intro.css'
import neatDesk from '../images/neatdesk.jpg'

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__wrapper">
        <div className="intro__parent">
          <div className="intro__title">
            <h1>Octavio Cruz Ortega</h1>
            <p>Full Stack Software Developer</p>
          </div>
          <div className="intro__picture">
            <img src={neatDesk} alt="desk" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro