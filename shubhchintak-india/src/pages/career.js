import Image from "next/image";
import Footer from "./footer";
import Header from "./Header";
import Link from "next/link";
import bg from "../../public/images/bg.png";
import MobFooter from "./MobFooter";

function career() {
  return (
    <>
      <Header />
      
      <div
        className="max-[768px]:pr-[20%]"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className=" flex flex-row max-[768px]:flex max-[768px]:flex-col ">
          <div className=" ml-[8%]  max-[768px]:order-last  mr-[30%] mt-[13%]">
            <h1 className="max-[768px]:w-[150%] max-[768px]:ml-[15%] max-[768px]:text-center max-[768px]:text-[35px] text-[60px] font-xyz font-extrabold text-white">
              Build your career with Us!
            </h1>
            <p className="max-[768px]:ml-[25%] max-[768px]:text-center max-[768px]:mr-[-50%] text-[18px] font-xyz font-semibold text-white">
              Our employees are the assets of our organization. We do not only
              provide jobs, we tend to built strong careers for our employees.
            </p>
          </div>
          <div className="max-[768px]:flex max-[768px]:justify-center max-[1500px]:mr-[10%] max-[768px]:w-[120%] w-[100%] ml-[-18%] mt-[5%] max-[768px]:ml-[3%] max-[768px]:order-first ">
            <Image
              className="max-[768px]:h-[300px] max-[768px]:w-[90%] w-[600px] h-[500px] "
              src="/images/career1.png"
              alt="career"
              width={600}
              height={430}
            />
          </div>
        </div>
        <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row">
          <div className="max-[768px]:flex max-[768px]:justify-center max-[1500px]:mr-[10%] max-[768px]:w-[120%] w-[100%] ml-[8%] mt-[5%] max-[768px]:ml-[3%] max-[768px]:order-first ">
            <Image
              className="max-[768px]:h-[300px] max-[768px]:w-[90%] w-[600px] h-[500px] "
              src="/images/career2.png"
              alt="career"
              width={600}
              height={430}
            />
          </div>
          <div className="mr-[10%] mt-[8%]">
            <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row  mt-[3%]">
              <div className=" mr-[12%] ml-[-5%] max-[768px]:order-last max-[768px]:mr-[5%]">
                <h1 className="max-[1500px]:ml-[25%] text-white text-[40px] font-semibold max-[768px]:text-[35px] max-[768px]:w-[100%] max-[768px]:text-center">
                  Benefits of working with Us!
                </h1>
                <p className="max-[1500px]:ml-[25%] max-[768px]:w-[100%] text-white text-left text-[16px]  max-[768px]:text-center">
                  We believe when employees feel fulfilled and see their growth
                  potential in their job, they start loving their job. Here are
                  some reasons for working with us;
                </p>
                <div className="max-[1500px]:ml-[15%]  max-[768px]:ml-[30%] max-[768px]:text-center  flex flex-row mt-[5%]">
                  <div>
                    <Image
                      className="max-[768px]:w-[80px]"
                      src="/images/ticks.png"
                      alt="career"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="ml-[3%] mt-[-0.5%]">
                    <p className="font-semibold text-white font-xyz text-[16px]">
                      Build your skills under guidance of highly skilled
                      experts.
                    </p>
                  </div>
                </div>
                <div className="max-[768px]:ml-[30%] max-[768px]:text-center max-[1500px]:ml-[15%]  flex flex-row mt-[5%]">
                  <div>
                    <Image
                      className="max-[768px]:w-[80px]"
                      src="/images/ticks.png"
                      alt="career"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="ml-[3%] mt-[-0.5%]">
                    <p className="font-semibold text-white font-xyz text-[16px]">
                      Enjoy favourable and uplifting work environment.
                    </p>
                  </div>
                </div>
                <div className="max-[768px]:ml-[30%] max-[768px]:text-center max-[1500px]:ml-[15%]  flex flex-row mt-[5%]">
                  <div>
                    <Image
                      className="max-[768px]:w-[55px]"
                      src="/images/ticks.png"
                      alt="career"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="ml-[3%] mt-[-0.5%]">
                    <p className="font-semibold text-white font-xyz text-[16px] ">
                      We promote work-life balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-[768px]:mt-[20%] max-[768px]:ml-[15%]  ml-[4%] mr-[4%] relative mt-[10%]">
          <h1 className="text-center text-white text-[40px] max-[768px]:text-[30px] max-[768px]:mr-[-20%] font-semibold">
            Current openings!
          </h1>
          <div className="flex flex-row max-[768px]:flex max-[768px]:flex-col justify-evenly mt-[5%]">
            <div className="bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                BDM/BDE
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                Wordpress developer
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                {" "}
                UI/UX Designer
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                React Native Intern
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us </Link>
              </button>
            </div>
          </div>
          <div className="flex max-[768px]:flex max-[768px]:flex-col flex-row justify-evenly mt-[2%]">
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                React.JS Intern
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold ">
                Node.JS intern
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                Python intern
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
            <div className="max-[768px]:mt-[5%] bg-[#FFFFFF1A] w-[295px] h-[316px] flex flex-col justify-center">
              <p className="mt-[4%] text-center text-[20px] text-white font-bold">
                Django Intern
              </p>
              <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">
                Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu
                donec purus tellus adipiscing at. Pellentesque commodo eget
                vitae sed velit non id. Tempor mauris vel{" "}
              </p>
              <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <Link href="/job_apply"> Contact Us</Link>
              </button>
            </div>
          </div>
          <div className="max-[768px]:mt-[5%] max-[768px]:w-[300px] max-[768px]:ml-[-1%] bg-[#FFFFFF1A] pt-[2%] pb-[2%] border-solid rounded-md border-2 ml-[10%] mr-[10%] mt-[3%] bg-black-rgba">
            <h2 className="text-white text-[30px] font-xyz text-center font-semibold ">
              If you are interested or know someone who is looking for the
              opportunity, apply at:
              <span className="text-blue-600 font-xyz text-[30px]">
                <a href=""> hr@shubhchintak.co</a>{" "}
              </span>
            </h2>
          </div>
        </div>
        <div>
        <div className="min-[300px]:max-[709px]:hidden min-[710px]:max-[1200px]">
          <Footer />
        </div>

        <div className=" min-[710px]:hidden min-[300px]:max-[709px] ">
          <MobFooter />
        </div>
      </div>
      </div>
      
    </>
  );
}
export default career;
