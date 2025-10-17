import React, { useState, useEffect } from "react";
import logo from "../../../public/logo.png";
import { IoLogoGithub } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router";
import { IoMdHome } from "react-icons/io";
import { FaAppStore } from "react-icons/fa";
import { MdInstallMobile } from "react-icons/md";

const Navbar = () => {
  const [activePath, setActivePath] = useState("/");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const handleClick = (path, e) => {
    e.preventDefault();
    setActivePath(path);
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 200);
  };

  const navLinkClasses = (path) =>
    `flex items-center gap-1 px-4 py-2 mx-1 rounded hover:bg-gradient-to-r 
     hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white transition duration-300 ${
       activePath === path
         ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
         : ""
     }`;

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-16 h-16 border-4 border-t-purple-600 border-r-purple-400 border-b-purple-200 border-l-purple-400 rounded-full animate-spin"></div>
        </div>
      )}
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
              <NavLink
                to="/"
                className={navLinkClasses("/")}
                onClick={(e) => handleClick("/", e)}
              >
                Home
              </NavLink>
              <NavLink
                to="/apps"
                className={navLinkClasses("/apps")}
                onClick={(e) => handleClick("/apps", e)}
              >
                App
              </NavLink>
              <NavLink
                to="/installedApp"
                className={navLinkClasses("/installedApp")}
                onClick={(e) => handleClick("/installedApp", e)}
              >
                Installation
              </NavLink>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img src={logo} className="h-8" alt="Logo" />
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
              onClick={(e) => handleClick("/", e)}
            >
              Hero.IO
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={navLinkClasses("/")}
              onClick={(e) => handleClick("/", e)}
            >
              <IoMdHome />
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={navLinkClasses("/apps")}
              onClick={(e) => handleClick("/apps", e)}
            >
              <FaAppStore />
              App
            </NavLink>
            <NavLink
              to="/installedApp"
              className={navLinkClasses("/installedApp")}
              onClick={(e) => handleClick("/installedApp", e)}
            >
              <MdInstallMobile />
              Installation
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/shahrufhasan"
            target="_blank"
            className="btn flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:text-black transition duration-300"
          >
            <IoLogoGithub className="w-5 h-5" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
