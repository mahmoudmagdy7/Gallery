import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function AdminDashboardLayout() {
  return (
    <>
      <section className=" text-center p-5">
        <p className="text-3xl mb-5">
          {" "}
          Admin dashboard{" "}
          <Button>
            <Link to={"/"}> الصفحة الرئيسية </Link>
          </Button>{" "}
        </p>
        <div className="flex gap-3 justify-center">
          <Button>
            <Link to={"add-post"}>إضافة منشور جديد</Link>
          </Button>{" "}
          <Button>
            <Link to={"add-category"}>إضافة قسم جديد</Link>
          </Button>
        </div>
        <Outlet />
      </section>
    </>
  );
}
