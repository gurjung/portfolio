import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import { PROJECTS_DATA, TEXTS } from "../../constants";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-secondary">
          {TEXTS.PROJECT_TITLE}
        </p>
        <h2 className="py-4">{TEXTS.HAVE_BUILT}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.title}
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-secondary to-[#709dff]"
            >
              <ProjectItem
                title={project.title}
                backgroundImg={project.img}
                projectUrl={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
