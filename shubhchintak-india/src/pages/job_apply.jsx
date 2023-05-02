import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
function job_apply() {
  return (
    <div className="pb-[3%]" style={{ backgroundImage: `url(${bg.src})` }}>
      <section className="text-white">
        <div className="container md:px-20 px-5 py-24 mx-auto">
          <h5 className=" text-center text-6xl font-bold mb-5 ">
            Share your details with Us!
          </h5>
        </div>
      </section>

      <section className="text-white font-abc relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-col mb-3">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-lg text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-8 mb-5"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-lg text-white">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-8 mb-5"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-lg text-white">
                    Mobile Number
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-8 mb-5"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-lg text-white">
                    Expected CTC
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-8 mb-5"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-lg text-white">
                    Location
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-8 mb-5"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-lg text-white">
                    Education
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-8 mb-5"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-lg text-white">
                    Resume
                  </label>

                  <div className="flex w-full  items-center justify-center bg-grey-lighter ">
                    <label className="w-full flex flex-col items-center px-4 py-6 bg-[#FFFFFF1A] text-blue rounded-lg shadow-lg tracking-wide uppercase border-dashed border-2 border-white cursor-pointer hover:bg-blue hover:text-white mb-7">
                      <svg
                        width="16"
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
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default job_apply;
