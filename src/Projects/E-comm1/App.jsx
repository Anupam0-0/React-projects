import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className=" lg:ml-[20vw] w-full">
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
