import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS_DATA } from "@/data";
import { SectionHeading } from "@/components/common";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Work"
        description="A selection of frontend applications highlighting real-time state management, third-party API integrations, and responsive UI engineering."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col bg-surface rounded-2xl border border-border-subtle hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
          >
            {/* Project Image Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-surface-muted border-b border-border-subtle">
              <Image
                src={project.img}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Tech Stack Pills */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-surface-muted text-text-secondary border border-border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-medium text-xs sm:text-sm hover:bg-primary-hover active:scale-95 transition-all shadow-sm shadow-primary/20 cursor-pointer"
                >
                  <span>Live Demo</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-text-muted font-medium">
                  Deployed on Vercel
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
