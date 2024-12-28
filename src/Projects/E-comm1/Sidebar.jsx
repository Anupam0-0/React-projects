import React, { useState } from "react";
import { useSearch } from "./SearchContext";
import { useNavigate } from "react-router";


const Sidebar = () => {
 
  const {selectedCategory, setSelectedCategory} = useSearch();
  const {selectedPrice, setSelectedPrice} = useSearch();
  const {selectedColor, setSelectedColor} = useSearch();

  const categories = ["All", "Sneakers", "Flats", "Sandals", "Heels"];
  const prices = ["All Prices","$0 - $50", "$51 - $100", "$101 - $150", "$151 - $200", "$201+"];
  const colors = ["All" ,"Red", "Blue", "Green", "Black", "White"];

  return (
    <div>
      <div className="fixed md:w-[30vw] lg:w-[20vw] h-[100vh] hidden md:flex flex-col items-start justify-start border-r border-gray-400">
        <h1 className="text-4xl py-4 mb-2 text-center border-b w-full">
          MonoSneak 👀
        </h1>
        <div className="px-5 md:px-10 py-2">
          <h3 className="text-xl py-3">Category</h3>
          <ul className="px-2 list-none">
            {categories.map((category) => (
              <li key={category} className="text-xs md:text-base">
                <label className="text-md">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="mr-2 text-blue-300 bg-blue-300 "
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-5 md:px-10 py-4">
          <h3 className="text-xl py-3">Price</h3>
          <ul className="px-2 list-none">
            {prices.map((priceRange) => (
              <li key={priceRange} className="text-xs md:text-base">
                <label className="text-md">
                  <input
                    type="radio"
                    name="price"
                    value={priceRange}
                    checked={selectedPrice === priceRange}
                    onChange={() => setSelectedPrice(priceRange)}
                    className="mr-2 text-blue-300 bg-blue-300"
                  />
                  {priceRange}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 md:px-10 py-4">
          <h3 className="text-xl py-3">Color</h3>
          <ul className="px-2 list-none">
            {colors.map((color) => (
              <li key={color} className="text-xs md:text-base">
                <label className="text-md">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                    className="mr-2 "
                  />
                  {color} 
                  
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
