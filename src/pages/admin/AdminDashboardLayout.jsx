import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function AdminDashboardLayout() {
  return (
    <>
      <section className=" text-center p-5">
        <div className="text-3xl mb-10 flex justify-center gap-5 items-center">
          <Button color="primary">
            <Link to={"/"}> الصفحة الرئيسية </Link>
          </Button>
          <p> Admin dashboard</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button color="success">
            <Link to={"add-post"}>إضافة منشور جديد</Link>
          </Button>
          <Button className="bg-gray-900 text-red-400">
            <Link to={"remove-post"}>حذف منشور </Link>
          </Button>
          <Button color="warning">
            <Link to={"add-category"}>إضافة قسم جديد</Link>
          </Button>{" "}
          <Button className="bg-gray-900 text-red-400">
            <Link to={"remove-category"}>حذف قسم </Link>
          </Button>{" "}
        </div>
        <Outlet />
      </section>
    </>
  );
}
