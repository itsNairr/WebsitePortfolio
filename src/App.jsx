import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
// import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'
import Headerbar from './components/headerbar/Headerbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

//Putting it all together
const App = () => {
  return (
    <>
        <Headerbar />
    <div className='Content'>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        {/* <Experience /> */}
        <Education />
    </div>    
        <Footer />
    </>
  )
}

export default App