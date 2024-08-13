import React from 'react';
import { useParams } from 'react-router-dom';

export const EventGallery = () => {
  const { id } = useParams();

  // Fetch or use static data for the specific event's gallery
  // For demonstration, using static data
  const event = {
    title: `Event ${id}`,
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {event.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-full h-40 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};