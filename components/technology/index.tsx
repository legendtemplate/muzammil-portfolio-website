import Link from "next/link";
import React from "react";

import Image from "next/image";
export default function index() {
  return (
    <div className="container mx-auto px-4 my-10 lg:w-9/12 md:w-10/12 w-full text-center grid grid-cols-2 md:grid-cols-4 lg:gap-10 md:gap-5">
      {NAV_ITEMS.map((user) => (
        <Link href={user.link}>
          <div className="card bg-gray-800 mb-4 p-3 lg:w-44 sm:w-32 w-28 flex justify-end items-center flex-col 
          rounded-lg shadow-xl">
            <div className="image mb-2">
              <Image
                alt={user.para}
                title={user.para}
                width="50"
                height="45"
                src={user.img}
              />
            </div>
            <div className="text">
              <p className="font-medium text-white">{user.para}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

interface NavItem {
  id: number;
  para: string;
  img: string;
  link: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    id: 0,
    para: "Figma",
    img: "/skill/figma.webp",
    link: "/figma",
  },
  {
    id: 1,
    para: "HTML",
    img: "/skill/html.webp",
    link: "/html",
  },
  {
    id: 2,
    para: "CSS",
    img: "/skill/css.webp",
    link: "/css",
  },
  {
    id: 3,
    para: "Tailwind Css",
    img: "/skill/tailwind.webp",
    link: "/tailwind",
  },
  {
    id: 4,
    para: "Chakura UI",
    img: "/skill/chakura.webp",
    link: "/chakura",
  },
  {
    id: 5,
    para: "Javascript",
    img: "/skill/js.webp",
    link: "/js",
  },
  {
    id: 6,
    para: "Typescript",
    img: "/skill/typescript.webp",
    link: "/typescript",
  },
  {
    id: 7,
    para: "React js",
    img: "/skill/react.webp",
    link: "/react",
  },
  {
    id: 8,
    para: "Next js",
    img: "/skill/next.webp",
    link: "/next",
  },
  {
    id: 9,
    para: "Git",
    img: "/skill/git.webp",
    link: "/git",
  },
  {
    id: 9,
    para: "Github",
    img: "/skill/github.webp",
    link: "/github",
  },
  {
    id: 10,
    para: "API's",
    img: "/skill/api.webp",
    link: "/api",
  },
  // design
  {
    id: 10,
    para: "Photoshop",
    img: "/skill/design/photoshop.webp",
    link: "/photoshop",
  },
  {
    id: 10,
    para: "Illustrator",
    img: "/skill/design/illustrator.webp",
    link: "/illustrator",
  },
  // data
  {
    id: 10,
    para: "Excel",
    img: "/skill/data/excel.webp",
    link: "/excel",
  },
  {
    id: 10,
    para: "Word",
    img: "/skill/data/word.webp",
    link: "/word",
  },
  {
    id: 10,
    para: "Powerpoint",
    img: "/skill/data/powerpoint.webp",
    link: "/powerpoint",
  },
  {
    id: 10,
    para: "Sheet",
    img: "/skill/data/sheet.webp",
    link: "/sheet",
  },
  {
    id: 10,
    para: "Sanity",
    img: "/skill/Sanity.jpg",
    link: "/sheet",
  },
];
