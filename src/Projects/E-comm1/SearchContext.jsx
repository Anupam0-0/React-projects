import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
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


  const filteredItems = useMemo(() => {
    return products.filter((product) => {
      const matchesSearchTerm =
        // !searchTerm ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || selectedTag === 'All Products' || product.company === selectedTag;
      
      const matchesColor = !selectedColor ||selectedColor === 'All' ||  product.color.toLowerCase() === selectedColor.toLowerCase();

      
      const matchesPrice = !selectedPrice || selectedPrice === "All Prices" || (selectedPrice && product.newPrice >= +selectedPrice.split(" - ")[0].replace("$", "") && product.newPrice <= +selectedPrice.split(" - ")[1].replace("$", ""));
      

      const matchesCategory =
        !selectedCategory || selectedCategory === "All"  || product.category.toLowerCase() === selectedCategory.toLowerCase();

      return (
        matchesSearchTerm &&
        matchesTag &&
        matchesColor &&
        matchesPrice &&
        matchesCategory
      );
    });
  }, [
    products,
    searchTerm,
    selectedTag,
    selectedColor,
    selectedPrice,
    selectedCategory,
  ]);

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
