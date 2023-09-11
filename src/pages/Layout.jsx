import React from "react";

import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../components/StickyNavbar";

export default function Layout() {
  return (
    <div>
      <StickyNavbar />
      <Outlet />
    </div>
  );
}
