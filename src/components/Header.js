import React from 'react'
import './Header.css'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
            <AutoAwesomeMotionIcon />
            <h2>1Tav0Code</h2>
        </div>
        <div className="header__info">
            <p> <Link to="aboutme">About Me</Link></p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact Me</p>
            <YouTubeIcon/>
        </div>
    </div>
  )
}

export default Header