import { easeInOut, motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="featured-pg w-full min-h-[100vh] py-12 bg-[#F1F1F1] shadow-xl ">
      <div className="w-full py-6 px-12 mt-10">
        <h1 className="text-zinc-900 text-[3.7vw] font-['primary']  tracking-tight">
          Featured projects:
        </h1>
      </div>
      <div
        className="cards w-full h-full flex gap-6 px-12 pb-10
       hover:scale-90 transition-all ease-in-out duration-500  "
      >
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer relative left w-full  mt-12
          "
        >
          <h1 className=" absolute overflow-hidden flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[12vw] font-['secondary'] leading-none z-[9] text-[#cdea68]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{
                  ease: easeInOut,
                  delay: index * 0.1,
                }}
                className="inline-block border-0"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x550.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer relative right w-full mt-12 "
        >
          <h1 className=" mr-6 absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[12vw] font-['secondary'] leading-none z-[9] text-[#cdea68]">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{
                  ease: easeInOut,
                  delay: index * 0.1,
                }}
                className="inline-block border-0"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl bg-green-800 overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x550.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <div className="cards w-full h-full flex gap-6 px-12 pb-10 border-b-[1px] border-zinc-300 hover:scale-90 transition-all ease-in-out duration-500">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="cardcontainer relative left w-full  mt-12 "
        >
          <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[12vw] font-['secondary'] leading-none z-[9] text-[#cdea68]">
            {"BEAN".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{
                  ease: easeInOut,
                  delay: index * 0.1,
                }}
                className="inline-block border-0"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x550.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="cardcontainer relative right w-full mt-12 "
        >
          <h1 className="mr-6 absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[12vw] font-['secondary'] leading-none z-[9] text-[#cdea68]">
            {"TRAWA".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[3]}
                transition={{
                  ease: easeInOut,
                  delay: index * 0.1,
                }}
                className="inline-block border-0"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl bg-green-800 overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
