import React, { useState } from "react";
import { Syne, Montserrat } from "next/font/google";
const syne = Syne({ weight: "variable", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Projects = () => {
  const [projectNum, setProjectNum] = useState(0);
  const projectList = [
    {
      name: "Terminal Portfolio",
      description:
        "This was my old portfolio designed like a terminal. One can type commands into the terminal and the terminal will give messages accordingly. The terminal had a lot of in-built commands and had a lot of features.",
      image: "/projects/terminal.png",
      width: 1920,
      height: 963,
      center: false,
      link: "https://terminalcf.vercel.app/",
    },
    {
      name: "DF2Mapper",
      description:
        "DF2Mapper is a tool that helps players to quickly find Mission Locations accross the map of Dead Frontier 2. This tool achieved an all time of 3000+ visitors a day due its ease of use. DF2Mapper was the most full-featured mapping tool in Dead Frontier 2 community.",
      image: "/projects/df2mapper.png",
      width: 1920,
      height: 963,
      center: false,
      link: "https://df2mapper.vercel.app/",
    },
    {
      name: "Delaney Solubility",
      description:
        "Delaney solubility is a computational model used to predict the aqueous solubility of organic compounds. It was developed by John Delaney in the late 1990s and is based on the analysis of a large database of experimental solubility data for diverse organic compounds.",
      image: "/projects/delaney.png",
      width: 787,
      height: 684,
      center: true,
      link: "https://github.com/CodeFingers809/delaney-solubility-model",
    },
    {
      name: "Webpokedex",
      description:
        "A quick and simple website to check pokemon stats.WebPokedex is a simple NextJs website styled using TailwindCSS. WebPokedex uses an external API called PokeAPI to display all Pokemons and search Pokemons and get their stats and types.",
      image: "/projects/pokedex.png",
      width: 1900,
      height: 963,
      center: true,
      link: "https://webpokedex.vercel.app/",
    },
    {
      name: "Spend Elon's Money",
      description:
        "Ever wondered how much money does Elon Musk really has? Well, this website let's you spend Elon Musk's money.",
      image: "/projects/elonsmoney.png",
      width: 1901,
      height: 960,
      center: true,
      link: "https://spendelonsmoney.vercel.app/",
    },
  ];
  const handlePrev = () => {
    if (projectNum === 0) {
      setProjectNum(4);
    } else {
      setProjectNum(projectNum - 1);
    }
  };
  const handleNext = () => {
    if (projectNum === 4) {
      setProjectNum(0);
    } else {
      setProjectNum(projectNum + 1);
    }
  };
  return (
    <section
      className="min-h-screen h-screen w-full bg-[#297373] border-b-4 border-b-gray-800 flex flex-col"
      id="projects"
    >
      <div
        className={`${syne.className} font-extrabold text-6xl w-full p-8 mr-5 border-b-4 border-b-gray-800`}
      >
        What can I make?
      </div>
      <div className="w-full h-full p-12 box-border">
        {/* browser window */}
        <div className="h-full w-full bg-white border-4 border-gray-800 flex flex-col shadow-[7px_4px_0px_#0c0c0c]">
          {/* navbar */}
          <div className="w-full h-12 border-b-4 border-b-gray-800 flex justify-between items-center">
            {/* x button */}
            <div className="h-full w-12 border-r-4 border-r-gray-800">
              <XMarkIcon className="h-11 w-11 text-gray-900" />
            </div>
            <span className={`${montserrat.className} text-2xl font-bold`}>
              Projects
            </span>
            {/* three circles */}
            <div className="flex flex-row space-x-4 h-full items-center mr-8">
              <div className="h-8 w-8 border-4 border-gray-800 rounded-full"></div>
              <div className="h-8 w-8 border-4 border-gray-800 rounded-full"></div>
              <div className="h-8 w-8 border-4 border-gray-800 rounded-full"></div>
            </div>
          </div>
          {/* main page */}
          <div className="h-full w-full flex flex-row flex-nowrap justify-between">
            {/* prev button */}
            <div
              className="h-full w-12 border-r-4 border-r-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white text-gray-800 circleInteract"
              onClick={handlePrev}
            >
              <ArrowSmallLeftIcon className="h-11 w-11" />
            </div>

            {/* pages */}
            <div className="flex-1 bg-[#88D4D4] flex flex-wrap">
              <div
                className="h-full w-[60%] min-w-[600px] border-r-4 border-r-gray-800 bg-cover"
                style={{
                  backgroundImage: `url(${projectList[projectNum].image})`,
                  backgroundPosition: projectList[projectNum].center
                    ? "center"
                    : "left",
                }}
              ></div>
              <div className="p-8 w-[40%] flex justify-center flex-col min-w-[300px]">
                <Link
                  href={projectList[projectNum].link}
                  className={`${syne.className} text-3xl font-[750] cursor-theme circleInteract flex items-center`}
                  target="_blank"
                >
                  {projectList[projectNum].name}
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-2" />
                </Link>
                <p className={`${montserrat.className} text-lg font-medium`}>
                  {projectList[projectNum].description}
                </p>
              </div>
            </div>

            {/* next button */}
            <div
              className="h-full w-12 border-l-4 border-l-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white text-gray-800 circleInteract"
              onClick={handleNext}
            >
              <ArrowSmallRightIcon className="h-11 w-11" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
