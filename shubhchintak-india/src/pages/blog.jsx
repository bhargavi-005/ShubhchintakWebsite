import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./footer";
import Related_blog_comp from "./related_blog_comp";
import Related_blog_comp_extra from "./related_blog_comp_extra";
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
              <button className="inline-flex text-white bg-[#0F89FF] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-[50px] text-lg">
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

      <Related_blog_comp_extra/>

      <section className="text-white font-abc">
        <div className="container px-5 py-20 mx-auto border border-white rounded-3xl bg-[#FFFFFF1A]">
          <div className="flex justify-center text-center w-full mb-12">
            <p className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
              {"Let’s"} Discuss your eCommerce Rental Marketplace Business Idea
            </p>
          </div>
          <div className="flex lg:w-1/3 w-full sm:flex-row justify-center mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <button className="text-white bg-[#0F89FF] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">
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
