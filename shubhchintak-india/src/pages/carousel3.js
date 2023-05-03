import { useEffect } from "react";
import Image from "next/image";

function BlueCarousel(){
    // useEffect(()=>{
    //     const slides = document.querySelectorAll(".slide")
    //     var counter =0;
    //     console.log(slides)
    //     slides.forEach(
    //         (slide,length)=>{
    //             slide.classList.right = `${length * 100}%`
    //         }
    //     )
    // },[])
   
    // let slides =(".slide")
    // console.log(slides)
    // let btnprev =()=>{
    //     let width =slides.scrollLeft - width;
    //     console.log(width)
    // }

    return(
        <div>
        
            <div className="flex justify-center items-center text-center mt-[80px] mx-6 text-white">
                <div className=" font-semibold text-[25px] md:text-[40px] lg:w-[1250px] ">{"What Our Client’s Say About Us"}</div>
            </div>
        <div className="w-[320px] h-[276px] md:w-[400px] md:h-[346px] md:flex md:flex-row gap-2 md:justify-center md:items-center  relative">
        
        <div className="slide w-[100%] h-[100%] rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 absolute md:static">
            <div>
                <Image
                className="object-cover object-center rounded z-10 my-1"
                alt="earth"
                src="images/commas.svg"
                width="55"
                height="40"
                />
                <div className="text-white font-[Mulish] font-normal text-[13px] ">Our Experience with Dinesh was Very 
                Good. His knowledge and troubleshooting 
                skills, makes the company a reliable one.
                </div>
                <div className="mt-12 flex flex-row gap-4 text-center">
                    <Image
                    className="object-cover object-center rounded z-10 "
                    alt="earth"
                    src="images/Ellipse97.svg"
                    width="64"
                    height="64"
                    />
                    <div className="flex flex-col">
                        <div className="text-white text-[16px] font-medium">Lavanya Tagra</div>
                        <div className="text-white text-[12px]">CEO Wellnessly club</div>
                        
                          <Image
                            className="object-cover object-center rounded z-10"
                            alt="earth"
                            src="images/rating.svg"
                            width="62"
                            height="12"
                          />
                      </div>
                </div>
            </div>
        </div>
        <div className="slide w-[100%] h-[100%] rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 absolute md:static">
            <div>
                <Image
                className="object-cover object-center rounded z-10 my-1"
                alt="earth"
                src="images/commas.svg"
                width="55"
                height="40"
                />
                <div className="text-white font-[Mulish] font-normal text-[13px] ">
                Thanks team.. Special thanks to @Dinesh n @Bharath S.. Every step will be hurdle.. We Know how to overcome..

                </div>
                <div className="mt-12 flex flex-row gap-4 text-center">
                    <Image
                    className="object-cover object-center rounded z-10 "
                    alt="earth"
                    src="images/Ellipse98.svg"
                    width="64"
                    height="64"
                    />
                    <div className="flex flex-col">
                        <div className="text-white text-[16px] font-medium">Angu Ashok</div>
                        <div className="text-white text-[12px]">CEO Go Green Dad</div>
                        
                          <Image
                            className="object-cover object-center rounded z-10"
                            alt="earth"
                            src="images/rating.svg"
                            width="62"
                            height="12"
                          />
                      </div>
                </div>
            </div>
        </div>
        <div className="slide w-[100%] h-[100%] rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 absolute md:static">
            <div>
                <Image
                className="object-cover object-center rounded z-10 my-1"
                alt="earth"
                src="images/commas.svg"
                width="55"
                height="40"
                />
                <div className="text-white font-[Mulish] font-normal text-[13px] ">Good work, Time Delivery and Satisfied 
                by work.
                
                
                </div>
                <div className="mt-12 flex flex-row gap-4 text-center">
                    <Image
                    className="object-cover object-center rounded z-10 "
                    alt="earth"
                    src="images/Ellipse99.svg"
                    width="64"
                    height="64"
                    />
                    <div className="flex flex-col">
                        <div className="text-white text-[16px] font-medium">Vikram Singh</div>
                        <div className="text-white text-[12px]">CEO VTS Technocrats</div>
                        
                          <Image
                            className="object-cover object-center rounded z-10"
                            alt="earth"
                            src="images/rating.svg"
                            width="62"
                            height="12"
                          />
                    </div>
                </div>
            </div>
            
           </div>
           
           
        </div>
        <div className="relative mt-36 flex justify-center gap-4">
        <button className="w-10 h-8 bg-white p-2 " >prev</button>
           <button className="w-10 h-8 bg-white p-2">next</button>
           </div>
        </div>
    )
}
export default BlueCarousel;