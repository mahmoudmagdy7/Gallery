import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import siteConfig from "../../../public/site-config";
import toast, { Toaster } from "react-hot-toast";

function AddCategory() {
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

  useEffect(() => {
    getCategories();
  }, []);

  const title = useRef("");
  const description = useRef("");
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Add the value to the selectedValues array if it's checked
      setSelectedValues([...selectedValues, value]);
    } else {
      // Remove the value from the selectedValues array if it's unchecked
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // Getting inputs values
    const postData = {
      name: title.current.value,
    };
    console.log(postData);
    try {
      const { data } = await axios.post(`${siteConfig.ApiUrl}/categories`, postData); // Fetch the data
      // Notify the student that login success
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      const { msgError } = error.response?.data;
      toast.error(msgError);
    }
  }
  return (
    <div className="lg:px-[15rem]">
      <Toaster />
      <p>hello</p>
      <form onSubmit={handleSubmit} className="p-5 ">
        <Input ref={title} size="sm" type="text" label="العنوان" className="mb-3" />

        <Button type="submit">submit</Button>
      </form>
    </div>
  );
}

export default AddCategory;
