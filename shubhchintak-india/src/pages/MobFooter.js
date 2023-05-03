import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
function MobFooter() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (


        <div className=" bg-[#051629] w-full h-full text-white mt-8 p-8">
            <div className='top-0 left-0 w-[213px]  md:w-[187px] md:h-[46px] pb-8'>
                <Image src="/svg/stpl_logo_white-01-01 1.svg"
                    height="213"
                    width="190"
                    alt=""
                />
            </div>

            <div>
                <div onClick={() => setIsOpen((prev) => !prev)} className="flex flex-row justify-between my-4">Quick link
                    <Image className="-mt-2" src="/svg/minus.svg" width="14" height="2" alt="" />
                </div>
                {isOpen && <div className=" ">
                    <ul className="flex flex-col gap-3 text-gray-400 ">
                        <li className="hover:text-slate-400">
                            <Link href="/Frame23"  >
                                Portfolio
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/Frame24"  >
                                Why Us
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/frame27"  >
                                Carrer
                            </Link>
                        </li>
                    </ul>
                </div>}
            </div>
            <div>
                <div onClick={() => setIsOpen1((prev) => !prev)} className="flex flex-row justify-between my-4">Services
                    <Image className="-mt-2" src="/svg/minus.svg" width="14" height="2" alt="" />
                </div>
                {isOpen1 && <div className=" ">
                    <ul className="flex flex-col gap-3 text-gray-400 ">
                        <li className="hover:text-slate-400">
                            <Link href="/Frame23"  >
                                Web Development
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/Frame24"  >
                                Mobile App
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/frame27"  >
                                Cloud Consultation
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/frame27"  >
                                Graphic Designing
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/frame27"  >
                                CUI/UX Designing
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/frame27"  >
                                Digital Marketing
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/frame27"  >
                                VR/AR Development
                            </Link>
                        </li>
                    </ul>
                </div>}
            </div>
            <div>
                <div onClick={() => setIsOpen2((prev) => !prev)} className="flex flex-row justify-between my-4">Resources
                    <Image className="-mt-2" src="/svg/minus.svg" width="14" height="2" alt="" />
                </div>
                {isOpen2 && <div className=" ">
                    <ul className="flex flex-col gap-3 text-gray-400 ">
                        <li className="hover:text-slate-400">
                            <Link href="/Frame23"  >
                                Blogs
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/Frame24"  >
                                Clients
                            </Link>
                        </li>

                    </ul>
                </div>}
            </div>
            <div>
                <div onClick={() => setIsOpen3((prev) => !prev)} className="flex flex-row justify-between my-4">Legal
                    <Image className="-mt-2" src="/svg/minus.svg" width="14" height="2" alt="" />
                </div>
                {isOpen3 && <div className=" ">
                    <ul className="flex flex-col gap-3 text-gray-400 ">
                        <li className="hover:text-slate-400">
                            <Link href="/Frame23"  >
                                Terms & Condition
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/Frame24"  >
                                Privacy Policy
                            </Link>
                        </li>

                    </ul>
                </div>}
            </div>

            <div>
                <ul className=" mt-10 flex flex-col justify-center items-start gap-9 text-gray-400">
                    <li className="flex flex-row gap-4 items-center ">
                        <Image src="/svg/mail.svg" width="30" height="10" alt="mail" />
                        <div className="number">hello@shubhchintak.co</div>
                    </li>
                    <li className="flex flex-row gap-3 items-center ">
                        <Image
                            src="/svg/india.svg"
                            width="30"
                            height="15"
                            alt="location"
                        />
                        <div className="number ">
                            Office No.1, Sunshine Heights Nalasopara – 401209
                        </div>
                    </li>
                    <li className="flex flex-row gap-5 items-center ">
                        <Image
                            src="/svg/phone.svg"
                            width="18"
                            height="18"
                            alt="location"
                        />
                        <div className="number">+91 7506735570</div>
                    </li>
                    <li className="flex flex-row gap-4 items-center ">
                        <Image
                            src="/svg/england.svg"
                            width="30"
                            height="15"
                            alt="location"
                        />
                        <div className="number">
                            7187, Trotwood Lane. Jupiter, FL - 33458
                        </div>
                    </li>
                    <li className="flex flex-row gap-5 items-center ">
                        <Image
                            src="/svg/phone.svg"
                            width="18"
                            height="18"
                            alt="location"
                        />
                        <div className="number">+1 561 589 8771 </div>
                    </li>
                </ul>
            </div>

            <div className=" flex flex-col  items-center gap-5 mt-12">
                <div className="text-lg font-medium">{"Let’s Connect Now"}</div>
                <div className="w-[319px]  h-auto bg-white rounded-full text-black text-center p-2">
                    <Link href="/contact_us"> Contact Us</Link>
                </div>
                <div className="flex flex-row gap-5">
                    <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image src="/svg/in.svg" width="11" height="11" alt="" />
                    </div>
                    <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image
                            className="h-[12px]"
                            src="/svg/fb.svg"
                            width="11"
                            height="1"
                            alt=""
                        />
                    </div>
                    <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image src="/svg/pint.svg" width="11" height="11" alt="" />
                    </div>
                    <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image src="/svg/insta.svg" width="11" height="11" alt="" />
                    </div>
                    <div className="border-2 border-gray-500 rounded-full p-2">
                        <Image src="/svg/twit.svg" width="11" height="11" alt="" />
                    </div>
                </div>
            </div>






        </div>
    )
}
export default MobFooter;