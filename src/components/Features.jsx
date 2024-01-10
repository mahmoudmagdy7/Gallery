import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import siteConfig from "../../public/site-config";
import axios from "axios";
import { useQuery } from "react-query";

function Features() {
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch, isFetching } = useQuery("getPosts", getPosts, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });
  const postsList = data?.post;
  async function getPosts() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/posts`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

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
              <img className="w-full h-full  " src={item.image[0].secure_url} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center px-2">
              <h4 className="mb-2 md:text-xl truncate overflow-hidden text-gray-900">{item.title}</h4>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default Features;
