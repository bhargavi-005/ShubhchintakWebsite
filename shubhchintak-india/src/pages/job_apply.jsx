import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Footer from "./footer";
import Header from "./Header";
import MobFooter from "./MobFooter";

function job_apply() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" max-[1500px]:overflow-x-hidden   "
    >
      <Header />
      <section className="text-white">
        <div className="container md:px-20 px-5 py-24 mx-auto">
          <h5 className=" text-center text-6xl font-bold ">
            Share your details with Us!
          </h5>
        </div>
      </section>

      <section className="text-white font-abc">
        <div className="container mx-auto flex flex-col px-5 py-18 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 justify-center items-center text-center">
            <div className="flex w-full flex-col justify-center items-center">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  for="hero-field"
                  className="leading-7 text-xl font-normal opacity-60 text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full text-white text-medium text-lg border-b-2 border-opacity-60 border-white focus:outline-none focus:border-b-white focus:border-opacity-60  bg-transparent focus:bg-transparent  outline-none  py-1  leading-6 mb-7 "
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  for="hero-field"
                  className="leading-7 text-xl font-normal opacity-60 text-white"
                >
                  E-mail
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full text-white text-medium text-lg border-b-2 border-opacity-60 border-white focus:outline-none focus:border-b-white focus:border-opacity-60  bg-transparent focus:bg-transparent  outline-none  py-1  leading-6 mb-7 "
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  for="hero-field"
                  className="leading-7 text-xl font-normal opacity-60 text-white"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full text-white text-medium text-lg border-b-2 border-opacity-60 border-white focus:outline-none focus:border-b-white focus:border-opacity-60  bg-transparent focus:bg-transparent  outline-none  py-1  leading-6 mb-7 "
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  for="hero-field"
                  className="leading-7 text-xl font-normal opacity-60 text-white"
                >
                  Expected CTC
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full text-white text-medium text-lg border-b-2 border-opacity-60 border-white focus:outline-none focus:border-b-white focus:border-opacity-60  bg-transparent focus:bg-transparent  outline-none  py-1  leading-6 mb-7 "
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  for="hero-field"
                  className="leading-7 text-xl font-normal opacity-60 text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full text-white text-medium text-lg border-b-2 border-opacity-60 border-white focus:outline-none focus:border-b-white focus:border-opacity-60  bg-transparent focus:bg-transparent  outline-none  py-1  leading-6 mb-7 "
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  for="hero-field"
                  className="leading-7 text-xl font-normal opacity-60 text-white"
                >
                  Education
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full text-white text-medium text-lg border-b-2 border-opacity-60 border-white focus:outline-none focus:border-b-white focus:border-opacity-60  bg-transparent focus:bg-transparent  outline-none  py-1  leading-6 mb-4 "
                />
              </div>
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <div className="py-7">
                  <label
                    for="hero-field"
                    className="leading-7 text-xl font-normal opacity-60 text-white"
                  >
                    Resume
                  </label>
                </div>
                <label className="w-full flex flex-col items-center px-4 py-6 bg-[#FFFFFF1A] text-blue rounded-lg shadow-lg tracking-wide  border-dashed border-2 border-white cursor-pointer hover:bg-blue hover:text-white mb-7">
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
              <div className="flex w-full flex-col justify-center items-center py-12">
                <button className="flex mx-auto text-white bg-[#0F89FF] border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div>
        <div className=" min-[300px]:max-[709px]:hidden min-[710px]:max-[1200px]">
          <Footer />
        </div>

        <div className="min-[710px]:hidden min-[300px]:max-[709px] ">
          <MobFooter />
        </div>
      </div>
    </div>
  );
}

export default job_apply;
