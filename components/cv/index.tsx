import Link from "next/link";
import React from "react";
import Left from "./col/left";
import Right from "./col/right";

function index() {
  return (
    <div className="bg-white">
    <div className=" container mx-auto px-4 flex flex-wrap justify-center py-4">
      <Left />
      <Right />
      {/* <div className="row justify-start pb-3">
        <div className="col-md-12 heading-section  flex justify-center items-center flex-col">
          <h2 className="mb-4">About Me</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
      */}
      <a href="/author.jpg" download="muhammad-muzammil-safdar">Download cv</a>
    </div>
    </div>
  );
}

export default index;
