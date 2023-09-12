import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    "البحيرة",
    "سيناء",
    "القهرة",
    "شهداء",
    "شهداء القوات المسلحة",
    " شهداء مدنيين",
    " محافظة البحيرة",
    "وجوه مصرية",
    "وجوه عربية",
    "مشاهير",
    "من معارضنا",
    "فيديوهات",
    "منوعات",
    "على قيد الحياة",
    "مزدوجة",
    "مميزة",
    "تدريب",
    "أمير",
    "اوريجامى",
  ];

  return (
    <section className=" py-10">
      <div className="max-w-screen-2xl m-auto">
        <div className="w-full flex flex-col flex-wrap items-center">
          <div className="heading mb-8 px-4">
            <h3 className="text-2xl sm:text-5xl font-semibold mt-8 mb-1">
              <span className="me-2"> تصفح</span>
              <div className="underline-mark m-2  inline-block after:mt-2 sm:after:mt-4 after:scale-[1.2]">
                <span>الاقسام</span>
              </div>
            </h3>
            <p className="px-2  sm:text-3xl">ستجد هنا البورتريهات مقسمه حسب القسم </p>
          </div>
          <ul className="flex gap-5 flex-wrap justify-center p-3 ">
            {categories.map((category, index) => (
              <li key={index}>
                <Button className="text-2xl p-4 cbg-primary ct-5 ">
                  <Link to={`/category/${category}`}>{category}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
