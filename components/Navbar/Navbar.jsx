import React from "react";
import { TEXTS } from "../../constants";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex items-center justify-between w-full h-full px-2 text-blue-600 2xl:px-16">
        {TEXTS.NAME}
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
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
