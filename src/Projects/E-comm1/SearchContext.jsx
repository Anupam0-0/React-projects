import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import data from "./data";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    //fetching data from the data.js file
  const [products, setProducts] = useState(data);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setProducts(data);
  }, []);

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts;
  };

  const filteredItems = useMemo(() => {
    return filteredData(products, selectedCategory, searchTerm).filter((product) => {
      const matchesTag = !selectedTag || product.company.includes(selectedTag);
      const matchesColor = !selectedColor || product.color === selectedColor;
      const matchesPrice = !selectedPrice || product.newPrice <= selectedPrice;
      return matchesTag && matchesColor && matchesPrice;
    });
  }, [products, selectedCategory, selectedTag, selectedColor, selectedPrice, searchTerm]);

  return (
    // passing the state variables and functions to the provider value
    // although we are passing all the state variables and functions, we can choose to pass only the ones we need in a specific component
    // ProductContext would be a better name for this context
    // since it has upgraded for categories , I never bothered to change the name
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedTag,
        setSelectedTag,
        selectedCategory,
        setSelectedCategory,
        selectedPrice,
        setSelectedPrice,
        selectedColor,
        setSelectedColor,
        filteredItems,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

//custom hook to use the search context in any component
export const useSearch = () => useContext(SearchContext);
