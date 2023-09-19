import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './ProjectCardRev.css'
const ProjectCardRev = ({ title, icon, photo, description, tech1, tech2, tech3, tech4, gitHubUrl, liveLinkUrl }) => {
  return (
    <div className="projectCard__rev__wrapper">
        <div className="project__card__parent">
            <div className="project__card__leftside">
                <div className="project__card__title">
                      <h3>{title}</h3> {icon}
                </div>
                <div className="project__card__middle">
                    <p>{description}</p>
                    <div className="project__card__tech">
                        <h3>{ tech1 }</h3>
                        <h3>{ tech2 }</h3>
                        <h3>{ tech3 }</h3>
                        <h3>{ tech4 }</h3>
                    </div>
                </div>
                <div className="project__card__bottom">
                    <div className="project__card__bottom__icon">
                        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="project__card__bottom__icon">
                            <h3>Code</h3> <GitHubIcon />
                        </a>
                    </div>
                      <div className="project__card__bottom__icon">
                        <a href={liveLinkUrl} target="_blank" rel="noopener noreferrer" className="project__card__bottom__icon">
                            <h3>Live Code</h3> <OpenInNewIcon />
                        </a>
                    </div>
                </div>
            </div>
            <img src={photo} alt="" />
        </div>
    </div>
  )
}

export default ProjectCardRev