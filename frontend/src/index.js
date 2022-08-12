import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsProvider } from "./context/WorkoutContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkoutsProvider>
      <App />
    </WorkoutsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
