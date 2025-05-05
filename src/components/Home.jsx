import React from 'react'
import pic from "../../public/images/bg.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
        <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
          <div className='flex flex-col md:flex-row'>
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className='text-xl'>Welcome to my portfolio</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1>Hello, I am a</h1>
                        <ReactTyped className='text-red-800 font-bold'
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        />
                    </div>
                    <br />
                    <p className='text-sm md:text-xl text-justify'>I'm passionate about designing and developing dynamic, user-friendly web applications. With a strong foundation in both frontend and backend technologies. I'm always eager to learn new technologies and explore innovative ways to create scalable and efficient applications. I enjoy collaborating on creative projects and turning ideas into reality through clean code and thoughtful design.
                </p>
                <br />
                <div className='flex text-center items-center flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mt-5'>
                    {/* Available On Section */}
                    <div className='space-y-2' >
                        <h1 className='font-bold text-2xl mb-2'>Available on</h1>
                        <ul className='flex space-x-5 space-y-3'>
                        <li>
                            <a href="https://www.linkedin.com/in/sneha-kumari-2792442b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                            <FaLinkedin className='text-3xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Snehaa-kumari" target="_blank">
                            <FaGithub className='text-3xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/Sneha_K_02" target="_blank">
                            <FaTelegram className='text-3xl cursor-pointer' />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/" target="_blank">
                            <FaFacebook className='text-3xl cursor-pointer' />
                            </a>
                        </li>
                        </ul>
                    </div>

                    {/* Download CV Button */}
                    <div className='text-center md:text-right'>
                        <h1 className='font-bold text-xl mb-2'>Download Resume</h1>
                        <a href="/snehaCV.pdf" download className="inline-block bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Click Here
                        </a>
                    </div>
                </div>

            
            </div>

            <div className='md:w-1/2 md:ml-48 md:mt-16 mt-4 order-1'>
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
            </div>
          </div>
          <br /><br /><br />
          <hr/>
        </div>
    </>
  )
}
