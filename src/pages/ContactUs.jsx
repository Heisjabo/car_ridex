import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi'; 
import Layout from '../components/Layout';

const ContactUs = () => {
  return (
    <Layout>
      <div className="mx-auto w-full md:w-[80%] xl:w-[80%] py-6">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 md:gap-20 items-center">
          {/* Contact Information */}
          <div className='w-[80%] md:w-1/2'>
            <h1 className="text-2xl font-semibold mb-4 text-slate-900">Contact Us</h1>
            <p className="mb-4 text-slate-800">
              Have questions or feedback? Feel free to reach out to us using the contact information below.
            </p>
            <div className="mb-4 flex items-center text-slate-800">
              <FiMail className="mr-2 text-blue-500" />
              <span >info@example.com</span>
            </div>
            <div className="mb-4 flex items-center text-slate-800">
              <FiPhone className="mr-2 text-blue-500" />
              <span>(123) 456-7890</span>
            </div>
            <div className="mb-4 ">
              <p className='text-slate-900'>Address:</p>
              <p className='text-slate-800'>123 Main Street, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className='w-[80%] md:w-1/2'>
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Send us a Message</h2>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="block w-full p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
                required
              />
              <textarea
                placeholder="Your Message"
                className="block w-full resize-none p-2 border border-gray-300 rounded mb-2 focus-ring focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 transition duration-300"
                rows="5"
                required
              />
              <button
                type="submit"
                className="bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

