import React, { useEffect, useState } from 'react'
import './Header.css'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Header = () => {
  //when we scroll down we need to show the black part of the navbar not see through h6ke it is when it loads
  const [show, handleShow] = useState(false);
    
  useEffect(() => { //scroll listener attached to the window
      window.addEventListener("scroll", () => {
          if (window.scrollY > 30) {
              handleShow(true);
          } else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll",handleShow);
      };
  }, []);//empty [] will run once
  return (
    <div className={`header ${show && "header__black"}`}>
        <div className="header__wrapper">
            <div className="header__parent">
                <div className="header__logo">
                    <AutoAwesomeMotionIcon />
                    <h2><a href="#intro" className="logo">1Tav0Code</a></h2>
                </div>
                <div className="header__info">
                    <h6><a href="#aboutme" className='button'>About Me</a></h6>
                    <h6><a href="#skills" className='button'>Skills </a></h6>
                    <h6><a href="#projects" className='button'>Projects </a></h6>
                    <h6><a href="#contactme" className='button'>ContactMe </a></h6>
                    <YouTubeIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header