import React from "react";
import Image from "next/image";
import Link from "next/link";

function index() {
  return (
    // <section className="brand-area pb-bottom py-32">
    //   <div className="container mx-auto lg:px-8 px-4">
    //     <div className="row flex flex-wrap justify-between">
    //       <div className=" w-full px-1">
    //         <div className="section-tittle mb-30">
    //           <h2>
    //             Take a look <br />
    //             at our frf
    //           </h2>
    //           <p>Excepteur sint frfr cupidatat. irure dolor in.</p>
    //         </div>
    //       </div>

    //       <div className="lg:w-4/12 w-full px-1 border-2 border-solid border-gray-400">
    //         <div className="single-brand text-center flex justify-center items-center flex-col">
    //
    //           <p>Upwork</p>
    //           <p>2021</p>
    //         </div>
    //       </div>
    //       <div className="lg:w-4/12 w-full px-1">
    //         <div className="single-brand text-center flex justify-center items-center flex-col">
    //
    //           <p>Freelancer.</p>
    //           <p>2022</p>
    //         </div>
    //       </div>
    //       <div className="lg:w-4/12 w-full px-1">
    //         <div className="single-brand text-center flex justify-center items-center flex-col">
    //
    //           <p>Fiverr.</p>
    //           <p>2023</p>
    //         </div>
    //       </div>

    //     </div>
    //   </div>

    //   <div className="brand-shape d-none d-lg-block">
    //     <img src="assets/img/gallery/brand_shape.png" alt="" />
    //   </div>
    // </section>
    <section className="brand-area bg-gray-900 py-14 ">
      <div className="container mx-auto ">
        <div className="container">
          <div className="row flex flex-wrap">
            <div className="col-lg-6 lg:w-6/12 w-full">
              <div className="section-tittle mb-30">
                <h2>
                  Take a look <br />
                  at our achivment
                </h2>
                <p>Excepteur sint occaecat cupidatat. irure dolor in.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 lg:w-3/12 md:w-4/12 w-full">
              <Link href="https://www.linkedin.com/in/muhammad-muzammil-safdar-2b1851267/">
                <div className="single-brand text-center mb-30 py-12 border-2 border-solid border-gray-600">
                  <Image
                    src="/freelancing/linkedin.png"
                    alt="linkedin"
                    title="linkedin"
                    height="99"
                    width="99"
                    className=" h-40 w-56"
                  />
                  <p>Linkedin</p>
                  <p>2023</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 lg:w-3/12 md:w-4/12 w-full">
              <Link href="">
                <div className="single-brand text-center mb-30">
                  <Image
                    src="/freelancing/fiverr.png"
                    alt="fiverr"
                    title="fiverr"
                    height="9999"
                    width="9999"
                  />
                  <p>Fiverr</p>
                  <p>2023</p>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 lg:w-3/12 md:w-4/12 w-full">
              <Link href="">
                <div className="single-brand text-center mb-30">
                  <Image
                    src="/freelancing/upwork.png"
                    alt="upwork"
                    title="upwork"
                    height="9999"
                    width="9999"
                  />
                  <p>upwork</p>
                  <p>2023</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
