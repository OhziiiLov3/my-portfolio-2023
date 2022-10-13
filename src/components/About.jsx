import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#457b9d] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f4a261]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Keith, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am a great problem solver with a positive outlook and a passion for making a social impact! Before I transitioned to tech, my background focused on serving marginalized and at-risk communities. I specialize in creating innovative solutions for clients ranging from individuals and small businesses. My willingness to continuously learn and share knowledge has empowered me to pick up the technical skills to become a Full-Stack Engineer!</p>
                </div>
                </div>
            </div>
        </div>
    
  )
}

export default About