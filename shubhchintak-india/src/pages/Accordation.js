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
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
        <Accordion className="mt-[2%]" open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
          How much does it cost to create a website for a small business?
          </AccordionHeader>
          <AccordionBody>
            <div className="text-[16px] text-white font-xyz mt-[2%]  ">
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
        <Accordion className="mt-[2%]" open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
          Which online business is best to start in India?
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
        <Accordion className="mt-[2%]" open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
           How do I create a mobile app for my small business?
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
        <Accordion className="mt-[2%]" open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
          How much does it cost to create a mobile app for a small business?
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
        
        <Accordion className="mt-[2%]" open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)}>
          Can I build a mobile app by myself?
          </AccordionHeader>
          <AccordionBody>
            <div className="text-[16px] text-white font-xyz mt-[2%] ">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>

       <Accordion className="mt-[2%]" open={open === 7} icon={<Icon id={7} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(7)}>
          Is it worth to build a mobile app for your business?
          </AccordionHeader>
          <AccordionBody>
          <div className="text-[16px] text-white font-xyz mt-[2%] ">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>

       <Accordion className="mt-[2%]" open={open === 8} icon={<Icon id={8} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(8)}>
          How much do digital marketing services cost?
          </AccordionHeader>
          <AccordionBody>
          <div className="text-[16px] text-white font-xyz mt-[2%] ">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>

         <Accordion className="mt-[2%]" open={open === 9} icon={<Icon id={9} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(9)}>
          How to contact you? Have more questions to ask
          </AccordionHeader>
          <AccordionBody>
          <div className="text-[16px] text-white font-xyz mt-[2%] ">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>

        
       
      </div>
    </Fragment>
  );
}
