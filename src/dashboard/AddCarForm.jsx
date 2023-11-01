import { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "../axios/axios.jsx";
import { Notify } from "notiflix";
import { yupResolver } from "@hookform/resolvers/yup";
import { carSchema } from "../validations/CarValidation.jsx";
import { SelectedContext } from "./Cars.jsx"


const AddCarForm = () => {

    const [loading, setLoading] = useState(false);

    const [selectedImages, setSelectedImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const { selected } = useContext(SelectedContext);
    useEffect(() => {
        reset(selected);
      }, [selected]);
      console.log(selected);
    
  
    const handleFileChange = (e) => {
      const files = e.target.files;
      const newFileNames = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        newFileNames.push(file.name);
      }
  
      setSelectedImages(files);
      setFileNames(newFileNames);
    };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(carSchema),
    defaultValues: {
        name: selected ? selected?.name : "",
        year: selected ? selected?.year : "",
        seats: selected ? selected?.seats : "",
        fuelConsumption: selected ? selected?.fuelConsumption : "",
        fuelType: selected ? selected?.fuelType : "",
        gearType: selected ? selected?.gearType : "",
        price: selected ? selected?.price : "",
        images: ""
      },
  });

  const onSubmit = async (data) => {
    console.log(data);
    console.log(errors)

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("fuelConsumption", data.fuelConsumption);
    formData.append("fuelType", data.fuelType);
    formData.append("gearType", data.gearType);
    formData.append("seats", data.seats);
    formData.append("price", data.price);
    
    for (let i = 0; i < selectedImages.length; i++) {
        formData.append("images", selectedImages[i]);
      }
  
 
    try {
        setLoading(true);
      const result = await axios.post(
        "/cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      Notify.success("Your car was added successfully!");
        console.log(result);
        window.location.reload(true);
    } catch (error) {
        setLoading(false);
        console.log(error);
      setLoading(false);
      if (error.message === "Network Error") {
        Notify.failure("Failed to connect to the server");
      } else {
        Notify.failure("Failed to add the program");
      }
    }
  };


  
  return (
    <div className="absolute bg-white w-[50%] p-5 rounded-[5px] top-[50%] left-[50%] max-h-[90%] transform -translate-x-[50%]  -translate-y-[50%]">
        <div className="max-w-full mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">Add a New Car</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-8 w-full">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Car Name</label>
          <input
            className={`w-full px-4 py-3 rounded-lg border-2 border-gray-300 ${errors.name ? 'border-red-600' : ''} outline-none focus:outline-none focus:border-indigo-500`}
            type="text"
            name="name"
            {...register("name")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Year</label>
          <input
            className={`w-full px-4 py-3 rounded-lg border-2 border-gray-300 ${errors.year ? 'border-red-600' : ''} outline-none focus:outline-none focus:border-indigo-500`}
            type="text"
            name="year"
            {...register("year")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Number of Seats</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="number"
            name="seats"
            {...register("seats")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Fuel Consumption</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="text"
            name="fuelConsumption"
            {...register("fuelConsumption")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Fuel Type</label>
          <select
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            name="fuelType"
            {...register("fuelType")}
          >
            <option value="">Select Fuel Type</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Electric">Hybrid</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Gear Type</label>
          <select
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            name="gearType"
            {...register("gearType")}
          >
            <option value="">Select Gear Type</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Price per Month</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="text"
            name="price"
            {...register("price")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Upload Images (up to 5)</label>
          <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => {
                    field.onChange(e);
                    handleFileChange(e);
                  }}
                />
              )}
            />
        </div>
       
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg"
          type="submit"
        > 
          {loading? 'Submitting...' : 'Submit'}
        </button>
        </div>
        {fileNames.length > 0 && (
            <div className="mb-4 mt-2">
              <label className="block text-gray-600 text-sm font-semibold mb-2">
                Selected Files:
              </label>
              <ul>
                {fileNames.map((fileName, index) => (
                  <li key={index}>{fileName}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
        </div>
    </div>
  )
}

export default AddCarForm;
