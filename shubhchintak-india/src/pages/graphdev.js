import Image from "next/image";
function graph() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 pt-[2%] pb-[3%]">
      <div className="flex flex-row">
        <div className="mr-[8%]">
          <h1 className="text-left ml-[18%] text-white text-[50px] font-xyz">
            Graphic Design Development
          </h1>
          <p className="ml-[18%] mr-[%] text-white text-left text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            ipsa provident doloremque? Adipisci eum fugit officiis
            exercitationem aperiam, incidunt velit labore accusantium dolorum
            obcaecati natus, nobis, unde qui ipsa nisi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Repellendus praesentium accusamus
            consectetur at. Repudiandae, adipisci doloremque cumque aspernatur
            reprehenderit veritatis vitae voluptatibus dicta. Ratione, sint?
            Magnam, quia consequatur? Quaerat, blanditiis.
          </p>
          <a href="">
            <button class="right-[26%] mt-[2%] relative bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
              View More
            </button>
          </a>
        </div>
        <div className="w-[150%] mr-[5%] ">
          <Image
            src="/images/websitedev.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
export default graph;
