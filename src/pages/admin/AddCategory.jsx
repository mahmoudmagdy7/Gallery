import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import siteConfig from "../../../public/site-config";
import toast, { Toaster } from "react-hot-toast";

function AddCategory() {
  // var checkedValue = document.querySelector(".tb").value;

  const title = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();
    // Getting inputs values
    const config = {
      name: title.current.value,
    };
    try {
      const { data } = await axios.post(`${siteConfig.ApiUrl}/categories`, config); // Fetch the data
      toast.success(data.message);
    } catch (error) {
      const { msgError } = error.response?.data;
      toast.error(msgError);
    }
  }
  return (
    <div className="lg:px-[15rem]">
      <Toaster />
      <p className="text-start text-lg mb-4">قم بإضافة القسم</p>

      <form onSubmit={handleSubmit} className="p-5 ">
        <Input ref={title} size="sm" type="text" label="العنوان" className="mb-3" />

        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}

export default AddCategory;
