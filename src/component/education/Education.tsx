import React from 'react'
import './Education.css'
import Image from '../../assets/react.svg'
const educationData = [
    {
        degree: "Bachelor of Arts",
        Major: "Computer Science",
        Minor: "Mathematics",
        Concentration: "Data Science && Business",
        institution: "Oberlin College of Arts & Sciences",
        program: "STRONG (Science and Technology Research Opportunities for a New Generation)",
        bonner : "Bonner Scholars program : Community Engagement program",
        class_of: "2027",
        description: "I am studying computer science and mathematics at Oberlin College of Arts & Sciences. I also put focus on courses in data science and machine learning, and cybersecurity.",
        imageUrl: '/src/assets/react.svg',
        scholarships:'John F. Oberlin Scholarship Recipient',

    },


];

const courses = [
    'Data Structures', 'Research & Reasoning in STEM', 'Discrete mathematics', 'Calculus','Intro to Cybersecurity at CodePath','Digital Marketing & Innovation','Git & Github'
]



// Assuming educationData is defined in the same file, otherwise import it
const Education = () => {
    return (
        <section className="education-section" id='education'>
            <h2>Education</h2>
            {educationData.map((edu, index) => (
                <div className='school'>
                    <div className='image'>
                        <img src={Image}></img>


                    </div>
                    <div key={index} className="education-item">

                        <div>
                            <h3>{edu.degree}</h3>
                            <p className="institution">School: {edu.institution} - {edu.class_of}</p>
                            <h4 className="description"><span className='text text-primary'>→</span>Major : {edu.Major}</h4>
                            <h4 className='minor'><span className='text text-primary'>→</span>Minor : {edu.Minor}</h4>
                            <h4 className='minor'><span className='text text-primary'>→</span>Concetration : {edu.Concentration}</h4>

                        </div>
                        <div className='programs'>
                            <h3 className='text text-danger' style={{fontSize:'30px',fontWeight:'bold'}}>Programs</h3>
                            <h4><span className='text text-primary ms-4'>→</span> {edu.program}</h4>
                            <h4><span className='text text-primary ms-4'>→</span> {edu.bonner}</h4>
                        </div>
                        <div className='awards '>
                            <h3 className='text text-danger' style={{ fontSize: '30px', fontWeight: 'bold' }}>Awards</h3>
                            <h4><span className='text text-primary ms-4'>→</span>    John F. Oberlin Scholarship Recipient</h4>
                            <h4><span className='text text-primary ms-4'>→</span>    Martin Luther King Summer Internship funding</h4>
                        </div>

                        <div className='courses'>
                            <h3 className='text text-danger ' style={{ fontSize: '30px', fontWeight: 'bold' }}>Courses</h3>
                            {courses.map((course, index) => (
                                <h4 className = 'text text-bright ms-5'><span className='text text-primary ms-5'>→</span> {course}</h4>
                            ))}

                        </div>

                    
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Education;