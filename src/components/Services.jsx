import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Development",
      description:
        "Experienced in web development, specializing in HTML, CSS, Tailwind CSS, JavaScript, and ReactJS. Proficient in creating responsive, dynamic user interfaces and integrating REST APIs for seamless functionality.",
      icon: "fa-solid fa-server",
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Proficient in frontend development with strong skills in HTML, CSS, Tailwind CSS, and JavaScript. Experienced in crafting responsive, user-friendly interfaces and building interactive web applications using ReactJS.",
      icon: "fa-brands fa-react",
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "Skilled in backend development with Java, Spring Framework, Hibernate, and MySQL. Expertise in building scalable, secure applications and managing data efficiently with robust REST API integration and service-oriented architecture.",
      icon: "fa-brands fa-java",
    },
  ]);

  return (
    <>
      <div className="main-container py-10">
        <h1 className="text-4xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3"
            >
              <i className={`text-5xl ${service.icon}`}></i>
              <h1 className="text-3xl">{service.title}</h1>
              <p>{service.description}</p>
              <button className="px-3 shadow-lg py-2 bg-orange-500 hover:bg-orange-400 rounded-md">
                Check
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
