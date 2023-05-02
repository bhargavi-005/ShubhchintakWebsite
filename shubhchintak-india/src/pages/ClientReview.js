import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ClientReview() {
   const responsive = {
     superLargeDesktop: {
       // the naming can be any, depends on you.
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
      <Carousel responsive={responsive}>
      <div className="bg-blue-500 m-4 rounded-xl  flex justify-center flex-col border-2">
            <div className="m-5 ml-8">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/commas.svg"
                width={100}
                height={10}
              />
            </div>
            <div className="text-start text-white text-base ml-10">
              Our Experience with Dinesh was Very Good. His knowledge and
              troubleshooting skills, makes the company a reliable one.
            </div>
            <div className="flex flex-row w-full h-full mb-5">
              <div className="ml-10 mr-3 mt-12 text-white text-xl">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/Ellipse98.svg"
                  width={110}
                  height={110}
                />
              </div>
              <div className="mt-16 text-start text-white text-xl">
                <div className="flex flex-col">
                  <div className="text-white text-2xl">Lavanya Tagra</div>
                  <div className="text-white">CEO Wellnessly club</div>
                  <div>
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/rating.svg"
                      width={100}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 m-4 rounded-xl  flex justify-center flex-col border-2">
            <div className="m-5 ml-8">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/commas.svg"
                width={100}
                height={10}
              />
            </div>
            <div className="text-start text-white text-base ml-10">
              Our Experience with Dinesh was Very Good. His knowledge and
              troubleshooting skills, makes the company a reliable one.
            </div>
            <div className="flex flex-row w-full h-full mb-5">
              <div className="ml-10 mr-3 mt-12 text-white text-xl">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/Ellipse98.svg"
                  width={110}
                  height={110}
                />
              </div>
              <div className="mt-16 text-start text-white text-xl">
                <div className="flex flex-col">
                  <div className="text-white text-2xl">Lavanya Tagra</div>
                  <div className="text-white">CEO Wellnessly club</div>
                  <div>
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/rating.svg"
                      width={100}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 m-4 rounded-xl  flex justify-center flex-col border-2">
            <div className="m-5 ml-8">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/commas.svg"
                width={100}
                height={10}
              />
            </div>
            <div className="text-start text-white text-base ml-10">
              Our Experience with Dinesh was Very Good. His knowledge and
              troubleshooting skills, makes the company a reliable one.
            </div>
            <div className="flex flex-row w-full h-full mb-5">
              <div className="ml-10 mr-3 mt-12 text-white text-xl">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/Ellipse98.svg"
                  width={110}
                  height={110}
                />
              </div>
              <div className="mt-16 text-start text-white text-xl">
                <div className="flex flex-col">
                  <div className="text-white text-2xl">Lavanya Tagra</div>
                  <div className="text-white">CEO Wellnessly club</div>
                  <div>
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/rating.svg"
                      width={100}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      
     
      </Carousel>
    </div>
  );
}


