import Image from "next/image";
import bg from "../../public/images/bg.png";
function clients(){
    return(
        <div style={{ backgroundImage: `url(${bg.src})` }}  className="max-[768px]:mt-[50%] mt-[2%] pb-[3%] max-[768px]:mt-[30%] bg-black-rgba">
            
            <h2 className="text-center text-[30px] text-white font-abc">Our Esteemed Clients</h2>
            <div className="">
                    <Image
                    src="/images/clients.png"
                    alt="career"
                    height={700}
                    width={1700}/>
            </div>
           
        </div>
    )
}
export default clients;