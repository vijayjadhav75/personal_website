import React, { act, useState } from "react";
const Header = () => {
  const [brandName, setBrandName] = useState("Vijay Jadhav");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio ",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire_me",
  });
  return (
    <>
      <div className="h-20 items-center border main flex justify-between px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-3xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
          {/* menu links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
        <div>
          {/* button */}
          <a href={actionButton.link} className="px-3 py-2 bg-orange-500 rounded-md hover:bg-orange-400 shadow text-1xl font-bold">
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
