import bannerBackground from "../assets/banner1.jpg";
const Expertise = () => {
  return (
    <>
      <div className="">
        <h1 className="text-4xl font-bold underline text-center">
          My Expertise
        </h1>
        {/* box section */}
        <div style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            height: "auto",
          }} className="box-container items-center text-white flex mt-10">
          <div className="flex justify-center ">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4 mt-5 mb-5">
              <h1 className="text-3xl font-bold ">I love these technologies</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                animi, autem quod itaque delectus labore voluptatum laudantium
                libero, blanditiis aut tempore praesentium facere reiciendis
                distinctio, exercitationem unde? Quod, voluptatem veniam!
              </p>
              <button className="px-3 py-2 rounded-md shadow-md bg-orange-500 hover:bg-orange-400 ">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5 mb-5">
            {/* skills container */}
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">J2EE</p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Hibernate[ORM tool]
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Spring DAO[Spring JDBC]
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Sprinv MVC
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Sping Boot Framework
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">Rest API</p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">Data JPA</p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">HTML</p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">CSS</p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">ReactJS</p>
              <p className="bg-gray-700 w-fit px-3 mt-2 py-2 rounded-md hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expertise;
