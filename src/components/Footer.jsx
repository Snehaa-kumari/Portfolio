import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    
    <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <hr className='mb-8'/>
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <FaLinkedin size={24} />
            <FaTwitter size={24} />
              <FaGithub size={24} />
              <FaInstagram size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm md:text-xl">
                &copy; 2025 Sneha Kumari. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
