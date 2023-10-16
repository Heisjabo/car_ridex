import car1 from "../components/Images/car-1.jpg";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import {
  FaCar,
  FaCog,
  FaPen,
  FaTrashAlt,
} from "react-icons/fa";

const Cars = () => {
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("mode", data.mode);
    formData.append("profile", data.profile[0]);

    console.log(formData);
  }

  const data = [
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    },
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    },
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    },
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    },
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    },
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    },
    {
      name: "BMW 3 Series",
      year: 2019,
      seats: "4 people",
      fuelConsumption: "8.2km/1-litre",
      fuelType: "Gasoline",
      gear: "Automatic",
      price: "$350/month",
    }
    // Add more car details as needed
  ];

  /* eslint-disable */
  return (
    <section>
      <div className="ml-[25%] mt-6 w-[74%] rounded-xl ">
        <div className="flex items-center justify-between rounded-xl py-2 px-4 w-full mx-auto">
        <h2 className="text-xl font-semibold text-slate-700">All cars</h2>
        <button className="border rounded-lg px-4 py-1 border-slate-800 cursor-pointer bg-slate-800 text-white hover:bg-transparent hover:text-slate-800 transition-all duration-300"
        onClick={() => setModal(true)}>Add New</button>
        </div>
    {/* table of cars */}
    <div className="container mx-auto mt-4 bg-white rounded-xl mb-4 py-4">
        <table className="table-auto w-full">
            <thead>
                <tr className="text-gray-400 text-[14px]">
                    <th className="px-4 py-2 text-left font-semibold">CAR</th>
                    <th className="px-4 py-2 text-left font-semibold">MODE</th>
                    <th className="px-4 py-2 text-left font-semibold">PRICE</th>
                    <th className="px-4 py-2 text-left font-semibold">STATUS</th>
                    {/* <th className="px-4 py-2 text-left font-semibold">ACTIONS</th> */}
                </tr>
            </thead>
            <tbody>

              {
                data.map((item, index) => {
                  return (
                    <tr>
                    <td className="border-t border-b px-4 py-2">
                      <div className="flex items-center gap-4">
                        <img src={car1} alt="" className="rounded-[5px] h-[40px] w-[40px]"/>
                        <div className="block leading-5">
                          <h3 className="font-semibold text-slate-800">{item.name}</h3>
                          <p className="text-gray-500">{item.year}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal">{item.gear}</td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal">$140</td>
                    <td className="border-t border-b px-4 py-2"><p className="bg-[#2196f3] rounded-lg text-white w-1/2 text-sm text-center px-2">Available</p></td>
                    <td className="border-t border-b px-4 py-2">
                      <div className="flex items-center w-full gap-6">
                        <FaPen className="text-blue-600 cursor-pointer " />
                        <FaTrashAlt className="text-red-600 cursor-pointer" />
                      </div>
                      
                      </td>
                </tr>
                  )
                })
              }
                
                {/* <tr>
                    <td className="border-t border-b px-4 py-2">Car 2</td>
                    <td className="border-t border-b px-4 py-2 text-slate-800 font-normal">Manual</td>
                    <td className="border-t border-b px-4 py-2"><p className="bg-[#455a64] text-white w-1/2 rounded-lg text-sm text-center">Taken</p></td>
                    <td className="border-t border-b px-4 py-2">
                    <div className="flex items-center w-full gap-6">
                        <FaPen className="text-blue-600 cursor-pointer " />
                        <FaTrashAlt className="text-red-600 cursor-pointer" />
                      </div>
                    </td>
                </tr> */}
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
        <div className="absolute bg-white w-[50%] p-5 rounded-[5px] top-[50%] left-[50%] max-h-[90%] transform -translate-x-[50%]  -translate-y-[50%]">
          <div className="flex flex-col relative px-[10px]">
            <h3 className="text-[20px] font-[500] text-slate-800">
              Add a car
            </h3>
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setModal(false)}
            >
              <IoCloseSharp className="text-2xl " />
            </div>
            <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-start gap-[5px] w-full flex-col">
                <label className="text-slate-800 font-[500] text-[16px]">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className={`bg-[#f3f1f1] w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                />
              </div>
              <div className="flex items-start gap-[5px] w-full flex-col">
                <label className="text-slate-800 font-[500] text-[16px]">
                  Year
                </label>
                <input
                  type="number"
                  {...register("year")}
                  className={`bg-[#f3f1f1] w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                />
              </div>
              <div className="flex items-start gap-[5px] w-full flex-col">
                <label className="text-slate-800 font-[500] text-[16px]">
                  Mode
                </label>
                <select
                {...register("mode")}
                  className={`bg-[#f3f1f1] w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                >
                  <option value="0"></option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>
              <div className="flex items-start gap-[5px] w-full flex-col">
                <label className="text-slate-800 font-[500] text-[16px]">
                  Image
                </label>
                <input
                  type="file"
                  {...register("profile")}
                  className={`bg-[#f3f1f1] w-full px-[8px] py-[5px] text-slate-800 outline-none rounded-[8px]`}
                />
              </div>
              <button
                type="submit"
                className="bg-slate-800 text-white py-[5px] w-[50%] rounded-[8px]"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
