import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function Header(){

    const [open, setOpen] = useState(false)

    return(
        
        <div className=' header text-white flex flex-row font-xyz mt-6 mx-5 justify-between  xl:items-center  '>
            <div className='top-0 left-0 w-[139px] h-[29px]'>
                <Image  src="/svg/stpl_logo_white-01-01 1.svg"  
                        height="45"
                        width="190"   
                        alt=""
                />
            </div>
            
            <div className=" duration-500 xl:static absolute xl:min-h-fit min-h-[60vh] left-0 top-[-100%] xl:w-auto  w-full flex items-center px-5 ">
                <ul onClick={() => setOpen(false)} className="flex xl:flex-row flex-col xl:items-center xl:gap-[4vw] gap-8 ">
                    
                    <li>
                        <div  className="flex flex-row items-center">Services
                            <Image className="" src="/svg/arrowdown.png" width={27} height={20}  alt=""/>
                        </div>
                    </li>

                    <li className="hover:text-slate-400">
                        <Link href=""  >
                            Portfolio
                        </Link>
                    </li>
                    <li className="hover:text-slate-400">
                        <Link href=""  >
                            Why Us
                        </Link>
                    </li>
                    <li>
                        <div  className="flex flex-row items-center">Resources
                            <Image className="" src="/svg/arrowdown.png" width={27} height={20}  alt=""/>
                        </div>
                    </li>
                    <li className="hover:text-slate-400">
                        <Link href="/home"  >
                        Career
                        </Link>
                    </li>
                    <li>
                        <div  className="flex flex-row items-center">En
                            <Image className="" src="/svg/arrowdown.png" width={27} height={20}  alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className="flex items-center gap-6">
                <button className="bg-[#0F89FF]  xl:w-[145px] xl:h-[46px] w-[105px] h-[35px] rounded-full"> Contact Us</button>
                <div onClick={() => setOpen(!open)}  className=" menu text-3xl cursor-pointer xl:hidden">
                    <Image
                        src='/svg/hamburger.svg'
                        width="24"
                        height="24"
                        alt=""

                    />
                </div>
            </div>
             
        </div>
    )
}
export default Header;