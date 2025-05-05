import React from 'react';
import react from '../../public/images/reactjs.png';
import html from "../../public/images/html.png";
import css from '../../public/images/css.jpg';
import express from "../../public/images/express.png";
import java from '../../public/images/java.png';
import javascript from "../../public/images/javascript.png";
import mongodb from '../../public/images/mongodb.jpg';
import oracle from '../../public/images/oracle.png';
import python from "../../public/images/python.webp";
import node from '../../public/images/node.jpg';
import php from '../../public/images/php.png';

export default function About() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: python, name: "Python" },
    { id: 7, logo: mongodb, name: "MongoDB" },
    { id: 8, logo: express, name: "Express" },
    { id: 9, logo: react, name: "React" },
    { id:10, logo: node, name:"Node" },
    { id:11, logo: php, name:"Php" }

  ];

  return (
    <>
      <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-2'>About</h1>
        <p className='text-sm md:text-xl mb-10'>I'm a fresher web developer eager to learn, grow, and apply my skills in real-world projects.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center  rounded-full md:w-[150px] md:h-[150px] shadow-md p-2 cursor-pointer transition duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <img src={logo} className="w-[100px] md:w-[110px] rounded-full" alt={name} />
              <div className="mt-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {name}
              </div>
            </div>
          ))}
        </div>
        <br /><br />
        <hr />
      </div>
    </>
  );
}
