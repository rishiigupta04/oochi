import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Prefooter() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX; // mouse position
      let mouseY = e.clientY; // mouse position

      let deltaX = mouseX - window.innerWidth / 2; //
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //to convert radians to degrees
      setRotate(angle - 180); //-180 so as to invert the rotation direction of eye
    });
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full flex items-center justify-center h-[120vh] bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="relative w-full flex gap-10 items-center justify-center flex-col ">
        <h1 className="leading-[11vw] text-[15vw] text-zinc-800 text-center font-['secondary'] font-extrabold">
          READY
          <br />
          TO START
          <br /> THE PROJECT
        </h1>
        <div className="flex items-center justify-center gap-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[120%]">
          <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rotate-[60deg] w-full h-5"
              >
                <div className="  w-[30px] h-[30px] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rotate-[60deg] w-full h-5"
              >
                <div className="  w-[30px] h-[30px] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-zinc-800 text-zinc-200 font-tighter border-[1px] border-zinc-600 rounded-full px-8 py-5 text-md font-['primary'] mt-3 text-[15px]
           hover:text-white transition ease-in-out hover:-translate-y-2 duration-500 ..."
        >
          START THE PROJECT
          <i className="ri-circle-fill text-[10px] ml-5"></i>
        </button>
      </div>
    </div>
  );
}

export default Prefooter;
