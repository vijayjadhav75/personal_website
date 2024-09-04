import React, { useEffect, useRef } from "react";
import image from "../assets/MyImage.jpg";
import bannerBackground from "../assets/banner1.jpg";
import Typed from "typed.js";
const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Full Stack Developer","Frontend Developer","Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          height: "auto",
        }}
        className="main_container flex items-center pt-10 pb-10"
      >
        {/* first text box */}
        <div className="w-full flex items-center justify-center text-white">
          {/* text */}
          <div className="w-2/3 space-y-2 mt-10">
            <h3 className=" text-2xl font-semibold">Hii, I am</h3>
            <h1 className="text-4xl font-bold">Vijay Dnyaneshwar Jadhav</h1>
            <h2 className="text-2xl">
              I am <span className="font-bold underline" ref={el}></span>
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              obcaecati laudantium illum quisquam. Expedita, mollitia.
              Necessitatibus veritatis ab temporibus amet repudiandae labore,
              officia delectus laboriosam accusamus nostrum expedita nisi maxime
              quis quasi deleniti mollitia! Inventore, voluptatem doloribus
              facilis delectus iure enim. Quibusdam, at. Sapiente dolores ut
              fuga, quo deserunt earum!
            </p>
            <div className="icons_container space-x-5 flex">
              <a className="bg-gray-800 cursor-pointer  border hover:bg-orange-600  w-12 h-12 rounded-full justify-center items-center">
                <i class="pt-1.5 pl-2.5 fa-brands text-3xl fa-square-facebook"></i>
              </a>
              <a className="bg-gray-800 cursor-pointer  border hover:bg-orange-600 w-12 h-12 rounded-full justify-center items-center">
                <i class="pt-1.5 pl-2.5 fa-brands text-3xl fa-square-instagram"></i>
              </a>
              <a
                href="https://github.com/vijayjadhav75"
                className="bg-gray-800 cursor-pointer  border hover:bg-orange-600 w-12 h-12 rounded-full justify-center items-center"
              >
                <i class="pt-1.5 pl-2.5 fa-brands text-3xl fa-square-github"></i>
              </a>
              <a
                href=" https://www.linkedin.com/in/vijay-jadhav-243037320"
                className="bg-gray-800 cursor-pointer  border hover:bg-orange-600 w-12 h-12 rounded-full justify-center items-center"
              >
                <i class="pt-1.5 pl-2.5 fa-brands text-3xl fa-linkedin"></i>
              </a>
            </div>
            <br />
            <a
              className="mt-3 px-3 py-2 bg-orange-500 hover:bg-orange-400 rounded-md shadow"
              href="/contact"
            >
              Contact me
            </a>
          </div>
        </div>
        {/* second Image box */}
        <div className="w-full flex justify-center">
          {/* image */}
          <img
            style={{ borderRadius: "100%" }}
            className="mt-5 w-1/2 h-1/2"
            src={image}
            alt="vijay jadhav"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;
