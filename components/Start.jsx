import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Syne, Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";

const syne = Syne({ weight: "variable", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });

const Start = () => {
  function smoothScrollTo(element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop,
    });
  }

  function handleLinkClick(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    smoothScrollTo(targetElement);
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <nav className="flex flex-row flex-nowrap p-8 justify-between items-center border-b-gray-800 border-b-4">
        <div className={`${syne.className} font-extrabold`}>
          <Link href={"/"}>
            <span
              className={`text-3xl text-gray-800 cursor-theme link circleInteract`}
            >
              ayushbohra.tech
            </span>
          </Link>
        </div>
        <div
          className={`flex flex-row space-x-12 ${syne.className} font-bold text-xl text-gray-800`}
        >
          <Link href="#about" onClick={(e) => handleLinkClick(e, "about")}>
            <span className="group circleInteract cursor-theme">
              About
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-800"></span>
            </span>
          </Link>
          <Link href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
            <span className="group circleInteract cursor-theme">
              Skills
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-800"></span>
            </span>
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleLinkClick(e, "projects")}
          >
            <span className="group circleInteract cursor-theme">
              Projects
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-800"></span>
            </span>
          </Link>
          <Link href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
            <span className="group circleInteract cursor-theme">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gray-800"></span>
            </span>
          </Link>
        </div>
      </nav>
      <section className="flex flex-row h-full border-b-4 border-b-gray-800">
        <div className="w-[55%] border-r-4 border-r-gray-800 p-8">
          <div className="h-full flex justify-center flex-col">
            <p
              className={`${syne.className} font-semibold text-[24px] text-[#003D5F]`}
            >
              Web Design • Full Stack • AI/ML Developer
            </p>
            <p
              className={`${montserrat.className} font-bold text-[70px] text-gray-900`}
            >
              Let&apos;s make the web more interactive{" "}
              <span
                className={`${syne.className} font-[753] text-transparent bg-clip-text bg-gradient-to-br from-[#007cbe] to-[#3df374]`}
              >
                TOGETHER
              </span>
            </p>
            <Link
              className={`${montserrat.className} circleInteract cursor-theme font-semibold text-4xl w-[350px] p-3 border-4 border-gray-800 rounded-full bg-[#95C623] flex flex-row items-center justify-center `}
              id="letsgobtn"
              href={"#about"}
              onClick={(e) => handleLinkClick(e, "about")}
            >
              Let&apos;s Go{" "}
              <ArrowSmallRightIcon class="h-[50px] w-[50px] text-gray-900" />
            </Link>
          </div>
        </div>
        <div className="w-[45%]" id="pfp"></div>
      </section>
    </div>
  );
};

export default Start;
