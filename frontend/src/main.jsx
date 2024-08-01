import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./services/UserContext";

import App from "./App";
import Home from "./pages/Home/Home";
import Abarth from "./pages/A/Abarth/Abarth";
import AC from "./pages/A/AC/AC";
import Acrea from "./pages/A/Acrea/Acrea";
import Acura from "./pages/A/Acura/Acura";
import AdTramontana from "./pages/A/Ad_Tramontana/Ad_Tramontana";
import Adler from "./pages/A/Adler/Adler";
import Aiways from "./pages/A/Aiways/Aiways";
import AlHelling from "./pages/A/Al_Helling/AlHelling";
import Aleko from "./pages/A/Aleko/Aleko";
import AlfaRomeo from "./pages/A/AlfaRomeo/AlfaRomeo";
import Alpina from "./pages/A/Alpina/Alpina";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Abarth", element: <Abarth /> },
      { path: "/AC", element: <AC /> },
      { path: "/Acrea", element: <Acrea /> },
      { path: "/Acura", element: <Acura /> },
      { path: "/Ad Tramontana", element: <AdTramontana /> },
      { path: "/Adler", element: <Adler /> },
      { path: "/Aiways", element: <Aiways /> },
      { path: "/AlHelling", element: <AlHelling /> },
      { path: "/Aleko", element: <Aleko /> },
      { path: "/AlfaRomeo", element: <AlfaRomeo /> },
      { path: "/Alpina", element: <Alpina /> },
    ],
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
