import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";

function carouselUI() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    
      <div className="my-20">
      <Marquee className="flex flex-row" responsive={responsive}>
        <div className="p-10">
        <div className="  ">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/one1.svg"
                width="391"
                height="240"
              />
        </div>
        </div>
        <div className="p-10">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/one2.svg"
                width="391"
                height="240"
              />
        </div>
        </div>
        <div className="p-10">
        <div className="">
              <Image
                className="w-full h-[240px] object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/one3.svg"
                width="391"
                height="280"
              />
        </div>
        </div>
        <div className="p-10">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/one4.svg"
                width="391"
                height="240"
              />
        </div>
        </div>
       
      </Marquee>
    </div>
   
  );
}
export default carouselUI;