import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Footer from "./footer";
import Header from "./Header";

function job_apply() {
  return (
    <div className="" style={{ backgroundImage: `url(${bg.src})` }}>
      <Header />
      <section className="text-white">
        <div className="container md:px-20 px-5 py-24 mx-auto">
          <h5 className=" text-center text-6xl font-bold ">
            Share your details with Us!
          </h5>
        </div>
      </section>

      <section className="text-white font-abc relative">
        <div className="container px-5 py-15 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <ul className=" flex flex-col gap-6 text-xl font-normal opacity-[0.90] ">
              <li>
                <h5>Full Name</h5>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className="mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li>
                <h6>E-mail</h6>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className="mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li>
                <h6>Mobile Number</h6>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className=" mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>
              <li>
                <h6>Expected CTC</h6>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className=" mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>
              <li>
                <h6>Location</h6>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className=" mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>
              <li>
                <h6>Education</h6>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className=" mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li>
                <h6 className="mb-5">Resume</h6>
                <div className="flex w-full  items-center justify-center bg-grey-lighter ">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-[#FFFFFF1A] text-blue rounded-lg shadow-lg tracking-wide uppercase border-dashed border-2 border-white cursor-pointer hover:bg-blue hover:text-white mb-7">
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM3 5L4.41 6.41L7 3.83V12H9V3.83L11.59 6.41L13 5L8 0L3 5Z"
                        fill="white"
                      />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Upload Resume
                    </span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
                
              </li>

              <li>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                    Apply
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default job_apply;
