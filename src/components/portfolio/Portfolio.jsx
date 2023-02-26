import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div id="portfolio" className='Portfolio'>
      <div data-aos='fade-up'className='Porttitle'>Skills and Work</div> 
      <div className="grid-container">
        <div data-aos="fade-down-right" data-aos-duration="1000" className='skill-rect'>
        <div className="grid-skill-container">
          <span className="ST">Skills</span>
          <span className="SPoints"><span className="bold">Programming:</span> Java, C/C++, JavaScript, React, CSS, HTML, ROS2, Arduino, MATLAB, Object-Oriented Programming</span>
          <span className="SPoints"><span className="bold">UI/UX Design:</span> Figma, Photoshop, Premiere Pro</span>
          <span className="SPoints"><span className="bold">CAD:</span> SolidWorks </span>
          <span className="SPoints"><span className="bold">Office Suite:</span> Word, Excel, PowerPoint</span>
        </div>
        </div>
        <div data-aos="fade-down-left" data-aos-duration="1000" className='big-rect'>
        <div className="grid-proj-container">
        <div>
        <div className="ST">Robotic Arm</div>
        <div className="grid-projp-container">
        <span className="SPoints">• Robotic Assistive Arm to lift various objects for those who have disabilities</span>
        <span className="SPoints">• Mathematical Modeling</span>
        <span className="SPoints">• Solidworks CAD Designing</span>
        <span className="SPoints">• Arduino Programming</span>
        </div>
        </div>
        <img className='arm' src="arm.jpg" alt=""/>
        </div>
        </div>
        <div data-aos="fade-up-right" data-aos-duration="1000" className='skill-rect'>
        <div className="grid-skill-container">
          <span className="ST">Smaller Projects</span>
          <span className="SPoints">• VEX-IQ Robots</span>
          <span className="SPoints">• Pac-Man recreation in C++</span>
          <span className="SPoints">• Guess Who? remake in Java</span>
          <span className="SPoints">• Data Structures and Algorithm implementations in Arduino</span>
        </div>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000" className='big-rect'>
        <div className="grid-projj-container">
        <div>
        <div className="ST">Fitness App</div>
        <div className="grid-projp-container">
        <span className="SPoints">• Programmed with HTML, React Native, Rust</span>
        <span className="SPoints">• Personal Fitness app for users to track workouts</span>
        <span className="SPoints">• Ability to share workouts with one another</span>
        <span className="SPoints">• Still in development</span>
        </div>
        </div>
        <img className='fit' src="fitness.png" alt=""/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio