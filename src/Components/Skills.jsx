import React from 'react'
import './Style.css'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Github from '../assets/github.png'
import Express from '../assets/express-js-removebg-preview.png'
import Mongo from '../assets/mongo-removebg-preview.png'
import Node from '../assets/node-removebg-preview.png'
import Mysql from '../assets/mysql-removebg-preview.png'
import Javascript from '../assets/javascript.png'


const Skills = () => {

const SkillsData = [
    {
        SkillsName : "Html",
        SkillsImage : Html
    },
    {
        SkillsName : "CSS",
        SkillsImage : Css
    },
    {
        SkillsName : "Javascript",
        SkillsImage : Javascript
    },
    {
        SkillsName : "GitHub",
        SkillsImage : Github
    },
    {
        SkillsName : "Node Js",
        SkillsImage : Node
    },
    {
        SkillsName : "Express Js",
        SkillsImage : Express
    },
    {
        SkillsName : "MongoDB",
        SkillsImage : Mongo
    },
    {
        SkillsName : "MySql",
        SkillsImage : Mysql
    }
]

  return (
    <div className='SkillsHold'>
        <div className="SkillsHeader">
            <h2>Skills</h2>
            <div className="line"></div>
        </div>
        <div className="SkillsWrapper">
        {
            SkillsData.map((e)=>(
                <div className="SkillsCard">
                    <img src={e.SkillsImage} alt="" />
                    <h3>{e.SkillsName}</h3>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Skills