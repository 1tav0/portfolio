import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='projects__wrapper'>
        <h5 className='projects__title'>
          Portfolio
        </h5>
        <h3>
          Each project is a unique 
        </h3>
        <ProjectCard />
    </div>
  )
}

export default Projects