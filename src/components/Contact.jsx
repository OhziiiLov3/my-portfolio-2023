import React from 'react'

const Contact = () => {
  return (
    <div name ='contact' className='w-full h-screen bg-[#457b9d] flex justify-center items-center p-4'>
            <form action="https://getform.io/f/0f107b51-8f5f-40a1-972d-c2e892a27f01" method="POST" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 py-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f4a261] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or send me an email- klbaskerville0520@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] ' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#f4a261] hover:border-[#f4a261] px-4 p-4 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
    </div>
  )
}

export default Contact