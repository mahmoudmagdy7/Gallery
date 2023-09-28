import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import siteConfig from "../../public/site-config";
import axios from "axios";

function Features() {
  const navigate = useNavigate();
  const featuresList = [
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

  const [postsList, setPostsList] = useState([]);
  async function getPosts() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/posts`);
      setPostsList(data.post);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div
      id="card-wrapper"
      className="  max-w-screen-2xl m-auto grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3  gap-y-10 lg:grid-cols-5 xl:grid-cols-5 justify-items-center py-16"
    >
      {/* <div className="   max-w-screen-2xl m-auto grid xl:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 sm:grid-col-3  grid-cols-2 justify-items-center   gap-y-10 "> */}
      {postsList?.map((item) => {
        return (
          // <Card className="  h-80 md:w-full  lg:w-full xl:w-full lg:h-96 xl:h-96 md:h-96 sm:h-96 sm:w-48  bg-green-700 gap-5">
          <Card
            onClick={(e) => navigate(`/post/${item._id}`)}
            key={item._id}
            className=" hover:cursor-pointer h-72 sm:h-[22rem] w-[9.5rem]  sm:w-[12.5rem]  md:w-52 lg:w-[12.1rem] lgm:w-52 "
          >
            <CardHeader className=" grow mt-5 ">
              <img
                className="w-full h-full  "
                src={"https://res.cloudinary.com/dhei5kh8z/image/upload/v1694555379/images/qurklysqbztdyva7jwgh.jpg"}
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center px-2">
              <Typography variant="h4" color="blue-gray" className="mb-2 md:text-xl truncate overflow-hidden text-base">
                {item.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {/* {item.category.map((c) => (
                  <Link to="/test" className="m-1 hover:text-deep-purple-500">
                    {c}
                  </Link>
                ))} */}
              </Typography>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default Features;
