import Image from "next/image";
import CheckOut from './checkoutView'
import Header from './Header'
import Footer from './footer'
import bg from "../../public/images/bg.png";

export default function CloudConsultation() {
  return (
    <>
    <div className="" style={{ backgroundImage: `url(${bg.src})` }}>

    
     <div>
        <Header/>
      </div>

      <div className="p-16">
        <section classname="flex flex-row text-white">
          <div className="container  flex md:flex-row flex-col-reverse items-center">
            <div className="w-4/5 m-12">
              <div className="text-4xl md:text-6xl text-white font-bold">
                Cloud Consultation <br />
                Services
              </div>
              <div className="w-3/4 text-base md:text-2xl text-blue-200 mt-8">
                Transform Your Business with Expert Cloud Consultation Services
              </div>
              <button className="bg-blue-500 w-1/3 mt-8 p-3 rounded-full text-white font-semibold text-base md:text-2xl">
                Get Started
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 pb-10 -mr-2 md:-mr-16">
              <Image
                className="w-full object-cover object-center rounded z-10"
                alt="earth"
                src="images/Cloud.svg"
                width={500}
                height={500}
                
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col w-full p-16 content-center justify-items-center mt-24">
            <div className="text-center text-4xl md:text-6xl font-bold text-blue-500">
              Hire {"India's"} top Cloud Consultation Provider
            </div>
            <div className="text-white mt-8 m-16 text-base md:text-2xl text-center">
              As more businesses adopt cloud computing, there is a growing need
              for expert advice and guidance on how to make the most out of this
              technology. Our team of experienced consultants is here to help
              your business leverage the power of the cloud to improve
              efficiency, scalability, and security. We monitor both pros and
              corns of cloud service providers and share the best one with our
              clients after checking their business requirements. We provide
              completely fair cloud consultation service as per requirements of
              our clients.
            </div>
            <div className="place-self-center lg:max-w-lg lg:w-full md:w-1/3 w-5/6  m-12">
              <Image
                className="object-cover object-center rounded z-10"
                alt="earth"
                src="images/CloudCon.svg"
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
              {" 360'"} <div className="mt-4">Cloud Consultancy Process!</div>
            </span>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  my-20 lg:mx-28 gap-y-6 font-xyz">
                <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]  bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px] ">
                  <div className="w-[315px] h-[130px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900  rounded-[4px] flex flex-col justify-center text-center ">
                    <div className="text-xl text-white m-2 mt-0">Step 1</div>
                    <div className="text-2xl text-white">Simplified Cloud Hosting</div>
                  </div>
                </div>
                <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                  <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px]  bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                    <div className="text-xl text-white m-2 mt-0">Step 2</div>
                    <div className="text-2xl text-white">Instant Setup</div>
                  </div>
                </div>
                <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                  <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                    <div className="text-xl text-white m-2 mt-0">Step 3</div>
                    <div className="text-2xl text-white">
                    Boost website speed
                    </div>
                  </div>
                </div>
                <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                  <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                    <div className="text-xl text-white m-2 mt-0">Step 4</div>
                    <div className="text-2xl text-white">
                      Fixed billing
                    </div>
                  </div>
                </div>
                <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center  rounded-[4px]">
                  <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                    <div className="text-xl text-white m-4 2 mt-0">Step 5</div>
                    <div className="text-2xl text-white">Instantly Scaleable</div>
                  </div>
                  </div>
                  <div className="w-[320px] h-[135px] md:w-[334px] md:h-[135px] lg:w-[400px] lg:h-[135px]   bg-gradient-to-b from-white to-black flex justify-center items-center rounded-[4px]">
                    <div className="w-[315px] h-[133px] md:w-[329px] md:h-[130px] lg:w-[395px] lg:h-[130px] bg-zinc-900 rounded-[4px] flex flex-col justify-center text-center">
                      <div className="text-xl text-white m-2 mt-0">Step 6</div>
                      <div className="text-2xl text-white">SSD</div>
                    </div>
                  </div>
                 
          </div>
        </section>

        <section>
          <div>
            <div className="text-4xl md:text-6xl text-white text-center p-12 mt-12 md:mt-20 font-bold">
             Broad spectrum of Cloud Services we provide!
            </div>
            <div className="item-center justify-center flex flex-col md:flex-row">
              <div className="flex flex-col md:flex-row">
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Compute
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Kubernetes
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                  Storage
                </div>
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                Database
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                Security
              </div>
              <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                Networking
              </div>
            </div>
            <div className="item-center justify-center flex flex-col md:flex-row">
              <div className="flex flex-row">
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                Cloud Firewall
                </div>
                <div className="p-4 h-auto bg-white rounded-full m-4 text-2xl font-semibold text-center">
                 VLAN
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-3/2 border text-center p-8 md:p-20 items-center bg-zinc-800 ml-6 md:ml-20 mt-12 md:mt-20 content-center mr-6 md:mr-20 rounded-3xl">
            <div className="text-2xl md:text-4xl text-white font-bold m-3 md:m-5">
                Need complete Cloud consultation?
            </div>
            <button className="text-white font-semibold bg-blue-500 p-4 mt-8 text-2xl rounded-full">
              Contact our experts
            </button>
          </div> */}
          <div className="flex justify-center items-center text-white">
              <div className="w-auto h-[250px] lg:w-[1240px] bg-gradient-to-r from-white to-black flex justify-center items-center  rounded-3xl my-20">
                <div className="w-[348px] h-[247px] md:w-[721px] lg:w-[1237px] px-3 bg-zinc-900 font-semibold text-xl md:text-2xl lg:text-3xl text-center flex flex-col justify-center items-center rounded-3xl gap-10">
                  Need complete Cloud consultation?
                  <button className="w-fit h-[37px] px-5 bg-[#0F89FF] rounded-full text-center text-lg ">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            </div>
        </section>

       
        <section>
           
           <CheckOut/>
     
        </section>
       
      </div>
      <div className="mt-5">
        <Footer/>
        </div>

        </div>
    </>
  );
}
