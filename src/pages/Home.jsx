import React, { useContext } from "react";
import Layout from "../components/Layout";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaUserPlus, FaWhatsapp } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Blog1 from "../assets/Images/blog-1.jpg";
import Blog2 from "../assets/Images/blog-2.jpg";
import Blog3 from "../assets/Images/blog-3.jpg";
import Blog4 from "../assets/Images/blog-4.jpg";
import Blog5 from "../assets/Images/blog-5.jpg";
import Cards from "../components/Cards.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { FiChevronDown } from 'react-icons/fi';
import { AppContext } from "../context/AppProvider.jsx";


const Home = (props) => {
  const { cars } = useContext(AppContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Layout>
      <div className="home h-[90vh] bg-cover bg-center relative flex items-center justify-center">
        <div className="bg-opacity-60 bg-black absolute inset-0"></div>
        <div className="text-slate-200 flex flex-col items-center text-center relative z-10 gap-6">
          <h1 className="hero-text text-2xl md:text-4xl text-center lg:text-5xl font-semibold mb-4">
            <span style={{ "--d": "0s" }}>THE EASY WAY TO</span>
            <span style={{ "--d": "0.1s" }}> TAKEOVER A</span>
            <span style={{ "--d": "0.2s" }}> LEASE</span>
          </h1>
          <button className="px-6 py-3 text-base md:text-lg lg:text-xl bg-gray-600 hover:bg-gray-700 text-white rounded-[8px] font-bold">
            Get Started &#8594;
          </button>
        </div>
        <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%] text-white">
          <FiChevronDown size={24} />
        </div>
      </div>

      <div className="px-[7%]">
        <div className="flex justify-between mt-10 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-slate-900">Featured cars</h1>
          <div className="flex gap-2 items-center">
            <button className="text-lg md:text-xl border-none outline-none">view more</button>
            <AiOutlineArrowRight className="text-blue-400 text-xl mt-1" />
          </div>
        </div>
        <Cards cars={cars}/>

        <div>
          <h1 className="text-3xl my-[30px] text-slate-700 text-center">
            Our services
          </h1>
          <div className=" xl:flex xl:gap-8 sm:grid sm:gap-6 grid gap-5 md:grid-cols-2 lg:grid-cols-2 lg:grid md:gap-5">
            <div className="h-full py-6 rounded-xl bg-white hover:bg-blue-50">
              <div className="rounded-lg px-3 bg-rose-100 mx-auto py-3 w-fit">
                <FaUserPlus className="text-rose-300 text-2xl" />
              </div>
              <h1 className="text-center font-semibold text-gray-500 text-lg py-3">
                Car Renting
              </h1>
              <p className=" text-center px-3 text-gray-500">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure about your information.
              </p>
            </div>
            <div className="h-full py-6 rounded-xl bg-white hover:bg-blue-50">
              <div className="rounded-lg px-3 bg-blue-100 mx-auto py-3 w-fit">
                <FaUserPlus className="text-blue-300 text-2xl" />
              </div>
              <h1 className="text-center font-semibold text-gray-500 text-lg py-3">
                Car Selling
              </h1>
              <p className="text-center text-gray-500 px-7">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose
              </p>
            </div>
            <div className="h-full py-6 rounded-xl bg-white hover:bg-blue-50">
              <div className="rounded-lg px-3 bg-green-100 mx-auto py-3 w-fit">
                <FaUserPlus className="text-green-300 text-2xl" />
              </div>
              <h1 className="text-center font-semibold text-gray-500 text-lg py-3">
                Spare parts
              </h1>
              <p className="text-center text-gray-500 px-3">
                It to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic
              </p>
            </div>
            {/* <div className="h-[250px] rounded-xl pt-1 bg-white hover:bg-blue-50">
              <div className="rounded-lg px-3 bg-violet-100 mx-[40%] my-2 py-3 w-fit">
                <FaUserPlus className="text-violet-300 tex2-4xl" />
              </div>
              <h1 className="text-center font-semibold text-gray-500 text-lg mb-3">
                Make a deal
              </h1>
              <h1 className="text-center px-3 text-gray-500">
                There are many variations of passages of Lorem available, but
                the majority have suffered alteration
              </h1>
            </div> */}
          </div>
          <h1 className="text-3xl my-5 font-semibold text-slate-700 text-center">
            Our Blog
          </h1>
          <Carousel className="flex justify-start" responsive={responsive}>
            <div className="mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300">
              <img src={Blog1} className="rounded-t-2xl"></img>
              <h1 className="text-2xl px-6 mt-4 font-normal text-gray-600 text-left">
                Opening of new office of the company
              </h1>
              <div className="flex justify-between px-6 mt-3">
                <button className="text-blue-600 text-lg cursor-pointer">
                  Read more...
                </button>
                <h1 className="text-gray-500 text-md">January 14,2022</h1>
              </div>
            </div>
            <div className="mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300">
              <img src={Blog2} className="rounded-t-2xl"></img>
              <h1 className="text-2xl px-6 mt-4 font-normal text-gray-600 text-left">
                Opening of new office of the company
              </h1>
              <div className="flex justify-between px-6 mt-3">
                <button className="text-blue-600 text-lg cursor-pointer">
                  Read more...
                </button>
                <h1 className="text-gray-500 text-md">January 14,2022</h1>
              </div>
            </div>
            <div className="mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300">
              <img src={Blog3} className="rounded-t-2xl"></img>
              <h1 className="text-2xl px-6 mt-4 font-normal text-gray-600 text-left">
                Opening of new office of the company
              </h1>
              <div className="flex justify-between px-6 mt-3">
                <button className="text-blue-600 text-lg cursor-pointer">
                  Read more...
                </button>
                <h1 className="text-gray-500 text-md">January 14,2022</h1>
              </div>
            </div>
            <div className="mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300">
              <img src={Blog4} className="rounded-t-2xl"></img>
              <h1 className="text-2xl px-6 mt-4 font-normal text-gray-600 text-left">
                Opening of new office of the company
              </h1>
              <div className="flex justify-between px-6 mt-3">
                <button className="text-blue-600 text-lg cursor-pointer">
                  Read more...
                </button>
                <h1 className="text-gray-500 text-md">January 14,2022</h1>
              </div>
            </div>
            <div className="mx-4 bg-slate-200 shadow-xl rounded-xl pb-7 border-2 border-white shadow-blue-300">
              <img src={Blog5} className="rounded-t-2xl"></img>
              <h1 className="text-2xl px-6 mt-4 font-normal text-gray-600 text-left">
                Opening of new office of the company
              </h1>
              <div className="flex justify-between px-6 mt-3">
                <button className="text-blue-600 text-lg cursor-pointer">
                  Read more...
                </button>
                <h1 className="text-gray-500 text-md">January 14,2022</h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="fixed rounded-lg shadow-md bg-slate-50 p-2 bottom-3 right-4 cursor-pointer">
        <a href="https://wa.me/message/KJTPLUM6MFBXG1" target="_blank">
          <FaWhatsapp size={32} />
        </a>
      </div>
    </Layout>
  );
};
export default Home;
