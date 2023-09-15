import React from 'react'
import './Skills.css'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import cpp from '../images/c++.png'
import mongodb from '../images/mongodb.png'
import nodejs from '../images/nodejs.png'
import python from '../images/python.png'
import unreal from '../images/unreal.png'

const Skills = () => {
    
  return (
    <section id="skills">
        <div className='skills__wrapper'>
            <h3>My Skills</h3>
            <div className="skills__card__wrapper">
                <div className={"skills__card"}>
                    {/* <img src={cpp} alt="cpp" className='skills__pic'/>
                    <img src={mongodb} alt="mongodb" className='skills__pic'/>
                    <img src={nodejs} alt="nodejs" className='skills__pic'/>
                    <img src={python} alt="python" className='skills__pic'/>
                    <img src={unreal} alt="unreal" className='skills__pic'/> */}
                    <h5 className='tech__tool'>
                        FrontEnd
                    </h5>
                    <div className='skill__list'>
                        <h6>JavaScript</h6>
                        <h6>React</h6>
                        <h6>C++</h6>
                        <h6>TailwindCSS</h6>
                        <h6>CSS</h6>
                        <h6>HTML</h6>
                        <h6>Redux</h6>
                        <h6>Material-UI</h6>
                    </div>
                </div>
                <div className={"skills__card"}>
                    <h5 className='tech__tool'>
                        FrontEnd
                    </h5>
                    <div className='skill__list'>
                        <h6>NodeJs</h6>
                        <h6>ExpressJs</h6>
                        <h6>NestJs</h6>
                        <h6>MongoDB</h6>
                        <h6>Spring Boot</h6>
                        <h6>Mongoose</h6>
                        <h6>Python</h6>
                        <h6>Restful APIs</h6>
                    </div>
                </div>
                <div className={"skills__card"}>
                    <h5 className='tech__tool'>
                        Other
                    </h5>
                    <div className='skill__list'>
                        <h6>Git</h6>
                        <h6>GitHub</h6>
                        <h6>Heroku</h6>
                        <h6>Netlify</h6>
                        <h6>Cypress</h6>
                        <h6>Jest</h6>
                        <h6>VS Code</h6>
                        <h6>CI/CD</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills