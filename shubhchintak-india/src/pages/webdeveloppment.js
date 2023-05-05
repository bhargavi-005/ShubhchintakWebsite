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
import bg from "../../public/images/bg.png";
import MobFooter from "./MobFooter";
import CheckCarousel from './CheckCarousel'

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
    <div style={{ backgroundImage: `url(${bg.src})`}} >
      <Header />
      <div className="box-border font-xyz text-white  max-[1500px]:overflow-x-hidden" >

      <Carousel />

      <div className=" flex justify-center items-center text-center  flex-col my-[30px] gap-8 mx-5">
        <div className="font-abc font-extrabold text-[40px] md:text-[60px]">
          Website Development
        </div>
        <p className="font-xyz text-sm md:text-xl font-medium  lg:w-[1250px] ">
          Creating high end, most engaging Next Gen user experiences through our
          expertise in Web Development Solutions for your Unique Online Business
          Ideas.
        </p>
        <button className="w-[111px] h-[37px] bg-[#0F89FF] rounded-full text-sm lg:text-base lg:w-[160px] lg:h-[45px]">
          Get Started
        </button>
      </div>

      <div className=" flex justify-center items-center text-center mt-[80px] flex-col gap-9 mx-5 font-xyz">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[1550px] ">
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px] lg:w-[1550px]">
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

      <div className="flex justify-center mt-[40px]">
        <Image
          className=" md:w-[688px] md:h-[450px] md:mt-16 lg:w-[536px] lg:h-[350px] lg:mt-20 "
          src="/svg/overlapimg.svg"
          width="320"
          height="210"
          alt="overlap"
        />
      </div>

      <div className="flex justify-center items-center text-center mt-[95px] mx-5" >
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[837px] ">
          Get digital transformation with
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px]  lg:w-[837px]">{" "}
            {"360'"} Web Development Process!
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  my-20 lg:mx-28 gap-y-6 font-xyz">
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
          <div className="w-[315px] h-[130px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95 rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl ">Step 1</h5>
            <h6 className="text-[24px] md:text-[26px]">Ideation support</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-gray-950 bg-opacity-95 rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl ">Step 2</h5>
            <h6 className="text-[24px] md:text-[26px]">Follow Agile mythology</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95 rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl ">Step 3</h5>
            <h6 className=" text-[24px] md:text-[26px]">Formation of strategy</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95 rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl ">Step 4</h5>
            <h6 className="mx-2 text-[24px] md:text-[26px]">
              Focus on ROI and retention rate improvement
            </h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95 rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl ">Step 5</h5>
            <h6 className=" text-[24px] md:text-[26px]">Security check</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95 rounded-[4px] flex flex-col justify-center text-center font-semibold ">
            <h5 className="text-xl ">Step 6</h5>
            <h6 className="text-[24px] md:text-[26px]">Formation of strategy</h6>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center mt-[100px] mx-5 ">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[923px] ">
          We provide
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px]  lg:w-[923px]">
            {" "}
            Right Web Development Solution as per the industry!
          </span>
        </div>
      </div>
      <Carousel2 />

      <div className="flex justify-center items-center text-center mt-[100px] mx-5 ">
        <div className=" font-semibold text-[25px] md:text-[40px] lg:w-[876px] ">
          Broad spectrum of Web development Services we provide!
        </div>
      </div>

     

      <div className="text-black flex justify-center items-center flex-col mt-10">
              
              <div className=" flex flex-col md:flex-row">
                
                <div className="p-4 h-auto  bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Front-end web development
                </div>
                <div className="p-4 h-auto  bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Back-end development
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Saas Web Application development
                </div>
              </div>
              <div className=" flex flex-col md:flex-row">
                <div className="flex flex-col md:flex md:flex-row">
                 
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Feature rich web apps
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Ecommerce web apps
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Custom web development services
                  </div>
                </div>
              </div>
            </div>

      <div className="flex justify-center items-center md:mt-[70px]">
        <div className="w-[346px] h-[250px] sm:w-[450px] md:w-[688px] lg:w-[1240px] bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-[20px] my-20">
          <div className="w-[344px] h-[247px] sm:w-[447px]  md:w-[685px] lg:w-[1237px] px-3 bg-gray-950 font-semibold text-xl md:text-2xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-[20px] gap-10">
            Need complete Web development consultation?
            <button className="w-fit h-[37px] px-5 bg-[#0F89FF] rounded-full text-center text-lg ">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>

      <OurInsight />
      <div className="flex justify-center items-center text-center mt-[100px] mx-6 text-white my-10">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[1250px] ">
          {"What Our Client’s Say About Us"}
        </div>
      </div>
      <div className="m-14"><Review /></div>
      

      <div className="mt-5  m-10">
          <div className=" min-[300px]:max-[764px]:hidden min-[765px]:max-[1200px]">
            <CheckOut />
          </div>

          <div className="min-[765px]:hidden min-[300px]:max-[765px] ">
            <CheckCarousel />
          </div>
        </div>

      
        <div className=" min-[300px]:max-[709px]:hidden min-[710px]:max-[1200px]">
        <Footer/>

    </div>
    
    <div className="min-[710px]:hidden min-[300px]:max-[709px] ">
        <MobFooter/>
    </div>

     
      
      </div>
    </div>
  );
}
export default Webdev;
