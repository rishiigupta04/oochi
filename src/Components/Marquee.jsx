import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-[35vw] mt-36 pt-28 pb-36 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] overflow-hidden"
    >
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap text-[#f1f1f1] font-['secondary'] font-semibold overflow-hidden gap-7 ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[28vw] leading-none -mt-20 pb-2 -mb-12"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[28vw] leading-none -mt-20 pb-2 -mb-12"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
