import React from "react";
import { Syne, Montserrat } from "next/font/google";
const syne = Syne({ weight: "variable", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });

const About = () => {
  return (
    <section
      className="h-screen w-full bg-[#D1EC93] border-b-4 border-b-gray-800 flex flex-col"
      id="about"
    >
      <div
        className={`${syne.className} font-extrabold text-6xl w-full text-end p-8 mr-5 border-b-4 border-b-gray-800`}
      >
        Who Am I?
      </div>
      <div className="flex flex-row h-full">
        <div
          className={`${syne.className} font-extrabold text-8xl w-[45%] p-8 border-r-4 border-r-gray-800 h-full flex items-center`}
        >
          Always trying to go above and beyond my Limits.
        </div>
        <div
          className={`${montserrat.className} w-[55%] text-3xl font-medium p-12 h-full flex items-center`}
        >
          Hi, I am Ayush Bohra, an 18 years young aspiring Web Designer and Full
          Stack Developer. I am currently doing Bachelor&apos;s of Engineering
          in Artificial Intelligence & Data Science at VES Institute of Technology.
          <br />
          <br /> The word “programming” first entered my ears back in 2019 and
          got me instantly hooked into web development. I don&apos;t have a
          particular interest in anything, I just like to do something, anything
          that keeps me engaged.
          <br />
          <br /> I love to read books, sketch, travel and meet new people!
        </div>
      </div>
    </section>
  );
};

export default About;
