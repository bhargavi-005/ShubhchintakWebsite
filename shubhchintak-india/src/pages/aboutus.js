import Image from "next/image";
import Partners from "./partners"
import Impact from "./impact"
import Clients from "./clients"
import Review from "./clientreview"
function about(){
    return(
        <div className="mt-[5%] ">
            <h1 className="text-white text-[60px] font-extrabold text-center">All About Us</h1>
            <div>
                <Image className="w-[1240px] h-[500px] ml-[10%] mr-[10%]"
                src="/images/aboutbg.png"
                width={1500}
                height={1500}/>
            </div>
            <div className="ml-[15%] mr-[15%]">
                
            
            <div className="mt-[8%]  bg-black-rgba">
                <div>
                    <span className="text-[40px] font-xyz font-semibold text-white">We are </span>
                    <span className="text-[40px] font-xyz font-semibold text-blue-400">DIGITAL TRANSFORMATION 
                    SPECIALISTS !</span>
                    <p className="mr-[10%] text-white text-[16px] font-xyz">Shubhchintak is a technologically advanced platform for all your online business needs.Our 11+ teams comprising leading experts have completed 80+ projects.Also, we are connected with leading experts from different technologicalfields who are ever-ready to provide you with nothing but the best.</p>
                </div>

            </div>
            <div className="flex flex-row">
                <div className="mt-[13%]">
                    <Image
                    src="/images/mission.png"
                    width={150}
                    height={150}/>
                    <p className="mt-[30%] text-white font-xyz text-[30px] font-semibold text-center">Mission</p>
                </div>
                <div className="mt-[16%] ml-[5%]">
                    <p className="text-white text-[16px] font-xyz ">To provide transformative digital solutions and delivertangible results to clients, employees, and vendors. Toprovide professional digital solutions for your everytechnological need, and deliver only the best transformativeresults, alongside developing a solid digital network bothnationally and internationally!</p>
                </div>
            </div>
            <div className="flex flex-row">
               
                <div className="mt-[16%] ml-[5%]">
                    <p className="text-white text-[16px] font-xyz ">To provide transformative digital solutions and delivertangible results to clients, employees, and vendors. Toprovide professional digital solutions for your everytechnological need, and deliver only the best transformativeresults, alongside developing a solid digital network bothnationally and internationally!</p>
                </div>
                <div className="mt-[13%]">
                    <Image
                    src="/images/vision.png"
                    width={150}
                    height={150}/>
                    <p className="mt-[30%] text-white font-xyz text-[30px] font-semibold text-center">Vision</p>
                </div>
            </div>
            </div>
            {/* Next Section */}
            <div className="mt-[5%] bg-black">
                <h1 className="text-white text-[40px] font-xyz font-semibold text-center">Methodology</h1>
                <p className="ml-[30%] mr-[30%] text-[16px] text-center text-white font-xyz ">Lorem ipsum dolor sit amet consectetur. Leo at ullamcorper 
                aliquam at scelerisque ornare.</p>
                <Image className="ml-[16%]"
                src="/images/methodology.png"
                width={1000}
                height={1000}/>
            </div>
            {/* Next Section */}
            <Partners/>
            {/* Next Section */}
            <Impact/>
            {/* Next Section */}
            <Clients/>
            {/* Next Section */}
            <Review/>
            {/* Next Section */}
            <div className="ml-[10%] mr-[10%] bg-black-rgba">
                <h2 className="text-white text-[30px] font-xyz text-center font-semibold">Always here for you for your custom solutions and highly skilled experts!</h2>
                <button class="mt-[2%] ml-[45%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                     Get in touch
                </button>
            </div>
        </div>
    )
}
export default about