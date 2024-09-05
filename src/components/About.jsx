import { useState } from "react";
import image from "../assets/MyImage.jpg";

const About = () => {
  const [data, setData] = useState({
    image: image,
    title: "Java Full Stack Developer",
    desc1: `As a Java full stack developer, I build robust backend systems using Core Java, J2EE, Spring Framework, and Hibernate, with MySQL for efficient database management. I focus on creating scalable and secure applications with seamless data handling through Spring DAO and Data JPA.`,
    desc2: `On the frontend, I employ HTML, CSS, JavaScript, and ReactJS to develop dynamic and responsive user interfaces. My expertise in REST API development ensures smooth and effective communication between the client and server applications.`,
    actionButton: {
      title: "Read More...",
      link: "/readmore",
    },
  });

  return (
    <>
      <div className="main-container py-10 bg-gray-100">
        <h1 className="text-4xl pb-10 font-bold text-center underline">
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* image container */}
          <div className="w-full flex justify-center lg:w-1/2">
            <img
              className="mt-5 w-2/3 sm:w-1/2 lg:w-3/4 rounded-full object-cover"
              src={data.image}
              alt="vijay jadhav"
            />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center lg:w-1/2 mt-10 lg:mt-0">
            <div className="space-y-3 px-5 lg:px-0 w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold">{data.title}</h1>
              <p className="text-sm sm:text-base">{data.desc1}</p>
              <p className="text-sm sm:text-base">{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 hover:bg-orange-400 rounded-md shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
