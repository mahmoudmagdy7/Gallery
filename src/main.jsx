import ReactDOM from "react-dom/client";
import "../style/App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import RemoveCat from "./pages/admin/RemoveCat";
import RemovePost from "./pages/admin/RemovePost";
import Layout from "./pages/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/post/:id", element: <Post /> },
      { path: "/about-me", element: <AboutMe /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/category/:id", element: <Category /> },
      { path: "/", element: <Home /> },
    ],
  },
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
      { path: "remove-category", element: <RemoveCat /> },
      { path: "remove-post", element: <RemovePost /> },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <ThemProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </ThemProvider>
  </NextUIProvider>
);
