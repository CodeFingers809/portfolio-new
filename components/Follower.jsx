import Image from "next/image";
import React, { useEffect } from "react";

const Follower = () => {
  function isTouchDevice() {
    try {
      //We try to create TouchEvent. It would fail for desktops and throw error
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    const circle = document.getElementById("circle");
    const onMouseMove = (e) => {
      circle.style.left = !isTouchDevice()
        ? e.clientX + "px"
        : e.touches[0].clientX + "px";
      circle.style.top = !isTouchDevice()
        ? e.clientY + "px"
        : e.touches[0].clientY + "px";
    };
    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll(".circleInteract").forEach((ele) => {
      ele.addEventListener("mouseover", makeCircleBigger);
      ele.addEventListener("mouseleave", makeCircleSmaller);
    });
  }, []);
  const makeCircleBigger = (e) => {
    const text = document.getElementById("text");
    text.style.height = "120px";
    text.style.width = "120px";
  };
  const makeCircleSmaller = (e) => {
    const text = document.getElementById("text");
    text.style.height = "70px";
    text.style.width = "70px";
  };
  return (
    <div
      id="circle-container"
      className=" h-[20px] w-[20px] pointer-events-none"
    >
      <div id="circle" className="h-full w-full">
        <Image src={"/circle.png"} height={70} width={70} id="text" alt="" />
      </div>
    </div>
  );
};

export default Follower;
