import React from 'react'
import './about.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  return (
    <div id="about" className='About'>
      <div className='Aboutrect'>
      <div data-aos='fade-up'className='Porttitle'>About</div>
      <p data-aos='fade-right' data-aos-duration="1000" className='Aboutp'>
      • I'm an ambitious <span className='bold'>engineering</span> student from Barrie, Ontario
      </p>
      <p data-aos='fade-left' data-aos-duration="1000" className='Aboutp1'>
      • I have a keen eye for detail and a natural aptitude for <span className='bold'>problem-solving</span>. 
      </p>
      <p data-aos='fade-right' data-aos-duration="1000" className='Aboutp2'>
      • I have a passion for <span className='bold'>programming</span> in both <span className='bold'>front</span> and <span className='bold'>back-end</span>
      </p>
      <p data-aos='fade-left' data-aos-duration="1000" className='Aboutp3'>
      • My interests are in <span className='bold'>machine learning</span>, <span className='bold'>robotics</span>, and <span className='bold'>software development</span>.
      </p>
      <p data-aos='fade-right' data-aos-duration="1000" className='Aboutp4'>
      • Currently, I am seeking <span className='bold'>summer internships</span> where I can further utilize my skills and knowledge!
      </p>
    </div>
    </div>
  )
}

export default About