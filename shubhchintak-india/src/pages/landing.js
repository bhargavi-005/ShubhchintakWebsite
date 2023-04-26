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
        </div>
    )
}
export default landing;