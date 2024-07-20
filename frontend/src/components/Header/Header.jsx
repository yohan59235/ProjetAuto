import { useState } from "react";

import A from "../Marque/A/A";
import B from "../Marque/B/B";
import C from "../Marque/C/C";
import D from "../Marque/D/D";
import E from "../Marque/E/E";
import F from "../Marque/F/F";
import G from "../Marque/G/G";
import H from "../Marque/H/H";
import I from "../Marque/I/I";
import J from "../Marque/J/J";

import "./Header.css";

function Header() {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [showLinks, setShowLinks] = useState(false);

  const handleClickBurger = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="Burger_img" onClick={handleClickBurger} aria-hidden="true">
      <img
        src={`${URL}/public/assets/images/menu-burger.png`}
        alt="menu burger"
      />
      {showLinks && (
        <div>
          <A />
          <B />
          <C />
          <D />
          <E />
          <F />
          <G />
          <H />
          <I />
          <J />
        </div>
      )}
    </div>
  );
}

export default Header;
