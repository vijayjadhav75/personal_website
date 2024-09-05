import bannerBackground from "../assets/banner1.jpg";

const Expertise = () => {
  return (
    <>
      <div className="">
        <h1 className="text-4xl font-bold underline text-center">My Expertise</h1>
        {/* box section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="box-container items-center text-white flex flex-col lg:flex-row mt-10 p-6"
        >
          {/* text container */}
          <div className="flex justify-center w-full lg:w-1/2 mb-5 lg:mb-0">
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-3xl font-bold">I love these technologies</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                animi, autem quod itaque delectus labore voluptatum laudantium
                libero, blanditiis aut tempore praesentium facere reiciendis
                distinctio, exercitationem unde? Quod, voluptatem veniam!
              </p>
              <button className="px-3 py-2 rounded-md shadow-md bg-orange-500 hover:bg-orange-400">
                Hire Me
              </button>
            </div>
          </div>

          {/* skills container */}
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="flex justify-center w-full flex-wrap gap-3">
              {[
                "Core Java",
                "J2EE",
                "Hibernate [ORM tool]",
                "Spring Framework",
                "Spring DAO [Spring JDBC]",
                "Spring MVC",
                "Spring Boot Framework",
                "Rest API",
                "Data JPA",
                "HTML",
                "CSS",
                "Javascript",
                "Tailwind CSS",
                "ReactJS",
                "State Management",
              ].map((skill, index) => (
                <p
                  key={index}
                  className="bg-gray-700 text-sm lg:text-base w-fit px-3 py-2 rounded-md hover:bg-orange-500 cursor-pointer"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
