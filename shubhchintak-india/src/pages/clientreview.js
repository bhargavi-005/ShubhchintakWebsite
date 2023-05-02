import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
function review(){
    return(
        
        <div className="flex flex-row pb-[3%] mt-[3%]">
           <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row border-4 border-solid w-[610px] h-[280px] ml-[10%]">
            <div className="ml-[7%] mt-[8%]">
                <Image
                src="/svg/pp.png"
                alt=""
                width={50}
                height={50}/>
            </div>
            <div className="ml-[2%] mt-[8%]">
                <h2 className="text-white font-xyz text-[18px]">Esther Howard</h2>
                <p className="text-white font-xyz text-[16px]">Sub Text</p>
            </div>
            <div className="ml-[40%] mt-[8%]">
                <Image
                src="/svg/comment.png"
                height={60}
                width={60}  />
            </div>
            
            
           </div>
           <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row border-4 border-solid w-[610px] h-[280px] ml-[2%]">
            <div className="ml-[7%] mt-[8%]">
                <Image
                src="/svg/pp.png"
                width={50}
                height={50}/>
            </div>
            <div className="ml-[2%] mt-[8%]">
                <h2 className="text-white font-xyz text-[18px]">Esther Howard</h2>
                <p className="text-white font-xyz text-[16px]">Sub Text</p>
            </div>
            <div className="ml-[40%] mt-[8%]">
                <Image
                src="/svg/comment.png"
                height={60}
                width={60}  />
            </div>
            
            
           </div>
        </div>
    )
}
export default review;