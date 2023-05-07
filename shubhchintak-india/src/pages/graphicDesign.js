import Image from "next/image";
import Carousel2 from "./carousel2";
import Header from "./Header";
import CheckOut from "./checkoutView";
import Footer from "./footer";
import bg from "../../public/images/bg.png";
import MobFooter from "./MobFooter";
import CheckCarousel from './CheckCarousel'
function GraphicD() {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`}} >
    <Header />
    <div className="box-border text-white font-xyz max-[1500px]:overflow-x-hidden " >
      
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-16 ">
        <div className="  my-10 md:ml-16">
          <Image
            className="lg:w-[493px] lg:h-[586px]"
            src="/svg/GD1.svg"
            width="247"
            height="156"
            alt="workInsight"
          />
        </div>
        <div className=" lg:w-[40%] h-auto lg:mt-42 text-center lg:text-left mx-5">
          <div className="font-abc font-bold text-[40px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
            Graphic Designing
          </div>
          <p className="text-center font-xyz text-[14px] font-medium md:text-xl lg:text-left lg:w-[80%] my-10">
            Transform Your Vision into Stunning Visuals with Our Graphic Design
            Services!
          </p>
          <button className="bg-[#0F89FF] w-[160px] h-[40px] text-center text-lg rounded-full  lg:w-[160px] lg:h-[45px]">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-[100px]  mx-5">
        <div className="font-xyz font-bold text-[25px] md:text-[40px] lg:text-[40px] lg:w-[900px] text-[#0F89FF]">
          Hire {"India's"} top Graphic Designing Company
        </div>
        <p className="font-xyz font-medium text-sm mt-8 md:text-xl lg:w-[1350px]">
          At Shubhchintak Technology, a design is more than just an art. It is
          treated as an integral part of visual communication that helps cement
          brands, whether a startup or an established enterprise, in the minds
          of the target audience. We are known for our best graphics designs in
          the market.
        </p>

        <Image
          className="m-16 md:w-[435px] md:h-[412px]"
          src="/svg/GD2.svg"
          width="306"
          height="227"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center text-center mt-[100px] mx-5">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[1088px] ">
          Get digital transformation with
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px]  lg:w-[1088px]">{" "}
            {"360'"} Graphic Designing Process!
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  my-20 lg:mx-28 gap-y-6 font-xyz">
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
          <div className="w-[315px] h-[130px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950  rounded-[4px] flex flex-col justify-center text-center font-semibold ">
            <h5 className="text-xl ">Step 1</h5>
            <h6 className="text-[24px] md:text-[26px]">
              Share brief details of your requirements
            </h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-gray-950 rounded-[4px] flex flex-col justify-center text-center  font-semibold">
            <h5 className="text-xl ">Step 2</h5>
            <h6 className="text-[24px] md:text-[26px]">Assigned to Designer</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center  font-semibold">
            <h5 className="text-xl ">Step 3</h5>
            <h6 className="text-[24px] md:text-[26px]">Sharing of graphics created with you</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center  font-semibold">
            <h5 className="text-xl ">Step 4</h5>
            <h6 className="text-[24px] md:text-[26px] mx-2">Edits can be made</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center  font-semibold">
            <h5 className="text-xl ">Step 5</h5>
            <h6 className="text-[24px] md:text-[26px]">Final your graphics</h6>
          </div>
        </div>
        <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
          <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-gray-950 rounded-[4px] flex flex-col justify-center text-center  font-semibold">
            <h5 className="text-xl ">Step 6</h5>
            <h6 className="text-[24px] md:text-[26px]">Download your file</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-[80px] mx-5">
        <div className=" font-semibold text-[25px] md:text-[40px] lg:w-[926px] ">
          We provide
          <span className="text-[#0F89FF] font-semibold text-[25px] md:text-[40px] lg:w-[926px]">
            {" "}
            Right Graphic Designing services as per the industry!
          </span>
        </div>
      </div>
      <Carousel2 />

      <div className="flex justify-center items-center text-center md:mt-[110px] ">
        <div className=" font-semibold text-[25px] md:text-[40px]  lg:w-[778px] ">
          Broad spectrum of Graphic Designing Services we provide!
        </div>
      </div>

      

      <div className="text-black flex justify-center items-center flex-col mt-10 ">
              
              <div className=" flex flex-col md:flex-row">
                
                <div className="p-4 h-auto  bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Logo and Identity designing
                </div>
                <div className="p-4 h-auto  bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Product packaging design
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                Advertisement Creatives
                </div>
              </div>
              <div className=" flex flex-col md:flex-row">
                <div className="flex flex-col md:flex md:flex-row">
                 
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Web graphics
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Brochures, Flyers, Leaflets, Menus
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-base md:text-[20px] lg:text-[26px] font-semibold text-center">
                  Advertisement Creatives
                  </div>
                </div>
              </div>
            </div>


      <div className="flex justify-center items-center md:mt-[70px]">
        <div className="w-[346px] h-[250px] sm:w-[450px] md:w-[688px] lg:w-[1240px] bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-[20px] my-20">
          <div className="w-[344px] h-[247px] sm:w-[447px]  md:w-[685px] lg:w-[1237px] px-3 bg-gray-950 font-semibold text-xl md:text-2xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-[20px] gap-10">
          Need complete Graphic Designing consultation?
            <button className="w-fit h-[37px] px-5 bg-[#0F89FF] rounded-full text-center text-lg ">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5  m-14">
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
export default GraphicD;
