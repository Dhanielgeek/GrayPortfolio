import React from 'react'
import './Style.css'
import { FaRegFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <div className='Hero'>
        <div className="HoldContainer">
            <div className="Text">
                <p>Hi, My Name is </p>
            </div>
            <div className="HeadlineName">
                <h2>Grace Ekele</h2>
                <h4>Certified  Backend Developer</h4>
                <p>As a seasoned backend developer, I specialize in crafting robust and efficient systems that power the seamless functionality of web applications. My portfolio is a testament to my proficiency in designing and implementing scalable solutions that form the backbone of digital experiences.
                <br/> 
                <br/>
                Explore my portfolio to witness firsthand my contributions to projects, showcasing how my backend development skills have been pivotal in transforming ideas into fully functional, high-performance applications. 
                <span style={{
                    color:'#7ae582',
                    fontWeight: 'bolder'
                }}>
                     Let's build the backbone of your next digital innovation together.
                </span>
                </p>
                <div className="BtnContainer">
                    <button>My Resume <FaRegFilePdf /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home