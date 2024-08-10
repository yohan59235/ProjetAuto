import React from "react";
import { Link } from "react-router-dom";

import "../A/A.css";

function B() {
  return (
    <div className="Marques_List">
      <h1>- B -</h1>
      <ul>
        <li>
          <Link to="/Bentley">Bentley</Link>
        </li>
        <li>
          <Link to="/Berliet">Berliet</Link>
        </li>
        <li>
          <Link to="/Bertone">Bertone</Link>
        </li>
        <li>
          <Link to="/Bitter">Bitter</Link>
        </li>
        <li>
          <Link to="/Bizzarrini">Bizzarrini</Link>
        </li>
        <li>
          <Link to="/BMW">B.M.W</Link>
        </li>
        <li>
          <Link to="/Bongarini">Bongarini</Link>
        </li>
        <li>
          <Link to="/Booxt">Booxt</Link>
        </li>
        <li>
          <Link to="/Borgward">Borgward</Link>
        </li>
        <li>
          <Link to="/Bowler">Bowler</Link>
        </li>
        <li>
          <Link to="/Brabus">Brabus</Link>
        </li>
        <li>
          <Link to="/Bremach">Bremach</Link>
        </li>
        <li>
          <Link to="/Brillance">Brillance</Link>
        </li>
        <li>
          <Link to="/Bristol">Bristol</Link>
        </li>
        <li>
          <Link to="/BrookeCars">Brooke Cars</Link>
        </li>
        <li>
          <Link to="/Bugatti">Bugatti</Link>
        </li>
        <li>
          <Link to="/Buick">Buick</Link>
        </li>
        <li>
          <Link to="/Byd">Byd</Link>
        </li>
      </ul>
    </div>
  );
}

export default B;
