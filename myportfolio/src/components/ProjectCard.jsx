// src/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, techStack, liveLink }) => {
    return (
        <div className="project-card">
            <img src={image} alt="Project" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="tech-stack">Tech stack: {techStack}</p>
            <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="live-preview">Live Preview</a>
                {/* <a href={codeLink} target="_blank" rel="noopener noreferrer" className="view-code">View Code</a> */}
            </div>
        </div>
    );
};

export default ProjectCard;
