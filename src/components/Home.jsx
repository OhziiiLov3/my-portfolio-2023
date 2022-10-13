import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#457b9d]'>
{/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#f4a261] font-bold'>Hi, my name is </p>
        <h1 className='text-3xl sm:text-6xl font-bold text-[#a8dadc]'>Keith L. Baskerville Jr.</h1>
        <h2 className='text-xl sm:text-4xl font-bold text-[#1d3557]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#1d3557] text-lg py-4 max-w-[700px]'>I'm a Full Stack Developer specializing in building and designing digital experiences and my passion is to create services to make a social impact! I'm focused on building responsive full-stack web applications and services. </p>
         <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex hover:bg-[#f4a261] hover:border-[#f4a261]'> View Work 
            <span className='group-hover:rotate-90 duration-300'>
                   <HiArrowNarrowRight className='ml-3'/> 
            </span>
         </button>
        </div>
        </div>
       
    </div>
  )
}

export default Home