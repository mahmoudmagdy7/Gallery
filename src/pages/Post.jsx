import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../components/StickyNavbar";

import { Carousel } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import siteConfig from "../../public/site-config";
import { Button, Card, Spinner } from "@nextui-org/react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { Heart, ThumbsUp } from "@phosphor-icons/react";
import UseLiker from "../hooks/useLiker";
export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [likesStatues, setLikesStatues] = useState(true);
  const likedPosts = localStorage.getItem("liked-posts");
  async function getSpecificPost() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/posts/${id}`);
      setPost(data.result);
      setLikes(data.result.likes);
    } catch (error) {
      console.log(error);
    }
  }
  async function addLike() {
    try {
      const { data } = await axios.post(`${siteConfig.ApiUrl}/posts/${id}`);
      setLikes(data.result.likes);
      setLikesStatues(false);
      UseLiker(id);

      document.getElementById("likes-button").classList.add("disabled");
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
                <img
                  src={post.image != "" ? post.image : "https://res.cloudinary.com/dhei5kh8z/image/upload/v1694555379/images/qurklysqbztdyva7jwgh.jpg"}
                  alt="image 2"
                  className="h-full grow w-full object-cover"
                />
              </Carousel>
              <div className="  ps-2 pe-5 py-5" style={{ direction: "rtl" }}>
                <h2 className="text-3xl font-semibold mb-5">{post.title}</h2>
                <p className="mb-5">{post.description} </p>
                <div className="flex items-center gap-6">
                  {likesStatues ? (
                    !likedPosts.includes(id) ? (
                      <Button id="likes-button" onClick={addLike} size="sm" className="px-0 ">
                        <Heart color="red" size={20} />{" "}
                      </Button>
                    ) : (
                      <Button isDisabled id="likes-button" size="sm" className="px-0 ">
                        <Heart color="red" weight="fill" size={20} />{" "}
                      </Button>
                    )
                  ) : (
                    <Button isDisabled id="likes-button" size="sm" className="px-0 ">
                      <Heart color="red" weight="fill" size={20} />{" "}
                    </Button>
                  )}

                  <span className="text-lg">
                    اعجاب : <span className="text-red-600 font-bold">{likes}</span>
                  </span>
                </div>
                <div>
                  <h2 className="font-semibold">الاقسام </h2>
                  {post?.category.map((c) => (
                    <Link className="inline-block mx-1 ct-primary" to={"/category/" + c._id}>
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </Card>

        <div>
          <Categories />
        </div>
      </section>
      <Footer />
    </>
  );
};
