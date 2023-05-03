import Image from "next/image";
function OurInsight() {
  return (
    <div>
      <div className="flex justify-center items-center text-center mt-[80px] mx-6">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
          Our Web Development work insights!
        </div>
      </div>

      <div className="flex flex-col   lg:flex-row-reverse my-14">
        <div className=" lg:w-[50%] md:ml-14">
          <Image
            src="/svg/workInsight.svg"
            width="610"
            height="420"
            alt="workInsight"
          />
        </div>
        <div className="lg:w-[40%] h-auto">
          <h6 className="font-medium text-[20px] md:text-[30px] my-6">
            The Tusk
          </h6>
          <ul>
            <li className=" mb-4 flex flex-row ">
              <div className="mr-2  mb-9 md:w-[5%]">
                <Image src="/svg/tick.svg" width="40" height="17" alt="tick" />
              </div>
              <div className="font-xyz text-sm font-medium  ">
                <span className="text-[#0F89FF]">Problem addressed:</span> The
                Tusk addresses the need for more sustainable and eco-friendly
                products in the market.
              </div>
            </li>
            <li className=" mb-4 flex flex-row">
              <div className="mr-2 mb-9  w-[13%] md:w-[6%]">
                <Image src="/svg/tick.svg" width="40" height="17" alt="tick" />
              </div>
              <div className="font-xyz text-sm font-medium ">
                <span className="text-[#0F89FF]">Key features: </span>The store
                sells accessories and daily necessary goods made of bamboo,
                promoting a sustainable and organic lifestyle.
              </div>
            </li>

            <li className=" mb-4 flex flex-row ">
              <div className="mr-2 mb-9 w-[16%] md:w-[7%]">
                <Image src="/svg/tick.svg" width="40" height="17" alt="tick" />
              </div>
              <div className="font-xyz text-sm font-medium ">
                <span className="text-[#0F89FF] font-xyz text-sm font-medium">
                  User-friendly interface:{" "}
                </span>
                The {"store's"} website and mobile app have a user-friendly
                interface, making it is easy for customers to purchase
                eco-friendly products.
              </div>
            </li>
            <li className="mb-4 flex flex-row ">
              <div className="mr-2 mb-9 w-[19%] md:w-[8%]">
                <Image src="/svg/tick.svg" width="40" height="17" alt="tick" />
              </div>
              <div className="font-xyz text-sm font-medium ">
                <span className="text-[#0F89FF]">Impact on business: </span>The
                Tusk has seen an increase in traffic and sales on its website,
                as well as increased customer satisfaction, as a result of
                offering eco-friendly products.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default OurInsight;
