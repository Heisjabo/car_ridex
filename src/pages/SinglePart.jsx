import React from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const SinglePart = () => {
  const { sparePartId } = useParams();

  // Replace this with your data fetching logic to get details for the specific spare part based on sparePartId
  const sparePartDetails = {
    id: sparePartId,
    name: 'Spare Part Name',
    description: 'Spare part description goes here.',
    images: ['image1.jpg', 'image2.jpg'],
    // Add more details as needed
  };

  return (
    <Layout>
      <div className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4">
        <h1 className="text-2xl font-semibold mb-4">{sparePartDetails.name}</h1>
        <p className="mb-4">{sparePartDetails.description}</p>
        <div className="mb-4">
          {sparePartDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-full max-w-xs mx-auto mb-2"
            />
          ))}
        </div>
        {/* Add more spare part details here */}
      </div>
    </Layout>
  );
};

export default SinglePart;
