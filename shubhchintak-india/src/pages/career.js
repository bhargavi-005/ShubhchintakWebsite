import Image from "next/image";

function career() {
    return(
        <div>
            <div className="flex flex-row">
                <div className="ml-[8%] mr-[30%] mt-[15%]">
                    <h1 className="text-[60px] font-xyz font-extrabold text-white">Build your career with Us!</h1>
                    <p className="text-[18px] font-xyz font-semibold text-white">Our employees are the assets of our organization. We do 
                    not only provide jobs, we tend to built strong careers for 
                    our employees.</p>
                </div>
                <div className="w-[100%] ml-[-18%] mt-[5%]">
                    <Image className="w-[600px] h-[500px]"
                    src="/images/career1.png"
                    width={600}
                    height={430}/>
                </div>
            </div>
        </div>
    )
}
export default career;