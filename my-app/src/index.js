import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import data from "./data/data.json";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Home from "./components/Pages/HomesPage";
import Footer from "./components/Footer/Footer";
import AProposPage from "./components/Pages/AProposPage";
import FourHundredFourPage from "./components/Pages/FourHundredFourPagePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import Apropos from "./components/Menu/Apropos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/banner",
    element: <Banner />,
  },

  {
    path: "/apropos",
    element: <AProposPage />,
  },
  {
    path: "*",
    element: <FourHundredFourPage />,
  },
  {
    path: "/appartments/:id",
    element: <ProfilePage />,
  },
  // {
  //   path: `/users/${data.id}`,
  //   element: <ProfilePage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
