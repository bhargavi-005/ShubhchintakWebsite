import Header from "./Header";
import Image from "next/image";
import Carousel2 from "./carousel2";
import OurInsight from "./ourInsite";
import Review from "./Review";
import CheckOut from "./checkoutView";
import Footer from "./footer";
import bg from "../../public/images/bg.png";
import MobFooter from "./MobFooter";
import CheckCarousel from './CheckCarousel'

function MobileApp() {
  return (
    <div className="box-border text-white font-xyz max-[1500px]:overflow-x-hidden" style={{ backgroundImage: `url(${bg.src})`}} >
     <Header/>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center  mx-5 ">
        <div className="md:w-[610px] mg:h-[550px] ml-10">
          <Image
            src="/svg/Mobile1.svg"
            width="610"
            height="420"
            alt="workInsight"
          />
        </div>
        <div className="flex flex-col gap-6 lg:w-[40%]  text-center lg:text-left ">
          <div className=" font-bold text-[40px] md:text-[40px] lg:text-[60px] lg:w-[1250px] font-abc">
            Mobile App Development
          </div>
          <p className="text-center font-xyz text-[14px] font-medium md:text-xl lg:text-left lg:w-[80%] ">
            We are a team of skilled professionals dedicated to providing
            high-quality mobile app development services to businesses and
            individuals worldwide.
          </p>
          <div>
          <button className="bg-[#0F89FF] w-[160px] h-[40px] text-center text-lg rounded-full  lg:w-[160px] lg:h-[45px]">
            Get Started
          </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-[80px] mx-5">
        <div className="font-xyz font-semibold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[1150px] ">
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[1150px]">
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
          className="mt-16 md:w-[407px] md:h-[467px]"
          src="/svg/Mobile2.svg"
          width="197"
          height="227"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center text-center mt-[100px] mx-5">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[1088px] ">
        Transform your User Experience with
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px] lg:w-[1088px]">{"  "}
            {"360'"}  Mobile App Development Process!
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  mt-[40px] lg:mx-28 gap-y-6 font-xyz">
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
          <div className="w-[315px] h-[130px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95  rounded-[4px] flex flex-col justify-center text-center font-semibold ">
            <h5 className="text-xl  ">Step 1</h5>
            <h6 className="text-[24px] md:text-[26px]">Mobile App strategy</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-gray-950 bg-opacity-95  rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl  ">Step 2</h5>
            <h6 className="text-[24px] md:text-[26px]"> User experience Design</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95  rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl ">Step 3</h5>
            <h6 className="text-[24px] md:text-[26px]">Mobile Application Development</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95  rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl  ">Step 4</h5>
            <h6 className="text-[24px] md:text-[26px] mx-2">Mobile App Testing</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950  bg-opacity-95  rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl  ">Step 5</h5>
            <h6 className="text-[24px] md:text-[26px]">Mobile app launching</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 bg-opacity-95  rounded-[4px] flex flex-col justify-center text-center font-semibold">
            <h5 className="text-xl  ">Step 6</h5>
            <h6 className="text-[24px] md:text-[26px]">24/7 support</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center md:mt-[160px]">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[774px] ">
          We provide
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px]  lg:w-[774px]">
            {" "}
            Right Mobile App Solution as per the industry!
          </span>
        </div>
      </div>
      <Carousel2 />

      <div className="flex justify-center items-center text-center mt-[80px] ">
        <div className=" font-semibold text-[25px] md:text-[40px] lg:w-[912px] ">
        Broad spectrum of Mobile App development services we provide!
        </div>
      </div>

      
      <div className="text-black flex justify-center items-center flex-col mt-10">
              
              <div className=" flex flex-row">
                
                <div className="p-4 h-auto  bg-white rounded-full m-3 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Hybired App
                </div>
                <div className="p-4 h-auto  bg-white rounded-full m-3 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Web User Interface
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-3 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                IOS App
                </div>
              </div>
              <div className=" flex flex-col md:flex-row">
                <div className="flex flex-row ">
                 
                  <div className="p-4 h-auto bg-white rounded-full m-3 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Backend
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-3 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Android App
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-3 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  App User Interface
                  </div>
                </div>
              </div>
      </div>



      <div className="flex justify-center items-center md:mt-[100px]">
        <div className="w-[346px]  h-[250px] sm:w-[450px] md:w-[688px] lg:w-[1240px] bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-[20px] my-20">
          <div className="w-[344px]  h-[247px] sm:w-[447px] md:w-[685px] lg:w-[1237px] px-3 bg-gray-950 font-semibold text-xl md:text-2xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-[20px] gap-10">
          Need complete Mobile App development consultation?
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
      <div className="ml-1"><Review /></div>

      <div className="mt-5 md:ml-0 m-14">
          <div className=" min-[300px]:max-[764px]:hidden min-[765px]:max-[1200px]">
            <CheckOut />
          </div>

          <div className="min-[765px]:hidden min-[300px]:max-[765px] ">
            <CheckCarousel />
          </div>
        </div>

      
      <div className=" min-[300px]:max-[480px]:hidden min-[481px]:max-[1200px]">
          <Footer/>
  
      </div>
      
      <div className="min-[481px]:hidden min-[300px]:max-[480px] ">
          <MobFooter/>
      </div>
    </div>
  );
}
export default MobileApp;
