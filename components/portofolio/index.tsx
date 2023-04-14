import Link from "next/link";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";

export default function index() {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
      <div className=" bg-gray-800 px-4 pt-2 pb-7 mb-5 rounded-xl relative pl-4">
        <div className="img rounded">
          <img
            className="rounded h-60 w-full mb-4"
            src={navItem1.image}
            alt={navItem1.head}
            title={navItem1.head}
            height="100"
          />
        </div>
        <div className="btn absolute top-7 left-7">
          <Link href={navItem1.livepreviewhref} className="">
            <FaEye className="p-4 bg-gray-400 rounded-full h-12 w-12" />
          </Link>
        </div>
        <div className="btn absolute top-7 right-7">
          <Link href={navItem1.githubhref} className="">
            <FaGithub className="p-4 bg-gray-400 rounded-full h-12 w-12" />
          </Link>
        </div>
        <div className="relative bottom-4 rounded-b-lg bg-red-500 p-2 text-white font-semibold">
          <span>{navItem1.new}</span>
        </div>
        <div className="desc">
          <h3 className="text-white text-3xl font-bold">{navItem1.head}</h3>
          <p className="text-gray-300 text-base mb-4">{navItem1.para}</p>
        </div>
        <div className="tag">
         
              <ul className="flex flex-wrap">
              {navItem1tag.map((item, index) => {
            return (
                <li className="mb-5 ml-2" key={index}>
                  <a
                    href=""
                    className="px-4 py-2 mb-8 text-white rounded bg-gray-600"
                  >
                    {item}
                  </a>
                </li>
                  );
                })}
              </ul>
          
        </div>
      </div>
      <div className=" bg-gray-800 px-4 pt-2 pb-7 mb-5 rounded-xl relative pl-4">
        <div className="img rounded">
          <img
            className="rounded h-60 w-full mb-4"
            src={navItem2.image}
            alt={navItem2.head}
            title={navItem2.head}
            height="100"
          />
        </div>
        <div className="btn absolute top-7 left-7">
          <Link href={navItem2.livepreviewhref} className="">
            <FaEye className="p-4 bg-gray-400 rounded-full h-12 w-12" />
          </Link>
        </div>
        <div className="btn absolute top-7 right-7">
          <Link href={navItem2.githubhref} className="">
            <FaGithub className="p-4 bg-gray-400 rounded-full h-12 w-12" />
          </Link>
        </div>
        <div className="relative bottom-4 rounded-b-lg bg-red-500 p-2 text-white font-semibold">
          <span>{navItem2.new}</span>
        </div>
        <div className="desc">
          <h3 className="text-white text-3xl font-bold">{navItem2.head}</h3>
          <p className="text-gray-300 text-base mb-4">{navItem2.para}</p>
        </div>
        <div className="tag">
         
              <ul className="flex flex-wrap">
              {navItem2tag.map((item, index) => {
            return (
                <li className="mb-5 ml-2" key={index}>
                  <a
                    href=""
                    className="px-4 py-2 mb-8 text-white rounded bg-gray-600"
                  >
                    {item}
                  </a>
                </li>
                  );
                })}
              </ul>
          
        </div>
      </div>
      <div className=" bg-gray-800 px-4 pt-2 pb-7 mb-5 rounded-xl relative pl-4">
        <div className="img rounded">
          <img
            className="rounded h-60 w-full mb-4"
            src={navItem3.image}
            alt={navItem3.head}
            title={navItem3.head}
            height="100"
          />
        </div>
        <div className="btn absolute top-7 left-7">
          <Link href={navItem3.livepreviewhref} className="">
            <FaEye className="p-4 bg-gray-400 rounded-full h-12 w-12" />
          </Link>
        </div>
        <div className="btn absolute top-7 right-7">
          <Link href={navItem3.githubhref} className="">
            <FaGithub className="p-4 bg-gray-400 rounded-full h-12 w-12" />
          </Link>
        </div>
        <div className="relative bottom-4 rounded-b-lg bg-red-500 p-2 text-white font-semibold">
          <span>{navItem3.new}</span>
        </div>
        <div className="desc">
          <h3 className="text-white text-3xl font-bold">{navItem3.head}</h3>
          <p className="text-gray-300 text-base mb-4">{navItem3.para}</p>
        </div>
        <div className="tag">
         
              <ul className="flex flex-wrap">
              {navItem3tag.map((item, index) => {
            return (
                <li className="mb-5 ml-2" key={index}>
                  <a
                    href=""
                    className="px-4 py-2 mb-8 text-white rounded bg-gray-600"
                  >
                    {item}
                  </a>
                </li>
                  );
                })}
              </ul>
          
        </div>
      </div>
    </div>
  );
}

// 1
const navItem1tag = [
  "React js",
  "Next js",
  "Tailwind Css",
  "css",
  "Chakura ui",
  "Framer Motion",
  "Vercel",
];
const navItem1 = {
  head: "Portofolio Website",
  para: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui, maiores velit eligendi totam nemo nesciunt consequuntur provident. Nam, officiis.",
  image: "/share.png",
  githubhref: "https://github.com/muzammil3278/muzammil-Portfolio",
  livepreviewhref: "/",
  new: "",
};
// 2
const navItem2tag = [
  "React js",
  "Next js",
  "Tailwind Css",
  "css",
  "Chakura ui",
  "Framer Motion",
  "Api's",
  "Sanity",
  "Vercel",
];
const navItem2 = {
  head: "Ecommerce Website",
  para: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui, maiores velit eligendi totam nemo nesciunt consequuntur provident. Nam, officiis.",
  image: "/share.png",
  githubhref: "/",
  livepreviewhref: "/",
  new: "NEW IN FUTURE",
};
// 3
const navItem3tag = [
  "React js",
  "Next js",
  "Tailwind Css",
  "Chakura ui",
  "Framer Motion",
  "Api's",
  "Sanity",
  "Vercel",
];
const navItem3 = {
  head: "Blogs Website",
  para: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui, maiores velit eligendi totam nemo nesciunt consequuntur provident. Nam, officiis.",
  image: "/share.png",
  githubhref: "/",
  livepreviewhref: "https://muzammil-blog.vercel.app/",
  new: "",
};
