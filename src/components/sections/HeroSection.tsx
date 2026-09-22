import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { siteConfig } from "@/config";
import { SocialIconLink } from "@/components/common";

export function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen text-center flex items-center pt-20">
      <div className="max-w-[1240px] w-full mx-auto p-4 flex justify-center items-center">
        <div className="max-w-[800px]">
          <p className="text-xs sm:text-sm tracking-widest text-gray-600 uppercase font-semibold">
            {siteConfig.tagline}
          </p>
          <h1 className="py-4 text-tertiary">
            Hi, I&apos;m{" "}
            <span className="text-secondary">{siteConfig.name.split(" ")[0]}</span>
          </h1>
          <h2 className="py-2 text-2xl sm:text-4xl text-gray-700 font-semibold">
            {siteConfig.headline}
          </h2>
          <p className="py-4 text-gray-600 text-base sm:text-lg max-w-[85%] sm:max-w-[75%] mx-auto leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="flex items-center justify-between max-w-[320px] mx-auto py-6">
            <SocialIconLink
              href={siteConfig.links.linkedin}
              ariaLabel="LinkedIn Profile"
              icon={<FaLinkedinIn size={22} />}
              isExternal
            />
            <SocialIconLink
              href={siteConfig.links.github}
              ariaLabel="GitHub Profile"
              icon={<FaGithub size={22} />}
              isExternal
            />
            <SocialIconLink
              href="/#contact"
              ariaLabel="Contact Me"
              icon={<AiOutlineMail size={22} />}
            />
            <SocialIconLink
              href={siteConfig.links.resume}
              ariaLabel="View Resume"
              icon={<BsFillPersonLinesFill size={22} />}
              isExternal
            />
          </div>
        </div>
      </div>
    </section>
  );
}
