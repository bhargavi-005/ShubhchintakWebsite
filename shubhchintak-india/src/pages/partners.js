import Image from "next/image";
import Marquee from "react-fast-marquee";
function partner(){
    return(
        <div className=" bg-white pb-[1%]">
            <h2 className=" text-center text-[20px] font-extrabold pt-[2%] font-abc">OUR PARTNERS</h2>
            <div className="flex flex-row justify-evenly mt-[5%]">
                <Marquee>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client1.png"
                height={300}
                width={300}/>
            </div>
                <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client2.png"
                height={300}
                width={300}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client3.png"
                height={280}
                width={280}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client4.png"
                height={350}
                width={350}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client5.png"
                height={400}
                width={400}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client6.png"
                height={400}
                width={400}/>
            </div>
            <div className="mr-[70%]">
                <Image
                alt=""
                src="/images/client7.png"
                height={350}
                width={350}/>
            </div>
            </Marquee>
            
           
            </div>
           
        </div>
    )
}
export default partner;