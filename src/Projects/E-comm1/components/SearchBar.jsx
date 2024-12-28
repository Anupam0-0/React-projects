import React from 'react'
import { useSearch } from '../SearchContext';

function SearchBar() {
  // using React.useState() to create a state variable called input and a function to update it called setInput 
  // useSearch = () => useContext(SearchContext);
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="py-4 border-b px-10
    + md:px-32 w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="py-2 px-3 w-[40vw] text-sm rounded-md bg-slate-50 mx-2 shadow-sm outline-none"
      />
      <button
        onClick={handleSearch}
        className="w-10 h-9 mb-1 text-center shadow-md rounded-xl active:scale-95"
      >
        🔍
      </button>
    </div>
  );
}

export default SearchBar