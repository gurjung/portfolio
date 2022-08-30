import Image from "next/image";
import React from "react";
import { TEXTS } from "../../constants";
const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <>
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            {TEXTS.MORE_INFO}
          </p>
        </a>
      </div>
    </>
  );
};

export default ProjectItem;
