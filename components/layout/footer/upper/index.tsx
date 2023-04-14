import React from "react";
import Btn from "@/components/home/hero/comp/button/btn1";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
// bottom to up
const btn = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    x: -60,
  },
};
// bottom to up
const second = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    x: 60,
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
    <div className=" bg-orange-400  ">
      <div className="py-10 container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-between items-center flex-wrap">
        <motion.div
          className="flex flex-col md:w-5/12 w-full"
          ref={ref}
          variants={btn}
          initial="hidden"
          animate={control}
        >
          <h2 className="text-white text-2xl font-semibold">
            Have any works you want to done by me?
          </h2>
          <span className="text-white text-base">
            I completed your project in times.
          </span>
        </motion.div>
        <motion.div
          className="md:w-7/12 w-full flex md:justify-end justify-start md:pt-0 pt-5"
          ref={ref}
          variants={second}
          initial="hidden"
          animate={control}
        >
          <Button  colorScheme='red-500' size='lg'
            className="subscribe-btn md:px-10 px-7 py-4 text-orange-400 rounded-md mr-4 "
          >
            Download CV
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
