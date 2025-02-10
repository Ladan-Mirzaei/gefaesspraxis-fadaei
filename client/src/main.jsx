import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Leistungen from "./pages/Leistungen";
import Contact from "./pages/Contact"
import HealthInfo from "./pages/healthInfo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/leistungen",
        element: <Leistungen />,
      },
      {
        path: "/kontakt-anfahrt",
        element: <Contact />,
      },
      {
        path: "/erkrankungen",
        element: <HealthInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
