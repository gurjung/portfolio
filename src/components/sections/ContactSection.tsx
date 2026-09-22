"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../../public/assets/contact.jpg";
import { siteConfig } from "@/config";
import { useContactForm } from "@/hooks";
import { SectionHeading, SocialIconLink } from "@/components/common";

export function ContactSection() {
  const { formRef, isSubmitting, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="max-w-[1240px] mx-auto w-full">
        <SectionHeading eyebrow="Contact" title="Get In Touch" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left info card */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-6 bg-primary flex flex-col justify-between">
            <div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  className="rounded-xl hover:scale-105 transition-transform duration-300 w-full h-auto object-cover"
                  src={ContactImg}
                  alt={`Contact ${siteConfig.name}`}
                  priority={false}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-tertiary">
                  {siteConfig.name}
                </h3>
                <p className="text-secondary font-medium text-base mt-1">
                  {siteConfig.role}
                </p>
                <p className="py-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {siteConfig.availability}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-300 mt-6">
              <p className="uppercase tracking-widest text-secondary text-sm font-semibold mb-4">
                Connect With Me
              </p>
              <div className="flex items-center space-x-6">
                <SocialIconLink
                  href={siteConfig.links.linkedin}
                  ariaLabel="LinkedIn Profile"
                  icon={<FaLinkedinIn size={20} />}
                  isExternal
                  size="md"
                />
                <SocialIconLink
                  href={siteConfig.links.github}
                  ariaLabel="GitHub Profile"
                  icon={<FaGithub size={20} />}
                  isExternal
                  size="md"
                />
                <SocialIconLink
                  href={siteConfig.links.resume}
                  ariaLabel="View Resume"
                  icon={<BsFillPersonLinesFill size={20} />}
                  isExternal
                  size="md"
                />
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-6 sm:p-8 bg-primary">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col">
                  <label
                    htmlFor="user_name"
                    className="uppercase text-xs font-semibold text-gray-600 pb-2"
                  >
                    Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="border-2 rounded-lg p-3 border-gray-300 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="user_email"
                    className="uppercase text-xs font-semibold text-gray-600 pb-2"
                  >
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className="border-2 rounded-lg p-3 border-gray-300 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="user_subject"
                  className="uppercase text-xs font-semibold text-gray-600 pb-2"
                >
                  Subject
                </label>
                <input
                  id="user_subject"
                  name="user_subject"
                  type="text"
                  required
                  placeholder="Subject of inquiry"
                  className="border-2 rounded-lg p-3 border-gray-300 focus:border-secondary focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="uppercase text-xs font-semibold text-gray-600 pb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  className="border-2 rounded-lg p-3 border-gray-300 focus:border-secondary focus:outline-none transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 text-white font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-gray-400 bg-gradient-to-r from-secondary to-[#709dff] hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-4 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center py-12">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 active:scale-95 duration-300 ease-in text-secondary hover:bg-white transition-all">
              <HiOutlineChevronDoubleUp size={28} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
