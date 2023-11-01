import React, { useState } from 'react';
import Layout from './Layout';
import spare from "./Images/spare.jpg";
import { IoMdArrowDropdown } from 'react-icons/io';
import CustomPartModal from './CustomPartModal';
import { Link } from 'react-router-dom';


const SpareParts = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  // Sample data for spare parts (you should replace this with your actual data)
  const sparePartsData = [
      {
        id: 1,
        name: 'Spare Part 1',
        category: 'Car Parts',
        price: 50.99,
        image: spare,
        brand: 'Toyota',
      },
      {
        id: 2,
        name: 'Spare Part 2',
        category: 'Car Parts',
        price: 50.99,
        image: spare,
        brand: 'Mercedes',
      },
      {
        id: 3,
        name: 'Spare Part 3',
        category: 'Car Parts',
        price: 50.99,
        image: spare,
        brand: 'Kia',
      },
      {
        id: 4,
        name: 'Spare Part 3',
        category: 'Car Parts',
        price: 50.99,
        image: spare,
        brand: 'Hyundai',
      },
      {
        id: 5,
        name: 'Spare Part 3',
        category: 'Car Parts',
        price: 50.99,
        image: spare,
        brand: 'Nissan',
      },
  ];

  const [selectedBrand, setSelectedBrand] = useState('All'); // Default to show all

  const uniqueBrands = [...new Set(sparePartsData.map((part) => part.brand))];

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const filteredSpareParts =
    selectedBrand === 'All'
      ? sparePartsData
      : sparePartsData.filter((part) => part.brand === selectedBrand);

  return (
    <Layout>
      <div className="w-[85%] mx-auto lg:w-[80%] mt-10 py-6">
        <div className="flex justify-between items-center flex-col md:flex-row gap-4 mb-4 w-full">
          <h1 className="text-xl lg:text-3xl md:text-xl font-semibold text-slate-800 w-full">Spare Parts</h1>

          {/* Car Brand Filter */}
          <div className='flex items-center w-full justify-between gap-2 md:justify-end md:w-[100%]'>
          <div className="relative inline-block text-gray-700">
            <label className="text-lg font-semibold mr-2">Filter:</label>
            <div className="relative inline-block">
              <select
                className="px-2 py-1 pr-6 lg:pr-8 border w-auto border-gray-300 rounded appearance-none focus:outline-none transition duration-300"
                value={selectedBrand}
                onChange={(e) => handleBrandFilter(e.target.value)}
              >
                <option value="All">All</option>
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand} className='hover:bg-slate-900'>
                    {brand}
                  </option>
                ))}
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-400" />
              </span>
            </div>
            </div>
            {/* <button
                className="bg-slate-800 text-white py-2 px-2 rounded hover:bg-slate-600 transition duration-300"
                onClick={openModal}>Order Custom Part</button> */}
            </div> 
        </div>

        {/* Display filtered spare parts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {filteredSpareParts.map((sparePart) => (
            <div
              key={sparePart.id}
              className="bg-white p-2 shadow-md hover:shadow-lg transition duration-300 rounded-lg"
            >
              <div className=''>
                <img src={sparePart.image} alt="" className=' rounded-lg w-full'/>
                <div className='py-2'>
                    <h3 className='text-slate-900 text-md font-[500]'>{sparePart.name}</h3>
                    <p className='text-blue-600 text-md'>Brand: <span className='text-slate-800'> {sparePart.brand}</span></p>
                    <p className='text-blue-600 text-md'>In stock: <span className='text-slate-800'> 10 pierces</span></p>
                </div>
                <div className='flex justify-between border-t border-slate-600 py-2'>
                <p className='text-blue-600 text-md'>Price: <span className='text-slate-800'>${sparePart.price}</span></p>
                <Link to={`${sparePart.id}`}><button className='rounded-[5px] bg-transparent text-blue-600'>shop now</button></Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      { 
      isModalOpen && (
        <CustomPartModal
          isOpen={isModalOpen}
          onClose={closeModal}
       />)}
    </Layout>
  );
};

export default SpareParts;
