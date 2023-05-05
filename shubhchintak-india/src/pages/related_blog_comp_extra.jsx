import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

function Related_blog_comp_extra() {
  const [isOpen1, setIsOpen1] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-20">
      <div className="text-white font-abc container px-5 py-15 mx-auto">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-1/2 w-full">
            <h1 className="title-font md:w-1/2 w-full text-4xl sm:text-45xl mb-7 font-bold text-white">
              Related Blogs
            </h1>
          </div>
          <div className="px-6 py-4 mb-4 rounded-md bg-[#FFFFFF1A]  ">
            <div
              onClick={() => setIsOpen1((prev) => !prev)}
              className="flex flex-row justify-between items-center sm:text-lg text-base font-semibold"
            >
              <p> Website Development</p>
              <Image
                className="ml-7"
                src="/images/blog/drop.png"
                width={10}
                height={5}
                alt="drop"
              />
            </div>
            {isOpen1 && (
              <div className="bg-gray-500 z-10 rounded-lg  mt-2 p-8 absolute ">
                <ul className="flex flex-col gap-4 text-white ">
                  <li className="hover:text-slate-400">
                    <Link href="/blog">Website Development1</Link>
                  </li>
                  <li className="hover:text-slate-400">
                    <Link href="">Website Development2</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Carousel className="container mx-auto" responsive={responsive}>
        <div className="p-3">
          <div className="h-full bg-[#FFFFFF1A]  overflow-hidden">
            <Image
              className="lg:h-48  w-full "
              alt="earth"
              src="/images/blog/edge.png"
              width="400"
              height="321"
            />
            <div className="p-6 text-white h-52">
              <h1 className="title-font font-bold text-lg mb-3">
                EDGE COMPUTING: THE NEW ERA
              </h1>
              <p className="leading-relaxed mb-3">
                It all started with one big computer coming into existence...
              </p>
              <Link
                href=""
                className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="h-full bg-[#FFFFFF1A]  overflow-hidden">
          <Image
                className="lg:h-48  w-full object-cover object-center"
                alt="earth"
                src="/images/blog/designing_post.png"
                width="391"
                height="240"
              />
            <div className="p-6 text-white h-52">
              <h1 className="title-font font-bold text-lg mb-3">
              5 TIPS FOR DESIGNING GOOD POST...
              </h1>
              <p className="leading-relaxed mb-3">
              Designing good looking posters and social media posts is not
                  as hard as it sounds...
              </p>
              <Link
                href=""
                className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="h-full bg-[#FFFFFF1A]  overflow-hidden">
          <Image
                className="lg:h-48 w-full object-cover object-center"
                alt="earth"
                src="/images/blog/blog.png"
                width="391"
                height="240"
              />
            <div className="p-6 text-white h-52">
              <h1 className="title-font font-bold text-lg mb-3">
              HOW TO WRITE A GREAT BLOG
              </h1>
              <p className="leading-relaxed mb-3">
              Is writing your passion but you fail to express it
                  professionally?
              </p>
              <Link
                href=""
                className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="h-full bg-[#FFFFFF1A]  overflow-hidden">
          <Image
                className="lg:h-48  w-full object-cover object-center"
                alt="earth"
                src="/images/blog/iot.png"
                width="391"
                height="240"
              />
            <div className="p-6 text-white h-52">
              <h1 className="title-font font-bold text-lg mb-3">
              IOT REAL WORLD EXAMPLES
              </h1>
              <p className="leading-relaxed mb-3">
              IoT is one of the most trending buzzwords in 2020. In simple
                  terms, it means {"“electro"}...
              </p>
              <Link
                href=""
                className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </Carousel>

      
    </div>
  );
}
export default Related_blog_comp_extra;
