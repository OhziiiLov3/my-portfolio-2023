import React from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/ZWLOGO.png'


const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f1faee] text-gray-300">
      <div>
    <img src={Logo} alt="logo" style={{width: '50px'}} />
      </div>

      {/* Menu */}
      <div>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className='hidden'>
        <FaBars/>
      </div>
      {/* Moblie Menu */}
       <ul className='hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* Social Icons */}
      <div></div>
    </div>
  )
}

export default Navbar