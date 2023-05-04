import Image from "next/image";
import bg from "../../public/images/bg.png";
import Marquee from "react-fast-marquee";
function clients(){
    return(
        <div style={{ backgroundImage: `url(${bg.src})` }}  className="bg-[#FFFFFF1A] max-[768px]:mt-[50%] mt-[2%] pb-[3%] max-[768px]:mt-[30%] bg-black-rgba">
            
            <h2 className="font-semibold text-center text-[30px] mt-[5%] text-white font-abc">Our Esteemed Clients</h2>
            <div className="flex flex-row justify-evenly mt-[5%]">
                <Marquee>
            <div className="mr-[50%]">
                <Image
                alt=""
                src="/images/logo1.png"
                height={300}
                width={300}/>
            </div>
                <div className="mb-[3%] mr-[70%]">
                <Image
                alt=""
                src="/images/logo2.png"
                height={400}
                width={400}/>
            </div>
            <div className="mt-[3%] mr-[70%]">
                <Image
                alt=""
                src="/images/logo3.png"
                height={500}
                width={500}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/logo4.png"
                height={350}
                width={350}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/logo5.png"
                height={200}
                width={200}/>
            </div>
            
            </Marquee>
            
           
            </div>
            </div>
           
        
    )
}
export default clients;