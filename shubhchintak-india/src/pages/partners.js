import Image from "next/image";
function partner(){
    return(
        <div className="mt-[2%] pb-[3%]">
            <h2 className="text-center text-[20px] font-abc">Our Partners</h2>
            <div className="ml-[5%]">
                    <Image
                    src="/images/partners.png"
                    height={700}
                    width={1700}/>
            </div>
           
        </div>
    )
}
export default partner;