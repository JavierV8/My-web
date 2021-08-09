import React, { useEffect, useState } from 'react';
import {ProjectCardStyle} from '../styles/projectCardStyle';

const ProjectCard = props => {
    const { image, title, apiURL, tools, text, demo_url, gitHub_url } = props;

    const [commitDate, setCommitDate] = useState(null);
console.log(title)
    useEffect(() => {
        fetch(apiURL)
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            setCommitDate(json.commit.commit.author.date);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
        <ProjectCardStyle>
            <div className="list-content">
                <img src={`../images/${image}`} alt=""></img>
                <h3>{title}</h3>
                <div className="projectCard-commit-box">
                <p className="project-card-commit">Last commit:</p>
                <p className="project-card-commit2">{commitDate}<img alt="img" className="project-card-calendar" src={`../images/calendar.png`} /></p>
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