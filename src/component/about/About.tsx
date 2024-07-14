import React from 'react'
import Cards from '../about/Cards'
import './About.css'
function About() {
    return (
        <div className='about text-center p-4' id='about'>
            <h1 className='section'>About</h1>
            <Cards />
        </div>
    )
}

export default About