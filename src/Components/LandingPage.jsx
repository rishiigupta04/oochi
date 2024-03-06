import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="landingpage w-full h-screen px-12 py-24 pt-1 "
    >
      <div className="textstructure mt-40">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[0.5vw] w-[10vw] rounded-md h-[6vw] -top-[1.2vw] bg-green-800 bg-[url('./assets/img.png')]"
                  ></motion.div>
                )}

                <h1 className="leading-[6rem] text-9xl font-['secondary']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-400 mt-20"></div>
      <div className="flex tracking-tight justify-between items-center mt-3 text-[#000000cb] font-normal text-[17px] font-['primary']">
        <h3>For public and private companies</h3>
        <h3>From the first pitch to IPO</h3>
        <div className="flex gap-2 ">
          <button
            className="text-[#212121] font-tighter border-[1px] border-zinc-600 rounded-full px-3 py-1 text-sm font-['primary']
          hover:bg-green-800  hover:text-white transition ease-in-out hover:-translate-y-1 duration-500 ..."
          >
            START THE PROJECT
          </button>
          <button
            className="border-[1px] border-zinc-600 rounded-full px-2 py-1
          hover:bg-zinc-800  hover:text-white transition ease-in-out hover:-translate-y-1 duration-500 ..."
          >
            <i class="ri-arrow-right-up-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
