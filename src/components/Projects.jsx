import React from "react";

const projects = [
  {
    title: "Student Management System",
    description: "Developed a robust application with Admin and Student modules using React.js, Spring Boot, and PostgreSQL. Admins can manage students, subjects, and marks, while students can view their profiles and analyze performance through interactive pie charts.",
    technologies: "React.js, Spring Boot, PostgreSQL",
  },
  {
    title: "Online Noticeboard",
    description: "Developed an application with an Admin Dashboard for managing notices and user categories, and a User Dashboard for registration, profile management, and viewing notices. Utilized HTML, CSS, Bootstrap, React, and Material-UI for interactivity, with Core Java, Spring JDBC, Spring Core, Spring MVC, and MySQL for the backend.",
    technologies: "HTML, CSS, Bootstrap, React, Material-UI, Core Java, Spring JDBC, Spring Core, Spring MVC, MySQL",
  },
  {
    title: "Hotel Management System",
    description: "Developed an application with an Admin Module for managing hotels and cities, and a User Module for registration, profile management, and reviews. Utilized JSP, HTML, and CSS for the front end, with Servlets, Core Java, and JDBC for the backend, and MySQL for database management.",
    technologies: "JSP, HTML, CSS, Servlets, Core Java, JDBC, MySQL",
  },
];

const Projects = () => {
  return (
    <div className="p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="font-bold text-gray-800">Technologies:</p>
            <p className="text-gray-600">{project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
