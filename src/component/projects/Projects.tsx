import React from 'react';
import './Projects.css'; // Make sure to create a corresponding CSS file

const projectData = [
    {
        title: 'RGB matrix python library',
        description: 'This is a customized python library designed for controlling LED matrices and it is able to be run on Linux',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject1.com'
    },
    {
        title: 'Tic-Tac-Toe'
,
        description: 'This is an implementation of Tic Tac Toe game for two players',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject2.com'
    },
    {
        title: 'Brain Simulation'
        ,
        description: 'With the knowledge of neurons computation and Octave programming language, I implemented a brain simulation for brain activity.',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject2.com'
    },

    {
        title: 'Collatz sequence',
        description: 'This is an implementation of Collatz sequences visualizer',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject2.com'
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <>
            <h1 className="section" id='projects'>Projects</h1>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"><button className='btn btn-success'>View Project</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Projects;