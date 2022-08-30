import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TEXTS, NAVIGATION_DATA } from "../../constants";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isShadowVisible, setIsShadowVisible] = useState(false);
  const handleNav = () => setIsNavOpen(!isNavOpen);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setIsShadowVisible(true);
      } else {
        setIsShadowVisible(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        isShadowVisible
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-primary"
          : "fixed w-full h-20 z-[100] bg-primary"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <p className="text-secondary">{TEXTS.NAME}</p>
        <div>
          <ul className="hidden md:flex">
            {NAVIGATION_DATA.map((nav) => (
              <Link key={nav.title} href={nav.url}>
                <li className="navbar-menu-item">{nav.title}</li>
              </Link>
            ))}
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
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }
            >
              <div>
                <div className="flex items-center justify-between w-full">
                  <Link href="/">
                    <p className="text-secondary">{TEXTS.NAME}</p>
                  </Link>
                  <div
                    onClick={handleNav}
                    className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="my-4 border-b border-gray-300">
                  <p className="w-[85%] md:w-[90%] py-3">{TEXTS.INTRO.TITLE}</p>
                </div>
              </div>
              <div className="flex flex-col py-3">
                <ul className="uppercase">
                  {NAVIGATION_DATA.map((nav) => (
                    <Link key={nav.title} href={nav.url}>
                      <li
                        onClick={() => setIsNavOpen(false)}
                        className="sidebar-menu-item"
                      >
                        {nav.title}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="pt-14">
                  <p className="uppercase tracking-widest text-secondary">
                    {TEXTS.CONNECT}
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <a
                      href={TEXTS.SOCIAL.LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="sidebar-icons">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href={TEXTS.SOCIAL.GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="sidebar-icons">
                        <FaGithub />
                      </div>
                    </a>
                    <Link href="/#contact">
                      <div
                        className="sidebar-icons"
                        onClick={() => setIsNavOpen(false)}
                      >
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href={TEXTS.SOCIAL.RESUME}>
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
