import { useState } from "react";

const Services = () => {
  return (
    <>
      <div className="main-container py-10">
        <h1 className="text-4xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-6 flex mt-10">
          <div className="service1 cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i class="fa-solid text-5xl fa-server"></i>
            <h1 className="text-3xl">Web Developement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              vero incidunt vitae assumenda cupiditate? Commodi quasi deleniti
              quis quas nesciunt?
            </p>
            <button className="px-3 shadow-lg py-2 bg-orange-500 hover:bg-orange-400 rounded-md">
              Check
            </button>
          </div>
          <div className="service2 cursor-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center rounded-xl space-y-3">
            <i class="fa-brands text-5xl fa-react"></i>
            <h1 className="text-3xl">Frontend Developement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              vero incidunt vitae assumenda cupiditate? Commodi quasi deleniti
              quis quas nesciunt?
            </p>
            <button className="px-3 shadow-lg py-2 bg-orange-500 hover:bg-orange-400 rounded-md">
              Check
            </button>
          </div>
          <div className="service3 cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-3">
            <i class="fa-brands text-5xl fa-java"></i>
            <h1 className="text-3xl">Backend Developement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              vero incidunt vitae assumenda cupiditate? Commodi quasi deleniti
              quis quas nesciunt?
            </p>
            <button className="px-3 shadow-lg py-2 bg-orange-500 hover:bg-orange-400 rounded-md">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
