import React from "react";
import './Cards.css';
interface CardProps {

    category: string;
    description: string;


}

const Cards = () => {

    const cardsList: CardProps[] = [
        {
            category: "Education",
            description: "I am a computer scientist and aspiring software engineer with a passion for developing software applications that have a great influence to the community."
        },
        {
            category: "Web Development",
            description: "I have experience working with frontend web development technologies such as HTML, CSS,and React; backend technologies like Django and a little bit of Nodejs; Databases such as sql and mongodb; cloud services such as Azure virtual machine and Git version control."
        },

        {
            category: "Community",
            description: "I am a quick learner and a team player who is always willing to learn new technologies and work with others to achieve common goals. I have worked with Tujenge Africa Foundation for web development internship and also worked with the team to develop a user friendly websites that interacts well with the file server system to access school documents easily."
        }

    ];

    return (
        <div className='info-cards'>
            {cardsList.map((info, index) => (
                <div className='info-card' key={index}>
                    <h2>{info.category}</h2>
                    <p>{info.description}</p>
                    <button className="btn btn-primary">View more</button>
                </div>
            ))}
        </div>
    );
    
}

export default Cards;