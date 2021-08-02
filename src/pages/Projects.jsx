import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectsStyle } from '../styles/projectsStyle';
import ProjectCard from '../components/ProjectCard';
import { projects } from './projects';


const Projects = () => {

    const history = useHistory();
    const pro = projects.map(p => {
        return <ProjectCard image={p.image} subtitle={p.subtitle} text={p.text} demo_url={p.demo_url} gitHub_url={p.gitHub_url} />
    })
    useEffect(() => {
        document.body.style.overflowY = "scroll";
        document.body.style.scrollBehavior = "auto";
        return () => document.body.style.overflowY = "hidden";
    }, [])
    return (
        <>
        <h1>Projects</h1>
        <h4>The following demostrations are those that i have deployed, so you can check them in live:</h4>
        <ProjectsStyle>
            {pro}
            <button className="projects-goHome-button" onClick={() => history.push('/')}>Go Home</button>
        </ProjectsStyle>
        </>
    );
};

export default Projects;