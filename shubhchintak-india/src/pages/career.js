import Image from "next/image";
import Footer from "./footer";
import Header from "./Header";
import Link from "next/link";

function career() {
    return(
        <div>
            <Header/>
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
            <div className="flex flex-row">
            <div className="w-[100%] ml-[8%] mt-[5%]">
                    <Image className="w-[600px] h-[500px]"
                    src="/images/career1.png"
                    width={600}
                    height={430}/>
                </div>
                <div className="mr-[10%] mt-[15%]">
                <div className="max-[768px]:flex max-[768px]:flex-col flex flex-row  mt-[3%]">
                    <div className="mr-[10%] max-[768px]:order-last max-[768px]:mr-[5%]">
                        <h1 className="text-white text-[40px] font-semibold">Benefits of working with Us!</h1>
                        <p className="text-white text-left text-[16px]">We believe when employees feel fulfilled and see their growth potential in their job, they start loving their job. Here are some reasons for working with us;</p>
                        <div className="flex flex-row mt-[5%]">
                            <div>
                                <Image
                                src="/images/ticks.png"
                                width={20}
                                height={20}/>
                            </div>
                            <div className="ml-[3%] mt-[-0.5%]">
                                <p className="font-semibold text-white font-xyz text-[16px]">Build your skills under guidance of highly skilled experts.</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-[5%]">
                            <div>
                                <Image
                                src="/images/ticks.png"
                                width={20}
                                height={20}/>
                            </div>
                            <div className="ml-[3%] mt-[-0.5%]">
                                <p className="font-semibold text-white font-xyz text-[16px]">Enjoy favourable and uplifting work environment.</p>
                            </div>
                        </div>
                        <div className="flex flex-row mt-[5%]">
                            <div>
                                <Image
                                src="/images/ticks.png"
                                width={20}
                                height={20}/>
                            </div>
                            <div className="ml-[3%] mt-[-0.5%]">
                                <p className="font-semibold text-white font-xyz text-[16px]">We promote work-life balance.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
               
            </div>
            <div className="mt-[10%]">
                <h1 className="text-center text-white text-[40px] font-semibold">Current openings!</h1>
                <div className="flex flex-row justify-evenly mt-[5%]">
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">BDM/BDE</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                       <Link href="/job_apply"> Contact Us</Link>
                        </button>
                    </div>
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">Wordpress developer</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                       <Link href="/job_apply"> Contact Us</Link>
                        </button>
                    </div>
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white "> UI/UX Designer</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link href="/job_apply"> Contact Us</Link>
                        </button>
                    </div>
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">React Native Intern</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                       <Link href="/job_apply"> Contact Us </Link>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly mt-[5%]">
                <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">React.JS Intern</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link href="/job_apply"> Contact Us</Link>
                        </button>
                    </div>
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">Node.JS intern</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link href="/job_apply"> Contact Us</Link>
                        </button>
                    </div>
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">Python intern</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link href="/job_apply"> Contact Us</Link>
                        </button>
                    </div>
                    <div className="bg-zinc-950 w-[295px] h-[316px] flex flex-col justify-center">
                        <p className="mt-[4%] text-center text-[20px] text-white ">Django Intern</p>
                        <p className="ml-[8%] mr-[8%] mt-[4%] text-center text-[16px] text-white ">Lorem ipsum dolor sit amet consectetur. Luctus volutpat urna eu donec purus tellus adipiscing at. Pellentesque commodo eget vitae sed velit non id. Tempor mauris vel </p>
                        <button class="mt-[7%] ml-[20%] mr-[20%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <Link href="/job_apply">  Contact Us</Link>
                        </button>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
export default career;