import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselUI() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
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
    <div className="m-0">
      <Carousel
        showDots={true}
        responsive={responsive}
     // add custom class
        style={{
          backgroundColor: "red", // change dot color
          margin: "0 5px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          display: "inline-block",
        }}
      >
        <div className="p-2">
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-16 border-2">
            <Image
              className="w-full object-cover object-center rounded z-10"
              alt="earth"
              src="images/ECom.svg"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-center text-3xl font-bold mt-6">
            E-Commerce website
          </h1>
        </div>
        <div className="p-2">
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-16 border-2">
            <Image
              className="w-full object-cover object-center rounded z-10"
              alt="earth"
              src="images/ECom.svg"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-center text-3xl font-bold mt-6">
            E-Commerce website
          </h1>
        </div>
        <div className="p-2">
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-16 border-2">
            <Image
              className="w-full object-cover object-center rounded z-10"
              alt="earth"
              src="images/ECom.svg"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-center text-3xl font-bold mt-6">
            E-Commerce website
          </h1>
        </div>
        <div className="p-2">
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-16 border-2">
            <Image
              className="w-full object-cover object-center rounded z-10"
              alt="earth"
              src="images/ECom.svg"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-center text-3xl font-bold mt-6">
            E-Commerce website
          </h1>
        </div>
        {/* other slides */}
      </Carousel>
    </div>
  );
}
