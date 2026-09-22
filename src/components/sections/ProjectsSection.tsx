import Image from "next/image";
import { PROJECTS_DATA } from "@/data";
import { SectionHeading } from "@/components/common";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="What I've Built"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.title}
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-secondary to-[#709dff] overflow-hidden transition-all duration-300"
            >
              <Image
                src={project.img}
                alt={project.title}
                className="rounded-xl group-hover:opacity-10 transition-opacity duration-300 w-full h-auto object-cover"
              />

              <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] p-4 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white tracking-wider mb-2">
                  {project.title}
                </h3>
                {project.techStack && (
                  <p className="pb-4 pt-1 text-white/90 text-sm font-medium">
                    {project.techStack.join(" • ")}
                  </p>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-lg bg-white text-gray-700 font-bold text-base hover:bg-gray-100 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md inline-block"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
