import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import Layout from "../components/Layout";
import { orderSchema } from "../validations/orderValidation";
import { Confirm } from "notiflix";
import axios from "../axios/axios.jsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SingleCar = () => {
  const { carId } = useParams();
  const { cars } = useContext(AppContext);
  const single = cars.find((item) => item._id === carId);
  const images = single.images;
  const [mainImage, setMainImage] = useState(images[0]); // Set the main image state
  const [activeIndex, setActiveIndex] = useState(0); // Track the active image index

  const handleImageClick = (image, index) => {
    setMainImage(image);
    setActiveIndex(index);
  };

  const { register, handleSubmit, formState: { errors} } = useForm({
    resolver: yupResolver(orderSchema),
  });
  console.log(errors);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("pickupDate", data.pickupDate);
    formData.append("returnDate", data.returnDate);
    formData.append("item", carId);
    // console.log( typeof formData);
    try {
      const response = await axios.post("/cars-order", formData,  {
        timeout: 5000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      alert("Success: your order was sent successfully");
    } catch(error) {
      console.log(error);
    }

  }


  return (
    <Layout>
      <div className="flex w-[90%] md:w-[80%] mx-auto gap-8 pt-8 flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-cover rounded-xl mx-0">
          <img
            src={mainImage}
            alt=""
            className="w-full object-cover h-[50vh] cursor-pointer rounded-lg"
            onClick={() => handleImageClick(images[0], 0)}
          />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {/* Display small images for selection */}
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className={`w-1/4 object-cover h-[10vh] cursor-pointer rounded-md border ${activeIndex === index ? 'border-blue-500 border-2' : 'border-transparent'}`}
                onClick={() => handleImageClick(item, index)}
              />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 w-full md:w-1/2 relative flex justify-around flex-col">
          <div>
          <h1 className="font-bold text-2xl text-slate-700">
            Hyundai Santa Fe
          </h1>
          <p className="mt-4 text-slate-700 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <ul className="flex flex-col text-slate-700 mt-4">
              <li className="font-medium text-lg text-blue-400">
                Make:{" "}
                <span className="font-normal text-slate-700">
                  Hyundai
                </span>
              </li>
              <li className="font-medium text-lg text-blue-400">
                Seats:{" "}
                <span className="font-normal text-slate-700">
                  {single.seats} People
                </span>
              </li>
              <li className="font-medium text-lg text-blue-400">
                Transmission:{" "}
                <span className="font-normal text-slate-700">
                  {single.gearType}
                </span>
              </li>
              <li className="font-medium text-lg text-blue-400">
                Fuel:{" "}
                <span className="font-normal text-slate-700">
                  {single.fuelType}
                </span>
              </li>
              <li className="font-medium text-lg text-blue-400">
                Consumption:{" "}
                <span className="font-normal text-slate-700">
                  {single.fuelConsumption}
                </span>
              </li>
              <li className="font-medium text-lg text-blue-400">
                Year:{" "}
                <span className="font-normal text-slate-700">
                  {single.year}
                </span>
              </li>
            </ul>  
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-xl text-slate-700">{single.price} <span className="font-normal">/month</span></h2>
              {/* <button className="bg-blue-400 text-white rounded-lg px-2 py-1 text-xl hover:bg-blue-500"><a href="#order">Rent Now</a></button> */}
            </div>
          </div>  
          
        </div>
        </div>
        {/* Order Form Section */}
        <section id="order" className="w-[80%] mx-auto">
        <div className="rounded-xl py-4 w-full md:w-[50%] relative flex-start flex flex-col mt-4">
        <h2 className="font-bold text-xl text-slate-700">Place Your Order</h2>
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="mb-4">
              <input
                type="text"
                name="name"
                className="border border-blue-800 px-3 py-2 w-full rounded bg-transparent focus:outline-none placeholder-slate-800"
                placeholder="Enter your name"
                {...register("name")}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="border border-blue-800 px-3 py-2 w-full rounded bg-transparent focus:outline-none placeholder-slate-800"
                placeholder="Enter your email"
                {...register("email")}
              />
            </div>
            <div className="mb-2">
              <input
                type="tel"
                name="phone"
                className="border border-blue-800 px-3 py-2 w-full rounded bg-transparent focus:outline-none placeholder-slate-800"
                placeholder="Phone"
                {...register("phone")}
              />
            </div>
            <div className="mb-2">
              <label className="text-slate-700 font-[600]">Pickup date</label>
              <input
                type="date"
                name="pickupDate"
                className="border border-blue-800 mt-2 px-3 py-2 w-full rounded bg-transparent focus:outline-none placeholder-blue-800"
                placeholder="Pickup Date"
                {...register("pickupDate")}
              />
            </div>
            <div className="mb-4">
             <label className="text-slate-700 font-[600]">Return date</label> 
              <input
                type="date"
                name="returnDate"
                className="border border-blue-800 mt-2 px-3 py-2 w-full rounded bg-transparent focus:outline-none placeholder-blue-800"
                placeholder="Return Date"
                {...register("returnDate")}
              />
            </div>
            <button
              type="submit"
              className="bg-slate-800 text-white rounded-lg px-4 py-2 text-xl hover:bg-slate-900"
            >
              Submit
            </button> */}
          </form>
        </div>
        </section>
    </Layout>
  );
};

export default SingleCar;
