import React from "react";
import Link from "next/link";
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
    y:50,
  },
};

export default function freelancing() {
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
    <section className=" py-32 bg-red-300 img text-white bg-[url('/newletter-bg.webp')] imgc bg-fixed">
      <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto">
        <div className=" justify-center">
          <motion.div className="col-md-7  text-center text-black" 
              ref={ref}
              variants={btn}
              initial="hidden"
              animate={control}>
            <h2 className="text-white font-bold text-4xl pb-3">
              I'm <span className="text-orange-400">Available</span> for
              freelancing
            </h2>
            <p className="text-gray-500 pb-7">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <Link
              href="/download-cv"
              className="subscribe-btn md:px-10 px-7 py-4 text-orange-400 rounded-md mr-4 "
            >
              Hire Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
