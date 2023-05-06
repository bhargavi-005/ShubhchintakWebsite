import { Fragment, useState } from "react";
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
export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <div
        className="text-white md:p-28 p-10 text-xl font-medium"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
      <div className="text-5xl font-bold text-center mt-16 mb-16">Frequently Asked Questions</div>
      <div className="mt-[5%]" >
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            How can I do online business?
          </AccordionHeader>
          <AccordionBody>
            <div className="text-[16px] text-white font-xyz mt-[2%] ">
            1)Check visibility of our business idea by doing market research<br/>
            2)Develop a business plan <br/>
            3)Select attractive name of for business<br/>
            4)Plan structure of your business<br/>
            5)Build your website <br/>
            6)Plan marketing strategy for growing your business.<br/>
            Want to make it easier? Contact us, we will do all these steps for you.
            </div>
          </AccordionBody>
        </Accordion>
        </div>
     

        
       
      </div>
    </Fragment>
  );
}


