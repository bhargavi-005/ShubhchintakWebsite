import Image from "next/image"

export default function mobileappdev() {
  return (
    <div  className=" max-[768px]:flex max-[768px]:ml-[-1%]  order-last bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] mb-[-50%] mt-[5%] ">
            <div className=" max-[768px]:flex max-[768px]:flex-col flex flex-row ">
                <div className="mt-[-3%] max-[768px]:order-last max-[768px]:mt-[2%] max-[768px]:ml-[-6%] mr-[8%]">
                <h1 className="font-extrabold max-[768px]:text-center text-left ml-[18%] max-[768px]:text-[30px] text-white text-[50px] font-xyz">Mobile Application </h1>
                <p className="max-[768px]:text-center max-[768px]:ml-[15%] ml-[18%] mr-[%] text-white text-left max-[768px]:text-[14px] text-[20px]">We create feature rich,  impactful and engaging mobile applications. We keep ourselves updated with the latest trends in the industry. Likewise, we are always ready to provide new user experience and experiment creative trends for providing excellent results to our clients. We have successfully created award-winning mobile applications. Our  mobile application features and user experience journey  speaks all about our success.</p>
                <a href="">
                <button class=" max-[768px]:ml-[70%] right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                 View More
                </button>
                </a>
                </div>
                <div className="max-[768px]:order-first max-[768px]:ml-[25%] max-[768px]:w-[230px] max-[768px]:h-[200px]  w-[1500px] h-[350px] mt-[-5%]  mr-[5%]">
                    <Image className="max-[768px]:h-[200px]"
                     alt=""
                     src="/images/mobile.png"
                     height={500}
                     width={500}/>
                </div>
            </div>
         
        </div>
  )
}
