import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../public/assets/contact.jpg";
import { TEXTS } from "../../constants";

const Contact = () => {
  const formRef = useRef();
  const serviceID = process.env.NEXT_PUBLIC_FORM_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_FORM_TEMPLATE_ID;
  // const publicKey = process.env.NEXT_PUBLIC_FORM_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, formRef.current, "Gfu_INqQ9eCpWU25M").then(
      (result) => {
        console.log(result);
        toast.success(TEXTS.CONTACT.FORM.SUCCESS);
      },
      (error) => {
        console.log(error.text);
        toast.error(TEXTS.CONTACT.FORM.ERROR);
      }
    );
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {TEXTS.CONTACT.TITLE}
        </p>
        <h2 className="py-4">{TEXTS.CONTACT.IN_TOUCH}</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">{TEXTS.NAME}</h2>
                <p>{TEXTS.DEV}</p>
                <p className="py-4">{TEXTS.CONTACT.AVAILABILITY}</p>
              </div>
              <div>
                <p className="uppercase pt-8">{TEXTS.CONTACT.CONNECT}</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href={TEXTS.SOCIAL.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href={TEXTS.SOCIAL.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href={TEXTS.SOCIAL.RESUME}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {TEXTS.CONTACT.FORM.NAME}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {TEXTS.CONTACT.FORM.EMAIL}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {TEXTS.CONTACT.FORM.SUBJECT}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {TEXTS.CONTACT.FORM.MESSAGE}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  {TEXTS.CONTACT.FORM.SUBMIT}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
