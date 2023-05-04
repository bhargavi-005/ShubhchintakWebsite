import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./footer";
import { useState } from "react";

function Related_blog_comp() {
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <div>
      <section className="text-white font-abc">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-between">
            <div>
              <h1 className="title-font sm:text-4xl text-45xl mb-7 font-bold text-white">
                Related Blogs
              </h1>
            </div>
            <div className="px-6 py-4 mb-4 rounded-md bg-[#FFFFFF1A]  ">
              <div
                onClick={() => setIsOpen1((prev) => !prev)}
                className="flex flex-row justify-between gap-40 items-center text-lg font-semibold"
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
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/blog/edge.png"
                  alt="blog"
                  width={400}
                  height={321}
                ></Image>
                <div className="p-6">
                  <h1 className="title-font text-xl font-bold text-white mb-3">
                    EDGE COMPUTING: THE NEW ERA
                  </h1>
                  <p className="leading-relaxed text-base mb-7">
                    It all started with one big computer coming into
                    existence...
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-white text-lg font-bold hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/blog/designing_post.png"
                  alt="blog"
                  width={400}
                  height={321}
                ></Image>
                <div className="p-6">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/blog/blog.png"
                  alt="blog"
                  width={400}
                  height={321}
                ></Image>
                <div className="p-6">
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-none border-opacity-60 overflow-hidden shadow-md shadow-[#00000033] rounded-1 hover:shadow-2xl bg-[#FFFFFF1A]">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/blog/iot.png"
                  alt="blog"
                  width={400}
                  height={321}
                ></Image>
                <div className="p-6">
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
        </div>
      </section>
    </div>
  );
}

export default Related_blog_comp;
