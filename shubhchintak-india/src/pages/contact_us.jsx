import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./footer";

function contact_us() {
  return (
    <div className="" style={{ backgroundImage: `url(${bg.src})` }}>
      <Header />
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
            <ul className=" flex flex-col gap-6 text-xl font-normal opacity-[0.90] ">
              <li>
                <h5>Name</h5>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className="mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li>
                <h6>Email</h6>
                <input className=" mt-2 border-none bg-transparent focus:outline-0 " />
                <div className="mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li>
                <h6>Message</h6>
                <input
                  className=" mt-2 border-none bg-transparent focus:outline-0 w-[400px] h-[100px] "
                  placeholder="Type your Message"
                />
                <div className="mt-4 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                    <Link href=""> Send Request</Link>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-white font-abc">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-10 flex flex-wrap gap-2 ">
                  <Image
                    src="/images/contact_us/india.png"
                    width={30}
                    height={15}
                    alt="India Flage"
                    className="mr-4 "
                  ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800 ">
                    Office No.1, Sunshine Heights Nalasopara {"–"} 401209
                  </a>
                </li>
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image
                    src="/images/contact_us/call_icon.png"
                    width={18}
                    height={18}
                    alt="Call"
                    className="mr-4"
                  ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    +91 9833737743
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-10 flex flex-wrap gap-2 ">
                  <Image
                    src="/images/contact_us/usa.png"
                    width={30}
                    height={15}
                    alt="USA Flage"
                    className="mr-4"
                  ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    7187, Trotwood Lane. Jupiter, FL - 33458
                  </a>
                </li>
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image
                    src="/images/contact_us/call_icon.png"
                    width={18}
                    height={18}
                    alt="Call"
                    className="mr-4"
                  ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    +1 561 589 8771
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className="mb-3 flex flex-wrap gap-2">
                  <Image
                    src="/images/contact_us/email.png"
                    width={20}
                    height={7}
                    alt="Emailas"
                    className="mr-4"
                  ></Image>
                  <a className="text-white font-medium text-16xl hover:text-gray-800">
                    hello@helloshubhchintak.com
                  </a>
                </li>
                <li>
                  <div className="container px-1 py-8 flex flex-wrap mx-auto items-center">
                    <div className="flex flex-row gap-5">
                      <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image
                          src="/svg/in.svg"
                          width="11"
                          height="11"
                          alt="linkedin"
                        />
                      </div>
                      <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image
                          className="h-[12px]"
                          src="/svg/fb.svg"
                          width="11"
                          height="1"
                          alt="facebook"
                        />
                      </div>
                      <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image
                          src="/svg/pint.svg"
                          width="11"
                          height="11"
                          alt="pininterest"
                        />
                      </div>
                      <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image
                          src="/svg/insta.svg"
                          width="11"
                          height="11"
                          alt="instagram"
                        />
                      </div>
                      <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image
                          src="/svg/twit.svg"
                          width="11"
                          height="11"
                          alt="twitter"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <section className="px-10">
        <div className="flex flow-col justify-between">
          <div className="w-1/2 pr-4">
            <div className="relative overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.725208448446!2d-74.00594198459118!3d40.71278453523927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2bc52c1d75%3A0x84df593c2e82510d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1630500402001!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location 1 Map"
              />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="relative  overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4122230081914!2d-73.986613684582!3d40.7587318793304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590278b987c7%3A0x469bbaaa9b9aeeb!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1630500723859!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location 2 Map"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default contact_us;
