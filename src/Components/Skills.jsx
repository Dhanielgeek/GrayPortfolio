import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import Node from '../assets/node-removebg-preview.png'
import Mongodb from '../assets/mongo-removebg-preview.png'
import GITHUB from '../assets/github.png'
import Mysql from '../assets/mysql-removebg-preview.png'
import Express from '../assets/express-js-removebg-preview.png'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div name= "skills" className='bg-[#080f23] text-gray-300 w-full h-[160vh]'>
        {/* container */}
        <motion.div 
    initial={{opacity: 0, x : 200}} 
    animate={{opacity :1 , x : 0}}
    exist = {{opacity : 0 , x : 200}}
         className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
        <p className='text-4xl font-bold border-b-4 border-gray-300 inline'>Skills</p>
        <p className='py-4'>Here are my Skillset</p>
          </div>
          <div className='w-full  grid grid-cols-2  sm:grid-cols-4 text-center py-10 rounded-md'>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={HTML} alt='html'/>
                <p>HTML</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={CSS} alt='html'/>
                <p>CSS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={JAVASCRIPT} alt='html'/>
                <p>Javascript</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={Node} alt='html'/>
                <p>Node Js</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={Mongodb} alt='html'/>
                <p>MongoDb</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={Mysql} alt='html'/>
                <p>MySql</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={GITHUB} alt='html'/>
                <p>Github</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-32 mx-auto' src={Express} alt='html'/>
                <p>Express</p>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export default Skills