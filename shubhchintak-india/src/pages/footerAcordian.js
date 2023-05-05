import { Fragment, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import bg from "../../public/images/bg.png";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 transition-transform ${
        open === id ? "transform rotate-0" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {open === id ? (
        <>
          <rect x="3" y="9" width="14" height="2" className="fill-current" />
        </>
      ) : (
        <>
          <rect x="9" y="3" width="2" height="14" className="fill-current" />
          <rect x="3" y="9" width="14" height="2" className="fill-current" />
        </>
      )}
    </svg>
  );
}
export default function FooterAcordian() {
    const [open, setOpen] = useState(0);
  
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
  return(
    <Fragment>
    <div
      className="text-white"
      
    >
    
    <div className=" font-xyz  " >
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        <div className="font-medium  text-base ">Quick link</div>
        </AccordionHeader>
        <AccordionBody>
        <ul className="flex flex-col gap-3 text-gray-400 ">
        <li className="hover:text-slate-400">
            <Link href="/portfolio"  >
                Portfolio
            </Link>
        </li>
        <li className="hover:text-slate-400">
            <Link href="/Frame24"  >
                About Us
            </Link>
        </li>
        <li className="hover:text-slate-400">
            <Link href="/career"  >
                Carrer
            </Link>
        </li>
    </ul>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <div className="font-medium  text-base ">Services</div>
        </AccordionHeader>
        <AccordionBody>
        <ul className="flex flex-col gap-3 text-gray-400 ">
                        <li className="hover:text-slate-400">
                            <Link href="/webdeveloppment"  >
                                Web Development
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/mobileApp"  >
                                Mobile App
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/CloudConsultation"  >
                                Cloud Consultation
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/graphicDesign"  >
                                Graphic Designing
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/UIDesigning"  >
                                CUI/UX Designing
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/digitalMarketing"  >
                                Digital Marketing
                            </Link>
                        </li>
                        <li className="hover:text-slate-400">
                            <Link href="/ArDevelopment"  >
                                VR/AR Development
                            </Link>
                        </li>
                    </ul>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        <div className="font-medium  text-base">Resources</div>
        </AccordionHeader>
        <AccordionBody>
        <ul className="flex flex-col gap-3 text-gray-400 ">
                        <li className="hover:text-slate-400">
                            <Link href="/blog"  >
                                Blogs
                            </Link>
                        </li>
                        

                    </ul>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        <div className="font-medium  text-base">Legal</div>
        </AccordionHeader>
        <AccordionBody>
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
        </AccordionBody>
      </Accordion>
      </div>
   

      
     
    </div>
  </Fragment>
  );
}
