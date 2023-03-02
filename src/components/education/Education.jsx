import React from 'react'
import './education.css'

const Education = () => {
  return (
    <div id="education" className='Education'>
      <div data-aos-duration="1000" data-aos='fade-up'className='Porttitle'>Education</div> 
      <div className="grid-edu-container">
      <div data-aos-duration="1000" data-aos='fade-up' className='edu-rect'>
      <div className="grid-edut-container">
          <span className="EdT">Mechatronics & Robotics Engineering - Queen's University</span>
          <span className="EPoints">• GPA: 3.7</span>
          <span className="EPoints">• Member of Queen's AutoDrive Team</span>
          <span className="EPoints">• WizePrep Ambassador for Queen's</span>
          <span className="EPoints">• Recipient of the Dean's Engineering and Applied Science, Carol Black Family, and Principal's Scholarship</span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Education