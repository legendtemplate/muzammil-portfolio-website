import React from "react";
import { motion, MotionValue, useAnimation } from "framer-motion";
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
    x: -300,
  },
};
function index(props: { head: string }) {
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
    <>
      <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-between items-center bg-[url('/newletter-bg.webp')] imgc bg-fixed">
        <div className="w-full mt-4 text-white relative z-0 flex justify-center items-center flex-col py-40">
          <motion.h1
            ref={ref}
            variants={heading}
            initial="hidden"
            animate={control}
            className="mb-4 font-normal md:text-6xl text-3xl"
          >
            {props.head}
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default index;
