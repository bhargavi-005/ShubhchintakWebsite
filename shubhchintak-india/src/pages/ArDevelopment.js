import Image from "next/image";

export default function ArDevelopment() {
  return (
    <>
      <div className="bg-black p-16">
        <section classname="flex flex-row text-white">
          <div className="container  flex md:flex-row flex-col-reverse items-center">
            <div className="w-4/5 m-12">
              <div className="text-4xl md:text-6xl text-white font-bold">
                VR/AR Development
              </div>
              <div className="w-3/4 text-base md:text-2xl text-blue-200 mt-8">
                Step into the Future with Cutting-Edge VR/AR Services!
              </div>
              <button className="bg-blue-500 w-1/3 mt-8 p-3 rounded-full text-white font-semibold text-base md:text-2xl">
                Get Started
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-12">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/pana.svg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col w-full p-16 content-center justify-items-center mt-24">
            <div className="text-center text-4xl md:text-6xl font-bold text-blue-500">
              Hire {"India's"} top VR/AR Service Provider
            </div>
            <div className="text-white mt-8 m-16 text-base md:text-2xl text-center">
              Shubhchintak Technology is a leading AR VR development company
              that uses the immersive power of augmented and virtual reality to
              enthrall a company’s users and multiply their ROI. AR VR
              technologies are used to aid businesses in providing a virtual
              environment akin to that of a real world to their target audience
              to help drive better outcomes in minimal cost, time and effort.
            </div>
            <div className="place-self-center lg:max-w-lg lg:w-full md:w-1/3 w-5/6  m-12">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/cuate.svg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="text-4xl md:text-6xl  text-white p-12 font-bold text-center ml-44 mr-44">
            Transform your digital journey with 
            <span className="text-blue-500">
               {" 360'"} VR/AR Process!
            </span>
          </div>
          <div className="m-8 mb-0 text-white justify-center flex flex-col md:flex-row">
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 1</div>
              <div className="text-3xl text-white">Consultation</div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 2</div>
              <div className="text-3xl text-white">Concept development</div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 3</div>
              <div className="text-3xl text-white">Design & Development</div>
            </div>
          </div>

          <div className="m-8  mt-0 text-white justify-center flex flex-col md:flex-row">
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 4</div>
              <div className="text-2xl text-white">Testing & Quality Assurance</div>
            </div>
            <div className="w-3/2 md:w-1/4 rounded-xl pt-4 pb-8 border m-6 flex flex-col text-center font-bold">
              <div className="text-xl text-white m-4">Step 5</div>
              <div className="text-2xl text-white">
              Deployment & Support
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
              {" "}right VR/AR services as per the industry!
            </span>
          </div>
          <div className="text-white text-4xl md:text-6xl text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque cum
            voluptatum exercitationem earum incidunt magnam omnis dolore modi
            vitae veritatis? Sint quasi dolor distinctio ut odio libero nihil,
            possimus pariatur?
          </div>
        </section>

        <section>
          <div>
          <div className="text-4xl md:text-6xl text-white text-center p-12 mt-12 md:mt-20 font-bold">
             Broad spectrum of VR Services we provide!
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Image based recognition
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Location based recognition
              </div>
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
            Project based recognition
            </div>
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-row">
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Superimposition-Based Recognition
            </div>
            </div>
          </div>
          </div>
          <div>
          <div className="text-4xl md:text-6xl text-white text-center p-12 mt-12 md:mt-20 font-bold">
             Broad spectrum of VR Services we provide!
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
                Machine Part Simulation
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
                Floor Planning Simulation
              </div>
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Space Assembly Line Simulation
            </div>
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-row">
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Prototype Simulation
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Spray Painting Simulation
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Real State Visual Simulation
            </div>
            </div>
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-row">
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Human Anatomy Simulation(for medical purpose)
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Assembly Process Simulation
            </div>
            </div>
          </div>
          <div className="item-center justify-center flex flex-col md:flex-row">
            <div className="flex flex-row">
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Skill Training Simulation/ Practice Simulation
            </div>
            <div className="p-4 h-auto bg-white rounded-full m-4 text-3xl font-semibold text-center">
              Driving Simulation
            </div>
            </div>
          </div>
          </div>

          <div className="w-3/2 border text-center p-8 md:p-20 items-center bg-zinc-800 ml-6 md:ml-20 mt-12 md:mt-20 content-center mr-6 md:mr-20 rounded-3xl">
            <div className="text-2xl md:text-4xl text-white font-bold m-3 md:m-5">
              Need complete VR/AR consultation?
            </div>
            <button className="text-white font-semibold bg-blue-500 p-4 mt-8 text-2xl rounded-full">
              Contact our experts
            </button>
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
    </>
  );
}
