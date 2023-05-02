import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function carouselUI() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="m-20">
      <Carousel responsive={responsive}>
        <div className="m-2">
        <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img1.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-6">
                  Website Development
                  </div>
              </div>
        </div>
        <div className="m-2">
        <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl -mt-4">
                    <Image
                      className="object-cover object-center rounded z-10 h"
                      alt="earth"
                      src="images/img2.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-1">
                     App Development
                  </div>
              </div>
        </div>
        <div className="m-2">
        <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img3.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-5 mt-6">
                    Digital Marketing
                  </div>
              </div>
        </div>
        <div className="m-2">
        <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img4.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-3">
                    Graphic Designing
                  </div>
              </div>
        </div>
        <div className="m-2">
        <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img5.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-5 mt-6">
                   Cloud Development
                  </div>
              </div>
        </div>
        <div className="m-2">
        <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl -mt-4">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img6.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-0">
                    VR/AR Development
                  </div>
              </div>
        </div>
      </Carousel>
    </div>
  );
}
