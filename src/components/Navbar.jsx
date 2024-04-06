import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles.js";
import { navLinks } from "../constants/constants.js";
import { logo, menu, close } from "../assets/index.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowSlider(true);
      } else {
        setShowSlider(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 ${
        showSlider ? "bg-gray-800 py-[.5rem]" : "bg-transparent "
      } transition ease-in-out duration-500`}
    >
      <div
        className={`w-full flex justify-between items-center max-w-7xl mx-auto`}
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[60px] h-[60px] object-cover"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Fardin Islam Abir &nbsp;
            <span className="sm:block hidden">| &nbsp;Web Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white scale-110"
                  : "text-secondary"
              } hover:text-white transition text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {/* <li>resume</li> */}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-5 my-2 min-w-[140px] min-h-full z-10 rounded-xl `}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
