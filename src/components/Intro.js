import React from 'react'
import './Intro.css'
import myImage from '../images/result.png'
import future from '../images/future.png'
import { useEffect } from 'react'

const Intro = ({ setHeaderColor}) => {



  return (
    <div className="intro-wrapper">
      <div className="intro">
      <div
          className='intro__animation'>
          <img 
            src=''
            alt=''
          />
        </div>
        <div className="intro__info">
          <h1>Welcome! I'm <span className='intro__info__name'>Octavio</span></h1> 
          <p>I am a Full Stack Web Developer based in Hayward, California</p>
          <div>
            <button className="intro__info__buttons" >Contact Me</button>
            <button className="intro__info__buttons" >My Projects</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro