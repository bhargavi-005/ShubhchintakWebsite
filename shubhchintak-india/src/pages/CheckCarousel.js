import React from "react";
import Image from "next/image";
import Carousel4 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

function carouselClient() {

    const CustomDot = ({ onClick, ...rest }) => {
        const {
          active,
        } = rest;
        return (
          <button
            className={active ? "w-[14px] h-[14px] rounded-[7px] bg-gray-600 mx-1" : "w-[14px] h-[14px] rounded-[7px] bg-white mx-1"}
            onClick={() => onClick()}
          />
        );
      };
  
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

    
      <div >
      <div className="flex justify-center items-center text-center mt-[80px] mx-6 text-white my-20">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[1250px] ">
          Check out Our Other Services !
        </div>
      </div>
      <Carousel4 showDots={true}  responsive={responsive} customDot={<CustomDot/>} className="my-20">
      
      <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
        <div className="w-[292px] h-[314px] bg-gray-800 p-7">
          <Image
            className="object-cover object-center rounded "
            alt="earth"
            src="images/img1.svg"
            width={300}
            height={300}
          />

          <div className="text-white text-xl text-center font-medium  mt-6">
            <Link href="/websitedev"> Website Development</Link>
          </div>
        </div>
      </div>
      <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
        <div className="w-[292px] h-[314px] bg-gray-800 p-8">
          <Image
            className="object-cover object-center rounded  ml-5"
            alt="earth"
            src="images/img2.svg"
            width="192"
            height="184"
          />

          <div className="text-white text-xl text-center font-medium  mt-6">
            <Link href="/mobileappdev"> App Development</Link>
          </div>
        </div>
      </div>
      <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
        <div className="w-[292px] h-[314px] bg-gray-800 p-7">
          <Image
            className="object-cover object-center rounded "
            alt="earth"
            src="images/img3.svg"
            width={300}
            height={300}
          />

          <div className="text-white text-xl text-center font-medium  mt-6">
            <Link href="/digitalMarketing"> Digital Marketing </Link>
          </div>
        </div>
      </div>
      <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
        <div className="w-[292px] h-[314px] bg-gray-800 p-7">
          <Image
            className="object-cover object-center rounded "
            alt="earth"
            src="images/img4.svg"
            width={300}
            height={300}
          />

          <div className="text-white text-xl text-center font-medium  mt-6">
            <Link href="/UIUXdev"> UI/UX Designing</Link>
          </div>
        </div>
      </div>
      <div className="lg:col-start-2 md:col-start-1 w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
        <div className="w-[292px] h-[314px] bg-gray-800 p-7">
          <Image
            className="object-cover object-center rounded "
            alt="earth"
            src="images/img5.svg"
            width={300}
            height={300}
          />

          <div className="text-white text-xl text-center font-medium  mt-6">
            <Link href="/cloudcunsuldev">Cloud Development</Link>
          </div>
        </div>
      </div>
      <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
        <div className="w-[292px] h-[314px] bg-gray-800 p-7">
          <Image
            className="object-cover object-center rounded  ml-5"
            alt="earth"
            src="images/img6.svg"
            width="192"
            height="190"
          />

          <div className="text-white text-xl text-center font-medium  mt-6">
            <Link href="/VrArdev">VR/AR Development </Link>
          </div>
        </div>
      </div>
        
       
      </Carousel4>

     
    </div>
   
  );
}
export default carouselClient;