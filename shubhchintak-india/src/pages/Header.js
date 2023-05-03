import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import bg from "../../public/images/bg.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen ,setIsOpen]=useState(false);
    const [isOpen1 ,setIsOpen1]=useState(false);

  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} className=" header text-white flex flex-row font-xyz pt-6 mx-5 justify-between  xl:items-center  ">
      <div className="top-0 left-0 w-[139px] h-[29px] md:w-[187px] md:h-[46px]">
        <Image
          src="/svg/stpl_logo_white-01-01 1.svg"
          height="45"
          width="190"
          alt=""
        />
      </div>

      <div className="  xl:static absolute xl:min-h-fit min-h-[60vh] left-0 top-[-100%] xl:w-auto  w-full flex items-center px-5 ">
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
                        <div onClick={()=> setIsOpen1((prev)=>!prev)} className="flex flex-row items-center">Resources
                            <Image className="" src="/svg/arrowdown.png" width={27} height={20}  alt=""/>
                        </div>
                        {isOpen1 &&<div  className="bg-gray-500 z-10 rounded-lg  mt-2 p-8 absolute ">
                                <ul className="flex flex-col gap-4 text-white ">
                                    <li className="hover:text-slate-400">
                                        <Link href="/blog"  >
                                        Blogs
                                        </Link>
                                    </li>
                                    <li className="hover:text-slate-400">
                                        <Link href=""  >
                                        Clients
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>}
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

      <div className="flex items-center gap-6">
        <button className="bg-[#0F89FF]  xl:w-[145px] xl:h-[46px] w-[105px] h-[35px] rounded-full">
          {" "}
          <Link href="/contact_us"> Contact Us</Link>
        </button>
        <div className=" menu text-3xl cursor-pointer xl:hidden">
          <Image
            onClick={() => setOpen(!open)}
            src="/svg/hamburger.svg"
            width="24"
            height="24"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
