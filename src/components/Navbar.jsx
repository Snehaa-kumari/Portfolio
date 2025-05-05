import React from 'react'
import { useState } from "react";
import pic from "../../public/images/bg.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const[menu, setMenu] = useState(false);
  const navItems =[
    {
      id:1,
      text : "Home"
    },
    {
      id:2,
      text : "About"
    },
    {
      id:3,
      text : "Projects"
    },
    {
      id:4,
      text : "Contact"
    }
  ]
  return (
   <>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md top-0 left-0 right-0'>
       <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2'>
              <img src={pic}  className='h-12 w-12 rounded-full ' alt="" />
              <h1 className='font-semibold text-xl items-center justify-between cursor-pointer'>Sneha</h1>
            </div>
            
            <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {menu && (
  <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
    {/* Cancel (Close) Button */}
    <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setMenu(false)}>
      <IoCloseSharp size={30} />
    </div>

    {/* Nav Items */}
    <ul className="flex flex-col space-y-6 text-xl font-semibold text-center">
      {navItems.map(({ id, text }) => (
        <li key={id}>
          <Link
            to={text}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenu(false)}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}


</div>
     
   </>
  )
}

export default Navbar