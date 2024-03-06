import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Eyes() {
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
    <div className="eyes-container w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative  w-full h-full bg-cover bg-center bg-[url('./assets/bg.jpg')]"
      >
        <div className="flex items-center justify-center gap-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
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
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
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
      </div>
    </div>
  );
}

export default Eyes;
