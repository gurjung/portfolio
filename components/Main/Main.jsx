import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TEXTS } from "../../constants";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            {TEXTS.INTRO.TITLE}
          </p>
          <h1 className="py-4 text-gray-700">{TEXTS.INTRO.SUBTITLE}</h1>
          <h1 className="py-2 text-gray-700">{TEXTS.INTRO.DESCRIPTION1}</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            {TEXTS.INTRO.DESCRIPTION2}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/gurjung-singh-945731219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/gurjung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href={TEXTS.SOCIAL.RESUME}>
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
