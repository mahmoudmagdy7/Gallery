import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";
function Features() {
  const featuresList = [
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
    {
      image: "https://iteck.smartinnovates.com/demo6/wp-content/uploads/sites/7/2022/05/1.jpeg",
      title: "mohammed ahemd",
      categories: ["ahmed", "mohammed"],
    },
  ];
  return (
    <div className="   max-w-screen-2xl m-auto grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3  gap-y-10 lg:grid-cols-5 xl:grid-cols-5 justify-items-center py-16">
      {/* <div className="   max-w-screen-2xl m-auto grid xl:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 sm:grid-col-3  grid-cols-2 justify-items-center   gap-y-10 "> */}
      {featuresList.map((item) => {
        return (
          // <Card className="  h-80 md:w-full  lg:w-full xl:w-full lg:h-96 xl:h-96 md:h-96 sm:h-96 sm:w-48  bg-green-700 gap-5">
          <Card className="  h-72 md:h-[22rem] w-[11.5rem] sm:w-52  md:w-52 ">
            <CardHeader className="h-80  ">
              <img className="w-full h-full" src={item.image} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2 md:text-xl  text-base">
                {item.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
                {item.categories.map((c) => (
                  <span className="m-1">{c}</span>
                ))}
              </Typography>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default Features;
