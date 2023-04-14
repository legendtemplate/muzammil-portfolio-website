import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/hero"));
const Hire = dynamic(() => import("../components/hire"));

export default function index() {
  return (
    <>
      <Hero head="Hire ME" />
      <Hire />
    </>
  );
}
