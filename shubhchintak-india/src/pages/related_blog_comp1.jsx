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

      {/* <Carousel className="min-[1370px]:mx-40  mx-20" responsive={responsive}>
        <div className="container px-5 py-1 mx-auto">
          <div className="p-5 -m-4">
            <div className=" h-[390px] border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A] ">
              <Image
                className="lg:h-48  w-full "
                alt="earth"
                src="/images/blog/edge.png"
                width="400"
                height="321"
              />
              <div className="p-6 text-white h-52">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  EDGE COMPUTING: THE NEW ERA
                </h1>
                <p className="leading-relaxed text-base mb-7">
                  It all started with one big computer coming into existence...
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-1 mx-auto">
          <div className="p-5 -m-4">
            <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                alt="earth"
                src="/images/blog/designing_post.png"
                width="391"
                height="240"
              />
              <div className="p-6 text-white h-52">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  5 TIPS FOR DESIGNING GOOD POST...
                </h1>
                <p className="leading-relaxed text-base mb-7">
                  Designing good looking posters and social media posts is not
                  as hard as it sounds...
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-1 mx-auto">
          <div className="p-5 -m-4">
            <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                alt="earth"
                src="/images/blog/blog.png"
                width="391"
                height="240"
              />
              <div className="p-6 text-white h-52">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  HOW TO WRITE A GREAT BLOG
                </h1>
                <p className="leading-relaxed text-base mb-7">
                  Is writing your passion but you fail to express it
                  professionally?
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-1 mx-auto">
          <div className="p-5 -m-4">
            <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                alt="earth"
                src="/images/blog/iot.png"
                width="391"
                height="240"
              />
              <div className="p-6 text-white h-52">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  IOT REAL WORLD EXAMPLES
                </h1>
                <p className="leading-relaxed text-base mb-7">
                  IoT is one of the most trending buzzwords in 2020. In simple
                  terms, it means {"“electro"}...
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel> */}
    </div>
  );
}
export default Related_blog_comp_extra;
