import React from "react";
import './Experience.css'

const positions = [
    {
        company: "Compscilib",
        title : 'Technical Beta Tester',
        description : "Assisting the development team to identify bugs in products which were about to be released and helped identify new features to meet clients' needs"
    },
    {
        company: "Oberlin College",
        title: "Research Assistant",
        description : " Assisted my research mentor conduct a research to find out how to improve computer science education so that all students take advantage of all available resources to succeed in the computer science journey despite the background"
    },

    {
        company: "Tujenge Africa Foundation",
        title: "IT & Web Developper",
        description :' Assisted in monitoring the network trafic and performance, and also implement a user friendly for studentes to easily access the file server with an amazing UI'
    }
]
function Experience() {

    return (
        <>
            <h3 className="m-3 text-light text-center p-4" style={{fontSize:"40px"}} id='experience'>Experience</h3>
            <div className='info-cards'>
                {positions.map((info, index) => (
                    <div className='info-card' key={index}>
                        <h2>{info.title} at {info.company}</h2>
                        <p>{info.description}</p>
                        <button className="btn btn-success">View more</button>
                    </div>
                ))}
            </div></>

    );
}

export default Experience