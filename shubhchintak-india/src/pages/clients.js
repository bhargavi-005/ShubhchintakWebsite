import Image from "next/image";
function clients(){
    return(
        <div className="mt-[2%] pb-[3%]  bg-black-rgba">
            <h2 className="text-center text-[30px] text-white font-abc">Our Esteemed Clients</h2>
            <div className="">
                    <Image
                    src="/images/clients.png"
                    alt=""
                    height={700}
                    width={1700}/>
            </div>
           
        </div>
    )
}
export default clients;