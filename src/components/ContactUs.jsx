import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi'; 
import Layout from './Layout';

const ContactUs = () => {
  return (
    <Layout>
      <div className="mx-auto w-full flex justify-between md:w-[78%] lg:w-[78%] xl:w-[76%] 2xl:w-1/2 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Information */}
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-slate-900">Contact Us</h1>
            <p className="mb-4">
              Have questions or feedback? Feel free to reach out to us using the contact information below.
            </p>
            <div className="mb-4 flex items-center">
              <FiMail className="mr-2 text-blue-500" />
              <span>info@example.com</span>
            </div>
            <div className="mb-4 flex items-center">
              <FiPhone className="mr-2 text-blue-500" />
              <span>(123) 456-7890</span>
            </div>
            <div className="mb-4">
              <p>Address:</p>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
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
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
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

