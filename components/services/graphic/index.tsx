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
    img: "/service/graphic/shadow-effect.png",
  },
  {
    label: "About",
    img: "/service/graphic/remove-object.png",
  },
  {
    label: "About",
    img: "/service/graphic/change-and-remove-background-image.png",
  },
  {
    label: "About",
    img: "/service/graphic/image-tracing.png",
  },
];
