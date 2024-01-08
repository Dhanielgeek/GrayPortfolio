import React from 'react';
import './Style.css';
import Gracy from '../assets/image0.jpeg'

const About = () => {
  return (
    <div className='AboutHero'>
      <div className="AboutHeader">
        <h2>About Me</h2>
        <div className="line"></div>
      </div>
      <div className="AboutWrapper">
        <div className="Aboutcontainer">
          <div className="AboutHeadline">
            <h2>
              Hello<span className="waving">👋</span>, My Name is Grace <br/>
              Take a Look Around <br/>
              Nice to Meet You
            </h2>
          </div>
          <div className="AboutContext">
            <p>
            With a strong foundation in programming languages such as Javascript, Express.js, and Node.js, I excel in creating server-side logic and database architecture. My expertise extends to optimizing API performance, ensuring rapid data retrieval, and implementing secure authentication protocols.
            <br/>
            <br/>
            I pride myself on delivering clean, maintainable code by adhering to best practices and industry standards. From database management with SQL or NoSQL databases to building RESTful APIs, I have a proven track record of architecting solutions that meet both current and future needs.
            <br/>
            <br/>
            Explore my portfolio to witness firsthand my contributions to projects, showcasing how my backend development skills have been pivotal in transforming ideas into fully functional, high-performance applications. Let's build the backbone of your next digital innovation together.
            </p>
          </div>
        </div>
        <div className="AboutImage">
          <img src={Gracy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;

