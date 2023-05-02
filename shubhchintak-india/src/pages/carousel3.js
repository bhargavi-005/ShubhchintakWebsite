import Image from "next/image";
function carousel3(){
    return(
        <div>
        <div className="flex flex-col lg:flex-row-reverse ">
        <div className="m-0 p-0 ">
            <Image
                className="lg:w-[875px] lg:h-[639px]"
                src="/svg/Mobile1.svg"
                width="549"
                height="277"
                alt=""
            />
        </div>
        <div className="flex justify-center items-center   "> 
            <div className="flex flex-col  lg:w-[20%] ">
                <div className=" font-bold text-[40px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">Mobile App
                Development</div>
                <p className="text-center font-xyz text-[14px] font-medium  lg:text-left  ">We are a team of skilled professionals dedicated to providing high-quality mobile app development services to businesses and individuals worldwide.</p>
            </div>
            
        </div>
    </div>
        </div>
    )
}
export default carousel3;