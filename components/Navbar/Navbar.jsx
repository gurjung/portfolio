import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TEXTS } from "../../constants";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <p className="text-[#5651e5]">{TEXTS.NAME}</p>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="navbar-menu-item">{TEXTS.NAVBAR.HOME}</li>
            </Link>
            <Link href="/skills">
              <li className="navbar-menu-item">{TEXTS.NAVBAR.SKILLS}</li>
            </Link>
            <Link href="/projects">
              <li className="navbar-menu-item">{TEXTS.NAVBAR.PROJECTS}</li>
            </Link>
            <Link href="/resume">
              <li className="navbar-menu-item">{TEXTS.NAVBAR.RESUME}</li>
            </Link>
            <Link href="/contact">
              <li className="navbar-menu-item">{TEXTS.NAVBAR.CONTACT}</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
          <div
            className={
              isNavOpen
                ? "fixed top-0 left-0 w-full h-screen md:hidden bg-black/70"
                : ""
            }
          >
            <div
              className={
                isNavOpen
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }
            >
              <div>
                <div className="flex items-center justify-between w-full">
                  <Link href="/">
                    <p className="text-[#5651e5]">{TEXTS.NAME}</p>
                  </Link>
                  <div
                    onClick={handleNav}
                    className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="my-4 border-b border-gray-300">
                  <p className="w-[85%] md:w-[90%] py-3">{TEXTS.INTRO}</p>
                </div>
              </div>
              <div className="flex flex-col py-3">
                <ul className="uppercase">
                  <Link href="/">
                    <li className="sidebar-menu-item">{TEXTS.NAVBAR.HOME}</li>
                  </Link>
                  <Link href="/skills">
                    <li className="sidebar-menu-item">{TEXTS.NAVBAR.SKILLS}</li>
                  </Link>
                  <Link href="/projects">
                    <li className="sidebar-menu-item">{TEXTS.NAVBAR.PROJECTS}</li>
                  </Link>
                  <Link href="/resume">
                    <li className="sidebar-menu-item">{TEXTS.NAVBAR.RESUME}</li>
                  </Link>
                  <Link href="/contact">
                    <li className="sidebar-menu-item">{TEXTS.NAVBAR.CONTACT}</li>
                  </Link>
                </ul>
                <div className="pt-14">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    {TEXTS.CONNECT}
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <a
                      href="https://www.linkedin.com/in/gurjung-singh-945731219"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="sidebar-icons">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/gurjung"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="sidebar-icons">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="/contact">
                      <div className="sidebar-icons">
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href="/resume">
                      <div className="sidebar-icons">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
