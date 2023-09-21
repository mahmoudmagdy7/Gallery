import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { StickyNavbar } from "../components/StickyNavbar";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <section id="header-section" className="h-fit  relative sm:p-3 p-3 ">
        <header className=" h-full rounded-3xl  bg-[#dee0f2] ">
          <nav className="px-5 mt-2 fixed start-0 end-0 z-50 mx-5 rounded-lg">
            <StickyNavbar />
          </nav>

          <div className="flex items-center justify-center h-full pt-20">
            <div className="m-auto text-center ">
              <h2 className="text-base  w-72 text-center m-auto   sm:text-2xl  sm:w-[35rem] md:w-[50rem] "> معرض اعمال أ.مجدي سلامه</h2>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl w-full text-center font-semibold mt-8 mb-6">
                كن <span className="ct-primary">مبدعاً</span>
                كن <span className="ct-primary">متذوقاً</span>
              </h1>
            </div>
          </div>
        </header>
      </section>
      <Categories />
      <section className="  min-h-[35rem]  rounded-3xl  bg-[#dee0f2] overflow-hidden lgm:p-16 m-3 mb-5">
        <Features />
      </section>
      <Footer />
    </>
  );
}
