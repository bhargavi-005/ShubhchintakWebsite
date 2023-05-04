import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import bg from "../../public/images/bg.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen ,setIsOpen]=useState(false);
    const [isOpen1 ,setIsOpen1]=useState(false);
    const [navbar, setNavbar] = useState(false);

  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} className="z-10 sticky top-0 text-white flex flex-row font-xyz py-6 mx-5 justify-between  xl:items-center bg-none ">
      <div className="top-0 left-0 w-[139px] h-[29px] md:w-[187px] md:h-[46px]">
        <Link href="/landing">
        <Image
          src="/svg/stpl_logo_white-01-01 1.svg"
          height="45"
          width="190"
          alt=""
        />
        </Link>
      </div>
      <div className="md:hidden flex  gap-6">
        <button className="bg-[#0F89FF]  xl:w-[145px] xl:h-[46px] w-[105px] h-[35px] rounded-full">
          {" "}
          <Link href="/contact_us"> Contact Us</Link>
        </button>
      
      </div>

      <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

       <div className={`flex-1 justify-self-center flex lg:justify-center pb-3 mt-8 lg:flex lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
      }`}>
        <ul
          onClick={() => setOpen(false)}
          className="flex flex-col  lg:flex-row  lg:gap-[4vw] lg:items-center  gap-8"
        >
          <li>
             <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex flex-row items-center"
            >
              Services
              <Image
                className=""
                src="/svg/arrowdown.png"
                width={27}
                height={20}
                alt=""
              />
            </div>
            {isOpen && (
              <div className="bg-gray-500 z-10 rounded-lg  mt-2 p-8 absolute ">
                <ul className="flex flex-col gap-4 text-white ">
                  <li className="hover:text-slate-400">
                    <Link href="/webdeveloppment">Web Development</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="/mobileApp">Mobile App</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="/CloudConsultation">Cloud Consultation</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="/graphicDesign">Graphic Designing</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="/UIDesigning">UI/UX Designing</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="/digitalMarketing">Digital Marketing</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="/ArDevelopment">VR/AR Development</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="hover:text-slate-400">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-slate-400">
            <Link href="">Why Us</Link>
          </li>
          <li>
            <div
              onClick={() => setIsOpen1((prev) => !prev)}
              className="flex flex-row items-center"
            >
              Resources
              <Image
                className=""
                src="/svg/arrowdown.png"
                width={27}
                height={20}
                alt=""
              />
            </div>
            {isOpen1 && (
              <div className="bg-gray-500 z-10 rounded-lg  mt-2 p-8 absolute ">
                <ul className="flex flex-col gap-4 text-white ">
                  <li className="hover:text-slate-400">
                    <Link href="/blog">Blogs</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="">Clients</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="hover:text-slate-400">
            <Link href="/career">Career</Link>
          </li>
          <li>
            <div className="flex flex-row items-center">
              En
              <Image
                className=""
                src="/svg/arrowdown.png"
                width={27}
                height={20}
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
      
    <div className=" min-[390px]:max-[480px]:hidden max-[1200px]">
    <div className=" flex items-center gap-6">
    <button className="bg-[#0F89FF]  xl:w-[145px] xl:h-[46px] w-[105px] h-[35px] rounded-full">
      {" "}
      <Link href="/contact_us"> Contact Us</Link>
    </button>
  
  </div>
  
      </div>
      
    </div>
  );
}
export default Header;