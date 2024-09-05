import React, { useState, useEffect, useRef } from "react";
import image from "../assets/MyImage.jpg";
import bannerBackground from "../assets/banner1.jpg";
import Typed from "typed.js";

const Banner = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Java Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center pt-10 pb-10 bg-cover bg-center"
    >
      {/* Text Section */}
      <div className="w-full max-w-4xl px-4 text-center text-white">
        <h3 className="text-xl md:text-2xl font-semibold">Hi, I am</h3>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          Vijay Dnyaneshwar Jadhav
        </h1>
        <h2 className="text-xl md:text-2xl mt-2">
          I am <span className="font-bold underline" ref={el}></span>
        </h2>
        <p className="mt-4 text-sm md:text-base">
          As a passionate and dedicated Java full stack web developer, I have
          gained a strong foundation in both backend and frontend development
          through hands-on projects and academic training. My core skills
          include Core Java, J2EE, and the Spring Framework (including Spring
          MVC, Spring Boot, and Spring DAO) for building scalable and efficient
          applications. I am also proficient in Hibernate (ORM) and Data JPA for
          database management, with extensive experience using MySQL.
        </p>
        {showFullContent && (
          <>
            <p className="mt-4 text-sm md:text-base">
              On the frontend, I have experience with HTML, CSS, Tailwind CSS, and
              JavaScript, allowing me to create visually appealing and responsive
              user interfaces. I have worked with ReactJS and State Management to
              develop dynamic and interactive web applications. Additionally, I am
              well-versed in building and consuming REST APIs for seamless
              communication between the frontend and backend.
            </p>
            <p className="mt-4 text-sm md:text-base">
              Although I am a fresher, I am eager to apply my skills in real-world
              scenarios and contribute to building innovative software solutions.
            </p>
          </>
        )}
        {!showFullContent && (
          <button
            onClick={() => setShowFullContent(true)}
            className="mt-4 px-3 py-2 bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-md shadow  text-sm md:text-xl"
          >
            Read More
          </button>
        )}
        {showFullContent && (
          <button
            onClick={() => setShowFullContent(false)}
            className="mt-4 px-3 py-2 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md shadow text-white text-lg md:text-xl"
          >
            Read Less
          </button>
        )}
        <div className="icons_container space-x-3 md:space-x-5 mt-4 flex justify-center">
          <a className="bg-gray-800 cursor-pointer border hover:bg-orange-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
            <i className="fa-brands text-lg md:text-2xl fa-square-facebook"></i>
          </a>
          <a className="bg-gray-800 cursor-pointer border hover:bg-orange-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
            <i className="fa-brands text-lg md:text-2xl fa-square-instagram"></i>
          </a>
          <a
            href="https://github.com/vijayjadhav75"
            className="bg-gray-800 cursor-pointer border hover:bg-orange-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
          >
            <i className="fa-brands text-lg md:text-2xl fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-jadhav-243037320"
            className="bg-gray-800 cursor-pointer border hover:bg-orange-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
          >
            <i className="fa-brands text-lg md:text-2xl fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 flex justify-center">
        <img
          style={{ borderRadius: "50%" }}
          className="w-40 h-40 md:w-56 md:h-56 object-cover"
          src={image}
          alt="Vijay Jadhav"
        />
      </div>
    </div>
  );
};

export default Banner;
