import bg from "../../public/images/bg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Partner from "./partners"
import Impact from "./impact"
import Web from "./websitedev"
import Mobile from "./mobileappdev"
import Cloud from "./cloudcunsuldev"
import Graph from "./graphdev"
import Manual from "./manualdev"
import UIUX from "./UIUXdev"
import VRAR from "./VrArdev"
import Clients from "./clients"
import Success from "./success"
import Header from "./Header";
import Footer from "./footer";
import Review from "./customerviews"
function ok(){
    
}
function landing(){
    return(
        
        <div className=" max-[768px]:overflow-x-hidden ">
            <Header/>
        <div className="relative pb-[10%] pt-1" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="flex flex-col justify-center items-center">
            <h1 className="max-[768px]:text-[35px] relative mt-[8%] text-center text-white font-xyz text-[60px]">We are bringing</h1>
            <h1 className="max-[768px]:text-[35px] relative text-center text-[#0F89FF] font-xyz text-[60px]">DIGITAL TRANSFORMATION</h1>
            <p className="max-[768px]:text-[14px] max-[768px]:ml-[3%] max-[768px]:mr-[3%] relative text-center text-white text-[16px] ml-[20%] mr-[20%]">Future is for those who work for their dreams. Our deep knowledge and expertise in providing digital solutions 
               help the dreamers to take step forward to start with their dream business ideas.We accompany them at every 
               step to leverage innovation and advancement as per the latest market trends.</p>
            <p className="relative text-center text-white text-[16px] ml-[20%] mr-[20%]">We identify their challenge ,guide them, create effective work strategy, develop their complex 
               business ideas and deploy it as earliest as possible with the help of our expert team.</p>
               
               <button class="max-[768px]:w-[300px]  max-[768px]:h-[50px] mt-[3%] bg-blue-500 hover:bg-blue-700 text-white font-bold h-[50px] w-[400px]  rounded-full">
             <p className="max-[768px]:text-[15px] max-[768px]:w-[300px]">Start your digital transformation journey</p>
          </button>
               </div>
            
        </div>
        {/* Next Section */}
        <Partner/>
        {/* Next Section */}
        <Impact/>
        {/* Next Section */}
        <Success/>
        {/* Next Section */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%]">
            <h2 className="max-[768px]:text-center ml-[10%] text-[30px] text-white">Solutions We Provide</h2>
            <div className="max-[768px]:hidden max-[768px]:flex max-[768px]:flex-col flex flex-row mt-[1%] ml-[10%] space-x-5">
                <div className="">
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Website
                    </button>
                    </a>
                </div>
                <div className="">
                    <a href="">
                    <button class="max-[768px]:mt-[2%] max-[768px]:ml-[34%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Mobile App
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="max-[768px]:mt-[2%] max-[768px]:ml-[27%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Cloud Consulation
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="max-[768px]:mt-[2%] max-[768px]:ml-[30%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Graphic Design
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="max-[768px]:mt-[2%] max-[768px]:ml-[32%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        UI/UX Design
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="max-[768px]:mt-[2%] max-[768px]:ml-[27%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Cloud Consulation
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="max-[768px]:mt-[2%] max-[768px]:ml-[29%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Manual Testing
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button  class="max-[768px]:mt-[2%] max-[768px]:ml-[39%] bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        VR/AR
                    </button>
                    </a>
                </div>
            </div>
            <Carousel className="">
                <Web/>
                <Mobile/>
                <Cloud/>
                <Graph/>
                <UIUX/>
                <Cloud/>
                <Manual/>
                <VRAR/>
            </Carousel>
        </div>
        {/* Next Section */}
        <div className=" relative mt-[-1.5%]" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="pt-[5%]">
                <div className="flex flex-col justify-center items-center bg-black-rgba pt-[2%] pb-[2%]">
                <h1 className="text-[30px] text-white font-xyz text-center">Share your business requirements with us!</h1>
                <button class=" mt-[2%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Call Now
                </button>

                </div>
                
            </div>

        </div>
        {/* Next Section */}
        <div style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="pt-[5%] ml-[10%] mr-[10%]">
                <div className="mt-[5%]">
                <h1 className="text-white text-center font-abc text-[40px]">Some of our best works!</h1>
                </div>
                <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row mt-[3%]">
                    <div className="mr-[20%] max-[768px]:order-last max-[768px]:mr-[5%]">
                        <h1 className="text-white text-[30px]">Project Name</h1>
                        <p className="text-white text-left text-[16px]">Lorem ipsum dolor sit amet consectetur. Amet in bibendum mattis amet aliquam 
                        risus elementum sapien gravida. Accumsan sit ultrices in sapien enim. Magna 
                        venenatis non egestas pulvinar vel pellentesque sagittis. Eget eleifend nunc nec
                        id leo id blandit sem.</p>
                        <div className="flex flex-row mt-[5%]">
                            <div>
                                <Image
                                alt=""
                                src="/images/ticks.png"
                                width={20}
                                height={20}/>
                            </div>
                            <div className="ml-[3%] mt-[-0.5%]">
                                <p className="text-white font-xyz text-[16px]">Lorem ipsum dolor sit amet consectetur. Amet in bibendum</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-[5%]">
                            <div>
                                <Image
                                alt=""
                                src="/images/ticks.png"
                                width={20}
                                height={20}/>
                            </div>
                            <div className="ml-[3%] mt-[-0.5%]">
                                <p className="text-white font-xyz text-[16px]">Lorem ipsum dolor sit amet consectetur. Amet in bibendum</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-[5%]">
                            <div>
                                <Image
                                alt=""
                                src="/images/ticks.png"
                                width={20}
                                height={20}/>
                            </div>
                            <div className="ml-[3%] mt-[-0.5%]">
                                <p className="text-white font-xyz text-[16px]">Lorem ipsum dolor sit amet consectetur. Amet in bibendum</p>
                            </div>
                        </div>
                        <div className="mt-[3%]">
                        <button class="max-[768px]:ml-[32%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View Case Study
                </button>
                        </div>
                    </div>
                    <div className="w-[140%] max-[768px]:order-first max-[768px]:w-[100%]">
                        <Image
                        alt=""
                        src="/images/bestwork.png"
                        width={500}
                        height={500}/>
                    </div>
                </div>
            </div>
            {/* Next Section */}
            <Clients/>
            
            
        </div>
        {/* Next Section */}
        <div style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="mt-[3%]">
                <h1 className="max-[768px]:text-[30px] max-[768px]:ml-[10%] max-[768px]:mr-[10%] text-center text-white font-xyz text-[40px]">A Word from our Proud Clients!</h1>
            </div>
            <Review/>
            
        </div>
        {/* Next Section */}
        <div>
            <h1 className="text-white text-center text-[40px]">Insights by ShubhChintak!</h1>
            <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row justify-evenly space-x-3">
                    <div className="max-[768px]:ml-[3%] max-[768px]:mr-[5%] w-[400px] h-[494px] justify-center items-center">
                        <Image className=""
                        alt=""
                        src="/images/edge.png"
                        width={400}
                        height={494}/>
                        <div className="bg-black-rgba h-[173px] w-[100%]">
                            <p className="ml-[1%] text-[20px] text-white font-xyz">EDGE COMPUTING: THE NEW ERA</p>
                            <p className="ml-[1%] text-white text-[16px] font-xyz">It all started with one big computer coming into existence.</p>
                            <a href="#" className="text-white text-[16px] ml-[1%]">Read More</a>
                        </div>
                    </div>
                    <div className="w-[400px] h-[494px]">
                        <Image className=" max-[768px]:mr-[5%]"
                        alt=""
                        src="/images/tips.png"
                        width={400}
                        height={494}/>
                        <div className=" max-[768px]:mr-[5%] bg-black-rgba h-[173px] w-[100%]">
                            <p className="ml-[1%] text-[20px] text-white font-xyz">5 TIPS FOR DESIGNING GOOD POST...</p>
                            <p className="ml-[1%] text-white text-[16px] font-xyz">Designing good looking posters and social media posts is not as hard as it sounds.</p>
                            <a href="#" className="text-white text-[16px] ml-[1%]">Read More</a>
                        </div>
                    </div>
                    <div className="w-[400px] h-[494px]">
                        <Image className="max-[768px]:mr-[5%]"
                        alt=""
                        src="/images/blog.png"
                        width={400}
                        height={494}/>
                        <div className=" max-[768px]:mr-[5%] bg-black-rgba h-[173px] w-[100%]">
                            <p className="ml-[1%] text-[20px] text-white font-xyz">HOW TO WRITE A GREAT BLOG</p>
                            <p className="ml-[1%] text-white text-[16px] font-xyz">Is writing your passion but you fail to express it professionally?</p>
                            <a href="#" className="text-white text-[16px] ml-[1%]">Read More</a>
                        </div>
                    </div>
            </div>
        </div>
        {/* Next Section */}
       <Footer/>
        </div>
    )
}
export default landing;