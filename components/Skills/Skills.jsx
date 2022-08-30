import React from "react";
import Image from "next/image";
import { TECH_STACK, TEXTS } from "../../constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {TEXTS.TECHSTACK}
        </p>
        <h2 className="py-4">{TEXTS.CAN_DO}</h2>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {TECH_STACK.map((skill) => (
            <div
              key={skill.title}
              className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105"
            >
              <div className="grid items-center justify-center">
                <div className="m-auto">
                  <Image src={skill.logo} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
