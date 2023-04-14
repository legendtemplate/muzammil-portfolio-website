import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/hero"));
const Cv = dynamic(() => import("../components/cv"));

export default function index() {
  return (
    <>
      <Hero head="Download CV" />
      <Cv />
    </>
  );
}
