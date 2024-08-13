import React, { useState } from 'react';

export const ProductListing = ({ products }) => {
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      // Add other sorting logic here
      default:
        return 0;
    }
  });

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      {/* Filter Section */}
      <div className="mb-6">
        {/* Add filter controls here (e.g., categories, search) */}
      </div>

      {/* Sorting and Products Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700">Sort by:</span>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="default">Default sorting</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              {/* Add other sorting options here */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-lg font-bold">
                  ${product.price.toFixed(2)}
                </p>
                {/* Add additional product details or buttons */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
