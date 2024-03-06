import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full pt-12 h-[125vh] bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl"
    >
      <h1 className="text-black text-[3.5vw] leading-none font-['primary'] py-5 px-12">
        Ochi is a strategic partner for fast-grow­ing tech <br />
        businesses that need to{" "}
        <span className="underline-animation">raise funds,</span>{" "}
        <span className="underline-animation">sell prod­ucts,</span>
        <br />{" "}
        <span className="underline-animation">
          ex­plain com­plex ideas,
        </span>{" "}
        and <span className="underline-animation">hire great peo­ple.</span>
      </h1>
      <div className="our-approch relative mt-24 border-t-2 border-[#0000003f]">
        <div className="left-content w-[40%] px-12 py-6">
          <h1 className="text-[3.5vw]">Our approach:</h1>
          <button className="font-['primary'] text-sm uppercase mt-3 px-8 py-4 bg-zinc-900 rounded-full text-white hover:text-white transition ease-in-out hover:-translate-y-2 duration-500 ...">
            Read More
            <i className="ri-checkbox-blank-circle-fill text-[10px] ml-5 mb-3"></i>
          </button>
        </div>
        <div className="right-content ">
          <img
            className="w-[60%] object-cover overflow-hidden absolute right-12 rounded-3xl top-10"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/40fe02192306545.65d989a6eb576.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default About;
