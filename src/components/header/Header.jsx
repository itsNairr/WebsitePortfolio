import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Headrect'>
        <div className='Intro1'><span className='Hi'>Hi,</span><span className='Im'> i'm</span></div>
        <div className='Intro2'>Hari Nair</div>
        <img className='Pfp'src="profile.jpg" width={756/2} height={1008/2} alt=""/>
        <div className='Intro3'>A <a href="https://engineering.queensu.ca/programs/undergraduate/mre/" target="_blank" rel="noreferrer" className='Im'> Mechatronics</a> &</div>
        <div className='Intro4'><a href="https://engineering.queensu.ca/programs/undergraduate/mre/" target="_blank" rel="noreferrer" className='Im'>Robotics</a> Engineer</div>
      </div>
    </div>
  )
}

export default Header