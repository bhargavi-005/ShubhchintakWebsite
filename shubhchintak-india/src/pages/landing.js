import bg from "../../public/images/bg.png";
import Image from "next/image";
import Partner from "./partners"
import Impact from "./impact"
function landing(){
    return(
        <div>
        <div className="relative pb-[10%] pt-1" style={{ backgroundImage: `url(${bg.src})` }}>
            <h1 className="relative mt-[8%] text-center text-white font-xyz text-[60px]">We are bringing</h1>
            <h1 className="relative text-center text-[#0F89FF] font-xyz text-[60px]">DIGITAL TRANSFORMATION</h1>
            <p className="relative text-center text-white text-[16px] ml-[20%] mr-[20%]">Future is for those who work for their dreams. Our deep knowledge and expertise in providing digital solutions 
               help the dreamers to take step forward to start with their dream business ideas.We accompany them at every 
               step to leverage innovation and advancement as per the latest market trends.</p>
            <p className="relative text-center text-white text-[16px] ml-[20%] mr-[20%]">We identify their challenge ,guide them, create effective work strategy, develop their complex 
               business ideas and deploy it as earliest as possible with the help of our expert team.</p>
            <button class="ml-[33%] mt-[3%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-[100px] rounded-full">
             Start your digital transformation journey
          </button>
        </div>
        {/* Next Section */}
        <Partner/>
        {/* Next Section */}
        <Impact/>
        {/* Next Section */}
        <div className="pt-[3%] pb-[2%]" style={{ backgroundImage: `url(${bg.src})` }}>
            <h1 className="text-white text-center text-[40px]">Our successful work deliveries make us worthy!</h1>
            <p className="text-white text-center font-[16px] ml-[23%] mr-[23%]">We can proudly say that we have delivered our projects with almost 99% of customer satisfaction.We strongly believe that for bringing digital transformation it is very important to create a global impact. We are open for serving entire business community globally with our expertise.</p>
            <div className="space-x-10 flex flex-row mt-[2%] ml-[10%] mr-[10%] border-2 rounded-md border-solid pb-[6%] bg-black-rgba">
                <div className="ml-[12%] mt-[5%]">
                    <h2 className="text-[40px] text-center text-xyz text-white">80+</h2>
                    <p className="text-[18px] text-xyz text-white">Projects Delivered</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="text-[40px] text-center text-xyz text-white">35+</h2>
                    <p className="text-[18px] text-xyz text-white">Happy Clients</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="text-[40px] text-center text-xyz text-white">10+</h2>
                    <p className="text-[18px] text-xyz text-white">Countries served</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="text-[40px] text-center text-xyz text-white">20+</h2>
                    <p className="text-[18px] text-xyz text-white">Dedicated experts</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="text-[40px] text-center text-xyz text-white">30+</h2>
                    <p className="text-[18px] text-xyz text-white">Industries served</p>
                </div>
            </div>
        </div>
        {/* Next Section */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%]">
            <h2 className="ml-[10%] text-[30px] text-white">Solutions We Provide</h2>
            <div className="flex flex-row mt-[1%] ml-[10%] space-x-5">
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Website
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Mobile App
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Cloud Consulation
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Graphic Design
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        UI/UX Design
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Cloud Consulation
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        Manual Testing
                    </button>
                    </a>
                </div>
                <div>
                    <a href="">
                    <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                        VR/AR
                    </button>
                    </a>
                </div>
            </div>
        </div>
        {/* Next Section */}
        </div>
    )
}
export default landing;