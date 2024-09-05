import React, { useEffect, useRef } from "react";
import image from "../assets/MyImage.jpg";
import bannerBackground from "../assets/banner1.jpg";
import Typed from "typed.js";

const Banner = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          obcaecati laudantium illum quisquam. Expedita, mollitia.
          Necessitatibus veritatis ab temporibus amet repudiandae labore,
          officia delectus laboriosam accusamus nostrum expedita nisi maxime
          quis quasi deleniti mollitia! Inventore, voluptatem doloribus facilis
          delectus iure enim. Quibusdam, at. Sapiente dolores ut fuga, quo
          deserunt earum!
        </p>
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
        {/* <a
          className="mt-12 px-6 py-3 bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-md shadow text-white text-lg md:text-xl"
          href="/contact"
        >
          Contact me
        </a> */}
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
