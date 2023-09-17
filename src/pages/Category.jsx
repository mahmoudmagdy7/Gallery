import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../components/StickyNavbar";

import { CardBody, CardHeader, Carousel, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import siteConfig from "../../public/site-config";
import { Card, Spinner } from "@nextui-org/react";
import Categories from "../components/Categories";

export const Category = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  async function getSpecificCategory() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/categories/${id}`);
      setCategory(data.result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpecificCategory();
  }, []);
  const postsList = [
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.19.34 AM.jpeg",
      title: " الجمل احمد الجمل",
      categories: ["شهداء", "الروضة", "الروضة"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.20.09 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.20.40 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.21.20 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.19.34 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.20.09 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.20.40 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.21.20 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.20.40 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
    {
      image: "/assets/dummy-images/WhatsApp Image 2023-09-11 at 10.21.20 AM.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
      id: "hello",
    },
  ];
  return (
    <>
      <nav className="px-5  sticky top-0 end-0 z-50 mx-5 rounded-lg">
        <StickyNavbar />
      </nav>
      <div className="w-full flex flex-col flex-wrap items-center">
        <div className="heading mb-8 px-4">
          <h3 className="text-2xl sm:text-5xl font-semibold mt-8 mb-1">
            <span className="me-2"> قسم</span>
            <div className=" m-2  inline-block ct-primary">
              <span>{category?.name}</span>
            </div>
          </h3>
          <p className="px-2  sm:text-3xl">
            ستجد هنا البورتريهات الخاصه بقسم <span className="ct-primary">{category?.name}</span>{" "}
          </p>
        </div>
      </div>

      <div
        id="card-wrapper"
        className="  max-w-screen-2xl m-auto grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3  gap-y-10 lg:grid-cols-5 xl:grid-cols-5 justify-items-center py-16"
      >
        {postsList?.map((item, i) => {
          return (
            <Card
              onClick={(e) => navigate(`/post/${item._id}`)}
              key={i}
              className=" hover:cursor-pointer h-72 sm:h-[22rem] w-[9.5rem]  sm:w-[12.5rem]  md:w-52 lg:w-[12.1rem] lgm:w-52 "
            >
              <CardHeader className=" grow mt-5 ">
                <img className="w-full h-full  " src={item.image} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center px-2">
                <Typography variant="h4" color="blue-gray" className="mb-2 md:text-xl truncate overflow-hidden text-base">
                  {item.title}
                </Typography>
                {/* <Typography color="blue-gray" className="font-medium" textGradient>
                   {item.category.map((c,i) => (
                    <Link key={i} to="/test" className="m-1 hover:text-deep-purple-500">
                      {c}
                    </Link>
                  ))} 
                </Typography> */}
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};