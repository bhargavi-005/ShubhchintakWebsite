import Image from "next/image";
import Marquee from "react-fast-marquee";
function partner(){
    return(
        <div className=" bg-white pb-[1%]">
            <h2 className=" text-center text-[20px] font-extrabold pt-[2%] font-abc">OUR PARTNERS</h2>
            <div className="flex flex-row justify-evenly mt-[5%]">
                <Marquee>
            <div className="">
                <Image
                alt=""
                src="/images/partners.png"
                height={1000}
                width={2000}/>
            </div>
               
           
            </Marquee>
            
           
            </div>
           
        </div>
    )
}
export default partner;