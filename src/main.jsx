import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLoader from "./components/common/AppLoader";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppLoader />
  </React.StrictMode>
);
