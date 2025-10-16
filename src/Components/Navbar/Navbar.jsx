import React, { useState, useEffect } from "react";
import logo from "../../../public/logo.png";
import { IoLogoGithub } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaAppStore } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const handleClick = (path) => {
    setActivePath(path);
  };

  const navLinkClasses = (path) =>
    `flex items-center gap-1 px-4 py-2 mx-1 rounded hover:bg-gradient-to-r 
     hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white transition duration-300 ${
       activePath === path
         ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
         : ""
     }`;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">
              <a
                className={navLinkClasses("/")}
                onClick={() => handleClick("/")}
              >
                Home
              </a>
            </NavLink>
            <NavLink to="/apps">
              <a
                className={navLinkClasses("/apps")}
                onClick={() => handleClick("/apps")}
              >
                App
              </a>
            </NavLink>
            <NavLink to="/installedApp">
              <a
                className={navLinkClasses("/installedApp")}
                onClick={() => handleClick("/installedApp")}
              >
                Installation
              </a>
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <img src={logo} className="h-8" alt="Logo" />
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r
          from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
            onClick={() => handleClick("/")}
          >
            Hero.IO
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">
            <a className={navLinkClasses("/")} onClick={() => handleClick("/")}>
              <IoMdHome />
              Home
            </a>
          </NavLink>
          <NavLink to="/apps">
            <a
              className={navLinkClasses("/apps")}
              onClick={() => handleClick("/apps")}
            >
              <FaAppStore />
              App
            </a>
          </NavLink>
          <NavLink to="/installedApp">
            <a
              className={navLinkClasses("/installedApp")}
              onClick={() => handleClick("/installedApp")}
            >
              Installation
            </a>
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/shahrufhasan"
          target="_blank"
          className="btn flex items-center gap-2 bg-gradient-to-r
           from-[#632EE3] to-[#9F62F2] text-white
            hover:text-black transition duration-300"
        >
          <IoLogoGithub className="w-5 h-5" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
