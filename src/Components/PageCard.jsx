import { motion } from "framer-motion";
import React from "react";

function PageCard() {
  return (
    <>
      <div className="w-full py-6 px-12 bg-[#F1F1F1] ">
        <h1 className="text-zinc-900 text-[3.7vw] font-['primary']  tracking-tight">
          Client's review:
        </h1>
      </div>
      <div className="w-full h-[80vh] px-12 bg-[#F1F1F1] pt-10 flex gap-5 shadow-xl">
        <div className="card-container w-1/2 h-[60vh] ">
          <div className="cardleft relative card w-full h-full rounded-2xl bg-[#004d43]">
            <img
              className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button
              className="text-[#cdea68] border-2 border-[#cdea68] px-3 py-2 rounded-full font-['primary'] absolute left-10 bottom-10 text-[10px]
          "
            >
              ©2019-2024
            </button>
          </div>
        </div>
        <div className="card-container flex gap-5 w-1/2 h-[60vh]">
          <div className="card-right relative rounded-2xl w-1/2 h-full bg-zinc-800">
            <img
              className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button
              className="text-white border-2 border-[#cdea68] px-3 py-2 rounded-full text-[10px] font-['primary'] absolute left-12 bottom-10
          
          hover:text-white transition ease-in-out hover:-translate-y-1 duration-600 ..."
            >
              RATING 5.0 ON CLUTCH
            </button>
          </div>
          <div className="card-right relative rounded-2xl w-1/2 h-full bg-zinc-800">
            <img
              className="scale-50 rounded-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button
              className="text-white border-2 border-[#cdea68] px-3 py-2 rounded-full text-[10px] font-['primary'] absolute left-8 bottom-10
            hover:text-white transition ease-in-out hover:-translate-y-1 duration-600 ..."
            >
              BUSINESS BOOTCAMP ALUMNI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageCard;
