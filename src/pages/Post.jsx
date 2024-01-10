import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../components/StickyNavbar";

import { Carousel, IconButton } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import siteConfig from "../../public/site-config";
import { Button, Card, Spinner } from "@nextui-org/react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { Heart, ThumbsUp } from "@phosphor-icons/react";
import UseLiker from "../hooks/useLiker";
import { useQuery } from "react-query";
export const Post = () => {
  const { id } = useParams();
  // const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [likesStatues, setLikesStatues] = useState(true);
  const likedPosts = localStorage.getItem("liked-posts");

  const { data, isLoading, isRefetching } = useQuery("getSpecificPost", getSpecificPost, {
    refetchOnWindowFocus: false, // to prevent the refetching on window focus
  });
  const post = data?.result;
  async function getSpecificPost() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/posts/${id}`);
      // setPost(data.result);
      setLikes(data.result.likes);
      return data;
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

  return (
    <>
      <nav className="px-5  sticky top-0 end-0 z-50 mx-5 rounded-lg">
        <StickyNavbar />
      </nav>{" "}
      <section className="p-5 max-w-3xl lg:max-w-6xl m-auto cbg-main">
        <Card className={post ? "p-5 grid grid-cols-1 md:grid-cols-2 " : "p-5 grid grid-cols-1"} style={{ direction: "ltr" }}>
          {isLoading || isRefetching ? (
            <Spinner color="default" labelColor="foreground" />
          ) : (
            <>
              <Carousel
                className="rounded-xl border-2"
                prevArrow={({ handlePrev }) => (
                  <IconButton variant="text" color="red" size="lg" onClick={handlePrev} className="!absolute bottom-5 left-4 -translate-y-2/4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton variant="text" color="red" size="lg" onClick={handleNext} className="!absolute bottom-5 !right-4 -translate-y-2/4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </IconButton>
                )}
              >
                {post.image != "" ? (
                  post.image.map((i, idx) => <img key={idx} src={i.secure_url} alt="image 2" className="h-full grow w-full object-cover" />)
                ) : (
                  <img
                    src={"https://res.cloudinary.com/dhei5kh8z/image/upload/v1694555379/images/qurklysqbztdyva7jwgh.jpg"}
                    alt="image 2"
                    className="h-full grow w-full object-cover"
                  />
                )}
              </Carousel>

              <div className="  ps-2 pe-5 py-5" style={{ direction: "rtl" }}>
                <h2 className="text-3xl font-semibold mb-5">{post.title}</h2>
                <p className="mb-5">{post.description} </p>
                <div className="flex items-center gap-6">
                  {likesStatues ? (
                    !likedPosts?.includes(id) ? (
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
                  <h2 className="font-semibold mt-5">الاقسام </h2>
                  {post?.category.map((c) => (
                    <Link key={c._id} className="inline-block mx-1 ct-primary" to={"/category/" + c._id}>
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
