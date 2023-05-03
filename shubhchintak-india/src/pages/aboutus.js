import Image from "next/image";
import Partners from "./partners"
import Impact from "./impact"
import Clients from "./clients"
import Review from './customerviews'
import Header from "./Header";
import Footer from "./footer";
import Link from "next/link";
import bg from "../../public/images/bg.png";
function about(){
    return(

        <div style={{ backgroundImage: `url(${bg.src})` }} className="mt-[5%] max-[768px]:overflow-x-hidden ">
            <Header/>
            <h1 className="max-[768px]:text-[30px] text-white text-[60px] font-extrabold text-center">All About Us</h1>
            <div>
                <Image className="max-[768px]:w-[80%] max-[768px]:h-[300px] w-[1240px] h-[500px] ml-[10%] mr-[10%]"
                src="/images/aboutbg.png"
                alt=""
                width={1500}
                height={1500}/>
            </div>
            <div className="ml-[15%] mr-[15%]">
                
            
            <div className="mt-[8%]  bg-black-rgba">
                <div>
                    <span className=" text-[40px] font-xyz font-semibold text-white">We are </span>
                    <span className=" text-[40px] font-xyz font-semibold text-blue-400">DIGITAL TRANSFORMATION 
                    SPECIALISTS !</span>
                    <p className="mr-[10%] text-white text-[16px] font-xyz">Shubhchintak is a technologically advanced platform for all your online business needs.Our 11+ teams comprising leading experts have completed 80+ projects.Also, we are connected with leading experts from different technologicalfields who are ever-ready to provide you with nothing but the best.</p>
                </div>

            </div>
            <div className="flex flex-row max-[768px]:flex max-[768px]:flex-col">
                <div className="mt-[13%]">
                    <Image className="max-[768px]:ml-[30%]"
                    src="/images/mission.png"
                    alt="ticks"
                    width={150}
                    height={150}/>
                    <p className="max-[768px]:mt-[5%] mt-[30%] text-white font-xyz text-[30px] font-semibold text-center">Mission</p>
                </div>
                <div className="mt-[16%] ml-[5%]">
                    <p className="max-[768px]:text-center max-[768px]:mt-[1%] text-white text-[16px] font-xyz ">To provide transformative digital solutions and delivertangible results to clients, employees, and vendors. Toprovide professional digital solutions for your everytechnological need, and deliver only the best transformativeresults, alongside developing a solid digital network bothnationally and internationally!</p>
                </div>
            </div>
            <div className="flex flex-row max-[768px]:flex max-[768px]:flex-col">
               
                <div className="mt-[16%] ml-[5%]">
                    <p className="max-[768px]:text-center max-[768px]:order-last text-white text-[16px] font-xyz ">To provide transformative digital solutions and delivertangible results to clients, employees, and vendors. Toprovide professional digital solutions for your everytechnological need, and deliver only the best transformativeresults, alongside developing a solid digital network bothnationally and internationally!</p>
                </div>
                <div className="mt-[13%] max-[768px]:order-first max-[768px]:ml-[30%]">
                    <Image
                    src="/images/vision.png"
                    alt="ticks"
                    width={150}
                    height={150}/>
                    <p className="max-[768px]:mr-[30%] max-[768px]:mt-[5%] mt-[30%] text-white font-xyz text-[30px] font-semibold text-center">Vision</p>
                </div>
            </div>
            </div>
            {/* Next Section */}
            <div className="mt-[5%] bg-black ">
                <h1 className="text-white text-[40px] font-xyz font-semibold text-center">Methodology</h1>
                <p className="ml-[30%] mr-[30%] text-[16px] text-center text-white font-xyz ">Lorem ipsum dolor sit amet consectetur. Leo at ullamcorper 
                aliquam at scelerisque ornare.</p>
                <Image className="ml-[16%] max-[768px]:ml-[1%]"
                src="/images/methodology.png"
                alt="ticks"
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
                <button class="max-[768px]:ml-[33%] mt-[2%] ml-[45%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <Link href="/contact_us"> Get in touch</Link>
                </button>
            </div>
            <Footer/>
        </div>
    )
}
export default about