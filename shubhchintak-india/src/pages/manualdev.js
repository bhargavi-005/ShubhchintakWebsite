import Image from "next/image";
function manual() {
  return (
    <div className=" max-[768px]:flex max-[768px]:ml-[-1%]  order-last bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] mb-[-50%] mt-[5%] ">
      <div className=" max-[768px]:flex max-[768px]:flex-col flex flex-row ">
        <div className="mt-[-3%] max-[768px]:order-last max-[768px]:mt-[2%] max-[768px]:ml-[-6%] mr-[8%]">
          <h1 className="font-extrabold max-[768px]:text-center text-left ml-[18%] max-[768px]:text-[30px] text-white text-[50px] font-xyz">
            Manual Testing
          </h1>
          <p className="max-[768px]:text-center max-[768px]:ml-[15%] ml-[18%] mr-[%] text-white text-left max-[768px]:text-[14px] text-[20px]">
            We design a new dimension of success for our clients by providing
            excellent user interfaces for their digital solutions. We firstly
            understand the requirements of the client then understand their
            business and after in depth research shows various designs available
            which can suit best to the needs of {"client's"} business.
          </p>
          <a href="">
            <button class=" max-[768px]:ml-[70%] right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
              View More
            </button>
          </a>
        </div>
        <div className="max-[768px]:order-first  max-[768px]:w-[200px] max-[768px]:ml-[25%] max-[768px]:h-[200px]  w-[1500px] h-[350px] mt-[-5%]  mr-[5%]">
          <Image
            className="max-[768px]:h-[200px]"
            alt=""
            src="/images/manual.png"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
export default manual;
