import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'

//Putting it all together
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Experience />
        <Education />
        <Footer />
    </>
  )
}

export default App