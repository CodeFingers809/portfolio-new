import React from "react";
import { Syne, Montserrat } from "next/font/google";
const syne = Syne({ weight: "variable", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });

const Contact = () => {
  return (
    <section
      className="h-screen w-full bg-indigo-400 flex flex-col"
      id="contact"
    >
      <div
        className={`${syne.className} font-extrabold text-6xl w-full p-8 mr-5 border-b-4 border-b-gray-800`}
      >
        Let&apos;s Connect!
      </div>
      <div className="h-full flex flex-row box-border">
        <div className="h-full w-[55%]">
          <div className="p-14 pb-0">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className={`p-auto px-8 border-4 border-gray-800 shadow-[7px_4px_0px_#0c0c0c] rounded-full w-full placeholder:text-3xl placeholder:text-gray-600 h-24 ${syne.className} placeholder:font-bold text-3xl text-gray-800 font-semibold`}
            />
          </div>
          <div className="p-14 pb-0">
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone No."
              className={`p-auto px-8 border-4 border-gray-800 shadow-[7px_4px_0px_#0c0c0c] rounded-full w-full placeholder:text-3xl placeholder:text-gray-600 h-24 ${syne.className} placeholder:font-bold text-3xl text-gray-800 font-semibold`}
            />
          </div>
          <div className="p-14 pb-0">
            <textarea
              name=""
              id=""
              placeholder="Message"
              className={`p-4 px-8 border-4 border-gray-800 shadow-[7px_4px_0px_#0c0c0c] rounded-[48px] w-full placeholder:text-3xl placeholder:text-gray-500 h-48 ${syne.className} placeholder:font-bold text-xl text-gray-800 font-semibold`}
            />
          </div>
          <div className="p-14 pb-0">
            <input
              type="submit"
              name=""
              id=""
              placeholder="Message"
              className={`p-4 px-8 bg-[#95C623] border-4 border-gray-800 shadow-[7px_4px_0px_#0c0c0c] rounded-[48px] w-full h-20 ${syne.className} text-4xl text-gray-800 font-bold cursor-pointer circleInteract`}
            />
          </div>
        </div>
        <div
          className={`${syne.className} text-8xl font-extrabold w-[45%] border-l-4 border-l-gray-800 p-8 h-full flex items-center`}
        >
          I&apos;d be more than happy to work with you!
        </div>
      </div>
    </section>
  );
};

export default Contact;
