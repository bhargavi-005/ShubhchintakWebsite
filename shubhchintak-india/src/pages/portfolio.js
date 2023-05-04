import Image from "next/image";
import React from "react";
import Success from "./success"
import Impact from "./impact"
import Clients from "./clients"
import Header from "./Header";
import Footer from "./footer";
import Link from "next/link";
import bg from "../../public/images/bg.png";
import Review from "./customerviews"
import { useState } from "react";
import MobFooter from "./MobFooter";
function Port(){
    const [isOpen1, setIsOpen1] = useState(false);
    return(
        <div style={{ backgroundImage: `url(${bg.src})` }} className="max-[768px]:overflow-x-hidden">
            <Header/>
            <div className="w-[100%] h-[30%]  relative">
                <Image className="brightness-[30%] h-[700px] max-[768px]:h-[700px]"
                src="/images/portfolio.png"
                alt="career"
                width={1660}
                height={600}/>
                <h1 className="max-[768px]:text-[30px] mt-[10%] text-center absolute top-0 ml-[15%] mr-[15%] text-white font-xyz text-[60px] font-extrabold">From startups to enterprises, we 
                    have no limits, we serve all!</h1>
                    <p className="max-[768px]:mt-[55%] max-[1500px]:mt-[33%] text-[16px] text-center absolute top-0 ml-[25%] mr-[25%] text-white font-xyz mt-[23%]">We have helped our clients in building digital solutions as per their business needs. We understood their 
                        business challenges and did our best to solve it in a creative manner. 
                        We helped our clients to grow, We can do it for you too!</p>
                        <button class="max-[1500px]:mt-[40%] max-[768px]:mt-[130%] max-[768px]:ml-[23%] absolute top-0 mt-[30%] ml-[43%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Share your business idea
                        </button>
            </div>
            {/* Next Section */}
            <Success/>
            {/* Next Section */}
            <div className="mt-[5%] mr-[10%] ml-[10%] ">
              
                <h1 className="max-[768px]:text-center text-white font-semibold text-[40px] font-xyz">Our Works</h1>
                <div className="px-6 py-4 mb-4 rounded-md bg-[#FFFFFF1A] ml-[60%] mt-[-5%] ">
              <div
                onClick={() => setIsOpen1((prev) => !prev)}
                className="flex flex-row justify-between gap-40 items-center text-lg font-semibold"
              >
                <p className="text-white" > Website Development</p>
                <Image
                  className="ml-7"
                  src="/images/blog/drop.png"
                  width={10}
                  height={5}
                  alt="drop"
                />
              </div>
              {isOpen1 && (
                <div className="bg-gray-500 z-10 rounded-lg  mt-2 p-8 absolute ">
                  <ul className="flex flex-col gap-4 text-white ">
                    <li className="hover:text-slate-400">
                      <Link href="">Website Development1</Link>
                    </li>
                    <li className="hover:text-slate-400">
                      <Link href="">Website Development2</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
                <div className="flex flex-row max-[768px]:flex max-[768px]:flex-col space-x-2 mt-[3%]">
                    <div className="main">
                    <Image  className="h-[400px] w-[400px]"
                    src="/images/work1.png"
                    alt="career"
                    width={400}
                    height={400}/>
                    <div>
                    <div>
                    <Image className="h-[584px] mt-[2%] w-[400px]"
                    src="/images/work2.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="h-[337px] mt-[2%] w-[400px]"
                    src="/images/work3.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="main">
                    <Image className="max-[768px]:ml-[-1%] max-[768px]:mt-[2%] h-[500px] w-[400px]"
                    src="/images/work4.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[584px] mt-[2%] w-[400px]"
                    src="/images/work5.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[235px] mt-[2%] w-[400px]"
                    src="/images/work6.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="main">
                    <Image className="max-[768px]:ml-[-1%] h-[584px] w-[400px]"
                    src="/images/work7.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[415px] mt-[2%] w-[400px]"
                    src="/images/work8.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[320px] mt-[2%] w-[400px]"
                    src="/images/work9.png"
                    alt="career"
                    width={400}
                    height={700}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
                    
                </div>
                
            </div>
            {/* Next Section */}
            <Impact/>
            {/* Next Section */}
            <Clients/>
            {/* Next Section */}
            <Review/>
            
            <div className="mt-[3%] bg-[#FFFFFF1A] ml-[10%] mr-[10%] pt-[2%] pb-[2%] rounded-md border-2 border-solid">
                <h1 className="text-[30px] font-xyz text-white text-center font-semibold">Want to start your digital transformation journey?</h1>
                <button class="max-[768px]:ml-[30%] ml-[44%] mt-[1%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Get free consulation
                </button>
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
    )
}
export default Port;