import { FaPen, FaTrashAlt } from "react-icons/fa";
import car1 from "../components/Images/car-1.jpg";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";

const ADD_CAR = "https://gagacarsapi-production.up.railway.app/api/add-car";

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

    try{
      const response = await axios.post(ADD_CAR, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch(err){
      console.log(err);
    }
  }

  /* eslint-disable */
  return (
    <section>
      <div className="flex items-center gap-10 px-4 py-4 w-full">
        <div className="bg-blue-700 w-full text-white rounded-[8px] px-6 py-2">
          <h1>20</h1>
          <label>Manual Cars</label>
        </div>
        <div className="bg-[#47556999] w-full text-white rounded-[8px] px-6 py-2">
          <h1>20</h1>
          <label>Auto Cars</label>
        </div>
        <div className="bg-[#020617] w-full text-white rounded-[8px] px-6 py-2">
          <h1>20</h1>
          <label>Auto Cars</label>
        </div>
        <div className="bg-slate-800 w-full text-white rounded-[8px] px-6 py-2">
          <h1>20</h1>
          <label>Manual Cars</label>
        </div>
      </div>
      <div className="part flex flex-row justify-between items-center w-full px-4 ">
        <div className="admin-headers">
          <h2>All Cars</h2>
          <p>Dashboard &gt; Cars</p>
        </div>
        <button
          className="bg-transparent border border-slate-800 px-4 hover:bg-slate-800 hover:text-slate-100 duration-500 h-10 py-2 text-slate-800 rounded-xl"
          onClick={() => setModal(true)}
        >
          Add New
        </button>
      </div>

      <div className="border-t border-[#D0D7DE] mt-8 ">
        <div className="flex items-center w-full px-4 py-[5px] text-[#18385A] border-b border-[#D0D7DE] hover:bg-[#F6F8FA]">
          <img
            src={car1}
            alt="car-image"
            className="w-[60px] h-[60px] cursor-pointer rounded-[8px]"
          />
          <div className="flex flex-row w-[100%] items-center justify-between ml-[20px]">
            <div className="admin-names">
              <h2 className="cursor-pointer font-bold">Toyota RAV4</h2>
              <p>2010</p>
            </div>
            <p className="hidden md:block">Automatic</p>
            <p className="hidden md:block">Diesel</p>
            <div className="flex items-center gap-[20px]">
              <div className="cursor-pointer text-[#2F85E1] border border-[#DDE8F4] rounded-[5px] p-[5px]">
                <FaPen />
              </div>
              <div>
                <FaTrashAlt className="text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full px-4 py-[5px] text-[#18385A] border-b border-[#D0D7DE] hover:bg-[#F6F8FA]">
          <img
            src={car1}
            alt="car-image"
            className="w-[60px] h-[60px] cursor-pointer rounded-[8px]"
          />
          <div className="flex flex-row w-[100%] items-center justify-between ml-[20px]">
            <div className="admin-names">
              <h2 className="cursor-pointer font-bold">Toyota RAV4</h2>
              <p>2010</p>
            </div>
            <p className="hidden md:block">Automatic</p>
            <p className="hidden md:block">Diesel</p>
            <div className="flex items-center gap-[20px]">
              <div className="cursor-pointer text-[#2F85E1] border border-[#DDE8F4] rounded-[5px] p-[5px]">
                <FaPen />
              </div>
              <div>
                <FaTrashAlt className="text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 bg-[#00000080] ${
          modal ? "" : "hidden"
        } z-[1000] w-full h-full `}
      >
        <div className="absolute bg-white w-[50%] p-5 rounded-[5px] top-[50%] left-[50%] max-h-[90%] transform -translate-x-[50%]  -translate-y-[50%]">
          <div className="flex flex-col relative px-[10px]">
            <h3 className="text-[20px] font-[500] text-slate-800">
              Add Trainer
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
