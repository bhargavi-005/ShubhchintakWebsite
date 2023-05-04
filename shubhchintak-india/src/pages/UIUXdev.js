import Image from "next/image";
function uiux() {
  return (
    <div className="max-[768px]:order-last bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] pb-[3%] mt-[5%]">
      <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row">
        <div className="mr-[8%]">
          <h1 className="font-extrabold max-[768px]:text-center text-left ml-[18%] text-white text-[50px] font-xyz">
            UI/UX Designing
          </h1>
          <p className="max-[768px]:text-center max-[768px]:ml-[15%] ml-[18%] mr-[%] text-white text-left text-[20px]">
            We design a new dimension of success for our clients by providing
            excellent user interfaces for their digital solutions. We firstly
            understand the requirements of the client then understand their
            business and after in depth research shows various designs available
            which can suit best to the needs of {"client's"} business.
          </p>
          <a href="">
            <button class="max-[768px]:ml-[70%] right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
              View More
            </button>
          </a>
        </div>
        <div className="max-[768px]:order-first max-[768px]:w-[80%] max-[768px]:ml-[15%] w-[100%] mr-[5%] mb-[5%]">
          <Image src="/images/ui.png" alt="" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}
export default uiux;
