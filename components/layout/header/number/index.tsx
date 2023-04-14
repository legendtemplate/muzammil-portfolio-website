import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
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
    <motion.div className="social flex items-center justify-end ">
      <motion.div ref={ref} variants={btn} initial="hidden" animate={control}>
        <Tooltip hasArrow label="Phone" bg="red.500" closeDelay={200}>
          <Link
            href="tel:314-487-8266"
            className=" sm:px-4 px-2 flex items-center "
          >
            <span className="text-red-500 ">
              <FaPhoneAlt />
            </span>
            <span className="md:block hidden pl-1 dark:text-white text-black">
              +92 314 4878266
            </span>
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div ref={ref} variants={btn} initial="hidden" animate={control}>
        <Tooltip hasArrow label="Message" bg="red.500" closeDelay={200}>
          <Link
            href="mailto:mmuzammiloff@gmail.com"
            className=" sm:px-4 px-2 flex items-center pr-2"
          >
            <span className="text-red-500">
              <FaRegEnvelope />
            </span>
            <span className="md:block hidden pl-2 dark:text-white text-black">
              muzammiloff@gmail.com
            </span>
          </Link>
        </Tooltip>
      </motion.div>
    </motion.div>
  );
}
