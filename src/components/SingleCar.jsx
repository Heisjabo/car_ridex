import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import Layout from "./Layout";

 const SingleCar = () => {

    const { carId } = useParams();
    const { cars } = useContext(AppContext);
    const single = cars.find((item) => item._id === carId);

  return (
    <Layout>
       <section className="grid grid-cols-2 w-[80%] mx-auto py-4 gap-8">
        <aside className="min-w-[100%] h-auto">
            <img src={single.images[0]} alt="" />
        </aside>
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl text-slate-800">{single.name}</h1>
            <ul>
                <li className="font-semibold text-slate-700">Transmission: <span className="font-normal">{single.gearType}</span></li>
                <li className="font-semibold text-slate-700">Seats: <span className="font-normal">{single.seats}</span></li>
                <li className="font-semibold text-slate-700">Fuel consumption: <span className="font-normal">{single.fuelConsumption}</span></li>
                <li className="font-semibold text-slate-700">Fuel Type: <span className="font-normal">{single.fuelType}</span></li>
                <li className="font-semibold text-slate-700">Price: <span className="font-normal">{single.price}</span></li>
            </ul>
        </div>

        <div className="flex flex-col">
            <div>
                <h1 className="text-gray-600 text-lg font-semibold mb-2">Personal Information</h1>
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

       </section>
    </Layout>
  )
}

export default SingleCar;
