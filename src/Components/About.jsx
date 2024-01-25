import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div name="about" className='w-full h-[110vh] bg-[#080f23] text-gray-300'>
        <motion.div
            initial={{opacity: 0, x : 200}} 
            animate={{opacity :1 , x : 0}}
            exist = {{opacity : 0 , x : 200}}        
         className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full flex flex-col justify-center items-center  gap-8'>
                <div className=' sm:text-right pb-8 pl-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
                      About</p>
                </div>
                <div></div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  '>
                  <div className=' sm:text-right text-4xl font-bold'>
                    <p>Hello👋,I'm Grace, Nice to meet you,Please take a look around.</p>
                  </div>
                  <div>
                    <p>Explore my portfolio to witness firsthand my contributions to projects, showcasing how my backend development skills have been pivotal in transforming ideas into fully functional, high-performance applications. Let's build the backbone of your next digital innovation together.
                    Having collaborated on diverse projects, I bring adaptability and problem-solving skills to the table. My commitment to staying abreast of emerging technologies allows me to incorporate cutting-edge tools and frameworks into my work, ensuring that the systems I develop are not only efficient but also future-proof.

                    </p>
                  </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About;