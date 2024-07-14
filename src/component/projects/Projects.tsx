import React from 'react';
import './Projects.css'; // Make sure to create a corresponding CSS file

const projectData = [
    {
        title: 'Maze Solver',
        description: 'Developed an algorithm to solve mazes using the Breadth-First Search technique',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject1.com',

        tools : ['Java','Java Swing']
    },
    {
        title: 'Movies Actors Relation',
        description: 'Developped an Breadth-First Search that searches a movie dataset to find movies with same actors and actors acted in the same movies. This was easy to search since we used graphs idea',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject1.com',

        tools: ['Java','Junit Testing','Graph Algorithms']
    },
    {
        title: 'RGB matrix python library',
        description: 'This is a customized python library designed for controlling LED matrices and it is able to be run on Linux',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject1.com',
        tools: ['Python', 'Picture Module']
    },
    {
        title: 'Tic-Tac-Toe'
,
        description: 'This is an implementation of Tic Tac Toe game for two players',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject2.com',
        tools: ['Python']
    },
    {
        title: 'Brain Simulation'
        ,
        description: 'With the knowledge of neurons computation and Octave programming language, I implemented a brain simulation for brain activity.',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject2.com',
        tools: ['Octave','Linear Algebra']
    },

    {
        title: 'Collatz sequence',
        description: 'This is an implementation of Collatz sequences visualizer',
        imageUrl: '/src/assets/react.svg',
        link: 'http://linktoproject2.com',
        tools: ['Python','javascript','Django','Chart.js',"html",'css','bootstrap']
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className='projects'>
            <h1 className="section text-center" id='projects'>Projects</h1>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="parent-container">
                                {project.tools.map((tool, index) => (
                                    <div key={index} className='tools'>
                                        <div>
                                            <h1 className='tool d-flex'>{tool}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className='btn btn-success'>View Project</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Projects;