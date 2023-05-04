import Image from "next/image";
function arvr() {
  return (
    <div  className="max-[768px]:order-last bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] pb-[3%] mt-[5%]">
            <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row">
                <div className="mr-[8%]">
                <h1 className="font-extrabold max-[768px]:text-center text-left ml-[18%] text-white text-[50px] font-xyz">VR/AR Development</h1>
                <p className="max-[768px]:text-center max-[768px]:ml-[15%] ml-[18%] mr-[%] text-white text-left text-[20px]">We take digital experiences to the next level. With our digital marketing experts, we are able to quickly understands the digital growth potential of business and able to plan the best growth oriented digital marketing strategy for our clients.We have brought tremendous results with the help of our effective digital marketing strategy.</p>
                <a href="">
                <button class="max-[768px]:ml-[70%] right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
                 View More
                </button>
                </a>
                </div>
                <div className="max-[768px]:order-first max-[768px]:w-[80%] max-[768px]:ml-[15%] w-[80%] mr-[5%] mb-[5%]">
                    <Image
                    src="/images/vr.png"
                    alt=""
                    width={1000}
                    height={1000}/>
                </div>
            </div>
         
        </div>
  );
}
export default arvr;
