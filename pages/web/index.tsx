import React from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../../components/hero"));
const Graphic = dynamic(() => import("../../components/services/web"));

export default function index() {
  return (
    <div>
      <Hero head="Web Development" />
      <Graphic />
    </div>
  );
}
