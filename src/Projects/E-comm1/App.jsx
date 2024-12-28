import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { SearchProvider } from "./SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <>
        <div className="flex">
          <div className="fixed lg:w-[20vw] h-[100vh] hidden lg:flex flex-col items-start justify-start border-r border-gray-400">
            <Sidebar />
          </div>
          <div className=" lg:ml-[20vw] w-full">
            <Main />
          </div>
        </div>
      </>
    </SearchProvider>
  );
};

export default App;
