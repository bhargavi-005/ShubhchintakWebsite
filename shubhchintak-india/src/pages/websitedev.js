import Image from "next/image";
function web(){
    return(
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] pb-[2%]">
            <div className="flex flex-row">
                <div className="mr-[8%]">
                <h1 className="text-left ml-[18%] text-white text-[50px] font-xyz">Website Development</h1>
                <p className="ml-[18%] mr-[%] text-white text-left text-[20px]">With acceptance of  advance technology and prominent experience in the industry in providing successful digital solutions, we perform both front end and back end built for web development. We discuss, design, develop and deploy client based, goal and growth oriented web solutions. We have created websites for most challenging business ideas, this makes us different.</p>
                <a href="">
                <button class="right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                 View More
                </button>
                </a>
                </div>
                <div className="w-[150%] mr-[5%] ">
                    <Image
                    src="/images/websitedev.png"
                    width={1000}
                    height={1000}/>
                </div>
            </div>
         
        </div>
    )
}
export default web;