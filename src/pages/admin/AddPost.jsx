import { Button, Checkbox, CheckboxGroup, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import siteConfig from "../../../public/site-config";
import toast, { Toaster } from "react-hot-toast";

function AddPost() {
  // var checkedValue = document.querySelector(".tb").value;
  const [isSubmit, setIsSubmit] = useState(false); // Loading spinner state
  const [selectedValues, setSelectedValues] = useState([]);

  const [categories, setCategories] = useState(null);
  // get the exist categories from
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
    handleValidation();
  }, [selectedValues]);

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

  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const imagesRef = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    // Create FormData inside the handleSubmit function
    const postData = new FormData();
    postData.append("title", titleRef.current.value);
    postData.append("description", descriptionRef.current.value);

    for (const item of selectedValues) {
      postData.append("category", item);
    }
    for (let i = 0; i < imagesRef.current.files.length; i++) {
      postData.append("image", imagesRef.current.files[i]);
    }

    try {
      const { data } = await axios.post(`${siteConfig.ApiUrl}/posts/`, postData); // Fetch the data
      // Notify the student that login success
      setIsSubmit(false);

      toast.success(data.message);
    } catch (error) {
      const { msgError } = error.response?.data;
      setIsSubmit(false);

      toast.error(msgError);
    }
  }

  function handleValidation() {
    if (titleRef.current.value != "" && descriptionRef.current.value != "" && selectedValues.length != 0 && imagesRef.current.value != "") {
      document.getElementById("submit-button").disabled = false;
    } else {
      document.getElementById("submit-button").disabled = true;
    }
  }
  return (
    <div className="lg:px-[15rem] mt-8">
      <Toaster />
      <p className="text-start text-lg mb-4">قم بإضافة البوست</p>
      <form onSubmit={handleSubmit} onChange={handleValidation} className="p-5 shadow-lg shadow-gray-300 rounded-xl">
        <Input ref={titleRef} size="sm" type="text" label="العنوان" className="mb-3" />
        <Textarea
          ref={descriptionRef}
          key={"flat"}
          variant={"flat"}
          labelPlacement="outside"
          placeholder="ادخل الوصف"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />

        <p className="text-start mt-5">اختر القسم</p>
        <div color="secondary" className=" my-3 mb-5 grid grid-cols-2 gap-4">
          {categories?.map((c) => (
            <Checkbox key={c._id} value={c._id} onChange={handleCheckboxChange} className="gap-2">
              {c.name}
            </Checkbox>
          ))}
        </div>
        <Input ref={imagesRef} size="sm" type="file" className="w-52  my-8 mx-auto bg-red-50" accept="image/*" multiple />

        {!isSubmit ? (
          <Button
            id="submit-button"
            disabled
            type="submit"
            className="h-9 w-full mt-5 cbg-primary ct-5 cbg-primary-hover rounded-lg text-md disabled:opacity-40"
          >
            <span>إضافة</span>
          </Button>
        ) : (
          <Button id="submit-button" type="submit" className="h-9 w-full mt-5 cbg-primary ct-5 cbg-primary-hover rounded-lg text-md" isLoading>
            <span>جاري الاضافة</span>
          </Button>
        )}
      </form>
    </div>
  );
}

export default AddPost;
