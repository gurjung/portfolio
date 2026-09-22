import Image from "next/image";
import { SKILLS_DATA } from "@/data";
import { SectionHeading } from "@/components/common";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full p-4 py-20 lg:min-h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center w-full">
        <SectionHeading
          eyebrow="Tech Stack"
          title="What I Can Do"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.title}
              className="p-6 bg-primary rounded-xl shadow-xl shadow-gray-300 hover:scale-105 transition-all duration-300 ease-in flex flex-col items-center justify-center group"
            >
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={skill.logo}
                  alt={skill.title}
                  width={64}
                  height={64}
                  className="object-contain group-hover:drop-shadow-md transition-all duration-300"
                />
              </div>
              <h3 className="text-base font-semibold text-tertiary tracking-wide text-center">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
