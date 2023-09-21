import ReactDOM from "react-dom/client";
// import * as React from "react";
// import "./index.css";
import "../style/App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import StudentDashboard from "./pages/StudentDashboard";
import ThemProvider from "./components/ThemProvider";
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import MainDashboard from "./pages/admin/MainDashboard";
import Students from "./pages/admin/Students";
import AdminProtection from "./components/AdminProtection";
import Wallets from "./pages/admin/Wallets";
import { Post } from "./pages/Post";
import { Category } from "./pages/Category";
import Categories from "./components/Categories";
import CategoriesPage from "./pages/CategoriesPage";
import AboutMe from "./pages/AboutMe";

const route = createBrowserRouter([
  { path: "/auth/login", element: <Login /> },
  { path: "/post/:id", element: <Post /> },
  { path: "/about-me", element: <AboutMe /> },
  { path: "/categories", element: <CategoriesPage /> },
  { path: "/category/:id", element: <Category /> },
  { path: "/", element: <Home /> },

  {
    path: "/admin",
    element: (
      <AdminProtection>
        <AdminDashboardLayout />
      </AdminProtection>
    ),
    children: [
      // Admin Dashboard routes
      { path: "", element: <MainDashboard /> },
      { path: "students", element: <Students /> },
      { path: "add-funds", element: <Wallets /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <ThemProvider>
      <RouterProvider router={route} />
    </ThemProvider>
  </NextUIProvider>
);
