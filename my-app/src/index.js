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
  isRouteErrorResponse,
  action,
  json,
  useRouteError,
} from "react-router-dom";
import Nav from "./components/Nav/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  //
  {
    path: "/banner",
    element: <Banner />,
  },

  {
    path: "/apropos",
    element: <AProposPage />,
  },
  {
    path: "/appartements/:id",
    element: <ProfilePage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <FourHundredFourPage />,
    errorElement: <ErrorBoundary />,
  },
]);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  console.log(error);
  // Uncaught ReferenceError: path is not defined
  return console.error(error);
}

const Action = () => {
  throw json({ message: "email is required" }, { status: 400 });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
