import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Home from "./components/Pages/HomesPage";
import Footer from "./components/Footer/Footer";
import AProposPage from "./components/Pages/AProposPage";
import FourHundredFourPage from "./components/Pages/FourHundredFourPagePage";
import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
  Router,
  Routes,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
