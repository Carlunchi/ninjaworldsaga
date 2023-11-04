import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "../src/Components/Home";
import Characters from "../src/Components/Characters";
import LandingPage from "../src/Components/LandingPage";

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
