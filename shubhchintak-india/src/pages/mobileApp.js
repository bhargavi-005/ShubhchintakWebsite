import Header from "./Header";
import Image from "next/image";
import Carousel2 from "./carousel2";
import OurInsight from "./ourInsite";
import Review from "./Review";
import CheckOut from "./checkoutView";
import Footer from "./footer";
import bg from "../../public/images/bg.png";

function MobileApp() {
  return (
    <div className="box-border text-white  " style={{ backgroundImage: `url(${bg.src})`}} >
      <Header />
      <div className="flex flex-col    lg:flex-row-reverse my-14">
        <div className=" lg:w-[50%] md:ml-16">
          <Image
            src="/svg/Mobile1.svg"
            width="610"
            height="420"
            alt="workInsight"
          />
        </div>
        <div className=" lg:w-[40%] h-auto lg:mt-56 text-center lg:text-left mx-5">
          <div className=" font-bold text-[40px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
            Mobile App Development
          </div>
          <p className="text-center font-xyz text-[14px] font-medium md:text-xl lg:text-left lg:w-[80%] ">
            We are a team of skilled professionals dedicated to providing
            high-quality mobile app development services to businesses and
            individuals worldwide.
          </p>
          <button className="bg-[#0F89FF] w-[160px] h-[40px] text-center text-lg rounded-full">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-[80px] mx-5">
        <div className="font-xyz font-bold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[1550px] ">
          <span className="text-[#0F89FF] font-bold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[1550px]">
            Hire {"India's"} top Mobile App development Company
          </span>{" "}
          to create your Ultimate Mobile App development Solutions!
        </div>
        <p className="font-xyz font-medium text-sm mt-8 md:text-xl lg:w-[1350px]">
          Our company has years of experience in developing mobile applications
          for various platforms, including iOS, Android, and cross-platform
          solutions. We have successfully completed numerous projects for
          clients from diverse industries, ranging from small startups to large
          enterprises.We understand that every business has unique requirements,
          and {"that's"} why we provide customized app development solutions
          tailored to your specific needs. Our team works closely with you to
          understand your business goals and objectives, and then develops an
          app that aligns with your vision.
        </p>

        <Image
          className="m-16 md:w-[407px] md:h-[467px]"
          src="/svg/Mobile2.svg"
          width="197"
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
            <h6 className="text-xl">Mobile App strategy</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 2</h5>
            <h6 className="text-xl"> User experience Design</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 3</h5>
            <h6 className="text-xl">Mobile Application Development</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 4</h5>
            <h6 className="text-xl mx-2">Mobile App Testing</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 5</h5>
            <h6 className="text-xl">Mobile app launching</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center">
            <h5 className="text-base ">Step 6</h5>
            <h6 className="text-xl">24/7 support</h6>
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

      <div className="grid grid-col-2 place-items-center  md:grid-cols-2 lg:grid-cols-3  lg:gap-x-0 items-center gap-4 my-10  mx-5">
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Hybired App
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          IOS App
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Web User Interface
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Backend
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          Android App
        </div>
        <div className="bg-white w-fit h-fit text-black rounded-full p-5 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
          App User Interface
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
export default MobileApp;
