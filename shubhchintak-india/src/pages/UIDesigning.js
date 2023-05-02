import Image from "next/image";
import Carousel from "./carouselUI";

function UIDesigning() {
  return (
    
      <div className=" p-16">
        <section className="flex flex-row text-white">
          <div className="container  flex md:flex-row flex-col-reverse items-center">
            <div className="w-4/5 m-12">
              <div className="text-4xl md:text-6xl text-white font-bold">
                UI/UX Designing
              </div>
              <div className="w-3/4 text-base md:text-2xl text-blue-200 mt-8">
                Revamp Your Digital Experience with Expert UX/UI Designing
                Services
              </div>
              <button className="bg-blue-500 w-1/3 mt-8 p-3 rounded-full text-white font-semibold text-base md:text-2xl">
                Get Started
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-12">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/uxdesign.svg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col w-full p-16 content-center justify-items-center mt-24">
            <div className="text-center text-4xl md:text-6xl font-bold text-blue-500">
              Hire {"India's"} top Graphic Designing Company
            </div>
            <div className="text-white mt-8 text-base md:text-2xl text-center">
              We design a new dimension of success for our clients by providing
              excellent user interfaces for their digital solutions. We firstly
              understand the requirements of the client then understand their
              business and after in depth research shows various designs
              available which can suit best to the needs of {"client's"}{" "}
              business.
            </div>
            <div className="place-self-center lg:max-w-lg lg:w-full md:w-1/3 w-5/6  m-12">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/Gdcompany.svg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="text-4xl md:text-6xl  text-white p-12 font-bold text-center">
            Transform your digital journey with
            <span className="text-blue-500">
              {" 360'"} UI/UX Designing Process!
            </span>
          </div>
          <div className="m-8 mb-0 text-white justify-center flex flex-col md:flex-row">
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 1</div>
              <div className="text-3xl text-white">UX/UI Audit</div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 2</div>
              <div className="text-3xl text-white">User Research</div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 3</div>
              <div className="text-3xl text-white">Strategy formation</div>
            </div>
          </div>

          <div className="m-8  mt-0 text-white justify-center flex flex-col md:flex-row">
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 4</div>
              <div className="text-2xl text-white">UX Design creation</div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 5</div>
              <div className="text-2xl text-white">
                User Interface development
              </div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 6</div>
              <div className="text-2xl text-white">Deployment & Support</div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-white text-4xl md:text-6xl text-center m-12 md:m-20 p-4 md:p-16 font-bold">
            We provide
            <span className="text-blue-500">
              {" "}
              Right UI/UX Designing services as per the industry!
            </span>
          </div>
          <div className="text-white text-4xl md:text-6xl text-center">
          <Carousel/>
          </div>
        </section>

        <section>
          <div className="text-4xl md:text-6xl text-white text-center p-12 mt-12 md:mt-20 font-bold">
            Broad spectrum of UI/UX Designing Services we provide!
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-row">
              <div className="p-4 h-16 bg-white rounded-full m-4 text-3xl font-semibold">
                Branding
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
                UI designs
              </div>
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Marketing collateral
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Social Media design
            </div>
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-row">
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
                Newsletter & emailers
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
                Videos
              </div>
            </div>
          </div>
          <div className="w-3/2 border text-center p-8 md:p-20 items-center bg-zinc-800 ml-6 md:ml-20 mt-12 md:mt-20 content-center mr-6 md:mr-20 rounded-3xl">
            <div className="text-2xl md:text-4xl text-white font-bold m-3 md:m-5">
              Need complete UI/UX Designing consultation?
            </div>
            <button className="text-white font-semibold bg-blue-500 p-4 mt-8 text-2xl rounded-full">
              Contact our experts
            </button>
          </div>
        </section>

        <section>
          <div className="m-12 md:m-24">
            <div className="font-bold tect-4xl md:text-6xl text-white text-center">
              Our UI/UX Designs Insights!
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-3/5 mt-12 md:mt-20">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  The Tusk
                </div>
                <div className="text-base md:text-2xl">
                  <div className="text-white text-2xl m-4">
                    <span className="text-blue-500">Problem addressed:</span>
                    The Tusk addresses the need for more sustainable and eco
                    friendly products in the market.
                  </div>
                  <div className="text-white text-2xl m-4">
                    <span className="text-blue-500">Key features: </span>
                    The store sells accessories and daily necessary goods made
                    of bamboo, promoting a sustainable and organic lifestyle.
                  </div>
                  <div className="text-white text-2xl m-4">
                    <span className="text-blue-500">
                      User friendly interface:{" "}
                    </span>
                    The {"store's"} website and mobile app have a user friendly
                    interface, making it is easy for customers to purchase eco
                    friendly products
                  </div>
                  <div className="text-white text-2xl m-4">
                    <span className="text-blue-500">Impact on business: </span>
                    The Tusk has seen an increase in traffic and sales on its
                    website, as well as increased customer satisfaction, as a
                    result of offering eco friendly products.
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-20 lg:max-w-2xl lg:w-full md:w-full w-5/6">
                <Image
                  className="object-cover object-center rounded z-10"
                  alt="earth"
                  src="images/tusk.svg"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <div className="text-4xl md:text-6xl text-white font-bold">
              What Our {"Client's"} Say About Us
            </div>
            <div className="flex flex-col md:flex-row m-12 md:m-20">
              <div className="bg-blue-500 m-4 rounded-xl  flex justify-center flex-col border-2">
              <div className="m-5 ml-8">
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/commas.svg"
                          width={100}
                          height={10}
                        />
                      </div>
                <div className="text-start text-white text-base ml-10">
                  Our Experience with Dinesh was Very Good. His knowledge and
                  troubleshooting skills, makes the company a reliable one.
                </div>
                <div className="flex flex-row w-full h-full mb-5">
                  <div className="ml-10 mr-3 mt-12 text-white text-xl">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/Ellipse98.svg"
                      width={110}
                      height={110}
                    />
                  </div>
                  <div className="mt-16 text-start text-white text-xl">
                    <div className="flex flex-col">
                      <div className="text-white text-2xl">Lavanya Tagra</div>
                      <div className="text-white">CEO Wellnessly club</div>
                      <div>
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/rating.svg"
                          width={100}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <div className="bg-blue-500 m-4 rounded-xl h-full flex justify-center flex-col border-2">
              <div className="m-5 ml-8">
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/commas.svg"
                          width={100}
                          height={10}
                        />
                      </div>
                <div className="text-start text-white text-base ml-10">
                  Our Experience with Dinesh was Very Good. His knowledge and
                  troubleshooting skills, makes the company a reliable one.
                </div>
                <div className="flex flex-row w-full h-full mb-5">
                  <div className="ml-10 mr-3 mt-12 text-white text-xl">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/Ellipse97.svg"
                      width={110}
                      height={110}
                    />
                  </div>
                  <div className="mt-16 text-start text-white text-xl">
                    <div className="flex flex-col">
                      <div className="text-white text-2xl">Lavanya Tagra</div>
                      <div className="text-white">CEO Wellnessly club</div>
                      <div>
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/rating.svg"
                          width={100}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <div className="bg-blue-500 m-4 rounded-xl h-full mr-6 flex justify-center flex-col border-2">
              <div className="m-5 ml-8">
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/commas.svg"
                          width={100}
                          height={10}
                        />
                      </div>
                <div className="text-start text-white text-base ml-10">
                  Our Experience with Dinesh was Very Good. His knowledge and
                  troubleshooting skills, makes the company a reliable one.
                </div>
                <div className="flex flex-row w-full h-full mb-5">
                  <div className="ml-10 mr-3 mt-12 text-white text-xl">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/Ellipse99.svg"
                      width={110}
                      height={110}
                    />
                  </div>
                  <div className="mt-16 text-start text-white text-xl">
                    <div className="flex flex-col">
                      <div className="text-white text-2xl">Lavanya Tagra</div>
                      <div className="text-white">CEO Wellnessly club</div>
                      <div>
                        <Image
                          className="object-cover object-center rounded z-10"
                          alt="earth"
                          src="images/rating.svg"
                          width={100}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            
            </div>
          </div>
        </section>

        <section>
            <div className="text-white text-4xl md:text-6xl font-bold text-center mt-12 md:mt-32">
                Check out Our Other Services !
            </div>
            <div className="flex flex-wrap ml-12 md:ml-20 text-white mt-12 item-center justify-center">
            <div className="xl:w-1/5 md:w-1/2 m-6">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img1.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-6">
                  Website Development
                  </div>
              </div>
            </div>
            <div className="xl:w-1/5 md:w-1/2 m-6">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6 content-center">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img2.svg"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-0">
                     App Development
                  </div>
              </div>
            </div>
            <div className="xl:w-1/5 md:w-1/2 m-6">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img3.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-6">
                    Digital Marketing
                  </div>
              </div>
            </div>
            <div className="xl:w-1/5 md:w-1/2 m-6">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img4.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-0">
                    Graphic Designing
                  </div>
              </div>
            </div>
            </div>

            <div className="flex flex-wrap ml-12 md:ml-20 text-white mt-4 item-center justify-center">
            <div className="xl:w-1/5 md:w-1/2 m-6">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img5.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 mt-6">
                   Cloud Development
                  </div>
              </div>
            </div>
            <div className="xl:w-1/5 md:w-1/2 m-6 h-60">
              <div className="p-4 flex justify-center flex-col border-2 rounded-xl bg-neutral-900">
              <div className=" text-white text-xl mb-6">
                    <Image
                      className="object-cover object-center rounded z-10"
                      alt="earth"
                      src="images/img6.svg"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="text-white text-2xl text-center font-semibold m-3 -mt-0">
                    VR/AR Development
                  </div>
              </div>
            </div>
            </div>
        </section>
      </div>
    
  );
}
export default UIDesigning;
