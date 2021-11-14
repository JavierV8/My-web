import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectsStyle, ProjectsStyle1 } from '../styles/projectsStyle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projectsList/projects';


const Projects = () => {

    const history = useHistory();
    const pro = projects.map(p => {
        return <ProjectCard image={p.image} apiURL={p.gitHub_url_API} title={p.title} subtitle={p.subtitle} tools={p.tools} text={p.text} demo_url={p.demo_url} gitHub_url={p.gitHub_url} />
    })
    useEffect(() => {
        document.body.style.overflowY = "scroll";
        document.body.style.scrollBehavior = "auto";
        return () => document.body.style.overflowY = "hidden";
    }, [])
    return (
        <ProjectsStyle1>
            <div className="projects-title">
                <h1>CODING CHALLENGES</h1>
                <h4>The following projects are challanges that help me better understand the JS programming language, improving my problem-solving skills and algorithms.</h4>
            </div>
            <ProjectsStyle style={{pading: 0}}>
                {pro}
                <button className="projects-goHome-button" onClick={() => history.push('/')}>Go Home</button>
            </ProjectsStyle>
        </ProjectsStyle1>
    );
};

export default Projects;