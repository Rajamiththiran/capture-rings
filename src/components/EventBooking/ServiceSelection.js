import React, { useState } from 'react';

// Separate the package data
const packages = [
  {
    id: 1,
    team: 'Team 1',
    name: 'Wedding Shoot',
    duration: '3h',
    price: '35,000.00',
  },
  {
    id: 2,
    team: 'Team 1',
    name: 'Engagement Shoot',
    duration: '2h',
    price: '25,000.00',
  },
  {
    id: 3,
    team: 'Team 2',
    name: 'Graduation Shoot',
    duration: '1h',
    price: '10,000.00',
  },
  {
    id: 4,
    team: 'Team 2',
    name: 'Portrait Shoot',
    duration: '2h',
    price: '15,000.00',
  },
];

export const ServiceSelection = ({ formData, setFormData, nextStep }) => {
  const [selectedTeam, setSelectedTeam] = useState('All');

  // Filter the packages based on the selected team
  const filteredPackages =
    selectedTeam === 'All'
      ? packages
      : packages.filter((pkg) => pkg.team === selectedTeam);

  const handleSelectPackage = (pkg) => {
    setFormData({
      ...formData,
      packageName: pkg.name,
      packagePrice: pkg.price,
    });
    nextStep();
  };

  return (
    <div className="m-6">
      <div className="text-start">
        <h2 className="text-lg font-semibold mb-4">Select Category</h2>
        {/* Filter Buttons */}
        <div className="mb-4">
          {['All', 'Team 1', 'Team 2'].map((team) => (
            <button
              key={team} 
              className={`px-4 py-1 rounded-lg mx-2 ${
                selectedTeam === team
                  ? 'border-2 border-primaryBtn bg-white text-primaryBtn'
                  : 'border-2 border-gray-400 bg-white text-gray-700'
              }`}
              onClick={() => setSelectedTeam(team)}
            >
              {team}
            </button>
          ))}
        </div>
      </div>
      {/* Packages */}
      <h2 className="text-lg font-semibold mb-4">Select Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id} 
            className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelectPackage(pkg)}
          >
            <h3 className="text-lg font-semibold">{pkg.name}</h3>
            <p>Duration: {pkg.duration}</p>
            <p>Price: {pkg.price}</p>
          </div>
        ))}
      </div>

      <div className="border w-full my-4"></div>
      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="bg-primaryBtn text-white px-4 py-2 rounded-lg mt-4"
        >
          Next: Date & Time
        </button>
      </div>
    </div>
  );
};
