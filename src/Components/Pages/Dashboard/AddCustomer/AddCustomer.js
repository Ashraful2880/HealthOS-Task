import React from "react";
import axios from "axios";
import { IoMdPersonAdd } from "react-icons/io";

const AddCustomer = () => {
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [image, setImage] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const files = image;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "UploadFromWebsite");
    const res = await fetch(`${process.env.REACT_APP_IMAGE_API_PATH}/upload`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    const newService = { title, description, image: file?.secure_url };
    axios
      .post(`${process.env.REACT_APP_API_PATH}/services`, newService)
      .then(function (response) {
        alert("Service Added Successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <div className="footer-bg h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <IoMdPersonAdd className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Add Customer</h3>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md bg-white pb-6">
        <div className="text-center mb-10">
          <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
            Fill The Customer Info
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            To <span className="text-[#2563eb]">Add a Customer</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Service Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Service Title"
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Service Image
              </label>
              <div className="flex items-center justify-start bg-grey-lighter overflow-hidden">
                <label className="w-64 flex flex-col items-center px-4 py-3 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    {(image && image[0]?.name) || "Select Service Image"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImage(e.target.files)}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Service description
              </label>
              <textarea
                rows={10}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Service description"
              />
            </div>
          </div>

          <div className="flex justify-start w-full px-3">
            <button
              className="shadow bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] font-bold py-2 px-6 rounded border border-[#2563eb] duration-300"
              type="submit"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;