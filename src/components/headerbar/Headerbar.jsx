import React from 'react'
import "./headerbar.css"
import { FiDownload } from 'react-icons/fi';

export const Headerbar = () => {
  return (
    <div className='Barmain'>
    <div className='Bar'/>
    <a href='Hari Nair Resume 2023.pdf' className='Download'download>
      <FiDownload/> <span className='DT'>Download Resume</span>
      </a>
    <div className='Logo'>
    <img src="logo.png" width={50} height={50} alt=""/>
    </div>
    <div className='Barline'/>
    </div>
  )
}

export default Headerbar