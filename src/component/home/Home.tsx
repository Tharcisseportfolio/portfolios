import React from 'react';
import {arrow} from '../Icons/Fontawesome';
import {emailIcon} from '../Icons/Fontawesome';
import {githubIcon} from '../Icons/Fontawesome';
import {linkedInIcon} from '../Icons/Fontawesome';
import './Home.css'

function Home() {
  return (
    <>
      <div className='names blurred-background' id='home'>
        <h1 className='salutation'>Hi, I am </h1>
        <h2 className='first-name'>Tharcisse Ntirandekura</h2>
        <h3 className='last-name'>.........</h3>
        <h4 className='title'> Aspiring Computer scientist & Software Engineer</h4>
        <div className='icons d-flex p-5'>
          <a className='ps-5'  href='mailto:tntirand@oberlin.edu'>{emailIcon}</a>
          <a className='ps-5' href='https://github.com/tharcissentirandekura'>{githubIcon}</a>
          <a className='ps-5' href='https://www.linkedin.com/in/tharcisse-ntirandekura/'>{linkedInIcon}</a>
        </div>
        <div className='scrolling-button'>
          <a href='#about'>{arrow}</a>
        </div>
      </div>


    </>
    




  )
}

export default Home