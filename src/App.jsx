import React from "react";
import "./App.css";

import ProjectsColumn from "./Components/ProjectColumn.jsx";
// import Intermediate from "./Components/Intermediate.jsx";

const App = () => {
  return (
    <div className="w-full flex flex-col p-6 lg:px-16 bg-slate-950 text-slate-300 font-mono">
      <h1 className="text-7xl font-semibold mb-5 uppercase ">Projects</h1>
      <div className="flex flex-col gap-6">
        {/* <Intermediate /> */}
        <ProjectsColumn />

        
      </div>
    </div>
  );
};

export default App;
