import bg from "../../public/images/bg.png";
import Image from "next/image";

function impact(){
    return(
        <div className="pb-[3%]" style={{ backgroundImage: `url(${bg.src})` }}>
            <h1 className="text-center text-white font-xyz text-[60px] mt-[3%] pt-[6%]">Our Impact</h1>
            <p className="text-center text-white font-xyz text-[16px] ml-[20%] mr-[20%]">We work with our clients to plan, develop, transfer and scale solutions that create huge amount of impact for business and 
               society.We help entrepreneur to solve their complex business problems with ease and create world 
               class unbeatable custom solutions . We are known as "Well wishers for corporates".<br></br>
               We believe in,</p>
               <div className="flex flex-row">
                 <div className="ml-[10%] mt-[3%] w-[610px] h-[259px] flex flex-row bg-black-rgba">
                    <div className="ml-[5%] w-[50%] mt-[17%]">
                        <Image
                        src="/images/impact1.png"
                        width={100}
                        height={100}/>
                    </div>
                    <div className="ml-[10%] mt-[6%]">
                        <h2 className="text-white text-[25px] font-xyz">Powerful Synergy</h2>
                        <p className="text-white text-[16px] mr-[10%]">Customer satisfaction is our prime consideration.
                           We don't compromise with our client's 
                           requirements.Due to our expertise , we are able 
                           to understand needs of our clients very easily 
                           and able to build their dream business solutions 
                           efficiently.We love to help our clients in every 
                           possible way.</p>
                    </div>
                 </div>

                 <div className="ml-[1%] mt-[3%] w-[610px] h-[259px] flex flex-row bg-black-rgba">
                    <div className="ml-[5%] w-[50%] mt-[16%]">
                        <Image
                        src="/images/impact2.png"
                        width={120}
                        height={120}/>
                    </div>
                    <div className="ml-[10%] mt-[6%]">
                        <h2 className="text-white text-[25px] font-xyz">Strong Expertise</h2>
                        <p className="text-white text-[16px] mr-[10%]">We have our experienced team of experts who 
                           has ability to tackle any type of business 
                           challenge with their result oriented approach.
                           With our excellent client dealing and expertise of 
                           working on various unique business ideas we are 
                           able to develop a good name in the industry.</p>
                    </div>
                 </div>
                 
               </div>
               <div className="flex flex-row">
               <div className="ml-[10%] mt-[1%] w-[610px] h-[259px] flex flex-row bg-black-rgba">
                    <div className="ml-[5%] w-[80%] mt-[17%]">
                        <Image
                        src="/images/impact3.png"
                        width={100}
                        height={100}/>
                    </div>
                    <div className="ml-[6%] mt-[6%]">
                        <h2 className="text-white text-[25px] font-xyz">Timely Delivery</h2>
                        <p className="text-white text-[16px] mr-[10%]">Now time is money, we understand this so we believe 
                           in efficient time management and timely delivery of our 
                           commitments.Our team never compromise with our 
                           commitments and quality of work.We believe in highly 
                           efficient working model. in ipsum quis augue eget 
                           dictum sem. Laoreet sed adipiscing ultrices sed turpis 
                           at eu eu.</p>
                    </div>
                 </div>
                 <div className="ml-[1%] mt-[1%] w-[610px] h-[259px] flex flex-row bg-black-rgba">
                    <div className="ml-[5%] w-[50%] mt-[17%]">
                        <Image
                        src="/images/impact4.png"
                        width={100}
                        height={100}/>
                    </div>
                    <div className="ml-[12%] mt-[6%]">
                        <h2 className="text-white text-[25px] font-xyz">Growth & Success Roadmap</h2>
                        <p className="text-white text-[16px] mr-[10%]">Planning without goal and business without growth are 
                           always incomplete. Our main focus is to help business 
                           owners to drive best results from their business .We guide 
                           our clients in creating growth driven strategies and help 
                           them in showing the real potential of the market. We 
                           create a sure success plan for our valuable clients. We 
                           grow with our client's success.</p>
                    </div>
                 </div>
               </div>
        </div>
    )
}
export default impact;