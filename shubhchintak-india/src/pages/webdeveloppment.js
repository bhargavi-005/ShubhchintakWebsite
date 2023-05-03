import React from "react";
import Header from "./Header";
import Image from "next/image";
import OurInsight from "./ourInsite";
import Carousel from "./carousel";
import carouselUI from "./carousel";
import carouselsec from "./carousel2";
import Carousel2 from "./carousel2";
import CheckOut from "./checkoutView";
import Review from "./Review";
import Footer from "./footer";

function Webdev() {
  // let slides = undefined;

  // if (typeof window !== "undefined") {
  //   slides = document.querySelector(".slide");
  //   // rest of the code
  // }

  // const btnpressprev = () => {
  //   if (slides) {
  //     let width = slides.clientWidth;
  //     slides.scrollLeft = slides.scrollLeft - width;
  //     console.log(width);
  //   }
  // };

  // const btnpressnext = () => {
  //   if (slides) {
  //     let width = slides.clientWidth;
  //     slides.scrollLeft = slides.scrollLeft + width;
  //     console.log(width);
  //   }
  // };

  return (
    <div className="box-border text-white    ">
      <Header />

      <Carousel />

      <div className=" flex justify-center items-center text-center  flex-col gap-9 mx-5">
        <div className="font-[Roboto] font-extrabold text-[40px] md:text-[60px]">
          Website Development
        </div>
        <p className="font-xyz text-sm md:text-xl font-medium  lg:w-[1250px] ">
          Creating high end, most engaging Next Gen user experiences through our
          expertise in Web Development Solutions for your Unique Online Business
          Ideas.
        </p>
        <button className="w-[111px] h-[37px] bg-[#0F89FF] rounded-full text-sm">
          Get Started
        </button>
      </div>

      <div className=" flex justify-center items-center text-center mt-[80px] flex-col gap-9 mx-5">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1550px] ">
          <span className="text-[#0F89FF] font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1550px]">
            Hire {"India's"} top Web development Company
          </span>{" "}
          to create your Next Gen Web development Solutions!
        </div>
        <p className="font-xyz text-sm md:text-xl font-medium lg:w-[1250px] ">
          We believe in providing top quality web development solutions for our
          clients. With acceptance of advance technology and prominent
          experience in the industry in providing successful digital solutions,
          we perform both front end and back end built for web development. We
          discuss, design, develop and deploy client based, goal and growth
          oriented web solutions. We have created websites for most challenging
          business ideas, this makes us different.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <Image
          className=" md:w-[688px] md:h-[450px] md:mt-16 lg:w-[536px] lg:h-[350px] lg:mt-20 "
          src="/svg/overlapimg.svg"
          width="320"
          height="210"
          alt="overlap"
        />
      </div>

      <div className="flex justify-center items-center text-center mt-[80px]">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1550px] ">
          Get digital transformation with
          <span className="text-[#0F89FF] font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1550px]">
            {"360'"} Web Development Process!
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  my-20 lg:mx-28 gap-y-6 font-xyz">
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
          <div className="w-[315px] h-[130px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950  rounded-[4px] flex flex-col justify-center text-center ">
            <h5 className="text-base ">Step 1</h5>
            <h6 className="text-xl">Ideation support</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 2</h5>
            <h6 className="text-xl">Follow Agile mythology</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 3</h5>
            <h6 className="text-xl">Formation of strategy</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 4</h5>
            <h6 className="text-xl mx-2">
              Focus on ROI and retention rate improvement
            </h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 5</h5>
            <h6 className="text-xl">Security check</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 6</h5>
            <h6 className="text-xl">Formation of strategy</h6>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center mt-[80px]">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
          We provide
          <span className="text-[#0F89FF] font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1550px]">
            {" "}
            Right Web Development Solution as per the industry!
          </span>
        </div>
      </div>
      <Carousel2 />

      <div className="flex justify-center items-center text-center mt-[80px] ">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
          Broad spectrum of Web development Services we provide!
        </div>
      </div>

      <div className="grid content-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-x-0 items-center gap-4 my-12 mx-5 ">
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Front-end web development
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Back-end development
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Saas Web Application development
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Feature rich web apps
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Ecommerce web apps
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Custom web development services
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-auto h-[250px] lg:w-[1240px] bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-[4px] my-20">
          <div className="w-[348px] h-[247px] md:w-[721px] lg:w-[1237px] px-3 bg-gray-950 font-semibold text-xl md:text-2xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-[4px] gap-10">
            Need complete Web development consultation?
            <button className="w-fit h-[37px] px-5 bg-[#0F89FF] rounded-full text-center text-lg ">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>

      <OurInsight />
      <div className="flex justify-center items-center text-center mt-[80px] mx-6 text-white my-10">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
          {"What Our Client’s Say About Us"}
        </div>
      </div>
      <Review />

      <CheckOut />

      <Footer />
    </div>
  );
}
export default Webdev;
