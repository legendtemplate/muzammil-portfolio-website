import React from 'react'
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../../components/hero"));
const Graphic = dynamic(() => import("../../components/services/graphic"));

export default function index() {
  return (
    <div>
        <Hero head="Graphic Designing" />
        <Graphic />
    </div>
  )
}
