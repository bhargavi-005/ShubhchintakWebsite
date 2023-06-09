import bg from "../../public/images/bg.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Review() {
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
    } = rest;
    return (
      <button
        className={active ? "w-[14px] h-[14px] rounded-[7px] bg-gray-600 mx-1 mt-20" : "w-[14px] h-[14px] rounded-[7px] bg-white mx-1 mt-20 "}
        onClick={() => onClick()}
      />
    );
  };

   const responsive = {
    
     desktop: {
       breakpoint: { max: 4000, min: 1110 },
       items: 3,
     },
     tablet: {
       breakpoint: { max: 1109, min: 700 },
       items: 2,
     },
     mobile: {
       breakpoint: { max: 700, min: 0 },
       items: 1,
     },
   };

  return (
    <div className="" style={{ backgroundImage: `url(${bg.src})` }}>
      <Carousel showDots={true}  responsive={responsive} customDot={<CustomDot/>} >
      
      <div className="slide w-[320px] h-[276px] lg:w-[400px] lg:h-[346px]  rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 lg:ml-20">
            <div>
                <Image
                className="object-cover object-center rounded z-10 my-1"
                alt="earth"
                src="images/commas.svg"
                width="55"
                height="40"
                />
                <div className="text-white font-[Mulish] font-normal text-[13px] lg:text-lg">Our Experience with Dinesh was Very 
                Good. His knowledge and troubleshooting 
                skills, makes the company a reliable one.
                </div>
                <div className="mt-12 flex flex-row gap-4 text-center lg:mt-20">
                    <Image
                    className="object-cover object-center rounded z-10 "
                    alt="earth"
                    src="images/Ellipse98.svg"
                    width="64"
                    height="64"
                    />
                    <div className="flex flex-col ">
                        <div className="text-white text-[16px] font-medium">Lavanya Tagra</div>
                        <div className="text-white text-[12px]">CEO Wellnessly club</div>
                        
                          <Image
                            className="object-cover object-center rounded z-10"
                            alt="earth"
                            src="images/rating.svg"
                            width="62"
                            height="12"
                          />
                      </div>
                </div>
            </div>
      </div>
      <div className="slide w-[320px] h-[276px] lg:w-[400px] lg:h-[346px]  rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 lg:ml-20">
          <div>
              <Image
              className="object-cover object-center rounded z-10 my-1"
              alt="earth"
              src="images/commas.svg"
              width="55"
              height="40"
              />
              <div className="text-white font-[Mulish] font-normal text-[13px] lg:text-lg">Thanks team.. Special thanks to @Dinesh n @Bharath S.. Every step will be hurdle.. We Know how to overcome..
              </div>
              <div className="mt-12 flex flex-row gap-4 text-center lg:mt-20">
                  <Image
                  className="object-cover object-center rounded z-10 "
                  alt="earth"
                  src="images/Ellipse97.svg"
                  width="64"
                  height="64"
                  />
                  <div className="flex flex-col">
                      <div className="text-white text-[16px] font-medium justify-start text-start">Angu Ashok</div>
                      <div className="text-white text-[12px] justify-start">CEO Go Green Dad</div>
                      
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/rating.svg"
                          width="62"
                          height="12"
                        />
                    </div>
              </div>
          </div>
      </div>
      <div className="slide w-[320px] h-[276px] lg:w-[400px] lg:h-[346px]  rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 lg:ml-20 ">
            <div>
                <Image
                className="object-cover object-center rounded z-10 my-1 "
                alt="earth"
                src="images/commas.svg"
                width="55"
                height="40"
                />
                <div className="text-white font-[Mulish] font-normal text-[13px] lg:text-lg">Good work, Time Delivery and Satisfied 
                by work.
                </div>
                <div className="mt-12 flex flex-row gap-4 text-center lg:mt-20">
                    <Image
                    className="object-cover object-center rounded z-10 w-16 h-16 mt-6"
                    alt="earth"
                    src="images/Ellipse99.svg"
                    width="64"
                    height="64"
                    />
                    <div className="flex flex-col mt-8">
                        <div className="text-white text-[16px] font-medium justify-start text-start">Vikram Singh</div>
                        <div className="text-white text-[12px] justify-start">CEO VTS Technocrats</div>
                        
                          <Image
                            className="object-cover object-center rounded z-10"
                            alt="earth"
                            src="images/rating.svg"
                            width="62"
                            height="12"
                          />
                      </div>
                </div>
            </div>
      </div>
      <div className="slide w-[320px] h-[276px] lg:w-[400px] lg:h-[346px]  rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 lg:ml-20">
          <div>
              <Image
              className="object-cover object-center rounded z-10 my-1"
              alt="earth"
              src="images/commas.svg"
              width="55"
              height="40"
              />
              <div className="text-white font-[Mulish] font-normal text-[13px] lg:text-lg">Thanks team.. Special thanks to @Dinesh n @Bharath S.. Every step will be hurdle.. We Know how to overcome..
              </div>
              <div className="mt-12 flex flex-row gap-4 text-center lg:mt-20">
                  <Image
                  className="object-cover object-center rounded z-10 "
                  alt="earth"
                  src="images/Ellipse97.svg"
                  width="64"
                  height="64"
                  />
                  <div className="flex flex-col">
                      <div className="text-white text-[16px] font-medium justify-start text-start">Angu Ashok</div>
                      <div className="text-white text-[12px] justify-start">CEO Go Green Dad</div>
                      
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/rating.svg"
                          width="62"
                          height="12"
                        />
                    </div>
              </div>
          </div>
      </div>
      <div className="slide w-[320px] h-[276px] lg:w-[400px] lg:h-[346px]  rounded-lg bg-gradient-to-tl from-[#204061] to-[#0F89FF] p-7 lg:ml-20 ">
            <div>
                <Image
                className="object-cover object-center rounded z-10 my-1 "
                alt="earth"
                src="images/commas.svg"
                width="55"
                height="40"
                />
                <div className="text-white font-[Mulish] font-normal text-[13px] lg:text-lg">Good work, Time Delivery and Satisfied 
                by work.
                </div>
                <div className="mt-12 flex flex-row gap-4 text-center lg:mt-20">
                    <Image
                    className="object-cover object-center rounded z-10 w-16 h-16 mt-6"
                    alt="earth"
                    src="images/Ellipse99.svg"
                    width="64"
                    height="64"
                    />
                    <div className="flex flex-col mt-8">
                        <div className="text-white text-[16px] font-medium justify-start text-start">Vikram Singh</div>
                        <div className="text-white text-[12px] justify-start">CEO VTS Technocrats</div>
                        
                          <Image
                            className="object-cover object-center rounded z-10"
                            alt="earth"
                            src="images/rating.svg"
                            width="62"
                            height="12"
                          />
                      </div>
                </div>
            </div>
      </div>
      
            
         
       
          
      
     
      </Carousel>
      
    </div>
  );
}


