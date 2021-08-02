import React from 'react';
import {ProjectCardStyle} from '../styles/projectCardStyle';

const ProjectCard = props => {
    const { image, subtitle, text, demo_url, gitHub_url } = props;
    return (
        <ProjectCardStyle>
            <div className="list-content">
                <img src={`../images/${image}`}></img>
                <h4>{subtitle}</h4>
                <p>{text}</p>
                <button onClick={() => window.open(demo_url)}>Live Demo</button>
                <button className="project-card-button-github" onClick={() => window.open(gitHub_url)}>GitHub</button>
            </div>
        </ProjectCardStyle>
    )
}

export default ProjectCard;