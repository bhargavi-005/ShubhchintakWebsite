import Image from "next/image";
import Success from "./success"
import Impact from "./impact"
import Clients from "./clients"
import Header from "./Header";
import Footer from "./footer";

function port(){
    return(
        <div className="max-[768px]:overflow-x-hidden">
            <Header/>
            <div className="w-[100%] h-[30%]  relative">
                <Image className="brightness-[30%] max-[768px]:h-[700px]"
                src="/images/portfolio.png"
                width={1660}
                height={600}/>
                <h1 className="max-[768px]:text-[30px] mt-[10%] text-center absolute top-0 ml-[15%] mr-[15%] text-white font-xyz text-[60px] font-extrabold">From startups to enterprises, we 
                    have no limits, we serve all!</h1>
                    <p className="max-[768px]:mt-[45%] text-[16px] text-center absolute top-0 ml-[25%] mr-[25%] text-white font-xyz mt-[23%]">We have helped our clients in building digital solutions as per their business needs. We understood their 
                        business challenges and did our best to solve it in a creative manner. 
                        We helped our clients to grow, We can do it for you too!</p>
                        <button class="max-[768px]:mt-[95%] max-[768px]:ml-[28%] absolute top-0 mt-[30%] ml-[43%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Share your business idea
                        </button>
            </div>
            {/* Next Section */}
            <Success/>
            {/* Next Section */}
            <div className="mt-[5%] mr-[10%] ml-[10%] ">
                <h1 className="max-[768px]:text-center text-white font-semibold text-[40px] font-xyz">Our Works</h1>
                <div className="flex flex-row max-[768px]:flex max-[768px]:flex-col space-x-2">
                    <div className="main">
                    <Image  className="h-[400px] w-[400px]"
                    src="/images/work1.png"
                    width={400}
                    height={400}/>
                    <div>
                    <div>
                    <Image className="h-[584px] mt-[2%] w-[400px]"
                    src="/images/work2.png"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="h-[337px] mt-[2%] w-[400px]"
                    src="/images/work3.png"
                    width={400}
                    height={700}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="main">
                    <Image className="max-[768px]:ml-[-1%] max-[768px]:mt-[2%] h-[500px] w-[400px]"
                    src="/images/work4.png"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[584px] mt-[2%] w-[400px]"
                    src="/images/work5.png"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[235px] mt-[2%] w-[400px]"
                    src="/images/work6.png"
                    width={400}
                    height={700}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="main">
                    <Image className="max-[768px]:ml-[-1%] h-[584px] w-[400px]"
                    src="/images/work7.png"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[415px] mt-[2%] w-[400px]"
                    src="/images/work8.png"
                    width={400}
                    height={700}/>
                    <div>
                    <div>
                    <Image className="max-[768px]:ml-[-1%] h-[320px] mt-[2%] w-[400px]"
                    src="/images/work9.png"
                    width={400}
                    height={700}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
                    
                </div>
                
            </div>
            {/* Next Section */}
            <Impact/>
            {/* Next Section */}
            <Clients/>
            {/* Next Section */}
            
            <div className="mt-[3%]">
                <h1 className="text-[30px] font-xyz text-white text-center font-semibold">Want to start your digital transformation journey?</h1>
                <button class="max-[768px]:ml-[30%] ml-[44%] mt-[1%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Get free consulation
                </button>
            </div>
            <Footer/>
        </div>
    )
}
export default port;