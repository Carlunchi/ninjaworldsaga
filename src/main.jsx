import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Home";
import Characters from "./Components/Characters";
import LandingPage from "./Components/LandingPage";
import Glossary from "./Components/Glossary";
import Maps from "./Components/Maps";
import Store from "./Components/Store";
import CharacterCreation from "./Components/CharacterCreation";
import Missions from "./Components/Missions";

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
  {
    path: "/glossary",
    element: <Glossary />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/charactercreation",
    element: <CharacterCreation />,
  },
  {
    path: "/missions",
    element: <Missions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
