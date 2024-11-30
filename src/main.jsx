import React from "react";
import { createRoot } from "react-dom/client";
import { Navigation } from "./Navigation/Navigation";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);
