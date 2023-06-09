import React from "react";
import Image from "next/image";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function carouselsec() {

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
    
      <div className="my-20">
      <Carousel2 showDots={true}  responsive={responsive} customDot={<CustomDot/>}>
     
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="images/ECom.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px] text-center my-2">Gaming website</h5>
        </div>
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/Rectangle3.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px] text-center my-2">Education</h5>
        </div>
        <div className="p-5  ">
          <div className=" ">
                <Image
                  className="w-full object-cover object-center rounded z-10"
                  alt="earth"
                  src="/svg/Rectangle4.svg"
                  width="391"
                  height="240"
                />
          </div>
          <h5 className="text-white font-medium text-[26px] text-center my-2">Taxi Booking App</h5>
        </div>
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/Rectangle5.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px] text-center my-2">Ecommerce App</h5>
        </div>
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/Rectangle6.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px] text-center my-2">Game App</h5>
        </div>
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/Rectangle7.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px] text-center my-2">Ecommerce</h5>
        </div>
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/Rectangle8.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px]  text-center my-2">Travel & Hospitality</h5>
        </div>
        <div className="p-5">
        <div className="">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="/svg/Rectangle9.svg"
                width="391"
                height="240"
              />
        </div>
        <h5 className="text-white font-medium text-[26px] text-center my-2">FMGC</h5>
        </div>
        
       
      </Carousel2>

     
    </div>
   
  );
}
export default carouselsec;