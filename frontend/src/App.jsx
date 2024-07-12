import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
