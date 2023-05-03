import Header from "./Header";
import Image from "next/image";
import Carousel2 from "./carousel2";
import OurInsight from "./ourInsite";
import CheckOut from "./checkoutView";
import Footer from "./footer";
import bg from "../../public/images/bg.png";
function DMarket() {
  return (
    <div className="box-border text-white  " style={{ backgroundImage: `url(${bg.src})`}} >
      <Header />
      <div className="flex flex-col  justify-center items-center lg:justify-between lg:flex-row-reverse my-14 lg:ml-36">
        <div className=" lg:w-[50%] my-10 md:ml-16">
          <Image
            className="lg:w-[569px] lg:h-[364px]"
            src="/svg/pana.svg"
            width="247"
            height="156"
            alt="workInsight"
          />
        </div>
        <div className=" lg:w-[40%] h-auto lg:mt-42 text-center lg:text-left mx-5">
          <div className=" font-bold text-[40px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
            Digital Marketing
          </div>
          <p className="text-center font-xyz text-[14px] font-medium md:text-xl lg:text-left lg:w-[80%] my-10">
            We are a team of skilled professionals who specialize in helping
            businesses achieve their online marketing goals.
          </p>
          <button className="bg-[#0F89FF] w-[160px] h-[40px] text-center text-lg rounded-full">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-[80px] mx-5">
        <div className="font-xyz font-bold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[1550px] lg:text-[#0F89FF] ">
          Hire {"India's"} top Digital Marketing Company
        </div>
        <p className="font-xyz font-medium text-sm mt-8 md:text-xl lg:w-[1350px]">
          Our company understands the importance of effective digital marketing
          strategies, and we work tirelessly to help our clients reach their
          target audience and achieve their business objectives. Our team uses
          the latest tools and techniques to develop customized marketing plans
          that are tailored to meet the unique needs of each client.<br></br>Our
          focus is on delivering measurable results that drive business growth.
          We take a data-driven approach to digital marketing, analysing key
          performance indicators (KPIs) to track progress and make data-backed
          decisions.
        </p>

        <Image
          className="m-16 md:w-[503px] md:h-[348px]"
          src="/svg/DG2.svg"
          width="306"
          height="227"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center text-center mt-[80px] mx-5">
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
            <h6 className="text-xl">Business Assessment</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 2</h5>
            <h6 className="text-xl">Finding right Target Audience</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 3</h5>
            <h6 className="text-xl">Digital Strategy Formation</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 4</h5>
            <h6 className="text-xl mx-2">Analytic Based evalutation</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 5</h5>
            <h6 className="text-xl">Monitor the Trends</h6>
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
          Broad spectrum of Digital marketing Services we provide!
        </div>
      </div>

      <div className="grid grid-col-2 place-items-center  md:grid-cols-2 lg:grid-cols-3  lg:gap-x-0 items-center gap-4 my-8  ">
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Search engine Optimization
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Conversion rate optimization
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Pay per click marketing services
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Google Search optimization
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Social Media marketing Services
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Email Marketing
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-auto h-[250px] lg:w-[1240px] bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-[4px] my-10">
          <div className="w-[348px] h-[247px] md:w-[721px] lg:w-[1237px] px-3 bg-gray-950 font-semibold text-xl md:text-2xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-[4px] gap-10">
            Need complete Web development consultation?
            <button className="w-fit h-[37px] px-5 bg-[#0F89FF] rounded-full text-center text-lg ">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
      <CheckOut />
      <Footer />
    </div>
  );
}
export default DMarket;
