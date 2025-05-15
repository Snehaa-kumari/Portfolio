import React from 'react';

export default function Projects() {
  const projectData = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio to showcase my skills and projects. Built using HTML, CSS, and JavaScript with responsive design.',
      tech: ['React', 'Tailwind CSS'],
      link: "https://aquamarine-sunflower-a5668a.netlify.app/"
    },
    {
      title: 'Quiz App',
      description:
        'A dynamic web application that allows users to take quizzes on various topics. It features multiple-choice questions, a timer, and instant result display.',
      tech: ['Html', 'CSS', 'JavaScript'],
      link: "https://warm-stroopwafel-84f8f7.netlify.app/"
    },
    {
      title: 'Ecommerce Website',
      description:
        'Designed and developed a modern e-commerce website for clothing using HTML, CSS, and JavaScript. Features include a product catalog, cart functionality, responsive layout, blog, and contact sections.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: "https://extraordinary-taiyaki-c1434d.netlify.app/"
    },
    {
      title: 'BookScape - BookStore Website',
      description:
        'Developed a full-stack online bookstore using the MERN stack. BookScape allows users to browse books, view detailed descriptions, add items to the cart, and place orders. Includes user authentication, responsive design, and dynamic book management via MongoDB.',
      tech: ['React', 'Node Js', 'Express Js', 'MongoDB'],
      link: "https://github.com/Snehaa-kumari/BookScape"
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Built a real-time chat app using Node.js and Socket.io, enabling users to join rooms and exchange messages instantly.',
      tech: ['Node.js', 'Socket.io', 'JavaScript'],
      link: ""
    },
  ];

  return (
    <>
      <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 border transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-xl font-semibold text-red-700 mb-2">{project.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <div className="text-xs text-gray-600 italic">
                Tech used: {project.tech.join(', ')}
              </div>
              {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 inline-block">
                View project
              </a>
              )}


            </div>
          ))}
        </div>
        <br /> <br /><br />
        <hr />
      </div>
    </>
  );
}
