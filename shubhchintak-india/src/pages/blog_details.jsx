import React from "react";
import bg from "../../public/images/bg.png";
import Image from "next/image";
import Header from "./Header";
import Footer from "./footer";
import Related_blog_comp1 from "./related_blog_comp1";
import MobFooter from "./MobFooter";

function blog_details() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className=" max-[768px]:overflow-x-hidden  "
    >
      <Header />
      <section className="text-white font-abc flex flex-col justify-center items-center">
        <div className="container px-5 py-16 mx-auto ">
          <div className="mb-5 flex justify-center items-center">
            <Image
              className="mb-5 object-cover object-center h-[568px]"
              width="1540"
              height="268"
              alt="hero"
              src="/images/blog/ml.png"
            ></Image>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-5 font-bold text-white">
              APPLICATIONS OF MACHINE LEARNING
            </h1>
            <p className="mb-10 leading-relaxed">
              Machine Learning is perhaps one of the most advanced technologies
              available in the world right now. The computer has come so close
              to humans only due to this particular technology and its
              sub-technologies. Apart from helping our world progress, Machine
              Learning is progressing itself as well. You use it every day {"–"}
              Google Maps, Google Assistant, recommendation sys tems, etc.,
              without even knowing it.
            </p>
            <p className="text-2xl mb-5 font-medium">
              Here are the 5 most popular and most used applications of Machine
              Learning :
            </p>
            <div className=" ">
              <ul className="list-disc ml-10">
                <li className="mb-4 text-1xl">
                  Image Recognition: This is perhaps the most common use of
                  Machine Learning. Using ML, image recognition is possible,
                  that is, the computer is able to distinguish between different
                  images and recognize a particular person or object in the
                  image {"–"} just like Google Photos. If {"you’ve"} used Google
                  Photos, you must know that it separates and categorizes photos
                  of you and your friends by recognizing them, no matter the
                  pose. This is achievable only through Machine Learning.
                </li>
                <li className="mb-4">
                  Speech Recognition: Just like image recognition, Machine
                  Learning is able to do speech recognition as well. The
                  computer is able to distinguish between different words and is
                  also able to recognize different words and sentences, that too
                  in all languages. Speech Recognition is the reason why
                  features like {"“Voice typing”"} and {"“speech-to-text”"} have
                  been possible. Moreover, personal assistants like Google
                  Assistant, Siri, and Alexa also use speech recognition for
                  many purposes.
                </li>
                <li className="mb-4">
                  Recommender Systems : This is another common use of Machine
                  Learning which you must be encountering on a daily basis.
                  Based on your searching and browsing history, the website is
                  able to display related posts or items on the main window or
                  under the {"“Recommended”"} section. Some common examples are
                  Youtube, Netflix and Amazon. You see recommended videos,
                  series or items as soon as you open the app or the website.
                </li>
                <li className="mb-4">
                  Traffic Prediction : Machine Learning has enabled the computer
                  to predict the traffic at a particular spot or on a particular
                  route by knowing the number of vehicles passing through a
                  particular spot. When you navigate using Google Maps to reach
                  a particular place, Google Maps shows you the shortest route
                  to get there. The shortest route is found out by predicting
                  the traffic on different routes and finding out the route with
                  the least traffic and distance.
                </li>
                <li className="">
                  Spam Filtering : Ever saw your spam inbox and wondered how
                  does the application classify a mail as spam or non-spam?
                  Well, this too is done by Machine Learning. The application is
                  coded in such a way that upon receiving a mail it is able to
                  classify it as spam or non-spam for the convenience of the
                  user. Due to this, only the non-spam mails are visible in your
                  inbox. These were just some of the main uses of Machine
                  Learning. There are many other uses as well. Read about
                  Machine Learning and other related articles here.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Related_blog_comp1 />
      <div>
        <div className=" min-[300px]:max-[709px]:hidden min-[710px]:max-[1200px]">
          <Footer />
        </div>

        <div className="min-[710px]:hidden min-[300px]:max-[709px] ">
          <MobFooter />
        </div>
      </div>
    </div>
  );
}

export default blog_details;
