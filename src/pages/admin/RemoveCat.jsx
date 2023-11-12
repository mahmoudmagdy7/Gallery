import axios from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import siteConfig from "../../../public/site-config";
import toast, { Toaster } from "react-hot-toast";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";
function RemoveCat() {
  // var checkedValue = document.querySelector(".tb").value;

  const [categories, setCategories] = useState(null);

  async function getCategories() {
    try {
      const { data } = await axios.get(`${siteConfig.ApiUrl}/categories`);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeCat(catId) {
    try {
      const { data } = await axios.delete(`${siteConfig.ApiUrl}/categories/${catId}`); // Fetch the data
      toast.success(data.message);
      getCategories();
    } catch (error) {
      const { msgError } = error.response?.data;
      toast.error(msgError);
    }
  }

  const title = useRef("");

  async function updateCat(catId) {
    // Getting inputs values
    const config = {
      name: title.current.value,
    };
    try {
      const { data } = await axios.put(`${siteConfig.ApiUrl}/categories/${catId}`, config); // Fetch the data
      toast.success(data.message);
      console.log(data);
      getCategories();
    } catch (error) {
      const { msgError } = error.response?.data;
      toast.error(msgError);
    }
  }
  useLayoutEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="lg:px-[15rem]">
      <Toaster />
      <p className="text-start text-lg mb-4">قم بحذف القسم</p>

      {categories?.map((cat) => {
        return (
          <>
            <div key={cat._id} className="flex gap-5 mb-3 items-center justify-between ">
              <h3> {cat.name}</h3>
              <div>
                <Button className="bg-red-300 h-8 rounded-lg text-white" onClick={() => removeCat(cat._id)}>
                  Remove
                </Button>{" "}
                <Popover placement="right">
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
                </Popover>
              </div>
              <h3> {cat._id}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default RemoveCat;
