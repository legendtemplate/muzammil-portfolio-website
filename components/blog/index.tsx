import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Head from "@/components/heading";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
};

function index() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <Head head="Our Blogs" />
      <motion.div
        className="gap-5 container mx-auto px-8 "
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Slider {...settings}>
          {NAV_ITEMS.map(function (user) {
            return (
              <motion.div
                className="w-full text-white mb-4 px-3 "
                ref={ref}
                variants={btn}
                initial="hidden"
                animate={control}
              >
                <div className=" w-full overflow-hidden bg-cover rounded-tl-lg rounded-tr-lg">
                  <Image
                    src={user.headimg}
                    alt={user.head}
                    title={user.head}
                    height="44"
                    width="44"
                    className="w-full h-full"
                  />
                </div>
                <div className=" bg-gray-100 text-black p-3 flex flex-col round-b items-start rounded-bl-lg rounded-br-lg">
                  <span
                    className=" uppercase m-0  bg-orange-300 text-white 
              text-sm px-3 py-1 rounded-3xl"
                  >
                    {user.tag}
                  </span>
                  <h1 className="pt-1 text-xl font-medium my-1">{user.head}</h1>
                  <p className="text-base my-2">{user.para}</p>
                  <div className="flex items-center">
                    <Image
                      src={user.authorimg}
                      alt={user.authorName}
                      height="44"
                      width="44"
                      className="rounded-full h-12 w-12 "
                    />
                    <div className="author-info ml-2">
                      <p className="author-name">{user.authorName}</p>
                      <p className="post-timestamp">{user.time}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </motion.div>
    </>
  );
}

export default index;

interface NavItem {
  headimg: string;
  head: string;
  tag: string;
  para: string;
  authorimg: string;
  authorName: string;
  time: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    headimg: "/newletter-bg.png",
    head: "Why is the sports cars so well designed?",
    tag: "Car design",
    para: "An exploration into the car design industry and how it works",
    authorimg: "/bg_1.png",
    authorName: "John Doe",
    time: "25 Dec, 2023",
  },
  {
    headimg: "/newletter-bg.png",
    head: "Why is the sports cars so well designed?",
    tag: "Car design",
    para: "An exploration into the car design industry and how it works",
    authorimg: "/bg_1.png",
    authorName: "John Doe",
    time: "25 Dec, 2023",
  },
  {
    headimg: "/newletter-bg.png",
    head: "Why is the sports cars so well designed?",
    tag: "Car design",
    para: "An exploration into the car design industry and how it works",
    authorimg: "/bg_1.png",
    authorName: "John Doe",
    time: "25 Dec, 2023",
  },
  {
    headimg: "/newletter-bg.png",
    head: "Why is the sports cars so well designed?",
    tag: "Car design",
    para: "An exploration into the car design industry and how it works",
    authorimg: "/bg_1.png",
    authorName: "John Doe",
    time: "25 Dec, 2023",
  },
  {
    headimg: "/newletter-bg.png",
    head: "Why is the sports cars so well designed?",
    tag: "Car design",
    para: "An exploration into the car design industry and how it works",
    authorimg: "/bg_1.png",
    authorName: "John Doe",
    time: "25 Dec, 2023",
  },
  {
    headimg: "/newletter-bg.png",
    head: "Why is the sports cars so well designed?",
    tag: "Car design",
    para: "An exploration into the car design industry and how it works",
    authorimg: "/bg_1.png",
    authorName: "John Doe",
    time: "25 Dec, 2023",
  },
];
