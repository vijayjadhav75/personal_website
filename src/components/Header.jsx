import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandName, setBrandName] = useState("Vijay Jadhav");
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "/", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skills", link: "/skills", id: 3 },
    { title: "Projects", link: "/projects", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ]);
  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire_me",
  });

  return (
    <>
      <div className="h-20 flex items-center justify-between px-4 sm:px-6 lg:px-16 bg-gray-100 border-b">
        {/* Brand logo */}
        <div>
          <h1 className="text-3xl font-bold">{brandName}</h1>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-gray-500 w-6 h-6 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu Links and Action Button */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <div className="flex flex-row lg:space-x-6">
            {menuLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="py-2 px-4 text-center lg:text-left hover:text-orange-600"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <Link
            to={actionButton.link}
            className="px-3 py-2 bg-orange-500 rounded-md hover:bg-orange-400 shadow text-1xl font-bold"
          >
            {actionButton.title}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Links and Action Button */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-100 border-b px-4`}
      >
        <div className="flex flex-col space-y-4 py-4">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="block py-2 text-center text-gray-700 hover:text-orange-600"
            >
              {link.title}
            </Link>
          ))}
          <Link
            to={actionButton.link}
            className="block px-3 py-2 bg-orange-500 rounded-md hover:bg-orange-400 shadow text-1xl font-bold text-center"
          >
            {actionButton.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
