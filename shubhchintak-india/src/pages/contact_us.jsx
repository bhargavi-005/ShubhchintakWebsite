import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./footer";
import MobFooter from "./MobFooter";

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
            <p className="  lg:w-1/2 w-full leading-relaxed text-white text-3xl font-bold">
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

      <section className="text-white font-abc flex justify-center md:mr-5">
        <div className="container px-5 py-15 flex justify-center ">
          <div className=" w-full">
            <ul className=" mx-auto flex flex-col justify-center gap-6 text-xl font-normal opacity-[0.90] ">
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
                <div className="mt-4 mb-7 w-[710px] h-[0.5px] bg-white"></div>
              </li>

              <li className="mb-10">
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-[#0F89FF] border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                    <Link href=""> Send Request</Link>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-white font-mulish font-normal">
        <div className="container px-15 py-20 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 mx-2 ">
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
                  <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
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

      <section className="container px-15 py-16 mx-auto">
        <div className="flex flow-col justify-between">
          <div className="w-1/2 pr-4">
            <div className="relative overflow-hidden h-80">
              <iframe
              className="map"
                src="https://www.google.com/maps/embed?pb=!1m20!1m12!1m3!1d110715.00682812925!2d79.03721897801468!3d21.131979954132454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m5!3e6!4m1!2sCurrent%20Location!4m1!2sOffice%20No.131st%20Floor%20Near%20Railway%20Sunshine%20Heights%20Achole%20Road%20Sunshine%20City%20Moregaon%20Talao%2C%20Vasai%20Virar%2C%20MH%20401209!5e1!3m2!1sen!2sin!4v1683171655351!5m2!1sen!2sin"
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
              className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.512124092022!2d-80.14621502487216!3d26.94838467662596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ded6f59d5fcdd1%3A0x10859de789b41cce!2s7187%20Trotwood%20Ln%2C%20Jupiter%2C%20FL%2033458%2C%20USA!5e1!3m2!1sen!2sin!4v1683172331767!5m2!1sen!2sin"
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
      <div className="mt-5">
          <div className=" min-[390px]:max-[480px]:hidden min-[481px]:max-[1200px]">
            <Footer />
          </div>

          <div className="min-[481px]:hidden min-[390px]:max-[480px] ">
            <MobFooter/>
          </div>
        </div> </div>
  );
}

export default contact_us;
