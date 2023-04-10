import React from "react";
import { Syne, Montserrat } from "next/font/google";
import Image from "next/image";
const syne = Syne({ weight: "variable", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });

const Skills = () => {
  const imageArr = [
    {
      name: "Figma",
      image: "/logos/figma.png",
    },
    {
      name: "Canva",
      image: "/logos/canva.png",
    },
    {
      name: "NodeJS",
      image: "/logos/nodejs.png",
    },
    {
      name: "Nextjs",
      image: "/logos/nextjs.png",
    },
    {
      name: "ReactJS",
      image: "/logos/reactjs.png",
    },
    {
      name: "Sass",
      image: "/logos/sass.png",
    },
    {
      name: "TailwindCSS",
      image: "/logos/tailwindcss.png",
    },
    {
      name: "Firebase",
      image: "/logos/firebase.png",
    },
    {
      name: "MongoDB",
      image: "/logos/mongodb.png",
    },
    {
      name: "Python",
      image: "/logos/python.png",
    },
    {
      name: "SKLearn",
      image: "/logos/sklearn.png",
    },
    {
      name: "GitHub",
      image: "/logos/github.png",
    },
  ];
  return (
    <section
      className="min-h-screen w-full bg-[#F6B18E] border-b-4 border-b-gray-800"
      id="skills"
    >
      <div
        className={`${syne.className} font-extrabold text-6xl w-full p-8 mr-5 border-b-4 border-b-gray-800`}
      >
        What can I do?
      </div>
      <div className="flex flex-wrap p-12 w-full justify-center pt-28">
        {imageArr.map((skill) => {
          return (
            <div
              key={skill.name}
              className="p-8 bg-[#D1EC93] m-3 mb-28 border-4 border-gray-800 rounded-3xl flex-[1_0_21%] text-center flex items-center flex-col justify-end relative  h-[200px] shadow-[7px_4px_0px_#0c0c0c]"
            >
              <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 p-8 aspect-square bg-[#8AD6FF] flex items-center justify-center rounded-full border-4 border-gray-800 logoBg">
                <Image
                  src={skill.image}
                  height={100}
                  width={100}
                  alt={skill.name}
                  className="w-full h-auto"
                />
              </div>
              <p className={`${syne.className} font-extrabold text-3xl`}>
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
