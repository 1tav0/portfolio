import React from 'react'
import './Skills.css'
import ReactIcon from '../svgs/ReactIcon'
import JavaScriptIcon from '../svgs/JavaScriptIcon';
import CppIcon from '../svgs/CppIcon'
import TailwindIcon from '../svgs/TailwindIcon'
import CssIcon from '../svgs/CssIcon'
import HtmlIcon from '../svgs/HtmlIcon'
import ReduxIcon from '../svgs/ReduxIcon'
import MaterialUiIcon from '../svgs/MaterialUiIcon';
import NodeJsIcon from '../svgs/NodeJsIcon'
import ExpressIcon from '../svgs/ExpressIcon'
import MongoDbIcon from '../svgs/MongoDbIcon'
import PythonIcon from '../svgs/PythonIcon'
import ApiIcon from '../svgs/ApiIcon'
import GitIcon from '../svgs/GitIcon'
import GitHubIcon from '../svgs/GitHubIcon'
import HerokuIcon from '../svgs/HerokuIcon'
import AmplifyIcon from '../svgs/AmplifyIcon'
import CypressIcon from '../svgs/CypressIcon'
import JestIcon from '../svgs/JestIcon'
import VisualStudioCodeIcon from '../svgs/VisualStudioCodeIcon'
import CICDIcon from '../svgs/CiCsIcon'

import TechnologyIcon from './TechnologyIcon';
const Skills = () => {
    
  return (
    <section id="skills">
        <div className='skills__wrapper'>
            <div className="skills__wrapper__box">
                <div className="skills__wrapper__title">
                    <h3>My Tech Stack</h3>
                </div>
                <div className="skills__wrapper__technologies">
                    <div className="skills__technologies">
                        <div className="skills__top">
                            <TechnologyIcon icon={<JavaScriptIcon />} name="JavaScript" className="tech__icon"/>
                            <TechnologyIcon icon={<ReactIcon />} name="React" className="tech__icon"/>
                            <TechnologyIcon icon={<CppIcon />} name="Cpp" className="tech__icon"/>
                        </div>
                        <div className="skills__middle1">
                            <TechnologyIcon icon={<TailwindIcon />} name="TailWindCss" className="tech__icon"/>
                            <TechnologyIcon icon={<CssIcon />} name="Css" className="tech__icon"/>
                            <TechnologyIcon icon={<HtmlIcon />} name="Html" className="tech__icon"/>
                            <TechnologyIcon icon={<ReduxIcon />} name="Redux" className="tech__icon"/>
                        </div>
                        <div className="skills__middle2">
                            <TechnologyIcon icon={<MaterialUiIcon />} name="Material-UI" className="tech__icon"/>
                            <TechnologyIcon icon={<NodeJsIcon />} name="NodeJs" className="tech__icon"/>
                            <TechnologyIcon icon={<ExpressIcon />} name="ExpressJs" className="tech__icon"/>
                            <TechnologyIcon icon={<MongoDbIcon />} name="MongoDB" className="tech__icon"/>
                            <TechnologyIcon icon={<PythonIcon />} name="Python" className="tech__icon"/>
                        </div>
                        <div className="skills__middle3">
                            <TechnologyIcon icon={<ApiIcon />} name="API" className="tech__icon"/>
                            <TechnologyIcon icon={<GitIcon />} name="Git" className="tech__icon"/>
                            <TechnologyIcon icon={<GitHubIcon />} name="GitHub" className="tech__icon"/>
                            <TechnologyIcon icon={<HerokuIcon />} name="Heroku" className="tech__icon"/>
                            <TechnologyIcon icon={<AmplifyIcon />} name="Amplify" className="tech__icon"/>
                        </div>
                        <div className="skills__bottom">
                            <TechnologyIcon icon={<CypressIcon />} name="Cypress" className="tech__icon"/>
                            <TechnologyIcon icon={<JestIcon />} name="Jest" className="tech__icon"/>
                            <TechnologyIcon icon={<VisualStudioCodeIcon />} name="Vscode" className="tech__icon"/>
                            <TechnologyIcon icon={<CICDIcon />} name="CI/CD" className="tech__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills