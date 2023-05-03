import Image from "next/image";
import Link from "next/link";
function CheckOut() {
  return (
    <div>
      <div className="flex justify-center items-center text-center mt-[80px] mx-6 text-white my-20">
        <div className=" font-bold text-[25px] md:text-[40px] lg:text-[60px] lg:w-[1250px] ">
          Check out Our Other Services !
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2  content-center place-items-center gap-x-1 gap-y-5">
        <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
          <div className="w-[292px] h-[314px] bg-gray-800 p-7">
            <Image
              className="object-cover object-center rounded "
              alt="earth"
              src="images/img1.svg"
              width={300}
              height={300}
            />

            <div className="text-white text-xl text-center font-medium  mt-6">
              <Link href="/websitedev"> Website Development</Link>
            </div>
          </div>
        </div>
        <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
          <div className="w-[292px] h-[314px] bg-gray-800 p-8">
            <Image
              className="object-cover object-center rounded  ml-5"
              alt="earth"
              src="images/img2.svg"
              width="192"
              height="184"
            />

            <div className="text-white text-xl text-center font-medium  mt-6">
              <Link href="/mobileappdev"> App Development</Link>
            </div>
          </div>
        </div>
        <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
          <div className="w-[292px] h-[314px] bg-gray-800 p-7">
            <Image
              className="object-cover object-center rounded "
              alt="earth"
              src="images/img3.svg"
              width={300}
              height={300}
            />

            <div className="text-white text-xl text-center font-medium  mt-6">
              <Link href="/digitalMarketing"> Digital Marketing </Link>
            </div>
          </div>
        </div>
        <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
          <div className="w-[292px] h-[314px] bg-gray-800 p-7">
            <Image
              className="object-cover object-center rounded "
              alt="earth"
              src="images/img4.svg"
              width={300}
              height={300}
            />

            <div className="text-white text-xl text-center font-medium  mt-6">
              <Link href="/UIUXdev"> UI/UX Designing</Link>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 md:col-start-1 w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
          <div className="w-[292px] h-[314px] bg-gray-800 p-7">
            <Image
              className="object-cover object-center rounded "
              alt="earth"
              src="images/img5.svg"
              width={300}
              height={300}
            />

            <div className="text-white text-xl text-center font-medium  mt-6">
              <Link href="/cloudcunsuldev">Cloud Development</Link>
            </div>
          </div>
        </div>
        <div className="w-[295px] h-[316px] bg-gradient-to-b from-white to-black  flex items-center justify-center">
          <div className="w-[292px] h-[314px] bg-gray-800 p-7">
            <Image
              className="object-cover object-center rounded  ml-5"
              alt="earth"
              src="images/img6.svg"
              width="192"
              height="190"
            />

            <div className="text-white text-xl text-center font-medium  mt-6">
              <Link href="/VrArdev">VR/AR Development </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckOut;
