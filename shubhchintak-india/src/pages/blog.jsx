import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./footer";

function blog() {
  return (
    <div className="" style={{ backgroundImage: `url(${bg.src})` }}>
      <Header/>
      <section className="text-white font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
              APPLICATIONS OF MACHINE LEARNING
            </h1>
            <p className="mb-8 leading-relaxed text-16xl">
              Machine Learning is perhaps one of the most advanced technologies
              available in the world right now.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-[50px] text-lg">
              <Link href="/blog_details"> Read More</Link>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/blog/ml.png"
              width={646}
              height={412}
            ></Image>
          </div>
        </div>
      </section>

      <section className="text-white font-abc">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="title-font sm:text-4xl text-45xl mb-7 font-bold text-white">
            Related Blogs
          </h1>
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

      <section className="text-white font-abc">
        <div className="container px-5 py-20 mx-auto border border-white rounded-3xl bg-[#FFFFFF1A]">
          <div className="flex justify-center text-center w-full mb-12">
            <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              {"Let’s"} Discuss your eCommerce Rental Marketplace Business Idea
            </p>
          </div>
          <div className="flex lg:w-1/3 w-full sm:flex-row justify-center mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">
            <Link href="/contact_us">Contact Us</Link>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default blog;
