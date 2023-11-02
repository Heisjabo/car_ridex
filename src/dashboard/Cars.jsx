import { useContext, useEffect, useState } from "react";
import {
  FaPen,
  FaTrashAlt,
} from "react-icons/fa";
import { AppContext } from "../context/AppProvider";
// import AddCarForm from "./AddCarForm";
import { Confirm } from "notiflix";
import axios from "../axios/axios.jsx";
import { useForm, Controller } from "react-hook-form";
import { Notify } from "notiflix";
import { yupResolver } from "@hookform/resolvers/yup";
import { carSchema } from "../validations/CarValidation.jsx";


Confirm.init({
  className: 'notiflix-confirm',
  width: '300px',
  position: 'center',
  distance: '10px',
  backgroundColor: '#f8f8f8',
  borderRadius: '8px',
  titleColor: '#1919FF',
  titleMaxLength: 34,
  messageColor: '#0f172a',
  okButtonColor: '#ffffff',
  okButtonBackground: '#4f46e5',
  cancelButtonColor: '#4f46e5',
  cancelButtonBackground: '#e2e8f0',
  });


const Cars = () => {
  const [modal, setModal] = useState(false);
  const { cars } = useContext(AppContext);
  const [selected, setSelected] = useState(null);


  //   delete a car 

const handleDelete = async (id) => {
  try {
    Confirm.show(
      "Confirm",
      "Are you sure to delete this car ?",
      "Yes",
      "No",
      async () => {
        await axios.delete(
          `/cars/${id}`
        );
        window.location.reload(true);
      },
      () => {},
      {}
    );
  } catch (error) {
    console.log(error.response);
  }
};




const [loading, setLoading] = useState(false);

const [selectedImages, setSelectedImages] = useState([]);
const [fileNames, setFileNames] = useState([]);

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


  /* eslint-disable */
  return (
    <section>
      <div className="mt-6 w-full rounded-xl ">
        <div className="flex items-center justify-between rounded-xl py-4 px-4 w-full mt-4 mx-auto bg-gradient-to-tr from-indigo-400 to-red-400 text-white">
        <h2 className="text-xl font-semibold">All cars</h2>
        <button className="border rounded-lg px-4 py-1 border-none cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 transition-all duration-300"
        onClick={() => setModal(true)}>Add New</button>
        </div>
    {/* table of cars */}
    <div className="container mx-auto mt-4 bg-white rounded-xl mb-4 py-4">
        <table className="table-auto w-full">
            <thead>
                <tr className="text-indigo-600 font-semibold text-[14px]">
                    <th className="px-4 py-2 text-left font-semibold">CAR</th>
                    <th className="px-4 py-2 text-left font-semibold">Fuel</th>
                    <th className="px-4 py-2 text-left font-semibold">PRICE</th>
                    <th className="px-4 py-2 text-left font-semibold">STATUS</th>
                    {/* <th className="px-4 py-2 text-left font-semibold">ACTIONS</th> */}
                </tr>
            </thead>
            <tbody>

              {
                cars.map((item, index) => {
                  return (
                    <tr className="bg-white rounded-xl " key={index}>
                    <td className="border-t border-b px-2 py-2 border-r ">
                      <div className="flex items-center gap-4">
                        <img src={item.images[0]} alt="" className="rounded-[5px] h-[40px] w-[40px]"/>
                        <div className="block leading-5">
                          <h3 className="font-semibold text-slate-800">{item.name}</h3>
                          <p className="text-gray-500">{item.year}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal border-r">{item.fuelType}</td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal border-r">{item.price}</td>
                    <td className="border-t border-b px-4 py-2 border-r text-indigo-500">Available</td>
                    <td className="border-t border-b px-4 py-2 border-r">
                        <FaPen className="text-blue-600 cursor-pointer " 
                        onClick={() => {
                          setSelected(item);
                          setModal(true);
                        }}
                        />
                      </td>
                    <td className="border-t border-b px-4 py-2 border-r">
                    <FaTrashAlt className="text-red-600 cursor-pointer" onClick={() => handleDelete(item._id)} />
                      </td>
                </tr>
                  )
                })
              }
                
            </tbody>
        </table>
    </div>
    {/* table of cars end */}

      </div>

      <div
        className={`fixed top-0 left-0 bg-[#00000080] ${
          modal ? "" : "hidden"
        } z-[1000] w-full h-full `}
      >
        <button className="absolute right-6 top-6 text-md font-normal text-blue-600 bg-white rounded-md p-2" onClick={() => setModal(false)}> &#10006;</button>
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
      </div>
    </section>
  );
};

export default Cars;
