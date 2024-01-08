import React,{useState} from 'react'
import './Style.css'
import { CiMenuBurger } from "react-icons/ci";
import {MdClear} from 'react-icons/md'

const Header = () => {

  const [Toggle, setToggle] = useState(false)

  const HandleToggle = ()=>{
    setToggle(!Toggle)
  }

  return (
    <div className='Header'>
      <div className="LogoHold">
        <h3>EGrace</h3>
      </div>
      <div className="Navbar">
        <nav>Home</nav>
        <nav>About</nav>
        <nav>Skills</nav>
        <nav>Projects</nav>
        <nav>Contacts</nav>
      </div>

<div className="Menu">
  
{
  Toggle === false ? <CiMenuBurger onClick={HandleToggle} style={{color:"lightgray"}} className='menu' /> : <MdClear onClick={HandleToggle} style={{color:"lightgray"}} className='menu'/>
}
</div>

{
  Toggle ? (<div className='NavHold'>
     <nav>Home</nav>
        <nav>About</nav>
        <nav>Skills</nav>
        <nav>Projects</nav>
        <nav>Contacts</nav>
  </div>) : null
}

  </div>
  )
}

export default Header