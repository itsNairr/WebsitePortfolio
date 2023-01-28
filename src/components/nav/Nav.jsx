import React from 'react'
import { useState } from 'react';
import './nav.css'
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { IoSchool } from 'react-icons/io5';
import { AiFillHome, AiFillBook } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';

function ButtonLogo ({ setState, onClick, Icon }){
  return (
    <button onClick={onClick} onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
      <Icon />
    </button>
  );
};


const Nav = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (<>
    <div className = "Nav">
      <div className = "Logos">
      <ButtonLogo setState={setHeaderOpen} onClick={() => console.log("Header")} Icon={() => <AiFillHome />}/> 
      <ButtonLogo setState={setAboutOpen} onClick={() => console.log("About")} Icon={() => <BsFillPersonFill />}/>  
      <ButtonLogo setState={setPortfolioOpen} onClick={() => console.log("Portfolio")} Icon={() => <AiFillBook />}/>  
      <ButtonLogo setState={setExperienceOpen} onClick={() => console.log("Experience")} Icon={() => <MdWork />}/>  
      <ButtonLogo setState={setEducationOpen} onClick={() => console.log("Education")} Icon={() => <IoSchool />}/>  
      <ButtonLogo setState={setContactOpen} onClick={() => console.log("Contact")} Icon={() => <BsFillTelephoneFill />}/> 
      </div>
      <div className = "Label">
      <span className={headerOpen ? "open" : "closed"}>Header</span>
      <span className={aboutOpen ? "open" : "closed"}>About</span>
      <span className={portfolioOpen ? "open" : "closed"}>Portfolio</span>
      <span className={experienceOpen ? "open" : "closed"}>Experience</span>
      <span className={educationOpen ? "open" : "closed"}>Education</span>
      <span className={contactOpen ? "open" : "closed"}>Contact</span>
        </div>
      </div>
    </>)
}

export default Nav