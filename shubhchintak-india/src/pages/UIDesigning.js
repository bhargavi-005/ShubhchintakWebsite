import Image from "next/image";
import Carous from "./carousel2";
import { Carousel } from "react-responsive-carousel";
import Review from "./Review";
import Header from "./Header";
import CheckOut from "./checkoutView";
import Footer from "./footer";
import bg from "../../public/images/bg.png";
import MobFooter from "./MobFooter";
import CheckCarousel from "./CheckCarousel";

function UIDesigning() {
  return (
    <>
      <div className="" style={{ backgroundImage: `url(${bg.src})` }}>
        <Header />
        <div className="max-[1500px]:overflow-x-hidden">
        <div className="p-4 md:p-6 lg:p-16">
          <section classname="flex flex-row text-white">
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center  mx-5 ">
              <div className="md:w-[610px] mg:h-[550px] ">
                <Image
                  src="images/uxdesign.svg"
                  width="610"
                  height="420"
                  alt="workInsight"
                />
              </div>
              <div className="flex flex-col mt-5 lg:w-[40%]  text-center lg:text-left text-white">
                <div className=" font-bold text-[40px] md:text-[40px] lg:text-[60px] lg:w-[1250px] font-abc">
                  UI/UX Designing
                </div>
                <div className="lg:w-3/4 md:w-full w-full text-base md:text-2xl text-blue-200 mt-6 md:text-center lg:text-start text-center">
                  Revamp Your Digital Experience with Expert UX/UI Designing
                  Services{" "}
                </div>
                <div>
                  <button className="bg-[#0F89FF] w-[160px] h-[40px] mt-3 text-center text-lg rounded-full  lg:w-[160px] lg:h-[45px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col w-full p-6 content-center justify-items-center mt-24">
              <div className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500">
                Hire {"India's"} top Graphic Designing Company
              </div>
              <div className="text-white mt-8 text-base md:text-2xl text-center">
                We design a new dimension of success for our clients by
                providing excellent user interfaces for their digital solutions.
                We firstly understand the requirements of the client then
                understand their business and after in depth research shows
                various designs available which can suit best to the needs of{" "}
                {"client's"} business.
              </div>
              <div className="place-self-center lg:max-w-lg lg:w-full md:w-1/3 w-5/6  m-12">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/Gdcompany.svg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="text-3xl md:text-5xl lg:text-6xl  text-white p-4 md:p-4 lg:p-12 font-bold text-center ml-0 mr-0 md:ml-6 md:mr-6 lg:ml-32 lg:mr-32">
              Transform your digital journey with
              <span className="text-blue-500">
                {" 360'"}{" "}
                <span className="lg:mt-3 md:mt-2 mt-2">
                  UI/UX Designing Process!
                </span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  my-20 lg:mx-28 gap-y-6 font-xyz">
              <div className="w-4/5 h-auto p-1   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
                <div className="w-full p-10 bg-zinc-900  rounded-[4px] flex flex-col justify-center text-center ">
                  <div className="text-xl text-white m-2 mt-0 font-bold">
                    Step 1
                  </div>
                  <div className="text-2xl text-white font-bold">
                    UX/UI Audit
                  </div>
                </div>
              </div>
              <div className="w-4/5 h-auto p-1    bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                <div className="w-full h-full p-10  bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0 font-extrabold">
                    Step 2
                  </div>
                  <div className="text-2xl text-white font-bold">
                    User Research
                  </div>
                </div>
              </div>
              <div className="w-4/5 h-auto p-1   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                <div className="w-full h-full p-10 bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0 font-bold">
                    Step 3
                  </div>
                  <div className="text-2xl text-white font-bold">
                    Strategy formation
                  </div>
                </div>
              </div>
              <div className="w-4/5 h-auto p-1   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
                <div className="w-full h-full p-10 bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0 font-bold">
                    Step 4
                  </div>
                  <div className="text-2xl text-white font-bold">
                    UX Design creation
                  </div>
                </div>
              </div>
              <div className="w-4/5 h-auto p-1   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
                <div className="w-full h-full p-10 bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-4 2 mt-0 font-bold">
                    Step 5
                  </div>
                  <div className="text-2xl text-white font-bold">
                    User Interface development
                  </div>
                </div>
              </div>
              <div className="w-4/5 h-auto p-1   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
                <div className="w-full h-full p-10 bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0 font-bold">
                    Step 6
                  </div>
                  <div className="text-2xl text-white font-bold">
                    Deployment & Support
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="text-3xl md:text-5xl lg:text-6xl text-white text-center lg:p-12 mt-12 md:mt-20 font-bold">
              We provide
              <span className="text-blue-500">
                {" "}
                Right UI/UX Designing services as per the industry!
              </span>
            </div>
            <div className="text-white text-4xl md:text-6xl text-center">
              <Carous />
            </div>
          </section>

          <section>
            <div className="text-3xl md:text-5xl lg:text-6xl text-white text-center lg:p-12 mt-12 md:mt-20 font-bold">
              Broad spectrum of UI/UX Designing Services we provide!
            </div>
            <div className="item-center justify-center flex flex-col md:flex-row">
              <div className="flex flex-row">
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold">
                  Branding
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  UI designs
                </div>
              </div>
              <div className="flex flex-row">
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold">
                  Marketing collateral
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Social Media design
                </div>
              </div>
              {/* <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                Marketing collateral
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                Social Media design
              </div> */}
            </div>
            <div className="item-center justify-center flex flex-col md:flex-row">
              <div className="flex flex-row">
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Newsletter & emailers
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Videos
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center text-white">
              <div className="w-3/4 p-1 bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-3xl my-20">
                <div className="w-full h-[247px]  px-3 bg-zinc-900 font-semibold text-xl md:text-3xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-3xl gap-10">
                  Need complete UI/UX Designing consultation?
                  <button className="w-fit h-auto p-2 px-5 bg-blue-500 hover:bg-blue-700 rounded-full text-center text-lg ">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div className="flex justify-center items-center text-center mt-[80px] mx-6 ">
                <div className="mt-12 font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1250px] text-white">
                  Our UI/UX Development work insights!
                </div>
              </div>

              <div className="flex flex-col  lg:flex-row-reverse my-14 ">
                <div className="lg:w-[50%] md:ml-8">
                  <Image
                    src="/svg/workInsight.svg"
                    width="610"
                    height="420"
                    alt="workInsight"
                  />
                </div>
                <div className="lg:w-[40%] h-auto text-white">
                  <h6 className="font-medium text-[20px] md:text-[30px] my-6">
                    The Tusk
                  </h6>
                  <ul>
                    <li className=" mb-4 flex flex-row text-white">
                      <div className="mr-2  mb-9 md:w-[5%]">
                        <Image
                          src="/svg/tick.svg"
                          width="40"
                          height="17"
                          alt="tick"
                        />
                      </div>
                      <div className="font-xyz text-sm font-medium  ">
                        <span className="text-[#0F89FF]">
                          Problem addressed:
                        </span>{" "}
                        The Tusk addresses the need for more sustainable and
                        eco-friendly products in the market.
                      </div>
                    </li>
                    <li className=" mb-4 flex flex-row">
                      <div className="mr-2 mb-9  w-[13%] md:w-[6%]">
                        <Image
                          src="/svg/tick.svg"
                          width="40"
                          height="17"
                          alt="tick"
                        />
                      </div>
                      <div className="font-xyz text-sm font-medium ">
                        <span className="text-[#0F89FF]">Key features: </span>
                        The store sells accessories and daily necessary goods
                        made of bamboo, promoting a sustainable and organic
                        lifestyle.
                      </div>
                    </li>

                    <li className=" mb-4 flex flex-row ">
                      <div className="mr-2 mb-9 w-[16%] md:w-[7%]">
                        <Image
                          src="/svg/tick.svg"
                          width="40"
                          height="17"
                          alt="tick"
                        />
                      </div>
                      <div className="font-xyz text-sm font-medium ">
                        <span className="text-[#0F89FF] font-xyz text-sm font-medium">
                          User-friendly interface:{" "}
                        </span>
                        The {"store's"} website and mobile app have a
                        user-friendly interface, making it is easy for customers
                        to purchase eco-friendly products.
                      </div>
                    </li>
                    <li className="mb-4 flex flex-row ">
                      <div className="mr-2 mb-9 w-[19%] md:w-[8%]">
                        <Image
                          src="/svg/tick.svg"
                          width="40"
                          height="17"
                          alt="tick"
                        />
                      </div>
                      <div className="font-xyz text-sm font-medium ">
                        <span className="text-[#0F89FF]">
                          Impact on business:{" "}
                        </span>
                        The Tusk has seen an increase in traffic and sales on
                        its website, as well as increased customer satisfaction,
                        as a result of offering eco-friendly products.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl text-white text-center lg:p-12 mt-12 md:mt-20 font-bold">
                What Our {"Client's"} Say About Us
              </div>
              <div className="ml-4 mt-6 md:m-20">
                <Review />
              </div>
            </div>
          </section>

          <section>
            <div className="mt-5 md:ml-0 ml-10">
              <div className=" min-[300px]:max-[764px]:hidden min-[765px]:max-[1200px]">
                <CheckOut />
              </div>

              <div className="min-[765px]:hidden min-[300px]:max-[765px] ">
                <CheckCarousel />
              </div>
            </div>
          </section>
        </div>
        <div className="mt-5">
          <div className=" min-[300px]:max-[764px]:hidden min-[765px]:max-[1200px]">
            <Footer />
          </div>

          <div className="min-[765px]:hidden min-[300px]:max-[765px] ">
            <MobFooter />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default UIDesigning;
