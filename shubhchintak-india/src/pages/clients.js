import Image from "next/image";
import bg from "../../public/images/bg.png";
import Marquee from "react-fast-marquee";
function clients(){
    return(
        <div className="bg-[#FFFFFF1A] max-[768px]:mt-[50%] mt-[2%]  bg-black-rgba pt-[.5%]">
            
            <h2 className="font-semibold text-center text-[30px] mt-[2%] text-white font-abc">Our Esteemed Clients</h2>
            <div className="flex flex-row justify-evenly mt-[1%]">
                <Marquee>
            <div className="w-[193] h-[69] mr-[250px] mt-[5%]">
                <Image
                alt=""
                src="/images/logo1.png"
                height={70}
                width={195}/>
            </div>
                <div className="w-[193] h-[69] mt-[-5%] mr-[250px]">
                <Image
                alt=""
                src="/images/logo2.png"
                height={94}
                width={194}/>
            </div>
            <div className="w-[280] h-[70] mr-[250px]">
                <Image
                alt=""
                src="/images/logo3.png"
                height={70}
                width={280}/>
            </div>
            <div className="w-[186] h-[106] mr-[250px]">
                <Image
                alt=""
                src="/images/logo4.png"
                height={106}
                width={186}/>
            </div>
            <div className="w-[177px] h-[125px] mr-[250px]">
                <Image
                alt=""
                src="/images/logo5.png"
                height={50}
                width={80}/>
            </div>
            
            </Marquee>
            
           
            </div>
            </div>
           
        
    )
}
export default clients;