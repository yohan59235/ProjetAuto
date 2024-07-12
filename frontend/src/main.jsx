import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./services/UserContext";

import App from "./App";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
