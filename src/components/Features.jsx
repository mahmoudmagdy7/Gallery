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
    <div className="   max-w-screen-2xl m-auto grid xl:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 smd:grid-cols-3 grid-cols-2 justify-items-center  bg-black gap-2">
      {featuresList.map((item) => {
        return (
          <Card className="  h-80 md:w-full  lg:w-full xl:w-full lg:h-96 xl:h-96 md:h-96 sm:h-96  bg-green-700 gap-5">
            <CardHeader className="h-80 overflow-hidden ">
              <img className="w-full h-full" src={item.image} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
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
