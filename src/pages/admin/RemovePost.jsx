import axios from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import siteConfig from "../../../public/site-config";
import toast, { Toaster } from "react-hot-toast";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";
function RemovePost() {
  // var checkedValue = document.querySelector(".tb").value;

  const [posts, setPosts] = useState(null);

  async function getPosts() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/posts`);
      setPosts(data.post);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function removePost(catId) {
    try {
      const { data } = await axios.delete(`${siteConfig.ApiUrl}/posts/${catId}`); // Fetch the data
      toast.success(data.message);
      getPosts();
    } catch (error) {
      const { msgError } = error.response?.data;
      toast.error(msgError);
    }
  }

  // const title = useRef("");

  // async function updateCat(catId) {
  //   // Getting inputs values
  //   const config = {
  //     name: title.current.value,
  //   };
  //   try {
  //     const { data } = await axios.put(`${siteConfig.ApiUrl}/posts/${catId}`, config); // Fetch the data
  //     toast.success(data.message);
  //     console.log(data);
  //     getPosts();
  //   } catch (error) {
  //     const { msgError } = error.response?.data;
  //     toast.error(msgError);
  //   }
  // }
  useLayoutEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="lg:px-[15rem]">
      <Toaster />
      <p className="text-start text-lg mb-4">قم بحذف القسم</p>

      {posts?.map((post) => {
        return (
          <>
            <div key={post._id} className="flex gap-5 mb-3 items-center justify-between ">
              <h3> {post.title}</h3>
              <div>
                <Button className="bg-red-300 h-8 rounded-lg text-white" onClick={() => removePost(post._id)}>
                  Remove
                </Button>{" "}
                {/* <Popover placement="right">
                  <PopoverTrigger>
                    <Button className="bg-blue-300 h-8 rounded-lg ">Update</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <p className="mb-3">the new name</p>
                      <Input ref={title} type="Name" label="Name" />{" "}
                      <Button className="bg-blue-300 h-8 rounded-lg text-white" onClick={() => updateCat(cat._id)}>
                        Update
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover> */}
              </div>
              <h3> {post._id}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default RemovePost;
