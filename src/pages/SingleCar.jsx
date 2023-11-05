import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import Layout from "../components/Layout";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from "../components/Cards";


 const SingleCar = () => {

    const { carId } = useParams();
    const { cars } = useContext(AppContext);
    const single = cars.find((item) => item._id === carId);
    const images = single.images;

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        if(images.length <= 2){
            setSlidesPerView(1);
        } else {
            setSlidesPerView(2)
        }
    }, [images])

  return (
    <Layout>
      <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      navigation
      loop={true}
      autoplay
      pagination={{ clickable: true }}
      className="h-[70vh]"
    >
        {images.map((item, index) => {
            return (
                <SwiperSlide key={index} className="flex gap-0 flex-col"><img src={item} alt="" className="w-full object-cover h-full"/></SwiperSlide>
            )
        })}
      ...
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-white font-bold text-4xl absolute z-10 top-60 text-center">{single.name}</h1>
      </div>
    </Swiper>
    <div className="w-[80%] mx-auto ">
        <div className="grid grid-cols-2 gap-20">
            <div className="flex rounded-md flex-col bg-slate-100 px-6 py-4 w-[50%] mt-4">
                <h1 className="font-bold text-slate-700 text-2xl mb-2">Car Details</h1>
                <ul>
                    <li className="text-slate-700 font-bold text-lg">Name: <span className="font-medium">{single.name}</span></li>
                    <li className="text-slate-700 font-bold text-lg">Year: <span className="font-medium">{single.year}</span></li>
                    <li className="text-slate-700 font-bold text-lg">Seats: <span className="font-medium">{single.seats} People</span></li>
                    <li className="text-slate-700 font-bold text-lg">Transmission: <span className="font-medium">{single.gearType}</span></li>
                    <li className="text-slate-700 font-bold text-lg">Fuel Consumption: <span className="font-medium">{single.fuelConsumption}</span></li>
                    <li className="text-slate-700 font-bold text-lg">Steering Wheel: <span className="font-medium">Left</span></li>
                    <li className="text-slate-700 font-bold text-lg">Price: <span className="font-medium">{single.price}</span></li>
                </ul>
            </div>
            <div className="flex flex-col w-full mt-4">
            <div>
                <h1 className="font-bold text-slate-700 text-2xl mb-2">Personal Information</h1>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Name</label>
                        <input
                        className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500`}
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                        <input
                        className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500`}
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Phone</label>
                        <input
                        className={`w-full px-4 py-2 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500`}
                        type="text"
                        placeholder="Your Phone"
                        name="name"
                        />
                    </div>

                    <button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg"
                        type="submit"
                        > 
                        Submit
                    </button>

                </form>

            </div>
            </div>
        </div>
    </div>

    <div className="bg-slate-100 mt-10">
        <div className="w-[80%] mx-auto py-4">
        <h1 className="font-bold text-slate-700 text-2xl mb-2">Other Cars for You...</h1>
        <Cards />
        </div> 
    </div>
    
    </Layout>
  )
}

export default SingleCar;
