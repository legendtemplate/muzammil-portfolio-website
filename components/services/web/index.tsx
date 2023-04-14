import React from "react";

export default function index() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap md:columns-4 sm:columns-2 columns-1 ">
        {/* first */}
        {NAV_ITEMS.map((navItem) => (
        <>
        <div className="work py-6 md:w-4/12 sm:w-6/12 w-full px-2">
          <img className="w-full" src={navItem.img} 
          alt={navItem.label}
          title={navItem.label}
           />
        </div>
        </>
      ))}
        
      </div>
    </>
  );
}

interface NavItem {
  label: string;
  img: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    img: "/service/web/figma.webp",
  },
  {
    label: "About",
    img: "/service/web/html.webp",
  },
  {
    label: "About",
    img: "/service/web/css.webp",
  },
  {
    label: "About",
    img: "/service/web/scss.webp",
  },
  {
    label: "About",
    img: "/service/web/tailwind.webp",
  },
  {
    label: "About",
    img: "/service/web/chakura.webp",
  },
  {
    label: "About",
    img: "/service/web/js.webp",
  },
  {
    label: "About",
    img: "/service/web/ts.webp",
  },
  {
    label: "About",
    img: "/service/web/react.webp",
  },
  {
    label: "About",
    img: "/service/web/next.webp",
  },
  {
    label: "About",
    img: "/service/web/apis.webp",
  },
  {
    label: "About",
    img: "/service/web/git.webp",
  },
];
