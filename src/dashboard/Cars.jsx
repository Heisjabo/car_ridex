import { useState } from "react";
import { useContext } from "react";
import {
  FaPen,
  FaTrashAlt,
} from "react-icons/fa";
import { AppContext } from "../context/AppProvider";

const Cars = () => {
  const [modal, setModal] = useState(false);
  const { cars } = useContext(AppContext);


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
                    <th className="px-4 py-2 text-left font-semibold">MODE</th>
                    <th className="px-4 py-2 text-left font-semibold">PRICE</th>
                    <th className="px-4 py-2 text-left font-semibold">STATUS</th>
                    {/* <th className="px-4 py-2 text-left font-semibold">ACTIONS</th> */}
                </tr>
            </thead>
            <tbody>

              {
                cars.map((item, index) => {
                  return (
                    <tr className="bg-white rounded-xl ">
                    <td className="border-t border-b px-2 py-2 border-r ">
                      <div className="flex items-center gap-4">
                        <img src={item.images[0]} alt="" className="rounded-[5px] h-[40px] w-[40px]"/>
                        <div className="block leading-5">
                          <h3 className="font-semibold text-slate-800">{item.name}</h3>
                          <p className="text-gray-500">{item.year}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal border-r">{item.gearType}</td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal border-r">{item.price}</td>
                    <td className="border-t border-b px-4 py-2 border-r text-indigo-500">Available</td>
                    <td className="border-t border-b px-4 py-2 border-r">
                        <FaPen className="text-blue-600 cursor-pointer " />
                      </td>
                    <td className="border-t border-b px-4 py-2 border-r">
                    <FaTrashAlt className="text-red-600 cursor-pointer" />
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
      <form className="grid grid-cols-2 gap-x-8 w-full">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Car Name</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="text"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Year</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="text"
            name="year"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Number of Seats</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="number"
            name="seats"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Fuel Consumption (mpg)</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="text"
            name="fuelConsumption"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Fuel Type</label>
          <select
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            name="fuelType"
          >
            <option value="">Select Fuel Type</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Gear Type</label>
          <select
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            name="gearType"
          >
            <option value="">Select Gear Type</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Price per Day ($)</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="number"
            name="price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Upload Images (up to 5)</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-indigo-500"
            type="file"
            name="images"
            accept="image/*"
            multiple
          />
        </div>
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg"
          type="button"
        > 
          Submit
        </button>
      </form>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
