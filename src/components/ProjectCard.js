import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './ProjectCard.css'
const ProjectCard = ({ title, icon, photo, description, tech1, tech2, tech3, tech4 }) => {
  return (
    <div className='project__card__wrapper'>
        <div className="project__card">
            <div className="project__card__center">
                <img src={photo} alt="" className='project__card__img'/>
                <div className="projectCard__rightSide">
                    <div className='projectCard__rightSide__title'>
                        <h4>{title}</h4> {icon}
                    </div>
                    <div className="projectCard__rightSide__center">
                          <p>{description}</p>
                        <div className='project__card__tech'>
                            <h3>{ tech1 }</h3>
                            <h3>{ tech2 }</h3>
                            <h3>{ tech3 }</h3>
                            <h3>{ tech4 }</h3>
                        </div>
                    </div>
                    <div className="projectCard__icons">
                        <div className="projectCard__icons__div">
                            <h6>Code</h6><GitHubIcon />
                        </div>
                        <div className="projectCard__icons__div">
                            <h6>Live Demo</h6><OpenInNewIcon />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ProjectCard