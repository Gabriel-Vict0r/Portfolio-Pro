import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./components/Start";
import Services from "./components/Services";
import Habilities from "./components/Habilities";
import Projects from "./components/Projects";
import WhoIAm from "./components/WhoIAm";
import ContactMe from "./components/ContactMe";
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/start",
        element: <Start />,
      },
      { path: "/services", element: <Services /> },
      {
        path: "/habilities",
        element: <Habilities />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/whoIAm",
        element: <WhoIAm />,
      },
      {
        path: "/contactMe",
        element: <ContactMe />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
