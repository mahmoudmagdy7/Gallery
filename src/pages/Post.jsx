import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../components/StickyNavbar";

import { Carousel } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import siteConfig from "../../public/site-config";
import { Card, Spinner } from "@nextui-org/react";
import Categories from "../components/Categories";
export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  async function getSpecificPost() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/posts/${id}`);
      setPost(data.result);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpecificPost();
  }, []);

  return (
    <>
      <nav className="px-5  sticky top-0 end-0 z-50 mx-5 rounded-lg">
        <StickyNavbar />
      </nav>{" "}
      <section className="p-5 max-w-3xl lg:max-w-6xl m-auto cbg-main">
        <Card className={post ? "p-5 grid grid-cols-1 md:grid-cols-2 " : "p-5 grid grid-cols-1"} style={{ direction: "ltr" }}>
          {post == null ? (
            <Spinner color="default" labelColor="foreground" />
          ) : (
            <>
              <Carousel className="rounded-xl  max-h-[694px]  overflow-hidden">
                <img src={post.image} alt="image 2" className="h-full grow w-full object-cover" />
              </Carousel>
              <div className="  ps-2 pe-5 py-5" style={{ direction: "rtl" }}>
                <h2 className="text-3xl font-semibold mb-5">{post.title}</h2>
                <p className="mb-5">{post.description} </p>
                <div>
                  {post?.category.map((c) => {
                    <span>{c}</span>;
                  })}{" "}
                </div>
              </div>
            </>
          )}
        </Card>

        <div>
          <Categories />
        </div>
      </section>
    </>
  );
};
