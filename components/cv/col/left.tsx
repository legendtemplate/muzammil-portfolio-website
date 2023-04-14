import React from "react";
import Image from "next/image";

export default function left() {
  return (
    <div className="lg:basis-4/12 md:basis-6/12 basis-full bg-gray-100">
      <div className="logo rounded-full flex justify-center items-center">
        <Image
          src="/bg_1.png"
          alt="Muzammil Safdar"
          height="150"
          width="150"
          className="rounded-full"
        />
      </div>
      <div className="content">
        <h2 className="text-orange-400 text-center text-lg">
          Frontend Developer
        </h2>
      </div>
      <div className="mt-5">
        <span className="text-white px-6 py-2 mt-8 border-b-2 border-solid bg-orange-300 border-black w-full block">
          Profile
        </span>
        <p className="p-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum fuga
          iure atque dolorum excepturi quia sunt aliquam ad officia tempora.
        </p>
      </div>
      <div className="mt-5">
        <span className="text-white px-6 py-2 mt-8 border-b-2 border-solid bg-orange-300 border-black w-full block">
          Languages
        </span>
        <ul className="p-6">
          <li className="flex justify-between items-center">
            <span>Urdu</span>
            <span>Native</span>
          </li>
          <li className="flex justify-between items-center">
            <span>English</span>
            <span>Intermediate </span>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <span className="text-white px-6 py-2 mt-8 border-b-2 border-solid bg-orange-300 border-black w-full block">
          Contact
        </span>
        <ul className="p-6">
          <li className="flex justify-between items-center">
            <span>Phone</span>
            <span>0314 48782666</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Email</span>
            <span>20</span>
          </li>
          <li className="flex justify-between items-center">
            <span>website</span>
            <span>20</span>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <span className="text-white px-6 py-2 mt-8 border-b-2 border-solid bg-orange-300 border-black w-full block">
        Expertise
        </span>
        <ul className="p-6">
          <li className="flex justify-between items-center">
            <span>Web Design</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Web Development</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Data Entry</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Graphic Design</span>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <span className="text-white px-6 py-2 mt-8 border-b-2 border-solid bg-orange-300 border-black w-full block">
        Skills
        </span>
        <ul className="p-6">
          <li className="flex justify-between items-center">
            <span>VScode</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Html5</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Css3</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Javascript</span>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <span className="text-white px-6 py-2 mt-8 border-b-2 border-solid bg-orange-300 border-black w-full block">
        CORE COMPETENCIES
        </span>
        <ul className="p-6">
          <li className="flex justify-between items-center">
            <span>Source control</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Web performance optimization</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Code structure & architecture</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
