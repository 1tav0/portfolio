import React from 'react'
import result from '../images/result.png'
import './AboutMe.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const AboutMe = () => {

  const githubProfileUrl = 'https://github.com/1tav0';
  const LinkedIn = 'https://www.linkedin.com/in/octavio-cruz-ortega-8613b822b/';

  return (
    <section id="aboutme">
      <div className="aboutme">
        <div className="aboutme__name">
          <h1>Hello</h1>
          <h3>I am Octavio Cruz Ortega</h3>
        </div>
        <div className="aboutme__wrapper">
          <div className="aboutme__left">
            <div className="aboutme__info">
              <p> I am a Full Stack Developer with expertise in the MERN stack, as well as Firebase and its emulators for creating full-stack applications. My focus is building real-life web applications. I have extensive knowledge of JavaScript, Node.js, C++, React, Express, Firebase, Redux, HTML, CSS, and Styled Components.
                I enjoy engaging in problem-solving, and implementing popular algorithms from websites like LeetCode. I love creating modern, and user-friendly applications that solve real-life problems through software.
                Overcoming the adversities that come with each project is the most exciting part for me, and achieving the desired results gives me a great sense of accomplishment.
              </p>
            </div>
            <div className="aboutme__info__icons">
              <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" >
                <GitHubIcon />
              </a>
              <YouTubeIcon />
              <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <img className='image' src={result} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe