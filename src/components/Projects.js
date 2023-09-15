import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import InstagramIcon from '@mui/icons-material/Instagram';
import MERNIG from '../images/MERNIG.png'
import ProjectCardRev from './ProjectCardRev';
const Projects = () => {
  return (
    <div className='projects__wrapper'>
      <div className="projects__wrapper__content">
        <h5 className='projects__title'>
          Portfolio
        </h5>
        <h3>
          Each project is a unique 
        </h3>
      </div>
      <ProjectCard photo={MERNIG} title="MERNIG" icon={<InstagramIcon />}
        description = "This is a Instagram like Social Media platform where a user is able to do all the functionalities of the real Instagram such as follow/unfollow user, upload pictures as posts, like/unlike a post, and have a followers feed for the logged in user."
      />
      <ProjectCardRev />
    </div>
  )
}

export default Projects