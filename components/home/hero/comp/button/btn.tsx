import React from "react";
import dynamic from "next/dynamic";
const Btn1 = dynamic(() => import("./btn1"));
const Btn2 = dynamic(() => import("./btn2"));
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const button = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

export default function btn() {
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
    <motion.div className="flex"   ref={ref}
    variants={button}
    initial="hidden"
    animate={control}>
      <Btn1 />
      <Btn2 />
    </motion.div>
  );
}

