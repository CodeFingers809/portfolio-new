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
        <div className="h-full w-[55%]"></div>
        <div
          className={`${syne.className} text-8xl font-extrabold w-[45%] border-l-4 border-l-gray-800 p-8 h-full flex items-center`}
        >
          I&apos;d be more than happy to work with you!
        </div>
      </div>
      <div>
        <input type="text" name="" id="" placeholder="" />
      </div>
    </section>
  );
};

export default Contact;
