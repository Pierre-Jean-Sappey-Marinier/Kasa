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
import ProfilePage from "./components/Pages/ProfilePage";
import { Helmet } from "react-helmet";
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
  rootLoader,
  useRouteError,
} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // {
      //   path: "/my-app",
      //   element: <Home />,
      // },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/apropos",
        element: <AProposPage />,
      },
      {
        path: "/appartements/:id",
        element: <ProfilePage />,
        loader: async ({ params, request }) => {
          // const str = params.id.length;

          const appartementData = data.find((element) => {
            return element.id === params.id;
          });

          if (appartementData === undefined) {
            throw new Response("Not Found", { status: 404 });
          }

          return appartementData;
        },
        errorElement: <FourHundredFourPage />,
      },

      {
        path: "*",
        element: <FourHundredFourPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
