import Image from "next/image";

function web(){
    return(
        <div  className="max-[768px]:order-last bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] pb-[3%] mt-[5%] ">
            <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row ">
                <div className="mr-[8%]">
                <h1 className="font-extrabold max-[768px]:text-center text-left ml-[18%] text-white text-[50px] font-xyz">Website Development</h1>
                <p className="max-[768px]:text-center max-[768px]:ml-[15%] ml-[18%] mr-[%] text-white text-left text-[20px]">With acceptance of  advance technology and prominent experience in the industry in providing successful digital solutions, we perform both front end and back end built for web development. We discuss, design, develop and deploy client based, goal and growth oriented web solutions. We have created websites for most challenging business ideas, this makes us different.</p>
                <a href="">
                <button class="max-[768px]:ml-[70%] right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                 View More
                </button>
                </a>
                </div>
                <div className="max-[768px]:order-first max-[768px]:w-[80%] max-[768px]:ml-[15%] w-[150%] mr-[5%] mb-[5%]">
                    <Image
                    src="/images/websitedev.png"
                    alt=""
                    width={1000}
                    height={1000}/>
                </div>
            </div>
         
        </div>
    )
}
export default web;