import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Student Management System",
      description:
        "Developed a robust application with Admin and Student modules using React.js, Spring Boot, and PostgreSQL. Admins can manage students, subjects, and marks, while students can view their profiles and analyze performance through interactive pie charts.",
      technologies: "React.js, Spring Boot, PostgreSQL",
    },
    {
      id: 2,
      title: "Online Noticeboard",
      description:
        "Developed an application with an Admin Dashboard for managing notices and user categories, and a User Dashboard for registration, profile management, and viewing notices. Utilized HTML, CSS, Bootstrap, React, and Material-UI for interactivity, with Core Java, Spring JDBC, Spring Core, Spring MVC, and MySQL for the backend.",
      technologies:
        "HTML, CSS, Bootstrap, React, Material-UI, Core Java, Spring JDBC, Spring Core, Spring MVC, MySQL",
    },
    {
      id: 3,
      title: "Hotel Management System",
      description:
        "Developed an application with an Admin Module for managing hotels and cities, and a User Module for registration, profile management, and reviews. Utilized JSP, HTML, and CSS for the front end, with Servlets, Core Java, and JDBC for the backend, and MySQL for database management.",
      technologies: "JSP, HTML, CSS, Servlets, Core Java, JDBC, MySQL",
    },
  ]);

  return (
    <div className="main-container py-10">
      <h1 className="text-4xl font-bold text-center underline">My Projects</h1>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3 transition duration-300"
          >
            <h2 className="text-3xl">{project.title}</h2>
            <p>{project.description}</p>
            <p className="font-bold text-gray-800">Technologies:</p>
            <p className="text-gray-600">{project.technologies}</p>
            <button className="px-3 shadow-lg py-2 bg-orange-500 hover:bg-orange-400 rounded-md">
              Check
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
    