import React from "react";
import Education from "./education";
import WExperience from "./wexperience";
import PExperience from "./pexperience";
import Achievements from "./achievements";
import Interest from "./interest";
import Awards from "./awards";

export default function right() {
  return (
    <div className="basis-8/12 p-6 text-black">
      <ul className="about-info mt-4 ">
        <li className="flex">
          <span className="text-orange-400 ">Name:</span>
          <span>Muhammad Muzammil </span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">Father Name:</span>
          <span>Muhammad Safdar </span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">Date of birth:</span>
          <span>April 19, 2002</span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">Nationality:</span>
          <span>Pakistan</span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">Province:</span>
          <span>Punjab</span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">City:</span>
          <span>Toba Tek Singh </span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">Address:</span>
          <span>Chak No. 327 J B Bhaliar </span>
        </li>
        <li className="flex">
          <span className="text-orange-400 ">Zip code:</span>
          <span>36050</span>
        </li>
      </ul>

      <div className="counter-wrap ftco-animate flex mt-3 mb-5">
        <div className="text">
          <p className="mb-4">
            <span
              className="number text-orange-300 font-semibold mr-3"
              data-number="120"
            >
              120
            </span>
            <span className="text-black">Project complete</span>
          </p>
        </div>
      </div>

      <Education />
      <PExperience />
      <WExperience />
      <Achievements />
      <Interest />
      <Awards />
    </div>
  );
}
