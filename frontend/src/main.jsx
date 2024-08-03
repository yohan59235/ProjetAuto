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
import Alpine from "./pages/A/Alpine/Alpine";
import Alvis from "./pages/A/Alvis/Alvis";
import AmGeneral from "./pages/A/AmGeneral/AmGeneral";
import AMC from "./pages/A/AMC/AMC";
import Amphicar from "./pages/A/Amphicar/Amphicar";
import Apal from "./pages/A/Apal/Apal";
import Ariel from "./pages/A/Ariel/Ariel";
import ArmstrongSiddeley from "./pages/A/ArmstrongSiddeley/ArmstrongSiddeley";
import Aro from "./pages/A/Aro/Aro";
import Artega from "./pages/A/Artega/Artega";
import Ascari from "./pages/A/Ascari/Ascari";
import Aspark from "./pages/A/Aspark/Aspark";
import AstonMartin from "./pages/A/AstonMartin/AstonMartin";
import Auburn from "./pages/A/Auburn/Auburn";
import Audi from "./pages/A/Audi/Audi";
import Austin from "./pages/A/Austin/Austin";
import AustinHealey from "./pages/A/AustinHealey/AustinHealey";
import Autobianchi from "./pages/A/Autobianchi/Autobianchi";
import AutoUnion from "./pages/A/AutoUnion/AutoUnion";
import Auverland from "./pages/A/Auverland/Auverland";

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
      { path: "/Alpine", element: <Alpine /> },
      { path: "/Alvis", element: <Alvis /> },
      { path: "/AmGeneral", element: <AmGeneral /> },
      { path: "/AMC", element: <AMC /> },
      { path: "/Amphicar", element: <Amphicar /> },
      { path: "/Apal", element: <Apal /> },
      { path: "/Ariel", element: <Ariel /> },
      { path: "/Armstrong", element: <ArmstrongSiddeley /> },
      { path: "/Aro", element: <Aro /> },
      { path: "/Artega", element: <Artega /> },
      { path: "/Ascari", element: <Ascari /> },
      { path: "/Aspark", element: <Aspark /> },
      { path: "/AstonMartin", element: <AstonMartin /> },
      { path: "/Auburn", element: <Auburn /> },
      { path: "/Audi", element: <Audi /> },
      { path: "/Austin", element: <Austin /> },
      { path: "/AustinHealey", element: <AustinHealey /> },
      { path: "/Autobianchi", element: <Autobianchi /> },
      { path: "/AutoUnion", element: <AutoUnion /> },
      { path: "/Auverland", element: <Auverland /> },
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
