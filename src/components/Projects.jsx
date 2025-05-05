import React from 'react';

export default function Projects() {
  const projectData = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio to showcase my skills and projects. Built using HTML, CSS, and JavaScript with responsive design.',
      tech: ['React', 'Tailwind CSS'],
      link: ""
    },
    {
      title: 'Property Rental System',
      description:
        'A web app for managing property listings and rentals using JSP, Servlets, and MySQL. Includes full CRUD operations.',
      tech: ['JSP', 'Servlet', 'MySQL'],
      link: ""
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
