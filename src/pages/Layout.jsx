import React from "react";

import { Link, Outlet } from "react-router-dom";
import { StickyNavbar } from "../components/StickyNavbar";
import Footer from "../components/Footer";
import { Command } from "@phosphor-icons/react";
import { Button } from "@nextui-org/react";
import Cookies from "js-cookie";

export default function Layout() {
  return (
    <>
      <section className="relative">
        <Outlet />
        {Cookies.get("admin_token") ? (
          <Button as={Link} to="/admin/add-post" className="fixed start-8 bottom-5 w-3 text-white" color="success" isIconOnly>
            <Command size={32} />
          </Button>
        ) : null}
      </section>
    </>
  );
}
