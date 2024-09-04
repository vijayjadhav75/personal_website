import { useState } from "react";
import image from "../assets/MyImage.jpg";
const About = () => {
  const [data, setData] = useState({
    image: image,
    title: "Java Full Stack Developer",
    desc1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus voluptate minima est tempora odio porro eius blanditiis
              ipsum vitae nihil.`,
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptate sunt blanditiis voluptatum, magni soluta
              excepturi temporibus non aliquid incidunt beatae alias
              perspiciatis sapiente id. Iure perferendis rerum illum quod!`,
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
        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              style={{ borderRadius: "100%" }}
              className="mt-5 w-1/2"
              src={data.image}
              alt="vijay jadhav"
            />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center">
            <div className="space-y-3 w-2/3">
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 hover:bg-orange-400 py-2 rounded-md shadow-lg">
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
