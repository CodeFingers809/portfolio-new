import { Syne, Montserrat } from "next/font/google";
import { useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import Start from "@/components/Start";
import About from "@/components/About";
import Follower from "@/components/Follower";
import Head from "next/head";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const syne = Syne({ weight: "variable", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "variable", subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const topButton = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        topButton.classList.add("slide-in-right");
        topButton.style.display = "block";
      } else {
        topButton.classList.remove("slide-in-right");
        topButton.style.display = "none";
      }
    });

    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + 200;

      if (
        aboutSection.offsetTop <= scrollPosition &&
        skillsSection.offsetTop > scrollPosition
      ) {
        history.replaceState(null, "", "#" + aboutSection.id);
        document.title = "About | Ayush Bohra";
      } else if (
        skillsSection.offsetTop <= scrollPosition &&
        projectsSection.offsetTop > scrollPosition
      ) {
        history.replaceState(null, "", "#" + skillsSection.id);
        document.title = "Skills | Ayush Bohra";
      } else if (
        projectsSection.offsetTop <= scrollPosition &&
        contactSection.offsetTop > scrollPosition
      ) {
        history.replaceState(null, "", "#" + projectsSection.id);
        document.title = "Projects | Ayush Bohra";
      } else if (contactSection.offsetTop <= scrollPosition) {
        history.replaceState(null, "", "#" + contactSection.id);
        document.title = "Contact | Ayush Bohra";
      } else {
        history.replaceState(null, "", "/");
        document.title = "Ayush Bohra";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-sky-300">
      <Head>
        <title>Ayush Bohra</title>
        <meta name="title" content="Ayush Bohra" />
        <meta
          name="description"
          content="Hey there! I am Ayush Bohra and this site is my personal portfolio. It includes all of my skills and projects."
        />
        <meta
          name="keywords"
          content="portfolio, personal portfolio, Ayush Bohra, skills, projects, contact, about me, about ayush, python, javascript, reactjs, nextjs, nodejs, sklearn, sass, tailwindcss, github"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Ayush Bohra" />
      </Head>
      <Follower />
      <button
        className="fixed z-[998] right-0 bottom-0 m-8 bg-orange-500 border-4 border-gray-800 rounded-full circleInteract hidden w-[70px] h-[70px] items-center justify-center"
        id="topBtn"
      >
        <ArrowSmallUpIcon className="h-[60px] w-[60px] text-gray-900" />
      </button>
      <Start />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

