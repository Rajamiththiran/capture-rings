// src/components/Gallery.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const events = [
  { id: 1, title: 'Event 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Event 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Event 3', imageUrl: 'https://via.placeholder.com/150' },
  // Add more events here
];

export const Gallery = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <section>
      <Header />
      <div className="container mx-auto px-6 md:px-36 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 font-domine">
          Image Gallery
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Welcome to Capture Rings Studio’s Image Gallery! Here, you will find a
          stunning collection of photographs showcasing our passion for
          capturing precious moments and creating timeless memories. Take a
          virtual tour through our diverse portfolio that reflects the essence
          of our studio.
        </p>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="cursor-pointer border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              onClick={() => handleCardClick(event.id)}
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{event.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};
