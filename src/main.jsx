import ReactDOM from "react-dom/client";
// import * as React from "react";
// import "./index.css";
import "../style/App.scss";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import Login from "./pages/auth/login";
import Home from "./pages/Home";
import ThemProvider from "./components/ThemProvider";
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import AdminProtection from "./components/AdminProtection";
import { Post } from "./pages/Post";
import { Category } from "./pages/Category";
import CategoriesPage from "./pages/CategoriesPage";
import AboutMe from "./pages/AboutMe";
import AddPost from "./pages/admin/AddPost";
import AddCategory from "./pages/admin/AddCategory";

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
      { path: "add-post", element: <AddPost /> },
      { path: "add-category", element: <AddCategory /> },
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
