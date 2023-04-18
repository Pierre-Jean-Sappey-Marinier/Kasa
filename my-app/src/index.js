import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";

import data from "./data/data.json";

import Home from "./components/Pages/HomesPage";
import AProposPage from "./components/Pages/AProposPage";
import FourHundredFourPage from "./components/Pages/FourHundredFourPagePage";
import ProfilePage from "./components/Pages/ProfilePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
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
        loader: async ({ params }) => {
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
