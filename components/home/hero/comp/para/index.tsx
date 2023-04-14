import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
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
      className=" mb-4"
      ref={ref}
      variants={btn}
      initial="hidden"
      animate={control}
    >
      <p className="mb-4 pb-4 w-100 dark:text-white text-gray-700">
        We use latest technology for the latest world. We are always creative
        and and always lisen our customers and we mix these two things and make
        best design. If our customer has any problem and we are always happy to
        help then.
      </p>
    </motion.div>
  );
}
