import React from "react";
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// left to right
const heading = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    x: -80,
  },
};
export default function index() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={heading}
      initial="hidden"
      animate={control}
    >
      <span className="subheading font-bold text-orange-400 text-sm mb-1 relative z-0 w-24 inline-block dark:bg-white bg-orange-100 rounded py-1 px-2">
        Hi There!
      </span>
      <h1 className="mb-4 font-normal md:text-6xl sm:text-5xl text-4xl text-black dark:text-white">
        I am Muhammad Muzammil Safdar
        <br />
        <span className="typewrite">
          <span className="wrap text-xl text-orange-400">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Graphic Designer",
                  "Data Entry",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </span>
      </h1>
    </motion.div>
  );
}
