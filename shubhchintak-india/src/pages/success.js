import bg from "../../public/images/bg.png";
function success(){
    return(
        <div className="max-[768px]:mt-[20%] pt-[3%] pb-[2%] mb-20" style={{ backgroundImage: `url(${bg.src})` }} >
            <h1 className="font-semibold text-white text-center text-[40px] mb-5">Our successful work deliveries make us worthy!</h1>
            <p className="font-medium max-[768px]:ml-[5%] max-[768px]:mr-[5%] text-white text-center font-[16px] ml-[23%] mr-[23%]">We can proudly say that we have delivered our projects with almost 99% of customer satisfaction.We strongly believe that for bringing digital transformation it is very important to create a global impact. We are open for serving entire business community globally with our expertise.</p>
            <div className="bg-[#FFFFFF1A] max-[768px]:flex max-[768px]:flex-col ml-[10%] mr-[10%] space-x-20 flex flex-row mt-[2%] justify-center items-center border-2 rounded-md border-solid pb-[6%] bg-black-rgba">
                <div className=" mt-[5%] justify-center items-center">
                    <h2 className="font-extrabold max-[768px]:ml-[25%] text-[40px] text-center text-xyz text-white">80+</h2>
                    <p className="max-[768px]:text-center text-[18px] max-[768px]:mr-[-20%] text-xyz text-white">Projects Delivered</p>
                </div>
                <div className="mt-[5%]  flex flex-col">
                    <h2 className="font-extrabold text-[40px] max-[768px]:ml-[-38%] text-center text-xyz text-white">35+</h2>
                    <p className="max-[768px]:text-center text-[18px] max-[768px]:ml-[-50%] text-xyz text-white">Happy Clients</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="font-extrabold text-[40px]  max-[768px]:ml-[-30%] text-center text-xyz text-white">10+</h2>
                    <p className="max-[768px]:text-center text-[18px]  max-[768px]:ml-[-33%] text-xyz text-white">Countries served</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="font-extrabold text-[40px] max-[768px]:ml-[-25%]  text-center text-xyz text-white">20+</h2>
                    <p className="max-[768px]:text-center text-[18px] text-xyz max-[768px]:ml-[-30%]  text-white">Dedicated experts</p>
                </div>
                <div className="mt-[5%]">
                    <h2 className="font-extrabold text-[40px] text-center max-[768px]:ml-[-25%]  text-xyz text-white">30+</h2>
                    <p className="max-[768px]:text-center text-[18px] max-[768px]:ml-[-30%]  text-xyz text-white">Industries served</p>
                </div>
            </div>
            
        </div>
    )
}
export default success;