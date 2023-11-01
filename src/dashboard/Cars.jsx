import { useContext, useEffect, useState } from "react";
import {
  FaPen,
  FaTrashAlt,
} from "react-icons/fa";
import { AppContext } from "../context/AppProvider";
import AddCarForm from "./AddCarForm";
import { Confirm } from "notiflix";
import axios from "../axios/axios.jsx";
import { createContext } from "react";


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

 export const SelectedContext = createContext();

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
        <SelectedContext.Provider value={{selected}}>
          <AddCarForm />
        </SelectedContext.Provider>
      </div>
    </section>
  );
};

export default Cars;
