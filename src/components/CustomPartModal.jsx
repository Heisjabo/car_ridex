import React, { useState } from 'react';

const CustomPartModal = ({ onClose }) => {


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-slate-200 p-6 rounded shadow-lg">
        <h2 className="text-2xl font-semibold">Order Custom Part</h2>
        <p className='mb-4'>Send us details of a part you want us to find for you,<br/> if you can't find it in our stock.
        We will notify you when it's available</p>
        <form className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
            required
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
            required
          />
          <input
            type="text"
            placeholder="Enter your phone"
            className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
            required
          />
          <input
            type="text"
            placeholder="Part Name"
            className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
            required
          />

          <textarea
            type="text"
            placeholder="Description"
            className="block w-full resize-none p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
            required
            style={{ gridRow: 'span 2' }}
          />
          <input
            type="text"
            placeholder="Vehicle Make Model"
            className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
            required
          />
          
          
          <div className="col-span-2 grid grid-cols-2 gap-2">
                <button
                    type="submit"
                    className="bg-slate-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                     Submit Request
                </button>
                <button
                    type="button"
                    className="bg-gray-300 text-slate-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                    onClick={onClose}
                    >
                     Cancel
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CustomPartModal;
