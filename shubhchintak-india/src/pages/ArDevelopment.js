import Image from "next/image";
import CheckOut from "./checkoutView";
import Header from "./Header";
import CasouselUi from "./carouselUI";
import Footer from "./footer";
import bg from "../../public/images/bg.png";
import MobFooter from "./MobFooter";

export default function ArDevelopment() {
  return (
    <>
      <div className="" style={{ backgroundImage: `url(${bg.src})` }}>
        <Header />
        <div className="p-16">
          <section classname="flex flex-row text-white">
            <div className="container  flex md:flex-row flex-col-reverse items-center">
              <div className="w-4/5 m-12">
                <div className="text-4xl md:text-6xl text-white font-bold">
                  VR/AR Development
                </div>
                <div className="w-3/4 text-base md:text-2xl text-blue-200 mt-8">
                  Step into the Future with Cutting-Edge VR/AR Services!
                </div>
                <button className="bg-blue-500 w-1/3 mt-8 p-3 rounded-full text-white font-semibold text-base md:text-2xl">
                  Get Started
                </button>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-12">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/pana.svg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col w-full p-16 content-center justify-items-center mt-24">
              <div className="text-center text-4xl md:text-6xl font-bold text-blue-500">
                Hire {"India's"} top VR/AR Service Provider
              </div>
              <div className="text-white mt-8 m-16 text-base md:text-2xl text-center">
                Shubhchintak Technology is a leading AR VR development company
                that uses the immersive power of augmented and virtual reality
                to enthrall a {"company’s"} users and multiply their ROI. AR VR
                technologies are used to aid businesses in providing a virtual
                environment akin to that of a real world to their target
                audience to help drive better outcomes in minimal cost, time and
                effort.
              </div>
              <div className="place-self-center lg:max-w-lg lg:w-full md:w-1/3 w-5/6  m-12">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/cuate.svg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="text-4xl md:text-6xl  text-white p-12 font-bold text-center ml-44 mr-44">
              Transform your digital journey with
              <span className="text-blue-500">
                <div className="mt-5">{" 360'"} VR/AR Process!</div>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  my-20 lg:mx-28 gap-y-6 font-xyz">
              <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
                <div className="w-[315px] h-[130px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900  rounded-[4px] flex flex-col justify-center text-center ">
                  <div className="text-xl text-white m-2 mt-0">Step 1</div>
                  <div className="text-2xl text-white">Consultation</div>
                </div>
              </div>
              <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0">Step 2</div>
                  <div className="text-2xl text-white">Concept development</div>
                </div>
              </div>
              <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0">Step 3</div>
                  <div className="text-2xl text-white">
                    Design & Development
                  </div>
                </div>
              </div>

              <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
                <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-2 mt-0">Step 4</div>
                  <div className="text-2xl text-white">
                    Testing & Quality Assurance
                  </div>
                </div>
              </div>
              <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                  <div className="text-xl text-white m-4 2 mt-0">Step 5</div>
                  <div className="text-2xl text-white">
                    Deployment & Support
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="text-white text-4xl md:text-6xl text-center m-12 md:m-20 p-4 md:p-16 font-bold">
              We provide
              <span className="text-blue-500">
                {" "}
                right VR/AR services as per the industry!
              </span>
            </div>
            <div className="text-white text-4xl md:text-6xl text-center">
              <CasouselUi />
            </div>
          </section>

          <section>
            <div>
              <div className="text-4xl md:text-6xl text-white text-center p-12 mt-12 md:mt-20 font-bold">
                Broad spectrum of AR Services we provide!
              </div>
              <div className="item-center justify-center flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row">
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Image based recognition
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Location based recognition
                  </div>
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Project based recognition
                </div>
              </div>
              <div className="item-center justify-center flex flex-col md:flex-row">
                <div className="flex flex-row">
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Superimposition-Based Recognition
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl text-white text-center p-12 mt-12 md:mt-20 font-bold">
                Broad spectrum of VR Services we provide!
              </div>
              <div className="item-center justify-center flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row">
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Machine Part Simulation
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Floor Planning Simulation
                  </div>
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Space Assembly Line Simulation
                </div>
              </div>
              <div className="item-center justify-center flex flex-col md:flex-row">
                <div className="flex flex-col md:flex md:flex-row">
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Prototype Simulation
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Spray Painting Simulation
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Real State Visual Simulation
                  </div>
                </div>
              </div>
              <div className="item-center justify-center flex flex-col md:flex-row">
                <div className="flex flex-col md:flex md:flex-row">
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Human Anatomy Simulation(for medical purpose)
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Assembly Process Simulation
                  </div>
                </div>
              </div>
              <div className="item-center justify-center flex flex-col md:flex-row">
                <div className="flex flex-col md:flex md:flex-row">
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Skill Training Simulation/ Practice Simulation
                  </div>
                  <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                    Driving Simulation
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-3/2 border text-center p-8 md:p-20 items-center bg-zinc-800 ml-6 md:ml-20 mt-12 md:mt-20 content-center mr-6 md:mr-20 rounded-2xl">
            <div className="text-2xl md:text-4xl text-white font-bold m-3 md:m-5">
              Need complete VR/AR consultation?
            </div>
            <button className="text-white font-semibold bg-blue-500 p-4 mt-8 text-2xl rounded-full">
              Contact our experts
            </button>
          </div> */}
            <div className="flex justify-center items-center text-white">
              <div className="w-3/4 p-1 bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-3xl my-20">
                <div className="w-full h-[247px]  px-3 bg-zinc-900 font-semibold text-xl md:text-3xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-3xl gap-10">
                  Need complete VR/AR consultation?
                  <button className="w-fit h-auto p-2 px-5 bg-[#0F89FF] rounded-full text-center text-lg ">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <CheckOut />
          </section>
        </div>
        <div className="mt-5">
          <div className=" min-[390px]:max-[480px]:hidden min-[481px]:max-[1200px]">
            <Footer />
          </div>

          <div className="min-[481px]:hidden min-[390px]:max-[480px] ">
            <MobFooter />
          </div>
        </div>
      </div>
    </>
  );
}
