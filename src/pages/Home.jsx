import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { StickyNavbar } from "../components/StickyNavbar";
import Categories from "../components/Categories";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <section className="h-screen relative p-8">
        <header className=" h-full rounded-3xl  bg-[#dee0f2]">
          <nav className="p-5 sticky top-0">
            {" "}
            <StickyNavbar />
          </nav>

          <div className="m-auto text-center mt-48 sm:w-1/3 ">
            <h2 className="text-base">أيتك للتسويق الرقمي</h2>
            <h1 className="text-7xl font-semibold mt-8 mb-6">
              {" "}
              التسويق المتميز يبدأ هنا <span className="underline-mark">أبدأ حالا</span>
            </h1>
            <p>تأكد أن استثمارك معنا يجلب امنافع للأطراف جميعا نحن نتبع أحدث وسائل التسويق الرقمي</p>
          </div>
        </header>
      </section>
      <Categories />
      <section className=" sm:p-10 min-h-[35rem] bg-red-500 p-2">
        <Features />
      </section>
    </>
  );
}
