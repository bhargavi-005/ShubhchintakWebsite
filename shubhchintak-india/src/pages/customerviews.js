import Image from "next/image";
import bg from "../../public/images/bg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function review(){
    return(
        <div className="ml-[8%] mr-[8%]" style={{ backgroundImage: `url(${bg.src})` }} >
            <Carousel
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}>
                <div>
                <div className=" max-[768px]:flex max-[768px]:flex-col flex flex-row justify-evenly pb-[3%] mt-[3%]">
           <div className="max-[768px]:mt-[4%] max-[768px]:h-[400px] max-[768px]:w-[100%]  max-[768px]:ml-[-0.1%] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row   w-[610px] h-[280px] ">
            <div className="max-[768px]:mt-[9%] max-[768px]:w-[500%] w-[50%] ml-[7%] mt-[8%]">
                <Image
                src="/svg/pp.png"
                alt="pp"
                width={50}
                height={50}/>
            </div>
            <div className="ml-[2%] mt-[8%]">
                <h2 className="text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Esther Howard</h2>
                <p className="text-left text-white font-xyz text-[16px]">Sub Text</p>
                <p className="ml-[-23%] max-[768px]:mt-[3%] max-[768px]:w-[250%] w-[160%] text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Lorem ipsum dolor sit amet consectetur. 
                    Suscipit lobortis leo nibh enim in. Faucibus
                    scelerisque malesuada nec tincidunt 
                    nunc sem sed cras odio. Mauris amet 
                    volutpat urna dignissim.</p>
            </div>
            <div className="max-[768px]:mt-[10%] [ max-[768px]:w-[500%] w-[70%] ml-[40%] mr-[5%] mt-[8%]">
                <Image
                src="/svg/comment.png"
                alt="career"
                height={60}
                width={60}  />
            </div>
            
            
           </div>
           <div className="max-[768px]:mt-[4%] max-[768px]:h-[400px] max-[768px]:w-[100%]  max-[768px]:ml-[-0.1%] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row   w-[610px] h-[280px] ">
            <div className="max-[768px]:mt-[9%] max-[768px]:w-[500%] w-[50%] ml-[7%] mt-[8%]">
                <Image
                src="/svg/pp.png"
                alt="pp"
                width={50}
                height={50}/>
            </div>
            <div className="ml-[2%] mt-[8%]">
                <h2 className="text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Esther Howard</h2>
                <p className="text-left text-white font-xyz text-[16px]">Sub Text</p>
                <p className="ml-[-23%] max-[768px]:mt-[3%] max-[768px]:w-[250%] w-[160%] text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Lorem ipsum dolor sit amet consectetur. 
                    Suscipit lobortis leo nibh enim in. Faucibus
                    scelerisque malesuada nec tincidunt 
                    nunc sem sed cras odio. Mauris amet 
                    volutpat urna dignissim.</p>
            </div>
            <div className="max-[768px]:mt-[10%] [ max-[768px]:w-[500%] w-[70%] ml-[40%] mr-[5%] mt-[8%]">
                <Image
                src="/svg/comment.png"
                alt="career"
                height={60}
                width={60}  />
            </div>
            
            
           </div>
           
           </div>
                </div>

                <div className=" max-[768px]:flex max-[768px]:flex-col flex flex-row justify-evenly pb-[3%] mt-[3%]">
           <div className="max-[768px]:mt-[4%] max-[768px]:h-[400px] max-[768px]:w-[100%]  max-[768px]:ml-[-0.1%] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row   w-[610px] h-[280px] ">
            <div className="max-[768px]:mt-[9%] max-[768px]:w-[500%] w-[50%] ml-[7%] mt-[8%]">
                <Image
                src="/svg/pp.png"
                alt="pp"
                width={50}
                height={50}/>
            </div>
            <div className="ml-[2%] mt-[8%]">
                <h2 className="text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Esther Howard</h2>
                <p className="text-left text-white font-xyz text-[16px]">Sub Text</p>
                <p className="ml-[-23%] max-[768px]:mt-[3%] max-[768px]:w-[250%] w-[160%] text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Lorem ipsum dolor sit amet consectetur. 
                    Suscipit lobortis leo nibh enim in. Faucibus
                    scelerisque malesuada nec tincidunt 
                    nunc sem sed cras odio. Mauris amet 
                    volutpat urna dignissim.</p>
            </div>
            <div className="max-[768px]:mt-[10%] [ max-[768px]:w-[500%] w-[70%] ml-[40%] mr-[5%] mt-[8%]">
                <Image
                src="/svg/comment.png"
                alt="career"
                height={60}
                width={60}  />
            </div>
            
            
           </div>
           <div className="max-[768px]:mt-[4%] max-[768px]:h-[400px] max-[768px]:w-[100%]  max-[768px]:ml-[-0.1%] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row   w-[610px] h-[280px] ">
            <div className="max-[768px]:mt-[9%] max-[768px]:w-[500%] w-[50%] ml-[7%] mt-[8%]">
                <Image
                src="/svg/pp.png"
                alt="pp"
                width={50}
                height={50}/>
            </div>
            <div className="ml-[2%] mt-[8%]">
                <h2 className="text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Esther Howard</h2>
                <p className="text-left text-white font-xyz text-[16px]">Sub Text</p>
                <p className="ml-[-23%] max-[768px]:mt-[3%] max-[768px]:w-[250%] w-[160%] text-left text-white font-xyz text-[18px] max-[768px]:w-[200%]">Lorem ipsum dolor sit amet consectetur. 
                    Suscipit lobortis leo nibh enim in. Faucibus
                    scelerisque malesuada nec tincidunt 
                    nunc sem sed cras odio. Mauris amet 
                    volutpat urna dignissim.</p>
            </div>
            <div className="max-[768px]:mt-[10%] [ max-[768px]:w-[500%] w-[70%] ml-[40%] mr-[5%] mt-[8%]">
                <Image
                src="/svg/comment.png"
                alt="career"
                height={60}
                width={60}  />
            </div>
            
            
           </div>
           
           </div>
            </Carousel>
       
        </div>
    )
}
export default review;