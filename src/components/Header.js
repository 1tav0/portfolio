import React from 'react'
import './Header.css'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const Header = () => {
  return (
    <div className="header">
          <div className="header__logo">
            <AutoAwesomeMotionIcon />
            <h2>1Tav0Code</h2>
        </div>
        <div className="header__info">
            <p id='1'>About Me</p>
            <p id='2'>Skills</p>
            <p id='3'>Projects</p>
            <p id='4'>Contact Me</p>
        </div>
    </div>
  )
}

export default Header