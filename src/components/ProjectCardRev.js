import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './ProjectCardRev.css'
import MERNIG from '../images/MERNIG.png'
const ProjectCardRev = () => {
  return (
    <div className="projectCard__rev__wrapper">
        <div className="project__card__parent">
            <div className="project__card__leftside">
                <div className="project__card__title">
                    <h3>MernIG</h3> <GitHubIcon/>
                </div>
                <div className="project__card__middle">
                    <p>
                        This is a Instagram like socila media platform where a user 
                        is able to do all the functionaltioes of the real instagram such
                        as follow/unfollow user, upload pictures as posts, like/unlike a posts
                        and have a followers feed for the logged in user
                    </p>
                    <div className="project__card__tech">
                        <h3>MongoDB</h3>
                        <h3>MongoDB</h3>
                        <h3>MongoDB</h3>
                        <h3>MongoDB</h3>
                    </div>
                </div>
                <div className="project__card__bottom">
                    <div className="project__card__bottom__icon">
                        <h3>Code</h3> <GitHubIcon />
                    </div>
                    <div className="project__card__bottom__icon">
                        <h3>Live Code</h3> <OpenInNewIcon />
                    </div>
                </div>
            </div>
            <img src={MERNIG} alt="" />
        </div>
    </div>
  )
}

export default ProjectCardRev