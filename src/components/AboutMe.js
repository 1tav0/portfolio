import React from 'react'
import result from '../images/result.png'
import './AboutMe.css'
import GitHubIcon from '@mui/icons-material/GitHub';
const AboutMe = () => {
  return (
      <div className="aboutme">
            <div className="aboutme__left">
              <div className="aboutme__info">
                  <h1>Hello</h1>
                  <h3>My Name is Octavio Cruz</h3>
                  <p> I am a Full Stack Developer with expertise in the MERN stack, as well as Firebase and its emulators for creating full-stack apps. My focus is building real-life web applications. I have extensive knowledge of JavaScript, Node.js, C++, React, Express, Firebase, Redux, HTML, CSS, and Styled Components.
                      I enjoy engaging in problem-solving and implementing popular algorithms from websites like LeetCode. I love creating modern and user-friendly applications that solve real-life problems through software.
                      Overcoming the adversities that come with each project is the most exciting part for me, and achieving the desired results gives me a great sense of accomplishment.
                  </p>
                  <GitHubIcon />
              </div>
              <img src={result} alt="" />
            </div>
    </div>
  )
}

export default AboutMe