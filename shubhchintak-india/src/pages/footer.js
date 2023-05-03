import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-[#051629] w-full h-full text-white p-6 py-[40px] font-xyz mt-10 ">
      <div className="flex lg:flex-row lg:justify-evenly md:flex-col md:justify-normal">
        <div className=" flex flex-col gap-3 w-1/4">
          <div className="top-0 left-0 w-[139px] h-[29px] md:w-[187px] md:h-[46px]">
            <Image
              src="/svg/stpl_logo_white-01-01 1.svg"
              height="45"
              width="190"
              alt=""
            />
          </div>
          <div className="flex flex-row gap-3 items-center ">
            <Image src="/svg/mail.svg" width="30" height="15" alt="location" />
            <div className="number">hello@shubhchintak.co</div>
          </div>
        </div>

        <div className=" md:flex md:flex-row md:justify-between lg:gap-32 md:mt-10 lg:mt-0">
          <ul className="flex flex-col  gap-8">
            <li className="flex flex-row gap-3 items-center ">
              <Image
                src="/svg/india.svg"
                width="30"
                height="15"
                alt="location"
              />
              <div className="number ">
                Office No.1, Sunshine Heights Nalasopara – 401209
              </div>
            </li>
            <li className="flex flex-row gap-3 items-center ">
              <Image
                src="/svg/phone.svg"
                width="18"
                height="18"
                alt="location"
              />
              <div className="number">+91 7506735570</div>
            </li>
          </ul>

          <ul className="flex flex-col gap-8">
            <li className="flex flex-row gap-3 items-center ">
              <Image
                src="/svg/england.svg"
                width="30"
                height="15"
                alt="location"
              />
              <div className="number">
                7187, Trotwood Lane. Jupiter, FL - 33458
              </div>
            </li>
            <li className="flex flex-row gap-3 items-center ">
              <Image
                src="/svg/phone.svg"
                width="18"
                height="18"
                alt="location"
              />
              <div className="number">+1 561 589 8771 </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-evenly mt-16 md:ml-0 ml-10">
        <div className=" flex flex-col gap-5 ml-4 lg:ml-5 md:ml-20">
          <div className="font-extrabold text-xl ">Quick Link</div>
          <ul className="font-medium text-base  flex flex-col gap-2 text-gray-400">
            <li className="">
              <Link href="/portfolio" className=" "> Portfolio</Link>
            </li>
            <li className="">
              <a className="">Why Us</a>
            </li>
            <li className="">
              <Link href="/career" className="">Carrer</Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="font-extrabold text-xl">Services</div>
          <ul className="font-medium text-base  flex flex-col gap-2 text-gray-400">
            <li className="">
              <Link href="/webdeveloppment" className=" ">Web Development</Link>
            </li>
            <li className="">
              <Link href="/mobileApp" className="">Mobile App </Link>
            </li>
            <li className="">
              <Link href="/CloudConsultation" className="">Cloud Consultation</Link>
            </li>
            <li className="">
              <Link href="/graphicDesign" className="">Graphic Designing</Link>
            </li>
            <li className="">
              <Link href="/UIDesigning" className="">UI/UX Designing</Link>
            </li>
            <li className="">
              <Link href="/digitalMarketing" className="">Digital Marketing</Link>
            </li>
            <li className="">
              <Link href="/ArDevelopment" className="">VR/AR Development </Link>
            </li>
          </ul>
        </div>
        <div className=" md:flex md:flex-row flex flex-col md:justify-center md:items-center justify-evenly md:-mt-44 lg:-mt-44 mt-0">
          <div className="md:flex md:flex-row md:gap-28 w-full">
            <div className=" flex flex-col gap-5">
              <div className="font-extrabold text-xl">Resources</div>
              <ul className="font-medium text-base  flex flex-col gap-2 text-gray-400">
                <li className="">
                  <Link href="/blog" className=" ">Blogs</Link>
                </li>
                <li className="">
                  <Link href="/clients" className="">Clients</Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col gap-5 ml-0 md:ml-5">
              <div className="font-extrabold text-xl">Legal</div>
              <ul className="font-medium text-base  flex flex-col gap-2 text-gray-400">
                <li className="">
                  <a className=" ">Terms & Condition</a>
                </li>
                <li className="">
                  <a className="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-col  items-center gap-5 md:ml-10 ml-0">
            <div className="text-lg font-medium">{"Let’s Connect Now"}</div>
            <div className="md:w-[319px] w-[100px] h-auto bg-white rounded-full text-black text-center p-2">
             <Link href="/contact_us"> Contact Us</Link>
            </div>
            <div className="flex flex-row gap-5">
              <div className="border-2 border-gray-500 rounded-full p-2">
                <Image src="/svg/in.svg" width="11" height="11" alt="" />
              </div>
              <div className="border-2 border-gray-500 rounded-full p-2">
                <Image
                  className="h-[12px]"
                  src="/svg/fb.svg"
                  width="11"
                  height="1"
                  alt=""
                />
              </div>
              <div className="border-2 border-gray-500 rounded-full p-2">
                <Image src="/svg/pint.svg" width="11" height="11" alt="" />
              </div>
              <div className="border-2 border-gray-500 rounded-full p-2">
                <Image src="/svg/insta.svg" width="11" height="11" alt="" />
              </div>
              <div className="border-2 border-gray-500 rounded-full p-2">
                <Image src="/svg/twit.svg" width="11" height="11" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
