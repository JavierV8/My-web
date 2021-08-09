import React from 'react';
import {ProjectCardStyle} from '../styles/projectCardStyle';

const ProjectCard = props => {
    const { image, title, subtitle, tools, text, demo_url, gitHub_url } = props;

    return (
        <ProjectCardStyle>
            <div className="list-content">
                <img src={`../images/${image}`} alt=""></img>
                <h3>{title}</h3>
                <div className="projectCard-commit-box">
                <p className="project-card-commit">Last commit:</p>
                <p className="project-card-commit2">11 Jul 2021<img alt="img" className="project-card-calendar" src={`../images/calendar.png`} /></p>
                </div>

                <p>{text}</p>
                <div className="project-card-tools">
                {JSON.parse(tools).map(t => <span className="projectCard-tool">{t}</span>)}
                </div>

                <button onClick={() => window.open(demo_url)}><img alt="img" className="project-card-img" src={`../images/play.png`} />Live Demo</button>
                <button className="project-card-button-github" onClick={() => window.open(gitHub_url)}> <img alt="img" className="project-card-img" src={`../images/github.png`} />GitHub</button>
            </div>
        </ProjectCardStyle>
    )
}

export default ProjectCard;