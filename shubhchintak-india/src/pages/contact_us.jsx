import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";

function contact_us() {
  return (
    <div className="pb-[3%]" style={{ backgroundImage: `url(${bg.src})` }}>
      <section className="text-white">
        <div className="container md:px-20 px-5 py-24 mx-auto">
          <h5 className=" text-center text-6xl font-bold mb-20 ">
            Hey! Tell us what you needs👋
          </h5>
          <div className="flex flex-wrap w-full mb-10 flex-col text-6xl">
            <p className="  lg:w-1/2 w-full leading-relaxed text-white text-3xl font-medium">
              {"I’m"} Interested in...
            </p>
          </div>
          <div className="flex flex-wrap gap-4 -m-4 justify-center align-middle items-center text-center">
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7 ">
              <div className="pb-2">
                <span className="text-white text-xl">Website Development</span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7  ">
              <div className="pb-2">
                <span className="text-white text-xl">
                  Mobile App Devlopment
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7  ">
              <div className="pb-2">
                <span className="text-white text-xl">Cloud Consultation</span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7 ">
              <div className="pb-2">
                <span className="text-white text-xl">Graphic Designing</span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7 ">
              <div className="pb-2">
                <span className="text-white text-xl">UI/UX Designing</span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7 ">
              <div className="pb-2">
                <span className="text-white text-xl">Manual Testing</span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7 ">
              <div className="pb-2">
                <span className="text-white text-xl">Digital Marketing</span>
              </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center min-w-fit border rounded-full w-[225px] h-[24px] p-7 ">
              <div className="pb-2">
                <span className="text-white text-xl">VR / AR Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white font-abc relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-col mb-3">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-lg text-white">
                    Name
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
                    Email
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
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your Message"
                    className="w-full border-b-2 border-solid bg-black border-white text-base text-white py-1 px-3 leading-10 mb-5"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-white font-abc">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image src="/images/contact_us/india.png" width={30} height={15} alt="India Flage" ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    Office No.1, Sunshine Heights, Near Railway Station,
                    Vasai-Virar 401209 India
                  </a>
                </li>
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image src="/images/contact_us/call_icon.png" width={18} height={18} alt="Call" ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    +91 9833737743
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image src="/images/contact_us/usa.png" width={30} height={15} alt="USA Flage" ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    7187, Trotwood Lane. Jupiter, FL - 33458
                  </a>
                </li>
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image src="/images/contact_us/call_icon.png" width={18} height={18} alt="Call" ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    +1 561 589 8771
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image src="/images/contact_us/email.png" width={20} height={7} alt="Emailas"></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    hello@helloshubhchintak.com
                  </a>
                </li>
                <li>
                  <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                    <span className="inline-flex  lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                      <a className="text-white">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-white">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-white">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-white">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                    </span>
                  </div>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <section className="text-gray-600 body-font relative">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-white">
            <iframe
              className="absolute inset-0 filter grayscale-100 contrast-120 opacity-40"
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <iframe
              className="absolute inset-0 filter grayscale-100 contrast-120 opacity-40"
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contact_us;
