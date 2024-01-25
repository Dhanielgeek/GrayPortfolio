import React from 'react'
//import image of work
// import manage from '../Images/manage.png'
// import weather from '../Images/weather.png'
// import food from '../Images/food.png'

const Projects = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#080f23]' name='projects'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=' pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-300 inline'>Projects</p>
                <p className='py-6'>Few of of my Projects</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                 className=' shadow-lg shadow-[#040c16] bg-[#1e6091] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=''>
                        <span className='text-2xl font-bold tracking-wide text-blue-400'>
                            Creative Ent
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://creativentstca.onrender.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        </div>
                    </div>
                </div>
                <div 
                 className=' shadow-lg shadow-[#040c16] bg-[#1e6091] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=''>
                        <span className='text-2xl font-bold tracking-wide'>
                            ProgressPal
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://progresspalproject.onrender.com'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        {/* <a href='https://github.com/Dhanielgeek/clothe-commerce'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div 
                 className=' shadow-lg shadow-[#040c16] bg-[#1e6091] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=''>
                        <span className='text-2xl font-bold tracking-wide'>
                            MedVault
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://medvault-xixt.onrender.com/#/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        </div>
                    </div>
                </div>
                <div  
                 className=' shadow-lg shadow-[#040c16] bg-[#1e6091] group container  rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=''>
                        <span className='text-2xl font-bold tracking-wide text-blue-400'>
                            ChowFinder
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://chowfinderapp.onrender.com/#/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        </div>
                    </div>
                </div>
                <div  
                 className=' shadow-lg shadow-[#040c16] bg-[#1e6091] group container  rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=''>
                        <span className='text-2xl font-bold tracking-wide text-blue-400'>
                            Trippy
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://trippy-huas.onrender.com'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects