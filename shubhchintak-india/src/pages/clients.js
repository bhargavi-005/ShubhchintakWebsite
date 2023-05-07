import Image from "next/image";
import bg from "../../public/images/bg.png";
import Marquee from "react-fast-marquee";
function clients(){
    return(
        <div className="bg-[#FFFFFF1A] max-[768px]:mt-[30%] mt-[2%]  bg-black-rgba pt-[.5%]">
            
            <h2 className="font-semibold text-center text-[30px] mt-[2%] text-white font-abc">Our Esteemed Clients</h2>
            <div className="flex flex-row justify-evenly mt-[1%]">
                <Marquee>
            <div >
                <Image
                alt=""
                src="/images/clients.png"
                height={100}
                width={1400}/>
            </div>
            
                
           
            </Marquee>
            
           
            </div>
            </div>
           
        
    )
}
export default clients;