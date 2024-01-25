import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Project from './Components/Project.jsx'
import Contacts from './Components/Contacts.jsx'
const App = () => {
  return (
    <div>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>
   <Contacts/>
    </div>
  )
}

export default App;