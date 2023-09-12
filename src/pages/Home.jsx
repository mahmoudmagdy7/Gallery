import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { StickyNavbar } from "../components/StickyNavbar";
import Categories from "../components/Categories";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <section className="h-screen relative sm:p-3 p-3">
        <header className=" h-full rounded-3xl  bg-[#dee0f2]">
          <nav className="p-5 fixed start-0 end-0 z-50">
            <StickyNavbar />
          </nav>

          <div className="m-auto text-center absolute top-1/2 -translate-y-1/2 start-1/2 translate-x-1/2">
            <h2 className="text-base  w-72 text-center m-auto   sm:text-2xl  sm:w-[35rem] md:w-[50rem] "> معرض اعمال أ.مجدي سلامه</h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl w-full text-center font-semibold mt-8 mb-6">
              أترك اثر في كل مكان تخطوه
              <span className="underline-mark after:h-[170px] whitespace-nowrap after:scale-100 sm:after:mt-6 after:mt-3 w-20 font-normal"> قدماك </span>
            </h1>
            <p className="px-2 w-72 text-center m-auto text-xl  sm:text-3xl  sm:w-[35rem] md:w-[50rem]">
              تأكد ان ما تفعل سيرد لك يوما ما فافعل <span className="text-deep-purple-800">الخير</span> دائما{" "}
            </p>
          </div>
        </header>
      </section>
      <Categories />
      <section className="  min-h-[35rem]  rounded-3xl  bg-[#dee0f2] overflow-hidden lgm:p-16 m-3">
        <Features />
      </section>
    </>
  );
}
